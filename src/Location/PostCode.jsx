// import BackButton from "../UI/BackButton";
// import LocationSearch from "./SearchBarsuggestion";
// import { ButtonNavArrow } from "../UI/ButtonNav";
// import { useState } from "react";

// export default function CarWashComponent() {
//   const [currentLocation, setCurrentLocation] = useState("");
//   const handleSuggestionSelect = (suggestion) => {
//     setCurrentLocation(suggestion);
//     console.log(suggestion, currentLocation);
//     sessionStorage.setItem("currentLocation", JSON.stringify(suggestion));
//   };

//   return (
//     <div className="bg-background p-4">
//       <div className="sm:ml-24 flex sm:justify-start justify-center mt-6">
//         <BackButton />
//       </div>
//       <div className="w-full h-screen flex flex-col mt-6 items-center text-center">
//         <h1 className="text-4xl font-bold text-primary-dark">
//           THE BETTER WAY TO{" "}
//           <span className="text-primary-light">WASH YOUR CAR</span>
//         </h1>

//         {/* Subheading */}
//         <p className="text-lg text-primary-dark mt-4">
//           The App For Affordable & Unlimited Car Washes
//         </p>

//         {/* Input and Button */}
//         <div className="mt-6 flex flex-col items-center  gap-4 sm:flex-row sm:gap-2 sm:items-start w-full max-w-lg relative">
//           <LocationSearch onSuggestionSelect={handleSuggestionSelect} />
//           {/* <ExpandableButton
//             text="Stations"
//             w="50px"
//             h="50px"
//             hoverH="135px"
//             icon={<IoIosSearch color="white" />}
//             className="absolute right-[-60px] top-0"
//           /> */}
//           <ButtonNavArrow
//             disable={!currentLocation}
//             to={`stations/${currentLocation.location}`}
//           >
//             Go Station
//           </ButtonNavArrow>
//         </div>
//         <img
//           src="/locationRemoved.png"
//           alt="Location Graphic"
//           className="mt-6 w-3/4 max-w-lg"
//         />
//       </div>
//     </div>
//   );
// }
import BackButton from "../UI/BackButton";
import LocationSearch from "./SearchBarsuggestion";
import { ButtonNavArrow } from "../UI/ButtonNav";
import { useState } from "react";

export default function CarWashComponent() {
  const [selectedCity, setSelectedCity] = useState("");

  const handleSuggestionSelect = (suggestion) => {
    console.log(suggestion);
    setSelectedCity(suggestion.city);
    sessionStorage.setItem("selectedCity", JSON.stringify(suggestion));
  };

  return (
    <div className="bg-background p-4">
      <div className="sm:ml-24 flex sm:justify-start justify-center mt-6">
        <BackButton />
      </div>
      <div className="w-full h-screen flex flex-col mt-6 items-center text-center">
        <h1 className="text-4xl font-bold text-primary-dark">
          THE BETTER WAY TO{" "}
          <span className="text-primary-light">WASH YOUR CAR</span>
        </h1>

        <p className="text-lg text-primary-dark mt-4">
          The App For Affordable & Unlimited Car Washes
        </p>

        <div className="mt-6 flex flex-col-reverse items-center gap-4 sm:flex-row sm:gap-2 sm:items-start w-full max-w-lg relative">
          <LocationSearch
            onSuggestionSelect={handleSuggestionSelect}
            setSelectedCity={setSelectedCity}
          />
          <ButtonNavArrow
            disable={!selectedCity}
            to={`stations/${encodeURIComponent(selectedCity)}`}
          >
            Go Station
          </ButtonNavArrow>
        </div>
        <img
          src="/locationRemoved.png"
          alt="Location Graphic"
          className="mt-6 w-3/4 max-w-lg"
        />
      </div>
    </div>
  );
}
