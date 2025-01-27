import { useEffect, useMemo, useState } from "react";
import CalendarComp from "./Calendar";
import UserServiceTime from "./hook/UseServiceTime";
import useShopTiming from "./hook/UserShopTIming";

/**
 * Transform `shopTimingData` into blocked slots.
 * @param {Object} shopTimingData - The shop timing data with day and time ranges.
 * @returns {Array} - Array of blocked slots.
 */
function buildBlockedSlotsFromShopTimingData(shopTimingData) {
  const timings = shopTimingData?.stationTimings || [];
  return timings.map(({ day, time }) => {
    const [startTime, endTime] = time.split("-");
    return {
      date: day,
      startTime,
      endTime,
    };
  });
}

/**
 * Transform `timeData` (appointments) into blocked slots.
 * @param {Object} timeData - The reserved slots data.
 * @returns {Array} - Array of blocked slots.
 */
function buildBlockedSlotsFromTimeData(timeData) {
  const appointments = timeData?.appointments || [];
  return appointments.map(({ date, startTime, endTime }) => ({
    date: new Date(date).toISOString().split("T")[0],
    startTime,
    endTime,
  }));
}

function Time() {
  const { shopTimingData, pendingShopTiming } = useShopTiming();
  const { timeData, pendingTime } = UserServiceTime();
  const [selectedDay, setSelectedDay] = useState(null);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  // Combine blocked slots from shop timings and appointments
  const blockedSlots = useMemo(() => {
    const shopBlockedSlots =
      buildBlockedSlotsFromShopTimingData(shopTimingData);
    const reservedSlots = buildBlockedSlotsFromTimeData(timeData);
    return [...shopBlockedSlots, ...reservedSlots];
  }, [shopTimingData, timeData]);

  // Handle time slot selection
  const handleSelectTimeSlot = (idx) => {
    setSelectedTimeSlot(idx);
  };

  // Show a loading state if data is still fetching
  if (pendingTime || pendingShopTiming) {
    return <p>Loading...</p>;
  }

  return (
    <section className="flex flex-col lg:flex-row justify-center py-6 gap-6 mx-auto w-full px-4">
      <div className="flex flex-col w-full lg:w-2/3">
        <h1 className="text-4xl font-bold text-primary-dark text-center mb-6">
          Choose Date & Time
        </h1>
        <div className="w-full ">
          <CalendarComp
            timeSlots={blockedSlots}
            select={{ selectedDay, setSelectedDay }}
            available={{ availableTimeSlots, setAvailableTimeSlots }}
            shopTime={{ shopStart: "09:00", shopEnd: "18:00" }}
            lastSlot={60}
          />
        </div>
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
                    {slot.start}
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

export { Time };
