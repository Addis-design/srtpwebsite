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
  { id: 4, title: "Master Plan", url: "/masterplan" },
];

export default function NavBar() {

  return (
    <div
      className={`${
        styles.nvaBar
      } sticky px-4 flex items-center justify-between`}
    >
      <Link href="/">
  <Image src={logo} alt="logo" className={styles.logo} />
</Link>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className={styles.links}>
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={`${styles.link} `} // Add active class conditionally
             >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <form action="/search" method="get" className="" >
      <button
                        type="submit"
                        className="inline-block px-6 py-2.5 bg-green-600   font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mb-12 md:mb-0"
                      >Search</button>
  </form>
    </div>
  );
}
