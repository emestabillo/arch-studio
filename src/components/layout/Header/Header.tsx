"use client";

import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import fadeInAnimation from "../../../utils/animations/fadeInAnimation";
import hamburgerBtn from "../../../../public/icons/icon-hamburger.svg";
import closeBtn from "../../../../public/icons/icon-close.svg";
import { NavlinksProps } from "../navlinks";
import PageTitle from "@/components/shared/FixedPageTitle/FixedPageTitle";

export default function Header({ links }: NavlinksProps) {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  const pageName = usePathname().replace(/^\//, "") || "home";
  const navRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      fadeInAnimation(navRef, 0.8);
    },
    { scope: navRef }
  );

  const toggleMenu = () => {
    setShowMenu((current) => !current);
  };

  const toggleBodyOverflow = (show: boolean) => {
    document.body.classList.toggle("overflow-hidden", show);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
    gsap.set(navRef.current, { autoAlpha: 0 });
    fadeInAnimation(navRef, 1);
  };

  // Prevent scroll on body when slideout nav is open
  useEffect(() => {
    toggleBodyOverflow(showMenu);

    return () => {
      document.body.classList.remove("header-menu-open");
    };
  }, [showMenu]);

  return (
    <header className={`container ${styles.header}`} ref={navRef}>
      <Link href="/" className={styles.headerLogo} onClick={handleLinkClick}>
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
                  className={`${styles.menuLink} ${
                    pathname === route ? styles.activeMenuLink : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <PageTitle title={pageName} />
    </header>
  );
}
