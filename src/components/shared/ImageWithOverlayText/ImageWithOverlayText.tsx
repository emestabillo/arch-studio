import Image from "next/image";
import Button from "../../ui/Button/Button";
import styles from "./ImageWithOverlayText.module.scss";
import arrow from "../../../../public/icons/icon-arrow.svg";

interface ImageWithOverlayTextProps {
  variant?: "default" | "carouselItem";
  heading: string;
  paragraph?: string;
  ctaText: string;
  imageSrcDesktop: string;
  imageSrcTablet: string;
  imageSrcMobile: string;
  href?: string;
}

function ImageWithOverlayText({
  variant = "default",
  heading,
  paragraph,
  ctaText,
  imageSrcDesktop,
  imageSrcTablet,
  imageSrcMobile,
  href,
}: ImageWithOverlayTextProps) {
  return (
    <div className={`${styles.sectionContainer}`}>
      <div className={styles.textContainer}>
        <h2
          className={`mediumHeading ${styles.heading} ${
            variant === "carouselItem" ? styles.carouselHeading : ""
          }`}
        >
          {heading}
        </h2>
        {paragraph && <p className={styles.paragraph}>{paragraph}</p>}
        <Button text={ctaText} icon={arrow} href={href} />
      </div>
      <div
        className={`${styles.imageContainer} ${
          variant === "carouselItem" ? styles.carouselItem : ""
        }`}
      >
        <picture className={styles.picture}>
          <source srcSet={imageSrcMobile} media="(max-width: 767px)" />
          <source
            srcSet={imageSrcTablet}
            media="(min-width: 768px) and (max-width: 1023px)"
          />
          <Image src={imageSrcDesktop} alt="" fill sizes="100vw" />
        </picture>
      </div>
    </div>
  );
}

export default ImageWithOverlayText;
