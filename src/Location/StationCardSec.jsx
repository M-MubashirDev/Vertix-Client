// import { useNavigate } from "react-router-dom";
// import { FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

// function StationCardSec({ title, points, stationsData }) {
//   const navigate = useNavigate();
//   function Click(point) {
//     sessionStorage.setItem("selectedStation", JSON.stringify(point));
//     navigate(`${point._id}/services`);
//   }
//   // function Click(point) {
//   //   navigate(`${point._id}/services`);
//   // }
//   return (
//     <div className="w-full p-6 flex flex-wrap justify-center md:justify-start gap-12">
//       {stationsData?.map((point, index) => (
//         <button
//           onClick={() => Click(point)}
//           key={point._id}
//           className="cursor-pointer text-center md:text-start flex flex-col sm:flex-row gap-4 items-center w-full md:w-[48%]  lg:w-fit transition-transform hover:scale-105"
//         >
//           {/* Station Image */}
//           <img
//             src={point.image ? point.image : "/stationNots.webp"}
//             alt="station img"
//             className="w-16 h-16 rounded-full object-cover hover:opacity-80 transition-opacity"
//           />

//           {/* Station Info */}
//           <div className="hover:text-primary-dark   transition-colors">
//             <div className="flex items-center justify-center md:justify-start gap-4">
//               <h3 className="text-lg md:text-xl flex items-center gap-[1px] font-semibold">
//                 <FaBuilding className="text-primary" />
//                 {point.name || "CaWash Station"}
//               </h3>
//             </div>
//             <p className="text-primary text-lg md:text-base flex items-center gap-[1px] hover:text-primary-dark">
//               {/* <FaMapMarkerAlt className="text-secondary" /> */}{" "}
//               <img
//                 src="/markedremoved.png"
//                 className="w-6 h-6 md:w-8 md:h-8"
//                 alt="location mark"
//               />
//               {point.location || "Unknown Location"}
//             </p>
//             <p className="text-gray-600 text-sm md:text-base hover:text-gray-800">
//               {point.address || "Address not available"}
//             </p>
//           </div>
//         </button>
//       ))}
//     </div>
//   );
// }

// export default StationCardSec;
// import { useNavigate } from "react-router-dom";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// function StationCardSec({ stationsData }) {
//   const navigate = useNavigate();
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     // GSAP animation for card entrance
//     gsap.fromTo(
//       cardRefs.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
//     );
//   }, []);

//   const handleStationClick = (station) => {
//     sessionStorage.setItem("selectedStation", JSON.stringify(station));
//     navigate(`${station._id}/services`);
//   };

//   return (
//     <div className="w-full p-6 flex flex-wrap justify-center md:justify-start gap-12">
//       {stationsData?.map((station, index) => (
//         <div
//           key={station._id}
//           ref={(el) => (cardRefs.current[index] = el)}
//           onClick={() => handleStationClick(station)}
//           className="flex flex-col md:flex-row gap-4 items-center w-full md:w-[48%] lg:w-fit cursor-pointer hover:scale-105 transition-transform"
//         >
//           {/* Station Image */}
//           <img
//             src={station.image ? station.image : "/stationNots.webp"}
//             alt={`${station.name || "Station"} image`}
//             className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover hover:opacity-80 transition-opacity"
//           />

//           {/* Station Info */}
//           <div className="text-center md:text-start hover:text-primary-dark transition-colors">
//             {/* Station Name */}
//             <h3 className="text-lg md:text-xl font-semibold text-gray-800 flex items-center justify-center md:justify-start gap-2"></h3>

//             {/* Location */}
//             <p className="text-gray-700 flex items-center justify-center md:justify-start gap-2"></p>

//             {/* Address */}
//             <p className="text-gray-600 text-sm md:text-base">

//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default StationCardSec;
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

function StationCardSec({ title, points, stationsData }) {
  const navigate = useNavigate();

  function handleClick(point) {
    sessionStorage.setItem("selectedStation", JSON.stringify(point));
    navigate(`${point._id}/services`);
  }

  return (
    <div className="w-full p-6 flex flex-wrap justify-center md:justify-start gap-20">
      {stationsData?.map((point, index) => (
        <div
          key={point._id}
          onClick={() => handleClick(point)}
          className="cursor-pointer flex flex-col sm:flex-row gap-4 items-center w-full md:w-[48%] lg:w-fit transition-transform hover:scale-105"
        >
          {/* Station Image */}
          <img
            src={point.image ? point.image : "/stationNots.webp"}
            alt="station img"
            className="w-16 h-16 rounded-full object-cover hover:opacity-80 transition-opacity"
          />

          {/* Station Info */}
          <div className="text-start flex flex-col gap-1 w-full">
            {/* Station Name */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 flex items-center gap-2">
              <FaBuilding className="text-primary" />
              {point.name || "Car Wash Station"}
            </h3>

            {/* Location */}
            <p className="text-primary text-base md:text-lg flex items-center gap-2">
              <img
                src="/markedremoved.png"
                alt="location mark"
                className="w-5 h-5 md:w-6 md:h-6"
              />
              {point.location || "Unknown Location"}
            </p>

            {/* Address */}
            <p className="text-gray-600 text-sm md:text-base">
              {point.address || "Address not available"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StationCardSec;
