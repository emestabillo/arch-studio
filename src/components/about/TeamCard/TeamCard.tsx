import Image from "next/image";
import Link from "next/link";
import linkedInIcon from "../../../../public/icons/icon-linkedin.svg";
import twitterIcon from "../../../../public/icons/icon-twitter.svg";
import styles from "./TeamCard.module.scss";

interface TeamCardProps {
  name: string;
  title: string;
  linkedInLink: string;
  twitterLink: string;
  imgSrc: string;
}

export default function TeamCard({
  name,
  title,
  linkedInLink,
  twitterLink,
  imgSrc,
}: TeamCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.avatar}>
        <Image src={imgSrc} alt={name} width={350} height={320} />
      </div>
      <h3 className={styles.title}>{name}</h3>
      <p>{title}</p>
      <div className={styles.socialIcons}>
        <Link href={linkedInLink} target="_blank">
          <span>
            <Image src={linkedInIcon} width={32} height={32} alt="" />
          </span>
        </Link>
        <Link href={twitterLink} target="_blank">
          <span>
            <Image src={twitterIcon} width={32} height={26} alt="" />
          </span>
        </Link>
      </div>
    </div>
  );
}
