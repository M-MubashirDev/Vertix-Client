import { useState, useMemo, useEffect } from "react";
import CalendarComp from "./Calendar";
import useShopTiming from "./hook/UserShopTiming";
import UserServiceTime from "./hook/UseServiceTime";

function buildBlockedSlots(shopTimingData, timeData) {
  const shopTimings = shopTimingData?.stationTimings || [];
  const appointments = timeData?.appointments || [];

  const shopBlockedSlots = shopTimings.map(({ day, time }) => {
    const [startTime, endTime] = time.split("-");
    return { day, startTime, endTime };
  });

  const appointmentBlockedSlots = appointments.map(
    ({ date, startTime, endTime }) => {
      return {
        date: new Date(date).toISOString().split("T")[0],
        startTime,
        endTime,
      };
    }
  );

  return { shopBlockedSlots, appointmentBlockedSlots };
}

function Time() {
  const { shopTimingData, pendingShopTiming } = useShopTiming();
  const { timeData, pendingTime } = UserServiceTime();

  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const { shopBlockedSlots, appointmentBlockedSlots } = useMemo(
    () => buildBlockedSlots(shopTimingData, timeData),
    [shopTimingData, timeData]
  );

  function handleSelectTimeSlot({ idx, slot }) {
    setSelectedTimeSlot(idx);
    console.log("Selected Slot:", slot);
  }

  if (pendingShopTiming || pendingTime) {
    return <p>Loading...</p>;
  }

  return (
    <section className="flex flex-col lg:flex-row justify-center py-6 gap-6 mx-auto w-full px-4">
      <div className="flex flex-col w-full lg:w-2/3">
        <h1 className="text-4xl font-bold text-primary-dark text-center mb-6">
          Choose Date & Time
        </h1>
        <CalendarComp
          shopBlockedSlots={shopBlockedSlots}
          appointmentBlockedSlots={appointmentBlockedSlots}
          select={{ selectedDay, setSelectedDay }}
          available={{ availableTimeSlots, setAvailableTimeSlots }}
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
