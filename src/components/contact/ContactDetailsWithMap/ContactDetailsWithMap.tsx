"use client";
import { useCallback, useRef, useState, useEffect } from "react";
import ContactCard from "../ContactCard/ContactCard";
import Map from "../Map/Map";
import styles from "./ContactDetailsWithMap.module.scss";
import { officeLocations } from "@/data/officeLocations";
import { fadeInUpAnimation } from "@/animations/fadeInUpAnimation";

const center = {
  lat: 40.736706,
  lng: -74.00578,
};

type MapRef = google.maps.Map | null;

export default function ContactDetailsWithMap() {
  const [activeMarker, setActiveMarker] = useState<number | null>(null);
  const mapRef = useRef<MapRef>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const animate = fadeInUpAnimation(containerRef);
    return animate;
  }, []);

  const handleViewOnMap = useCallback((index: number) => {
    if (mapRef.current && officeLocations[index]) {
      const map = mapRef.current;
      const location = officeLocations[index];
      map.panTo({ lat: location.lat, lng: location.lng });
      map.setZoom(16);
      setActiveMarker(index);

      map.getDiv().scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const handleMarkerClick = (index: number) => {
    setActiveMarker(index === activeMarker ? null : index);
  };

  return (
    <>
      <div
        className={`container bottom-spacing decorative-line ${styles.contentWrapper}`}
        ref={containerRef}
      >
        <h2>Contact Details</h2>
        <div className={styles.detailsGrid}>
          {officeLocations.map((location, index) => (
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
      <Map
        locations={officeLocations}
        center={center}
        onMapLoad={onMapLoad}
        activeMarker={activeMarker}
        onMarkerClick={handleMarkerClick}
      />
    </>
  );
}
