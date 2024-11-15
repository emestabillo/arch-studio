import styles from "./HeadingAndText.module.scss";
import Image from "next/image";

interface HeadingAndTextProps {
  heading: string;
  headingVariant?: string;
  paragraphs: string[];
  imgSrc: string;
}

export default function HeadingAndText({
  heading,
  headingVariant,
  paragraphs,
  imgSrc,
}: HeadingAndTextProps) {
  return (
    <section
      className={`container decorativeLine top-spacing bottom-spacing ${styles.mainWrapper}`}
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
        <Image
          src={imgSrc}
          alt="Small team, big ideas"
          width={540}
          height={568}
        />
      </div>
    </section>
  );
}
