"use client";

import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import hamburgerBtn from "../../../../public/icons/icon-hamburger.svg";
import closeBtn from "../../../../public/icons/icon-close.svg";
import { NavlinksProps } from "../navlinks";

function Header({ links }: NavlinksProps) {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((current) => !current);
  };

  const toggleBodyOverflow = (show: boolean) => {
    document.body.classList.toggle("overflow-hidden", show);
  };

  // Prevent scroll on body when slideout nav is open
  useEffect(() => {
    toggleBodyOverflow(showMenu);

    return () => {
      document.body.classList.remove("header-menu-open");
    };
  }, [showMenu]);

  return (
    <header className={`container ${styles.header}`}>
      <Link
        href="/"
        className={styles.headerLogo}
        onClick={() => setShowMenu(false)}
      >
        <Image src="/logo-main.svg" alt="Scoot - Home" width="78" height="32" />
      </Link>
      <nav>
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
              <li key={name}>
                <Link
                  href={route}
                  className={styles.menuLink}
                  onClick={() => setShowMenu(false)}
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
