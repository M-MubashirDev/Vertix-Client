// import { useState, useEffect, useRef } from "react";

// const LocationSearch = ({ onSuggestionSelect }) => {
//   const [query, setQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const inputRef = useRef(null);

//   const fetchSuggestions = async (searchText) => {
//     if (!searchText.trim()) {
//       setSuggestions([]);
//       return;
//     }

//     try {
//       const response = await fetch(
//         `https://photon.komoot.io/api/?q=${encodeURIComponent(
//           searchText
//         )}&limit=5`
//       );
//       const data = await response.json();
//       setSuggestions(data.features || []);
//     } catch (error) {
//       console.error("Error fetching suggestions:", error);
//     }
//   };

//   useEffect(() => {
//     const handleOutsideClick = (e) => {
//       if (inputRef.current && !inputRef.current.contains(e.target)) {
//         setSuggestions([]);
//       }
//     };

//     document.addEventListener("click", handleOutsideClick);

//     return () => {
//       document.removeEventListener("click", handleOutsideClick);
//     };
//   }, []);

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);

//     // Fetch suggestions after the user stops typing (debounce effect)
//     if (value) {
//       const debounceFetch = setTimeout(() => fetchSuggestions(value), 300);
//       return () => clearTimeout(debounceFetch); // Cleanup on rapid typing
//     } else {
//       setSuggestions([]);
//     }
//   };

//   const handleSuggestionClick = (suggestion) => {
//     const location =
//       suggestion.properties.name || suggestion.properties.city || "";
//     setQuery(location);
//     setSuggestions([]);
//     if (onSuggestionSelect) {
//       onSuggestionSelect({
//         location,
//         coordinates: suggestion.geometry.coordinates,
//         country: suggestion.properties.country,
//       });
//     }
//   };

//   return (
//     <div className="relative flex-1" ref={inputRef}>
//       <input
//         type="text"
//         value={query}
//         onChange={handleInputChange}
//         placeholder="Enter a city location..."
//         className="w-full px-4 py-2 text-lg rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light"
//       />
//       {suggestions.length > 0 && (
//         <ul className="absolute z-10 bg-white border border-gray-300 mt-2 rounded-md shadow-lg w-full">
//           {suggestions.map((suggestion, index) => (
//             <li
//               key={index}
//               onClick={() => handleSuggestionClick(suggestion)}
//               className="p-2 hover:bg-gray-100 cursor-pointer"
//             >
//               {suggestion.properties.name || suggestion.properties.city},{" "}
//               {suggestion.properties.country}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default LocationSearch;
// LocationSearch.jsx (Frontend Component)
import { useState, useEffect, useRef } from "react";

const LocationSearch = ({ onSuggestionSelect }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);

  const fetchSuggestions = async (searchText) => {
    if (!searchText.trim()) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `https://photon.komoot.io/api/?q=${encodeURIComponent(
          searchText
        )}&limit=5`
      );
      const data = await response.json();
      setSuggestions(data.features || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setSuggestions([]);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      const debounceFetch = setTimeout(() => fetchSuggestions(value), 300);
      return () => clearTimeout(debounceFetch);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    // Construct full location string
    const locationParts = [
      suggestion.properties.name,
      suggestion.properties.city,
      suggestion.properties.country,
    ].filter(Boolean);

    const fullLocation = locationParts.join(", ");
    setQuery(fullLocation);
    setSuggestions([]);

    if (onSuggestionSelect) {
      onSuggestionSelect({
        location: fullLocation,
        coordinates: suggestion.geometry.coordinates,
      });
    }
  };

  return (
    <div className="relative flex-1" ref={inputRef}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search by city or area..."
        className="w-full px-4 py-2 text-lg rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light"
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-300 mt-2 rounded-md shadow-lg w-full">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {suggestion.properties.name || suggestion.properties.city},{" "}
              {suggestion.properties.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationSearch;
