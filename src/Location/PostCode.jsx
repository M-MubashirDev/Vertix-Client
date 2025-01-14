import BackButton from "../UI/BackButton";
import LocationSearch from "./SearchBarsuggestion";
import { ButtonNavArrow } from "../UI/ButtonNav";
import { useState } from "react";

export default function CarWashComponent() {
  const [currentLocation, setCurrentLocation] = useState("");
  const handleSuggestionSelect = (suggestion) => {
    if (!suggestion) return;
    setCurrentLocation(suggestion);
    localStorage.setItem("currentLocation", suggestion);
    console.log(suggestion);
    console.log("Selected Location:");
    console.log(`Location: ${suggestion.location}`);
    console.log(`Coordinates: ${suggestion.coordinates}`);
    console.log(`Country: ${suggestion.country}`);
    // You can handle map centering or other logic here
  };

  return (
    <div className="bg-background p-4">
      <div className="ml-24 mt-6">
        <BackButton />
      </div>
      <div className="w-full h-screen flex flex-col mt-6 items-center text-center">
        <h1 className="text-4xl font-bold text-primary-dark">
          THE BETTER WAY TO{" "}
          <span className="text-primary-light">WASH YOUR CAR</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg text-primary-dark mt-4">
          The App For Affordable & Unlimited Car Washes
        </p>

        {/* Input and Button */}
        <div className="mt-6 flex items-start gap-2 w-full max-w-lg relative">
          <LocationSearch onSuggestionSelect={handleSuggestionSelect} />
          {/* <ExpandableButton
            text="Stations"
            w="50px"
            h="50px"
            hoverH="135px"
            icon={<IoIosSearch color="white" />}
            className="absolute right-[-60px] top-0"
          /> */}
          <ButtonNavArrow
            disable={!currentLocation}
            to={`stations/${currentLocation.location}`}
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
