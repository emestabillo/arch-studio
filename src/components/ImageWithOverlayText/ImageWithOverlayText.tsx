import Image from "next/image";
import Button from "../Button/Button";
import styles from "./ImageWithOverlayText.module.scss";
import arrow from "../../../public/icons/icon-arrow.svg";

interface ImageWithOverlayTextProps {
  heading: string;
  ctaText: string;
  imageSrcDesktop: string;
  imageSrcTablet: string;
  imageSrcMobile: string;
}

function ImageWithOverlayText({
  heading,
  ctaText,
  imageSrcDesktop,
  imageSrcTablet,
  imageSrcMobile,
}: ImageWithOverlayTextProps) {
  return (
    <section
      className={`${styles.sectionContainer} container spacing-top spacing-bottom`}
    >
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>{heading}</h2>
        <Button text={ctaText} icon={arrow} />
      </div>
      <div className={styles.imageContainer}>
        <picture>
          <source srcSet={imageSrcMobile} media="(max-width: 767px)" />
          <source
            srcSet={imageSrcTablet}
            media="(min-width: 768px) and (max-width: 1023px)"
          />
          <Image src={imageSrcDesktop} alt="" width={1110} height={560} />
        </picture>
      </div>
    </section>
  );
}

export default ImageWithOverlayText;
