import { getImageProps } from "next/image";
import styles from "./InternalHeader.module.scss";

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

  return (
    <section className={`container bottom-spacing ${styles.mainWrrapper}`}>
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
        <h1 className={styles.largeHeading}>{heading}</h1>
        <div className={`${styles.subtext} decorativeLine`}>
          <h2>{subheading}</h2>
          <p>{paragraph}</p>
        </div>
      </div>
    </section>
  );
}
