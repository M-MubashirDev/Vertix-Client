// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// // Fix for Leaflet's default marker icon paths

// const customIcon = L.icon({
//   iconUrl: "/markedremoved.png",
//   iconSize: [60, 60],
//   iconAnchor: [15, 40],
//   popupAnchor: [0, -40],
// });

// const Map = ({ stationsData }) => {
//   console.log(stationsData, "😒😒");

//   const storedCity = JSON.parse(sessionStorage.getItem("selectedCity"));
//   const [lat, lng] = storedCity.coordinates;
//   const defaultPosition = [lng, lat]; // Default center (London)
//   // const defaultPosition = currentLocation.coordinates || [33.495895, 73.105629]; // Default center (London)
//   const markers = [{ id: 1, position: [lng, lat], label: storedCity.location }];

//   return (
//     <div className="min-w-full min-h-[20rem] h-[20rem]   lg:min-h-screen  w-full lg:h-full  ">
//       <MapContainer
//         center={defaultPosition}
//         zoom={15}
//         scrollWheelZoom={true}
//         style={{ height: "100%", width: "100%" }} // Ensures the map uses full space
//       >
//         {/* Tile Layer for Map Display */}
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {/* Add Markers */}
//         {stationsData &&
//           markers.map((marker, index) => (
//             <Marker key={index} position={marker.position} icon={customIcon}>
//               <Popup>{marker.label}</Popup>
//             </Marker>
//           ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default Map;
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom Icon for the markers
const customIcon = L.icon({
  iconUrl: "/markedremoved.png",
  iconSize: [60, 60],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

const Map = ({ stationsData }) => {
  console.log("Stations Data:", stationsData);

  // Default position fallback to the first station or a static location
  const defaultPosition =
    stationsData?.length > 0
      ? [
          parseFloat(stationsData[0].latitude),
          parseFloat(stationsData[0].longitude),
        ]
      : [33.495895, 73.105629]; // Default position if no station data is available

  console.log("Default Position:", defaultPosition);

  return (
    <div className="min-w-full min-h-[20rem] h-[20rem] lg:min-h-screen w-full lg:h-full">
      <MapContainer
        center={defaultPosition}
        zoom={15}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        {/* Tile Layer for Map Display */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Add Markers for All Stations */}
        {stationsData &&
          stationsData
            .filter(
              (station) =>
                station.latitude &&
                station.longitude &&
                !isNaN(parseFloat(station.latitude)) &&
                !isNaN(parseFloat(station.longitude))
            ) // Ensure valid latitude and longitude
            .map((station) => {
              const position = [
                parseFloat(station.latitude),
                parseFloat(station.longitude),
              ];

              return (
                <Marker key={station._id} position={position} icon={customIcon}>
                  <Popup>
                    <div>
                      <strong>{station.name}</strong>
                      <p>{station.address}</p>
                      <p>{station.location}</p>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
      </MapContainer>
    </div>
  );
};

export default Map;
