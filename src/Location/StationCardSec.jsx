// import { useNavigate } from "react-router-dom";
// import { FaBuilding } from "react-icons/fa";

// function StationCardSec({ title, points, stationsData }) {
//   const navigate = useNavigate();

//   function handleClick(point) {
//     sessionStorage.setItem("selectedStation", JSON.stringify(point));
//     navigate(`services/${point._id}`);
//   }

//   return (
//     <div className="w-full  p-6 flex flex-wrap justify-center md:justify-start gap-20">
//       {stationsData?.map((point, index) => (
//         <div
//           key={point._id}
//           onClick={() => handleClick(point)}
//           className="cursor-pointer flex flex-col sm:flex-row gap-4 items-center w-full md:w-[48%] lg:w-fit transition-transform hover:scale-105"
//         >
//           {/* Station Image */}
//           <img
//             src={point.image ? point.image : "/stationNots.webp"}
//             alt="station img"
//             className="w-16 h-16 rounded-full object-cover hover:opacity-80 transition-opacity"
//           />

//           {/* Station Info */}
//           <div className="sm:text-start flex flex-col text-center items-center sm:items-start gap-1 w-full">
//             {/* Station Name */}
//             <h3 className="text-lg md:text-xl font-semibold text-gray-800 flex items-center gap-2">
//               <FaBuilding className="text-primary" />
//               {point.name || "Car Wash Station"}
//             </h3>

//             {/* Location */}
//             <p className="text-primary text-base md:text-lg flex items-center gap-2">
//               <img
//                 src="/markedremoved.png"
//                 alt="location mark"
//                 className="w-5 h-5 md:w-6 md:h-6"
//               />
//               {point.location || "Unknown Location"}
//             </p>

//             {/* Address */}
//             <p className="text-gray-600 text-sm md:text-base">
//               {point.address || "Address not available"}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default StationCardSec;
import { FaBuilding, FaMapMarkerAlt, FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function StationCardSec({ title, points, stationsData }) {
  const navigate = useNavigate();
  function handleClick(point) {
    sessionStorage.setItem("selectedStation", JSON.stringify(point));
    navigate(`services/${point._id}`);
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {stationsData?.map((station) => (
        <div
          key={station._id}
          className="station-card bg-white shadow-lg flex flex-col rounded-xl p-6 relative transition-transform border border-white/20"
        >
          {/* Station Name */}
          <h3 className="text-xl font-bold text-primary-dark flex items-center gap-3">
            <FaBuilding className="text-lg shrink-0" />
            <span className="leading-tight">{station.name}</span>
          </h3>

          <div className="mt-4 space-y-3">
            {/* Location */}
            <p className="text-base text-neutral-dark flex items-center gap-3">
              <FaMapMarkerAlt className="text-sm shrink-0" />
              <span className="font-medium">{station.location}</span>
            </p>

            {/* Full Address with conditional fallback */}
            <p className="text-sm text-neutral-default leading-relaxed">
              {station.address ? (
                <>
                  <span>{station.address}</span>
                  {station.city && <span>, {station.city}</span>}
                  {station.subarea && <span>, {station.subarea}</span>}
                  {station.zip && <span>, {station.zip}</span>}
                </>
              ) : (
                "Address not available"
              )}
            </p>

            {/* Latitude and Longitude for more detailed location */}
            {station.latitude && station.longitude && (
              <p className="text-sm flex-col  text-neutral-dark flex  gap-3">
                <span className="font-medium">Coordinates:</span>
                <span>
                  {station.latitude}, {station.longitude}
                </span>
              </p>
            )}
          </div>

          {/* Toggle button for packages */}
          <button
            onClick={() => handleClick(station)}
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center transition-colors text-sm shadow-md mt-4"
          >
            Choose
          </button>
        </div>
      ))}
    </div>
  );
}

export default StationCardSec;
