"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Button from "../../ui/Button/Button";
import styles from "./ImageWithOverlayText.module.scss";
import arrow from "../../../../public/icons/icon-arrow.svg";
import { scaleAnimation } from "@/animations/scaleAnimation";
interface ImageWithOverlayTextProps {
  variant?: "default" | "carouselItem";
  heading: string;
  paragraph?: string;
  ctaText: string;
  imageSrcDesktop: string;
  imageSrcTablet: string;
  imageSrcMobile: string;
  href?: string;
  enableAnimation?: boolean;
}

export default function ImageWithOverlayText({
  variant = "default",
  heading,
  paragraph,
  ctaText,
  imageSrcDesktop,
  imageSrcTablet,
  imageSrcMobile,
  href,
  enableAnimation = false,
}: ImageWithOverlayTextProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (enableAnimation) {
        scaleAnimation(sectionRef, imageRef);
      }
    },
    { scope: sectionRef }
  );
  return (
    <div
      className={`${styles.sectionContainer} ${
        enableAnimation ? "overflow-hidden" : ""
      }`}
      ref={sectionRef}
    >
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
        ref={imageRef}
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
