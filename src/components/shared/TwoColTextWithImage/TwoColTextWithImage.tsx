"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import styles from "./TwoColTextWithImage.module.scss";
import Image from "next/image";
import { fadeInUpAnimation } from "@/animations/fadeInUpAnimation";

interface TwoColTextWithImageProps {
  variant?: "default" | "narrowImage";
  heading: string;
  headingVariant?: string;
  paragraphs: string[];
  imgSrc: string;
}

export default function TwoColTextWithImage({
  variant = "default",
  heading,
  headingVariant,
  paragraphs,
  imgSrc,
}: TwoColTextWithImageProps) {
  
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      fadeInUpAnimation(containerRef);
    },
    { scope: containerRef }
  );

  return (
    <section
      className={`container decorative-line top-spacing bottom-spacing ${
        styles.mainWrapper
      } ${variant === "narrowImage" ? styles.narrowImage : ""}`}
      ref={containerRef}
    >
      <div className={styles.textContainer}>
        <h2
          className={`${styles.heading} ${
            headingVariant === "short" ? "shortHeading" : "mediumHeading"
          }`}
        >
          {heading}
        </h2>
        {paragraphs.map((paragraph) => {
          return (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          );
        })}
      </div>
      <div className={styles.imageContainer}>
        <Image src={imgSrc} alt="Small team, big ideas" fill sizes="50vw" />
      </div>
    </section>
  );
}
