import { useMemo, useState } from "react";
import CalendarComp from "./Calendar";
import UserServiceTime from "./hook/UseServiceTime";

/**
 * Validate that startTime is before endTime
 * @param {string} startTime - "HH:MM AM/PM"
 * @param {string} endTime - "HH:MM AM/PM"
 * @returns {boolean}
 */
function isValidTimeRange(startTime, endTime) {
  const [startHour, startMinute] = startTime.split(" ")[0].split(":");
  const [endHour, endMinute] = endTime.split(" ")[0].split(":");
  const startMeridian = startTime.split(" ")[1];
  const endMeridian = endTime.split(" ")[1];

  const startDate = new Date();
  const endDate = new Date();

  startDate.setHours(
    startMeridian === "PM" && +startHour !== 12 ? +startHour + 12 : +startHour,
    +startMinute,
    0,
    0
  );

  endDate.setHours(
    endMeridian === "PM" && +endHour !== 12 ? +endHour + 12 : +endHour,
    +endMinute,
    0,
    0
  );

  return startDate < endDate;
}

/**
 * Generate all possible time slots for a given day.
 * @param {string} shopStart - Start of shop hours, e.g., "09:00 AM"
 * @param {string} shopEnd - End of shop hours, e.g., "06:00 PM"
 * @param {number} slotDuration - Duration of each slot in minutes
 * @returns {Array} Array of slot start times, e.g., ["09:00 AM", "09:15 AM"]
 */
function generateAllSlots(shopStart, shopEnd, slotDuration) {
  const slots = [];
  let current = new Date();
  current.setHours(
    (shopStart.split(":")[0] % 12) + (shopStart.includes("PM") ? 12 : 0),
    +shopStart.split(":")[1].split(" ")[0],
    0,
    0
  );
  const end = new Date();
  end.setHours(
    (shopEnd.split(":")[0] % 12) + (shopEnd.includes("PM") ? 12 : 0),
    +shopEnd.split(":")[1].split(" ")[0],
    0,
    0
  );

  while (current < end) {
    const slotStart = current.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    slots.push(slotStart);
    current = new Date(current.getTime() + slotDuration * 60 * 1000); // Increment by slot duration
  }
  return slots;
}

/**
 * Filter available time slots by removing blocked slots.
 * @param {Array} allSlots - Array of all possible time slots for the day
 * @param {Array} blockedSlots - Array of blocked slots, each with { start, end }
 * @returns {Array} Array of available slot start times
 */
function filterAvailableSlots(allSlots, blockedSlots) {
  return allSlots.filter((slotStart) =>
    blockedSlots.every(
      (blocked) =>
        !(
          isValidTimeRange(slotStart, blocked.end) &&
          isValidTimeRange(blocked.start, slotStart)
        )
    )
  );
}

function Time() {
  const { timeData, pendingTime } = UserServiceTime();
  const [selectedDay, setSelectedDay] = useState(null);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const blockedSlots = useMemo(() => {
    if (!selectedDay || !timeData?.appointments) return [];
    return timeData.appointments
      .filter(({ date }) => new Date(date).toDateString() === selectedDay)
      .map(({ startTime, endTime }) => ({ start: startTime, end: endTime }));
  }, [timeData, selectedDay]);

  useMemo(() => {
    if (selectedDay) {
      const allSlots = generateAllSlots("09:00 AM", "06:00 PM", 15); // Generate 15-minute slots
      const available = filterAvailableSlots(allSlots, blockedSlots);
      setAvailableTimeSlots(available);
    }
  }, [selectedDay, blockedSlots]);

  function handleSelectTimeSlot({ idx, slot }) {
    setSelectedTimeSlot(idx);
    console.log("Selected Slot:", slot);
  }

  if (pendingTime) {
    return <p>Loading...</p>; // Handle loading state
  }

  return (
    <section className="flex flex-col lg:flex-row justify-between py-6 gap-6 mx-auto w-full px-4">
      <div className="flex flex-col w-full lg:w-2/3">
        <h1 className="text-4xl font-bold text-primary-dark text-center lg:text-left mb-6">
          Choose Date & Time
        </h1>
        <CalendarComp
          timeSlots={blockedSlots}
          select={{ selectedDay, setSelectedDay }}
          available={{ availableTimeSlots, setAvailableTimeSlots }}
          shopTime={{ shopStart: "09:00 AM", shopEnd: "06:00 PM" }}
          lastSlot={60}
        />
        {selectedDay && (
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-primary-dark mb-4">
              Available Times:
            </h3>
            {availableTimeSlots.length > 0 ? (
              <ul className="flex flex-wrap gap-4">
                {availableTimeSlots.map((slot, idx) => (
                  <li
                    key={idx}
                    className={`border border-primary-dark py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200 ${
                      selectedTimeSlot === idx
                        ? "bg-primary-dark text-white"
                        : "bg-white text-primary-dark hover:bg-primary-dark hover:text-white"
                    }`}
                    onClick={() => handleSelectTimeSlot({ idx, slot })}
                  >
                    {slot}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-primary-dark">
                No available slots for this day.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Time;
