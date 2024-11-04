import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import styles from "./Footer.module.scss";
import logo from "../../../public/logo-white.svg";
import arrow from "../../../public/icons/icon-arrow.svg";
import { NavlinksProps } from "@/shared/Navlinks";

function Footer({ links }: NavlinksProps) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.logoContainer}>
          <Image src={logo} alt="Arch Studio logo" className={styles.logo} />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navLinksContainer}>
            {links.map((link) => {
              const { name, route } = link;
              return (
                <li key={name}>
                  <Link href={route} className={styles.navLinks}>
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Button href="/portfolio" text="see our portfolio" icon={arrow} />
      </div>
    </footer>
  );
}

export default Footer;
