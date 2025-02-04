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
  console.log("Filtered Stations Data:", stationsData);

  // Default position fallback if no filtered data exists
  const defaultPosition = [33.495895, 73.105629]; // Default position if no station data is available

  // Get the first station's position if available
  const firstStationPosition = stationsData?.[0]
    ? [
        parseFloat(stationsData[0].latitude),
        parseFloat(stationsData[0].longitude),
      ]
    : defaultPosition;

  return (
    <div className="min-w-full max-h-[20rem] h-[20rem]  w-full ">
      <MapContainer
        center={firstStationPosition} // Set the initial center to the first station
        zoom={15}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        {/* Tile Layer for Map Display */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Add Markers for Filtered Stations */}
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
