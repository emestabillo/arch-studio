import Link from "next/link";
import { getImageProps } from "next/image";
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
      className={`${styles.card} ${
        variant === "numberedCard" ? styles.number : ""
      }`}
    >
      <div className={styles.textContainer}>
        {variant === "defaultCard" ? (
          <h2 className={styles.heading}>
            <Link href="/portfolio">{projectTitle}</Link>
          </h2>
        ) : (
          <h2 className={styles.heading}>{projectTitle}</h2>
        )}

        {variant === "numberedCard" && ctaLinkUrl && (
          <Link className={styles.ctaLink} href={ctaLinkUrl}>
            {ctaLinkText}
          </Link>
        )}
        {variant === "defaultCard" && (
          <p className={styles.subheading}>{subHeading}</p>
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
