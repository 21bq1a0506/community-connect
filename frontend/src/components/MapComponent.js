import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = ({ services }) => {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 12.9716, // Default to Bengaluru coordinates
    lng: 77.5946,
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
      >
        {services.map((service) => (
          <Marker
            key={service._id}
            position={{ lat: service.location?.lat, lng: service.location?.lng }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;