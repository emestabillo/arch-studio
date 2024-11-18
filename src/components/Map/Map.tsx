"use client";

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import styles from "./Map.module.scss";
import Loader from "./Loader";

const mapContainerStyle = {
  width: "100%",
  height: "560px",
};

interface Location {
  lat: number;
  lng: number;
  title: string;
  address: string;
  phone: string;
}

interface MapProps {
  locations: Location[];
  center: { lat: number; lng: number };
  onMapLoad: (map: google.maps.Map) => void;
  activeMarker: number | null;
  onMarkerClick: (index: number) => void;
}

export default function Map({
  locations,
  center,
  onMapLoad,
  activeMarker,
  onMarkerClick,
}: MapProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  if (!isLoaded) return <Loader />;

  return (
    <div
      className={`top-spacing bottom-spacing container ${styles.mapWrapper}`}
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={14}
        onLoad={onMapLoad}
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            onClick={() => onMarkerClick(index)}
          >
            {activeMarker === index && (
              <InfoWindow onCloseClick={() => onMarkerClick(index)}>
                <div>
                  <h3>{location.title}</h3>
                  <p>{location.address}</p>
                  <p>{location.phone}</p>
                </div>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    </div>
  );
}
