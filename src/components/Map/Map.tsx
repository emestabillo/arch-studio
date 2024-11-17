"use client";
import { useState } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Loader from "./Loader";
import markerIcon from "../../../public/icons/icon-marker.svg";

const containerStyle = {
  width: "100%",
  height: "35rem",
};

const center = {
  lat: 40.736706,
  lng: -74.00578,
};

const markerPositions = [
  {
    lat: 40.7418638,
    lng: -74.0046272,
    title: "Main Office",
    address: "111 8th Ave, New York, NY 10011",
    phone: "931-492-3451",
  },
  {
    lat: 40.7282701,
    lng: -74.0072199,
    title: "Office II",
    address: "550 Washington St, New York, NY 10282",
    phone: "931-492-3451",
  },
];

const marker = {
  url: markerIcon.src,
};

export default function Map() {
  const [activeMarker, setActiveMarker] = useState<null | number>(null);

  const handleMouseOver = (index: number) => {
    setActiveMarker(index);
  };

  const handleMouseOut = () => {
    setActiveMarker(null);
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      //  onLoad={onLoad}
      //  onUnmount={onUnmount}
    >
      {markerPositions.map((position, index) => (
        <Marker
          key={index}
          position={position}
          icon={marker}
          onMouseOver={() => handleMouseOver(index)}
          onMouseOut={handleMouseOut}
        >
          {activeMarker === index && (
            <InfoWindow position={position} onCloseClick={handleMouseOut}>
              <div>
                <h3>{position.title}</h3>
                <p>{position.address}</p>
                <p>{position.phone}</p>
              </div>
            </InfoWindow>
          )}
        </Marker>
      ))}
      <></>
    </GoogleMap>
  ) : (
    <Loader />
  );
}
