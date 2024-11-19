import Image from "next/image";
import Button from "../Button/Button";
import styles from "./ImageWithOverlayText.module.scss";
import arrow from "../../../public/icons/icon-arrow.svg";

interface ImageWithOverlayTextProps {
  variant?: "default" | "sliderItem";
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
          className={`${styles.heading} ${
            variant === "sliderItem" ? styles.sliderHeading : ""
          }`}
        >
          {heading}
        </h2>
        {paragraph && <p className={styles.paragraph}>{paragraph}</p>}
        <Button text={ctaText} icon={arrow} href={href} />
      </div>
      <div
        className={`${styles.imageContainer} ${
          variant === "sliderItem" ? styles.sliderItem : ""
        }`}
      >
        <picture className={styles.picture}>
          <source srcSet={imageSrcMobile} media="(max-width: 767px)" />
          <source
            srcSet={imageSrcTablet}
            media="(min-width: 768px) and (max-width: 1023px)"
          />
          {variant === "sliderItem" ? (
            <Image src={imageSrcDesktop} alt="" fill />
          ) : (
            <Image src={imageSrcDesktop} alt="" fill />
          )}
        </picture>
      </div>
    </div>
  );
}

export default ImageWithOverlayText;
