"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

// Dynamically import react-leaflet components to avoid SSR issues
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

const MapComponent = () => {
  const center: LatLngExpression = [23.3780, 85.3284];

  return (
    <section className="flex flex-col items-center mt-8" aria-label="Map location">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-4">Find Us on the Map</h2>

      {/* Map */}
      <div className="w-full max-w-screen-md h-[400px] relative z-10">
        <MapContainer
          center={center}
          zoom={10}
          className="h-full w-full rounded-lg shadow-lg"
        >
          {/* Map Tiles */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Marker */}
          <Marker position={center}>
            <Popup>Ranchi, Jharkhand, India</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default MapComponent;
