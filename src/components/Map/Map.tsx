"use client";

import { useState, useCallback, useRef } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import ContactCard from "../ContactCard/ContactCard";
import styles from "./Map.module.scss";
import Loader from "./Loader";

const mapContainerStyle = {
  width: "100%",
  height: "560px",
};

const center = {
  lat: 40.736706,
  lng: -74.00578,
};

const locations = [
  {
    lat: 40.7418638,
    lng: -74.0046272,
    title: "Main Office",
    email: "archone@mail.com",
    address: "111 8th Ave, New York, NY 10011",
    phone: "123-456-3451",
  },
  {
    lat: 40.7282701,
    lng: -74.0072199,
    title: "Office II",
    email: "archone@mail.com",
    address: "550 Washington St, New York, NY 10282",
    phone: "832-123-4321",
  },
];

type MapRef = google.maps.Map | null;

export default function MapContactSection() {
  const mapRef = useRef<MapRef>(null);
  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  const handleViewOnMap = useCallback((index: number) => {
    if (mapRef.current && locations[index]) {
      const map = mapRef.current;
      const location = locations[index];
      map.panTo({ lat: location.lat, lng: location.lng });
      map.setZoom(16);
      setActiveMarker(index);

      map.getDiv().scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  if (!isLoaded) return <Loader />;

  return (
    <>
      <div
        className={`container bottom-spacing decorativeLine ${styles.contentWrapper}`}
      >
        <h2>Contact Details</h2>
        <div className={styles.detailsGrid}>
          {locations.map((location, index) => (
            <ContactCard
              key={index}
              office={location.title}
              email={location.email}
              address={location.address}
              phone={location.phone}
              markerIndex={index}
              onViewMap={handleViewOnMap}
            />
          ))}
        </div>
      </div>

      <div
        className={`top-spacing bottom-spacing container ${styles.mapContainer}`}
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
              onClick={() => setActiveMarker(index)}
            >
              {activeMarker === index && (
                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
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
    </>
  );
}
