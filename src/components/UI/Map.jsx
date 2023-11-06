"use client";

import React, { useLayoutEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { toast } from "react-toastify";

const Map = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);

        setLatitude(position?.coords?.latitude);
        setLongitude(position?.coords?.longitude);
      },
      () => {
        toast.error("Can not access your location, please allow to access!");
      }
    );
  } else {
    toast.error("Geolocation is not available in this browser.");
  }

  return (
    <MapContainer
      style={{ width: "100%", height: "100%" }}
      center={[longitude, latitude]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[longitude, latitude]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
