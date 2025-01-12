import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for Leaflet's default marker icon paths
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

const customIcon = L.icon({
  iconUrl: "/markedremoved.png",
  iconSize: [60, 60],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

const Map = () => {
  const defaultPosition = [33.495895, 73.105629]; // Default center (London)
  const markers = [
    { id: 1, position: [33.495895, 73.105629], label: "Marker 1: behriya" },
    { id: 1, position: [51.505, -0.09], label: "Marker 1: London" },
    { id: 2, position: [48.8566, 2.3522], label: "Marker 2: Paris" },
    { id: 3, position: [40.7128, -74.006], label: "Marker 3: New York" },
  ];

  return (
    <div className="min-w-full min-h-[20rem] h-[20rem]   lg:min-h-screen  w-full lg:h-full  ">
      <MapContainer
        center={defaultPosition}
        zoom={15}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }} // Ensures the map uses full space
      >
        {/* Tile Layer for Map Display */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Add Markers */}
        {markers.map((marker) => (
          <Marker key={marker.id} position={marker.position} icon={customIcon}>
            <Popup>{marker.label}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
