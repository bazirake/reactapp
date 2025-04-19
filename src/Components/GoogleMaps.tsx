
import React from 'react'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat:-1.989147 , // Example: Rwampala
  lng:30.054046,
};


export const GoogleMaps = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDJLjOtSfa-g14Zt9e9AzI2FqJ1ECXHsy8">
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      <Marker position={center} />
    </GoogleMap>
  </LoadScript>
  )
}
