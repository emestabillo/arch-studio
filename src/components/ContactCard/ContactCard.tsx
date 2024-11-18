"use client";

import styles from "./ContactCard.module.scss";
import Image from "next/image";
import arrow from "../../../public/icons/icon-arrow.svg";

interface ContactCardProps {
  office: string;
  email: string;
  address: string;
  phone: string;
  markerIndex: number;
  onViewMap: (index: number) => void;
}

export default function ContactCard({
  office,
  email,
  address,
  phone,
  markerIndex,
  onViewMap,
}: ContactCardProps) {
  const handleViewOnMap = (e: React.MouseEvent) => {
    e.preventDefault();
    onViewMap(markerIndex);
  };
  return (
    <div className={styles.detailsWrapper}>
      <div className={styles.leftColumn}>
        <h3 className={styles.office}>{office}</h3>
        <p className={styles.detail}>Mail: {email}</p>
        <p className={styles.detail}>
          Address: <span>{address}</span>
        </p>
        <p className={styles.detail}>Phone: {phone}</p>
      </div>
      <a href="#" onClick={handleViewOnMap} className={styles.link}>
        View on Map{" "}
        <Image
          src={arrow.src}
          alt=""
          width={26}
          height={20}
          className={styles.arrow}
        />
      </a>
    </div>
  );
}
