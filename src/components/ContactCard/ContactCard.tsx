import Link from "next/link";
import styles from "./ContactCard.module.scss";
import Image from "next/image";
import arrow from "../../../public/icons/icon-arrow.svg";

interface ContactCardProps {
  office: string;
  mail: string;
  address: string;
  phone: string;
}

export default function ContactCard({
  office,
  mail,
  address,
  phone,
}: ContactCardProps) {
  return (
    <div className={styles.detailsWrapper}>
      <div className={styles.leftColumn}>
        <h3 className={styles.office}>{office}</h3>
        <p className={styles.detail}>Mail: {mail}</p>
        <p className={styles.detail}>Address: {address}</p>
        <p className={styles.detail}>Phone: {phone}</p>
      </div>
      <Link href="/contact" className={styles.link}>
        View on Map{" "}
        <Image
          src={arrow.src}
          alt=""
          width={26}
          height={20}
          className={styles.arrow}
        />
      </Link>
    </div>
  );
}
