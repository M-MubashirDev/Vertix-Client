import { useState, useEffect, useMemo } from "react";
import UseStations from "../Location/hook/UseStations";
import Map from "../Location/Map";
import StationCardSec from "../Location/StationCardSec";
import Spinner from "../UI/Spinner";
import BackButton from "../UI/BackButton";
import { ButtonNavArrow } from "../UI/ButtonNav";
import { gsap } from "gsap";

function Stations() {
  const [search, setSearch] = useState(""); // Store the submitted search query
  const [query, setQuery] = useState(""); // Store the typed query
  const [searched, setSearched] = useState(false); // Flag to indicate if search has been triggered
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1); // Index of highlighted suggestion

  function SearchQuery(e) {
    e.preventDefault();
    // If a suggestion is highlighted, use it as the query value.
    if (activeSuggestion >= 0 && suggestions.length > 0) {
      setSearch(suggestions[activeSuggestion]);
    } else {
      setSearch(query);
    }
    setQuery("");
    setShowSuggestions(false);
    setSearched(true);
    setActiveSuggestion(-1);
  }

  // Fetching stations
  const { stationsData, pendingStations } = UseStations();

  // Memoize the filtered data so that its reference only changes when
  // stationsData or search changes.
  const filteredData = useMemo(() => {
    if (!stationsData) return [];
    return stationsData.filter((val) =>
      Object.values(val).some((field) =>
        field.toString().toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [stationsData, search]);

  // Memoize suggestion list from stationsData based on the query
  const suggestions = useMemo(() => {
    if (!query || !stationsData) return [];
    const lowerQuery = query.toLowerCase();
    let results = [];
    stationsData.forEach((station) => {
      // Check several fields for matches; adjust fields as necessary
      if (station.name && station.name.toLowerCase().includes(lowerQuery))
        results.push(station.name);
      if (
        station.location &&
        station.location.toLowerCase().includes(lowerQuery)
      )
        results.push(station.location);
      if (station.subarea && station.subarea.toLowerCase().includes(lowerQuery))
        results.push(station.subarea);
      if (station.city && station.city.toLowerCase().includes(lowerQuery))
        results.push(station.city);
    });
    // Remove duplicates and limit to 5 suggestions.
    return [...new Set(results)].slice(0, 5);
  }, [query, stationsData]);

  useEffect(() => {
    if (searched && filteredData?.length > 0) {
      gsap.fromTo(
        ".station-card", // Targets each station card (ensure each card has this class)
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 2, stagger: 0.2, ease: "power3.out" }
      );
    }
  }, [searched, filteredData]);

  // Memoize the station cards so they are only recalculated when
  // 'searched' or the filteredData reference changes.
  const stationCards = useMemo(() => {
    if (!searched) return null;
    if (filteredData.length > 0) {
      return (
        // Wrap the StationCardSec component in a responsive grid container.
        <div className="flex mt-20 justify-center flex-wrap gap-4">
          <StationCardSec stationsData={filteredData} />
        </div>
      );
    }
    return (
      <div className="flex flex-col gap-5 mt-5">
        <h1 className="text-xl text-gray-500 mt-4">
          No stations found matching your search. Please try again with a
          different query.
        </h1>
        <BackButton />
      </div>
    );
  }, [searched, filteredData]);

  // Handler for keyboard navigation on the input field.
  const handleKeyDown = (e) => {
    if (showSuggestions && suggestions.length > 0) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveSuggestion((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveSuggestion((prev) => (prev > 0 ? prev - 1 : -1));
      } else if (e.key === "Enter") {
        // If a suggestion is highlighted, prevent default and select it.
        if (activeSuggestion >= 0) {
          e.preventDefault();
          setSearch(suggestions[activeSuggestion]);
          setQuery("");
          setShowSuggestions(false);
          setSearched(true);
          setActiveSuggestion(-1);
        }
      }
    }
  };

  return (
    <div
      style={{ maxHeight: "calc(100vh - 83.2px)" }}
      className="flex flex-col max-w-[1440px] mx-auto w-[90%]"
    >
      {pendingStations ? (
        <Spinner />
      ) : (
        <>
          {/* Left Section: Station Cards */}
          <div className="lg:flex-1 w-full max-w-[1440px] mx-auto min-h-screen flex flex-col pl-4 py-10 relative">
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
              className="min-w-full min-h-full h-full flex flex-col text-center sm:text-start w-full"
              style={{ position: "relative", zIndex: 1 }}
            >
              <h2 className="lg:text-3xl md:text-2xl text-xl text-primary tracking-widest mb-1">
                <span className="tracking-normal">&#8212;&#8211;</span>
                &nbsp;&nbsp;LOCATION
              </h2>
              <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-primary-dark mb-4">
                Car Washing and Care Points
              </h1>
              <form
                onSubmit={SearchQuery}
                className="w-full flex flex-col items-center sm:flex-row sm:items-start justify-center gap-6 pt-10 pb-2 relative"
              >
                {/* Container to position suggestions relative to the input */}
                <div className="relative w-full lg:min-w-[60%] md:min-w-[25rem] sm:min-w-[20rem]">
                  <input
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setShowSuggestions(true);
                      setActiveSuggestion(-1);
                    }}
                    onKeyDown={handleKeyDown}
                    className="w-full px-4 py-2 text-lg rounded-full border border-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-light"
                  />
                  {/* Suggestion Dropdown */}
                  {showSuggestions && suggestions.length > 0 && (
                    <ul className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-b-md shadow-md z-50">
                      {suggestions.map((suggestion, index) => (
                        <li
                          key={index}
                          className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${
                            index === activeSuggestion ? "bg-gray-200" : ""
                          }`}
                          onClick={() => {
                            setQuery(suggestion);
                            setShowSuggestions(false);
                          }}
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="max-w-fit">
                  <ButtonNavArrow disable={!query}>Stations</ButtonNavArrow>
                </div>
              </form>
              {!searched && (
                <div className="mt-5 text-center text-xl text-gray-500">
                  <h2>
                    Search for stations by entering keywords in the search bar.
                  </h2>
                </div>
              )}

              {/* Render memoized station cards */}
              {searched && stationCards}
            </div>
          </div>

          {/* Right Section: Map */}
          {/* Uncomment below if you want the map to be shown */}
          {/* <div style={{ maxHeight: "calc(100vh - 83.2px)" }} className="lg:flex-1">
            <Map stationsData={filteredData} />
          </div> */}
        </>
      )}
    </div>
  );
}

export default Stations;

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
