import React, { useState, useEffect, useCallback } from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

// Default center (fallback location)
const defaultCenter = {
  lat: -3.745,
  lng: -38.523,
};

const LiveTracking = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [error, setError] = useState(null);

  // Function to update position
  const updatePosition = useCallback((position) => {
    const { latitude, longitude } = position.coords;
    setCurrentPosition({
      lat: latitude,
      lng: longitude,
    });
    setError(null);
  }, []);

  // Function to handle errors
  const handleError = useCallback((error) => {
    console.error("Error watching location:", error);
    setError("Unable to retrieve location");
    setCurrentPosition(defaultCenter);
  }, []);

  useEffect(() => {
    if ("geolocation" in navigator) {
      // Get initial position
      navigator.geolocation.getCurrentPosition(updatePosition, handleError);

      // Watch position continuously
      const watchId = navigator.geolocation.watchPosition(
        updatePosition,
        handleError,
        {
          maximumAge: 5000, // Cache the position for 5 seconds
          timeout: 10000, // Timeout after 10 seconds
          enableHighAccuracy: true, // Request high accuracy
        }
      );

      // Clear watch on unmount
      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      setError("Geolocation is not supported by your browser");
    }
  }, [updatePosition, handleError]);

  // Handle loading state
  if (!currentPosition) return <div>Loading current location...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAP_API}>
      <GoogleMap mapContainerStyle={containerStyle} center={currentPosition} zoom={15}>
        <Marker position={currentPosition} />
      </GoogleMap>
    </LoadScript>
  );
};

export default LiveTracking;
