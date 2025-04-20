
import React from 'react'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "90vh",
};

const center = {
  lat:-1.9232708126675075, // Example: San Francisco
  lng:30.06544834744921,

};

export const GoogleMaps =()=>{

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
