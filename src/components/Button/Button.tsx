import styles from "./Button.module.scss";
import Image from "next/image";

type ButtonProps = {
  text?: string;
  href?: string;
  variant?: "primary" | "light";
  icon?: string;
  alt?: string;
  // onClick: () => void;
};

function Button({
  text,
  href,
  variant = "primary",
  icon,
  alt = "",
}: ButtonProps) {
  return (
    <a href={href} className={`${styles.btn} ${styles[variant]}`}>
      {text} {icon && <Image src={icon} alt={alt} />}
    </a>
  );
}

export default Button;
