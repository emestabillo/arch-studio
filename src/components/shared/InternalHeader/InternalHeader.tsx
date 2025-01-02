"use client";
import { getImageProps } from "next/image";
import styles from "./InternalHeader.module.scss";
import { useRef } from "react";
import { createTimeline } from "./internalHeaderAnimation";
import { useGSAP } from "@gsap/react";
import LargeHeading from "@/components/ui/LargeHeading/LargeHeading";

interface InternalHeaderProps {
  heading: string;
  subheading: string;
  paragraph: string;
  imageSrcDesktop: string;
  imageSrcTablet: string;
  imageSrcMobile: string;
}

export default function InternalHeader({
  heading,
  subheading,
  paragraph,
  imageSrcDesktop,
  imageSrcTablet,
  imageSrcMobile,
  ...rest
}: InternalHeaderProps) {
  const common = { alt: "", sizes: "100vw" };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 630,
    height: 720,
    src: imageSrcDesktop,
  });
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 573,
    height: 720,
    src: imageSrcTablet,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      createTimeline(containerRef);
    },
    {
      scope: containerRef,
      dependencies: [],
    }
  );

  return (
    <section
      className={`container bottom-spacing ${styles.mainWrrapper}`}
      ref={containerRef}
    >
      <div className={styles.imageContainer}>
        <picture>
          <source media="(min-width: 64em)" srcSet={desktop} />
          <source media="(min-width: 48em)" srcSet={tablet} />
          <img
            alt=""
            {...rest}
            src={imageSrcMobile}
            style={{ width: "100%", height: "auto" }}
          />
        </picture>
      </div>
      <div className={styles.textContainer}>
        <LargeHeading level={1}>{heading}</LargeHeading>
        {/* <h1 className={styles.largeHeading}>{heading}</h1> */}
        <div className={`${styles.subtext} decorative-line`}>
          <h2>{subheading}</h2>
          <p>{paragraph}</p>
        </div>
      </div>
    </section>
  );
}
