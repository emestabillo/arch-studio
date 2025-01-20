import Link from "next/link";
import { getImageProps } from "next/image";
import styles from "./ProjectList.module.scss";

export interface ProjectCardProps {
  variant?: "defaultCard" | "numberedCard";
  propertyName: string;
  dateBuilt?: string;
  ctaLinkText?: string;
  ctaLinkUrl?: string;
  imageSrcDesktop: string;
  imageSrcTablet: string;
  imageSrcMobile: string;
}

export default function ProjectCard({
  variant = "numberedCard",
  propertyName,
  dateBuilt,
  ctaLinkText,
  ctaLinkUrl,
  imageSrcDesktop,
  imageSrcTablet,
  imageSrcMobile,
  ...rest
}: ProjectCardProps) {
  const common = { alt: "", sizes: "100vw" };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 350,
    height: 560,
    // quality: 80,
    src: imageSrcDesktop,
  });
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 573,
    height: 300,
    // quality: 70,
    src: imageSrcTablet,
  });

  return (
    <li
      className={`card ${styles.card} ${
        variant === "numberedCard" ? styles.number : ""
      }`}
    >
      <div className={styles.textContainer}>
        {variant === "defaultCard" ? (
          <h3 className={styles.heading}>
            <Link href="/portfolio">{propertyName}</Link>
          </h3>
        ) : (
          <h3 className={styles.heading}>{propertyName}</h3>
        )}

        {variant === "numberedCard" && ctaLinkUrl && (
          <Link className={styles.ctaLink} href={ctaLinkUrl}>
            {ctaLinkText}
          </Link>
        )}
        {variant === "defaultCard" && (
          <p className={styles.subheading}>{dateBuilt}</p>
        )}
      </div>
      <div className={styles.imageContainer}>
        <picture>
          <source media="(min-width: 1024px)" srcSet={desktop} />
          <source media="(min-width: 500px)" srcSet={tablet} />
          <img
            alt=""
            {...rest}
            src={imageSrcMobile}
            style={{ width: "100%", height: "auto" }}
          />
        </picture>
      </div>
    </li>
  );
}
