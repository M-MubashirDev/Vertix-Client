// import { useNavigate, useParams } from "react-router-dom";
// import UseStations from "../Location/hook/UseStations";
// import Map from "../Location/Map";
// import StationCardSec from "../Location/StationCardSec";
// import Spinner from "../UI/Spinner";
// import BackButton from "../UI/BackButton";
// import { useEffect } from "react";

// function Stations() {
//   const navigate = useNavigate();
//   const { cityName } = useParams();
//   const currentLocation = JSON.parse(sessionStorage.getItem("currentLocation"));

//   // Fetching stations
//   const { stationsData, pendingStations } = UseStations();
//   console.log(cityName, currentLocation);
//   // Navigate to 404 if no location or invalid cityName
//   useEffect(() => {
//     if (!currentLocation || currentLocation?.location !== cityName)
//       navigate("*");
//   }, [currentLocation, navigate, cityName]);
//   // Show spinner while loading
//   if (pendingStations) return <Spinner />;

//   return (
//     <div
//       style={{ maxHeight: "calc(100vh - 83.2px)" }}
//       className="flex flex-col lg:flex-row max-w-[1440px] mx-auto w-[99%]"
//     >
//       {/* Left Section: Station Cards */}
//       <div className="lg:flex-1 w-full max-w-[1440px] mx-auto flex flex-col pl-4 py-10 relative">
//         {/* Background Image with Overlay */}
//         <div
//           style={{
//             backgroundImage: "url('/tastejj.jpg')",
//             backgroundSize: "cover",
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center center",
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             zIndex: 0,
//             opacity: 0.13, // Adjust transparency for better readability
//           }}
//         />
//         <div
//           className="min-w-full min-h-full h-full flex text-center sm:text-start flex-col w-full"
//           style={{ position: "relative", zIndex: 1 }}
//         >
//           <h2 className="lg:text-3xl md:text-2xl text-xl  text-primary tracking-widest mb-1">
//             <span className="tracking-normal">&#8212;&#8211;</span>
//             &nbsp;&nbsp;LOCATION
//           </h2>
//           <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-primary-dark mb-4">
//             Car Washing and Care Points
//           </h1>
//           {stationsData?.length > 0 ? (
//             <StationCardSec stationsData={stationsData} />
//           ) : (
//             <div className="flex flex-col gap-5 mt-5">
//               <h1 className="text-xl text-gray-500 mt-4">
//                 No stations found in the selected city. Please check the{" "}
//                 <span className="font-bold">city name</span> and try again.
//               </h1>
//               <BackButton />
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Right Section: Map */}
//       <div
//         style={{ maxHeight: "calc(100vh - 83.2px)" }}
//         className="lg:flex-1 lg:max-w-[30%] lg:min-h-full mt-auto"
//       >
//         <Map stationsData={stationsData} />
//       </div>
//     </div>
//   );
// }

// export default Stations;
import { useNavigate, useParams } from "react-router-dom";
import UseStations from "../Location/hook/UseStations";
import Map from "../Location/Map";
import StationCardSec from "../Location/StationCardSec";
import Spinner from "../UI/Spinner";
import BackButton from "../UI/BackButton";
import { useEffect } from "react";

function Stations() {
  const navigate = useNavigate();
  const { cityName } = useParams();
  const storedCity = JSON.parse(sessionStorage.getItem("selectedCity"));
  // Fetching stations
  const { stationsData, pendingStations } = UseStations();
  console.log(stationsData, "🌏🌏🌏");
  useEffect(() => {
    if (!storedCity || cityName !== storedCity.city) {
      navigate("*");
    }
  }, [storedCity, cityName, navigate]);

  if (pendingStations) return <Spinner />;

  return (
    <div
      style={{ maxHeight: "calc(100vh - 83.2px)" }}
      className="flex flex-col lg:flex-row max-w-[1440px] mx-auto w-[99%]"
    >
      <div className="lg:flex-1 w-full max-w-[1440px] mx-auto flex flex-col pl-4 py-10 relative">
        <div
          style={{
            backgroundImage: "url('/tastejj.jpg')",
            backgroundSize: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            opacity: 0.13,
          }}
        />
        <div
          className="min-w-full min-h-full h-full flex text-center sm:text-start flex-col w-full"
          style={{ position: "relative", zIndex: 1 }}
        >
          <h2 className="lg:text-3xl md:text-2xl text-xl text-primary tracking-widest mb-1">
            <span className="tracking-normal">&#8212;&#8211;</span>
            &nbsp;&nbsp;LOCATION
          </h2>
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-primary-dark mb-4">
            Car Washing and Care Points
          </h1>
          {stationsData?.length > 0 ? (
            <StationCardSec stationsData={stationsData} />
          ) : (
            <div className="flex flex-col gap-5 mt-5">
              <h1 className="text-xl text-gray-500 mt-4">
                No stations found in {decodeURIComponent(cityName)}. Please
                check the city name and try again.
              </h1>
              <BackButton />
            </div>
          )}
        </div>
      </div>

      <div
        style={{ maxHeight: "calc(100vh - 83.2px)" }}
        className="lg:flex-1 lg:max-w-[30%] lg:min-h-full
        "
      >
        <Map stationsData={stationsData} />
      </div>
    </div>
  );
}

export default Stations;
