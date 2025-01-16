import { useState, useMemo, useEffect } from "react";
import CalendarComp from "./Calendar";
import UserServiceTime from "./hook/UseServiceTime";
import UseShopTiming from "";

/**
 * Transform `timeData` into an array of blocked slots.
 * Safely handle cases where `timeData` is not an array.
 */
function buildBlockedSlotsFromTimeData(timeData) {
  if (Array.isArray(timeData?.appointments)) {
    return timeData.appointments
      .filter(({ date, startTime, endTime }) => date && startTime && endTime)
      .map(({ date, startTime, endTime }) => ({
        date: new Date(date).toISOString().split("T")[0], // Normalize date to "YYYY-MM-DD"
        startTime,
        endTime,
      }));
  }

  console.warn("timeData.appointments is not an array:", timeData);
  return [];
}

function Time() {
  const { timeData, pendingTime } = UserServiceTime(); // Fetch service time data
  const { shopTimingData, pendingShopTiming } = UseShopTiming();
  console.log(shopTimingData);
  // State management for Calendar
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  // Debugging output for `timeData`
  useEffect(() => {
    console.log("timeData:", timeData);
  }, [timeData]);

  // Build blockedSlots from timeData
  const blockedSlots = useMemo(
    () => buildBlockedSlotsFromTimeData(timeData),
    [timeData]
  );

  /**
   * Handle selection of a time slot
   */
  function handleSelectTimeSlot({ idx, slot }) {
    setSelectedTimeSlot(idx);
    console.log("Selected Slot:", slot);
  }

  // Show a loading state if data is still fetching
  if (pendingTime) {
    return <p>Loading...</p>;
  }

  return (
    <section className="flex flex-col lg:flex-row justify-center py-6 gap-6 mx-auto w-full px-4">
      {/* Left Section: Calendar and Slots */}
      <div className="flex flex-col w-full lg:w-2/3">
        <h1 className="text-4xl font-bold text-primary-dark text-center  mb-6">
          Choose Date & Time
        </h1>
        <div className="max-w-full">
          <CalendarComp
            timeSlots={blockedSlots} // Pass combined blocked slots
            select={{ selectedDay, setSelectedDay }}
            available={{ availableTimeSlots, setAvailableTimeSlots }}
            shopTime={{ shopStart: "09:00", shopEnd: "18:00" }} // Default shop timing
            lastSlot={60} // Default service duration
          />
        </div>

        {/* TIME SLOTS FOR THE SELECTED DAY */}
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

export default Time;
