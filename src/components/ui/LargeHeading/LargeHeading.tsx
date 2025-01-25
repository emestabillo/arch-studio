import styles from "./LargeHeading.module.scss";

interface LargeHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2;
  homeHeroHeading?: boolean;
  children: React.ReactNode;
  ref?: React.RefObject<HTMLHeadingElement>;
}

export default function LargeHeading({
  level,
  children,
  homeHeroHeading,
  ...props
}: LargeHeadingProps) {
  const Heading = `h${level}` as "h1" | "h2";
  return (
    <Heading
      {...props}
      className={`${styles.largeHeading} ${
        homeHeroHeading ? styles.homeHeroHeading : styles.internalHeading
      }`}
    >
      {children}
    </Heading>
  );
}
