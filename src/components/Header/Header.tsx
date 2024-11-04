"use client";

import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import hamburgerBtn from "../../../public/icons/icon-hamburger.svg";
import closeBtn from "../../../public/icons/icon-close.svg";
import { NavlinksProps } from "@/shared/Navlinks";

function Header({ links }: NavlinksProps) {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((current) => !current);
  };
  // Prevent scroll on body when slideout nav is open
  // useEffect(() => {
  //   (() => {
  //     showMenu
  //       ? document.body.classList.add("overflow")
  //       : document.body.classList.remove("overflow");
  //   })();
  // }, [showMenu]);

  return (
    <header className={`container ${styles.header}`}>
      <Link href="/" className={styles.headerLogo}>
        <Image src="/logo-main.svg" alt="Scoot - Home" width="78" height="32" />
      </Link>
      <nav className={styles.nav}>
        <button
          className={styles.burgerBtn}
          onClick={toggleMenu}
          aria-controls="menu-list"
          aria-expanded={showMenu ? `true` : `false`}
        >
          <Image src={showMenu ? closeBtn : hamburgerBtn} alt="" />
          <span className="screenReaderOnly" aria-hidden="true">
            toggle menu open and close
          </span>{" "}
        </button>
        <ul
          id="menu-list"
          className={`${styles.navListContainer} ${
            showMenu ? styles.active : ""
          }`}
        >
          {links.map((link) => {
            const { name, route } = link;
            return (
              <li key={name} className={styles.menuListItem}>
                <Link
                  href={route}
                  className={styles.menuLink}
                  onClick={toggleMenu}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
