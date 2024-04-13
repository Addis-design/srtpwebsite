import React from "react";
import styles from "./about.module.css";
import { skyBg, homePark, hotel } from "@/public/assets";
import Image from "next/image";
export default function About() {
  return (
    <div className={styles.about}>
      <div className="">
        <div className="absolute inset-0 w-full transform-none">
          <Image
            alt="sky"
            className={`${styles.bannerImage}w-full object-cover bg-transparent`}
            src={hotel}
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          {" "}
          {/* Center button within its container */}
          <button
            type="button"
            className="bg-transparent text-white border border-white hover:bg-white hover:text-green-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Read More
          </button>{" "}
          {/* Button styling */}
        </div>
      </div>
    </div>
  );
}
