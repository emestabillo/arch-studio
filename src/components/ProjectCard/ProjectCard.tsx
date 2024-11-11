import Link from "next/link";
import Image from "next/image";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  variant?: "defaultCard" | "numberedCard";
  projectTitle: string;
  subHeading?: string;
  ctaLinkText?: string;
  ctaLinkUrl?: string;
  imageSrcDesktop: string;
  imageSrcTablet: string;
  imageSrcMobile: string;
}

export default function ProjectCard({
  variant = "numberedCard",
  projectTitle,
  subHeading,
  ctaLinkText,
  ctaLinkUrl,
  imageSrcDesktop,
  imageSrcTablet,
  imageSrcMobile,
}: ProjectCardProps) {
  return (
    <li
      className={`${styles.card} ${
        variant === "numberedCard" ? styles.number : ""
      }`}
    >
      <div className={styles.textContainer}>
        <h2 className={styles.cardHeading}>{projectTitle}</h2>
        {variant === "defaultCard" && ctaLinkUrl && (
          <Link className={styles.ctaLink} href={ctaLinkUrl}>
            {ctaLinkText}
          </Link>
        )}
        {variant === "numberedCard" && (
          <p className={styles.cardSubheading}>{subHeading}</p>
        )}
      </div>
      <div className={styles.imageContainer}>
        <picture>
          <source srcSet={imageSrcMobile} media="(max-width: 767px)" />
          <source
            srcSet={imageSrcTablet}
            media="(min-width: 768px) and (max-width: 1023px)"
          />

          <Image src={imageSrcDesktop} alt="" width={350} height={560} />
        </picture>
      </div>
    </li>
  );
}
