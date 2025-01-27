/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const CalendarComp = ({
  timeSlots, // Array of { date: "YYYY-MM-DD", startTime: "HH:MM", endTime: "HH:MM", possibly with .professional.notAvailable }
  select, // { selectedDay, setSelectedDay }
  available, // { availableTimeSlots, setAvailableTimeSlots }
  totalTime = 15, // The increment (in minutes) at which to propose start times, e.g. 15
  shopTime, // e.g. { shopStart: "09:00", shopEnd: "20:00" } or array keyed by days
  lastSlot, // The *full service duration* in minutes (e.g., 60, 90, etc.)
}) => {
  const [currentDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState("current");
  const [blockedTimeSlots, setBlockedTimeSlots] = useState({});
  const [notAvailableDates, setNotAvailableDates] = useState([]);

  const { availableTimeSlots, setAvailableTimeSlots } = available;
  const { selectedDay, setSelectedDay } = select;

  // We only allow clicks within [today, oneMonthFromNow]
  const oneMonthFromNow = new Date(currentDate);
  oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1);

  // ---------------------------
  // 1. Basic Utilities
  // ---------------------------
  function getMonthName(monthIndex, year) {
    const date = new Date(year, monthIndex, 1);
    return date.toLocaleString("default", { month: "long" });
  }

  function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  function getStartDay(year, month) {
    return new Date(year, month, 1).getDay();
  }

  function handleMonthSelection(month) {
    setSelectedMonth(month);
    setSelectedDay(null);
    setAvailableTimeSlots([]);
  }

  // Convert "HH:MM" => total minutes
  function convertToMinutes(time) {
    if (!time || typeof time !== "string") return null;
    const [hrStr, minStr] = time.split(":");
    const hour = parseInt(hrStr, 10);
    const minute = parseInt(minStr, 10);
    if (isNaN(hour) || isNaN(minute)) return null;
    return hour * 60 + minute;
  }

  // Convert total minutes => "HH:MM"
  function minutesToTime(minutes) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  }

  // Check overlap of 2 time ranges
  function isOverlap(slot, blocked) {
    const s1Start = convertToMinutes(slot.start);
    const s1End = convertToMinutes(slot.end);
    const s2Start = convertToMinutes(blocked.startTime);
    const s2End = convertToMinutes(blocked.endTime);

    if ([s1Start, s1End, s2Start, s2End].includes(null)) {
      return false;
    }
    return s1Start < s2End && s1End > s2Start;
  }

  /**
   * Generate possible start times in `increment`-minute steps.
   * Each "slot" is actually `serviceDuration` minutes long.
   *
   * Example: If `increment=15`, `serviceDuration=60`, and shop ends at 20:00,
   * we’ll only push time range if `start + 60 <= 20:00` in minutes.
   */
  function generateTimeSlots(
    start, // "HH:MM" earliest possible start
    increment, // e.g. 15 minutes
    serviceDuration, // e.g. 60 minutes
    shopEnd // "HH:MM"
  ) {
    const startMinutes = convertToMinutes(start);
    const shopEndMinutes = convertToMinutes(shopEnd);

    if (startMinutes === null || shopEndMinutes === null) {
      console.error("Invalid start or shop end time.");
      return [];
    }

    const slots = [];
    let current = startMinutes;

    // Keep generating start times until we cannot fit the entire service
    while (current + serviceDuration <= shopEndMinutes) {
      const slotStart = minutesToTime(current);
      const slotEnd = minutesToTime(current + serviceDuration);

      slots.push({ start: slotStart, end: slotEnd });
      current += increment; // step by 15 minutes (or whatever totalTime is)
    }
    return slots;
  }

  // Filter out blocked times
  function getAvailableTimeSlots(allSlots, blockedSlots) {
    return allSlots.filter((slot) => {
      return !blockedSlots.some((blocked) => isOverlap(slot, blocked));
    });
  }

  // If `shopTime` is an array keyed by day, find the relevant open times.
  function getShopTimesForDay(weekdayName) {
    if (Array.isArray(shopTime)) {
      const dayData = shopTime.find(
        (item) => item.day.toLowerCase() === weekdayName.toLowerCase()
      );
      if (dayData && dayData.time) {
        const [start, end] = dayData.time.split("-");
        return { shopStart: start, shopEnd: end };
      }
    } else if (shopTime && typeof shopTime === "object") {
      return { shopStart: shopTime.shopStart, shopEnd: shopTime.shopEnd };
    }
    return { shopStart: "09:00", shopEnd: "18:00" }; // Default if no match
  }

  // ---------------------------
  // 2. Entire-Day Check (notAvailableDates)
  // ---------------------------
  function isDateNotAvailable(date) {
    // We'll compare the local day boundaries
    return notAvailableDates.some(({ from, to }) => {
      const fromDate = new Date(from);
      fromDate.setHours(0, 0, 0, 0);

      const toDate = new Date(to);
      toDate.setHours(23, 59, 59, 999);

      const checkDate = new Date(date);
      checkDate.setHours(0, 0, 0, 0);

      return checkDate >= fromDate && checkDate <= toDate;
    });
  }

  // ---------------------------
  // 3. onClickDay => build availableTimeSlots
  // ---------------------------
  function onClickDay(dayNumber, dateObject) {
    // If the entire day is blocked, do nothing
    if (isDateNotAvailable(dateObject)) {
      // console.log("Date is fully not available:", dateObject);
      return;
    }

    // Set selected day for parent usage
    // Format date as "YYYY-MM-DD" or keep a toDateString() - up to you
    setSelectedDay(dateObject.toDateString());

    const todayStr = new Date().toDateString();
    const isToday = dateObject.toDateString() === todayStr;

    const weekdayName = dateObject.toLocaleString("default", {
      weekday: "long",
    });
    const { shopStart, shopEnd } = getShopTimesForDay(weekdayName);

    // If user clicked "today", shift the start time if we've passed shopStart
    let startingTime;
    if (isToday) {
      const now = new Date();
      const nowMinutes = now.getHours() * 60 + now.getMinutes();
      const shopStartMinutes = convertToMinutes(shopStart);
      // Make sure we don't start before shopStart
      const effectiveStart = Math.max(shopStartMinutes, nowMinutes);

      // Round up to the next increment
      const remainder = effectiveStart % totalTime;
      const nextIncrement =
        remainder === 0
          ? effectiveStart
          : effectiveStart + (totalTime - remainder);

      startingTime = minutesToTime(nextIncrement);
    } else {
      startingTime = shopStart;
    }

    // Generate slots (each slot is `lastSlot` minutes long, stepped by `totalTime`)
    const allSlots = generateTimeSlots(
      startingTime,
      totalTime,
      lastSlot,
      shopEnd
    );

    // Retrieve blocked intervals for this date => e.g. "YYYY-MM-DD"
    const localDateString = dateObject.toLocaleDateString("en-CA");
    const blockedSlots = blockedTimeSlots[localDateString] || [];

    // Filter them out
    const finalAvailable = getAvailableTimeSlots(allSlots, blockedSlots);
    setAvailableTimeSlots(finalAvailable);

    // console.log("Clicked date => ", dateObject, localDateString);
    // console.log("Blocked => ", blockedSlots);
    // console.log("Final => ", finalAvailable);
  }

  // ---------------------------
  // 4. Build blockedTimeSlots + notAvailableDates
  // ---------------------------
  useEffect(() => {
    // Flatten any nested arrays
    if (Array.isArray(timeSlots) && timeSlots.length > 0) {
      const flattened = timeSlots.flat();
      const map = {};

      flattened.forEach((slot) => {
        // We expect: { date: "YYYY-MM-DD", startTime, endTime }
        if (!slot.date || !slot.startTime || !slot.endTime) {
          console.warn("Malformed slot:", slot);
          return;
        }
        // Build a dictionary keyed by date => array of intervals
        if (!map[slot.date]) {
          map[slot.date] = [];
        }
        map[slot.date].push({
          startTime: slot.startTime,
          endTime: slot.endTime,
        });
      });

      setBlockedTimeSlots(map);
    } else {
      setBlockedTimeSlots({});
    }
  }, [timeSlots]);

  useEffect(() => {
    // Build a separate list of entire-day blocks { from, to }
    if (Array.isArray(timeSlots) && timeSlots.length > 0) {
      const flattened = timeSlots.flat();
      const notAvailable = [];

      flattened.forEach((slot) => {
        // If startTime=00:00 and endTime=23:59 => entire day is blocked
        // We'll store a from->to range in notAvailableDates
        if (slot.startTime === "00:00" && slot.endTime === "23:59") {
          notAvailable.push({ from: slot.date, to: slot.date });
        }

        // If there's a `professional.notAvailable` array => block entire date range
        if (slot.professional && slot.professional.notAvailable) {
          slot.professional.notAvailable.forEach((range) => {
            notAvailable.push({ from: range.from, to: range.to });
          });
        }
      });

      setNotAvailableDates(notAvailable);
    }
  }, [timeSlots]);

  // ---------------------------
  // 5. Rendering the Calendar UI
  // ---------------------------
  const currentMonthIndex = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const nextMonthIndex = (currentMonthIndex + 1) % 12;
  const nextMonthYear =
    currentMonthIndex === 11 ? currentYear + 1 : currentYear;

  // Decide which month to show
  const monthIndex =
    selectedMonth === "current" ? currentMonthIndex : nextMonthIndex;
  const yearToShow = selectedMonth === "current" ? currentYear : nextMonthYear;

  // Build array of days for the month
  const daysInMonth = getDaysInMonth(yearToShow, monthIndex);
  const startDay = getStartDay(yearToShow, monthIndex);

  const calendarDays = [];
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarDays.push(d);
  }

  // For styling the "today" highlight
  const today = new Date();
  const isCurrentMonthDisplayed =
    today.getMonth() === monthIndex && today.getFullYear() === yearToShow;
  const todayDate = isCurrentMonthDisplayed ? today.getDate() : null;

  const currentMonthName = getMonthName(currentMonthIndex, currentYear);
  const nextMonthName = getMonthName(nextMonthIndex, nextMonthYear);

  return (
    <div className="max-w-fit mx-auto bg-white rounded-lg p-6">
      {/* Header: Current/Next Month Buttons */}
      <div className="flex flex-wrap justify-center gap-4 items-center mb-6 overflow-x-auto ">
        <button
          onClick={() => handleMonthSelection("current")}
          className={`p-2 sm:p-3 border-[0.5px] border-primary-dark min-w-32 sm:min-w-64 rounded-[20px] transition duration-200 font-medium text-base sm:text-xl leading-normal ${
            selectedMonth === "current"
              ? "bg-primary-dark text-white"
              : "bg-white text-primary-dark"
          }`}
          aria-label={`Show ${currentMonthName}`}
        >
          {currentMonthName}
        </button>

        <button
          onClick={() => handleMonthSelection("next")}
          className={`p-2 sm:p-3 border-[0.5px] border-primary-dark min-w-32 sm:min-w-64 rounded-[20px] transition duration-200 font-medium text-base sm:text-xl leading-normal ${
            selectedMonth === "next"
              ? "bg-primary-dark text-white"
              : "bg-white text-primary-dark"
          }`}
          aria-label={`Show ${nextMonthName}`}
        >
          {nextMonthName}
        </button>
      </div>

      {/* Days of the Week Header */}
      <div className="!overflow-x-auto custom-scrollbar">
        <div className="min-w-[500px]">
          <div className="grid grid-cols-7 gap-2 mb-4">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="font-medium text-sm sm:text-base leading-[19.5px] text-gray-700 text-center whitespace-nowrap"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Dates of the Month */}
          <div className="grid  grid-cols-7 gap-4">
            {calendarDays.map((day, index) => {
              if (day === null) {
                // filler for offset
                return <div key={index} />;
              }
              const dateObj = new Date(yearToShow, monthIndex, day);

              // If it's today's date
              const isToday = day === todayDate;

              // If it's outside [today..oneMonthFromNow]
              const isOutOfRange =
                dateObj < new Date(today.setHours(0, 0, 0, 0)) ||
                dateObj > oneMonthFromNow;

              // If user has clicked it
              const isSelectedDay = selectedDay === dateObj.toDateString();

              // If the entire day is not available
              const isNotAvailable = isDateNotAvailable(dateObj);

              // Build styling
              let dateStyle =
                "flex items-center justify-center aspect-square w-10 h-10 sm:w-12 sm:h-12 rounded-full text-sm sm:text-lg font-semibold transition duration-200";

              if (isOutOfRange || isNotAvailable) {
                // style if date is blocked
                dateStyle +=
                  " bg-[#EAEAEA] text-black cursor-not-allowed opacity-50";
              } else if (isSelectedDay) {
                // style if selected
                dateStyle += " bg-primary-dark text-white cursor-pointer";
              } else if (isToday) {
                // style for "today"
                dateStyle +=
                  " bg-white border-[0.5px] cursor-pointer border-primary-dark underline text-primary-dark hover:bg-primary-dark hover:text-white font-black";
              } else {
                // normal clickable day
                dateStyle +=
                  " bg-white border-[0.5px] border-primary-dark text-black hover:text-white cursor-pointer hover:bg-primary-dark";
              }

              return (
                <div
                  key={index}
                  className={dateStyle}
                  onClick={() => {
                    // Only allow clicking if it's in range & not unavailable
                    if (!isOutOfRange && !isNotAvailable) {
                      onClickDay(day, dateObj);
                    }
                  }}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarComp;
