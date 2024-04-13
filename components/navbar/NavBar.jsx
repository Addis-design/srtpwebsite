"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { skyBg, homePark, logo } from "../../public/assets";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "/about" },
  { id: 3, title: "Contact", url: "/contact" },
  { id: 4, title: "Master Plan", url: "masterplan" },
];

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("/"); // Stores the currently active link

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const handleActiveLink = (url) => {
    setActiveLink(url); // Set active link on click
  };
  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <div
      className={`${
        styles.nvaBar
      } sticky px-4 flex items-center justify-between ${
        visible ? styles.visible : styles.hidden
      }`}
    >
      <Link href="/" className={styles.logo}>
        <Image src={logo} alt="logo" />
      </Link>
      <form action="/search" method="get" className="mb-10">
        <button type="submit">Search</button>
      </form>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={styles.links}>
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={`${styles.link} ${
                activeLink === link.url && styles.active
              }`} // Add active class conditionally
              onClick={() => handleActiveLink(link.url)} // Call handleClick on click
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
