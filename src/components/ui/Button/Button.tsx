import styles from "./Button.module.scss";
import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  text?: string;
  href?: string;
  variant?: "primary" | "light";
  icon?: string;
  alt?: string;
  otherClass?: string;
};

export default function Button({
  text,
  href,
  variant = "primary",
  icon,
  alt = "",
  otherClass,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={`${styles.btn} ${styles[variant]} ${otherClass}`}
        {...props}
      >
        {text} {icon && <Image src={icon} alt={alt} />}
      </Link>
    );
  }

  return (
    <button className={`${styles.btn} ${styles[variant]}`}>
      {text} {icon && <Image src={icon} alt={alt} {...props} />}
    </button>
  );
}
