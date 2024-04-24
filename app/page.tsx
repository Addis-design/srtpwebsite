import { skyBg, homePark, partner1,partner2,partner3,partner4 ,sector1,sector2,sector3,sector4} from "../public/assets";
import NavBar from "@/components/navbar/NavBar";
import Image from "next/image";
import styles from "./page.module.css";
import React from 'react';
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Banner Section */}
      <div className={`${styles.banners}relative overflow-hidden lg:aspect-[1440/600]`}>
        <div className="absolute inset-0 w-full transform-none">
          <Image
            alt="sky"
            className={`${styles.bannerImage} mt-[-20px] w-full object-cover bg-transparent`}
            src={skyBg}
          />
        </div>
        <div className="pointer-events-none absolute bottom-0 w-full">
          <div className="flex justify-center sm:block transform-none">
            <Image
              alt="park"
              className="w-[210%] max-w-none sm:w-full sm:max-w-full bg-transparent"
              src={homePark}
            />
          </div>
        </div>
        <div className="absolute p-10 inset-0 flex text-2xl flex-col items-center justify-center px-10 py-10">
          {" "}
          <h2 className="text-center font-size: 2rem; font-bold ">
            Welcome to stp
          </h2>{" "}
          <p className="mb-10 text-xl al justify-center justify-self-center">
            Dedan Kimathi Science and Technology Park (DeST-Park) is bringing
            rapid development of knowledge intensive areas and to facilitate
            creation of new enterprises.
          </p>
          <Link href={"/about"}>
          <button
            type="button"
            className="bg-green text-xl text-white border border-white hover:bg-white hover:text-green-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Read More
          </button>
          </Link>
        </div>
      </div>

      {/* First Section */}
      <div className="flex flex-wrap mt-5 ">
        <div className={`${styles.sector} p-4  mt-5`} >
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={sector1}
              alt="Section 1 Image 1"
              width={240}
              height={240}
            />
            <div className="p-6">
              <h3 className="tracking-widest text-xs font-medium text-gray-900 mb-2">
                CATEGORY
              </h3>
              <h2 className="title-font text-lg font-medium text-gray-900 mb-3">
                Section 1 Item 1
              </h2>
              <p className="leading-relaxed mb-3">
                Description for Section 1 Item 1
              </p>
              <Link href="/masterplan">
                              <button className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles.sector} p-4  mt-5`} >
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={sector2}
              alt="Section 1 Image 1"
              width={240}
              height={240}
            />
            <div className="p-6">
              <h3 className="tracking-widest text-xs font-medium text-gray-900 mb-2">
                CATEGORY
              </h3>
              <h2 className="title-font text-lg font-medium text-gray-900 mb-3">
                Section 1 Item 1
              </h2>
              <p className="leading-relaxed mb-3">
                Description for Section 1 Item 1
              </p>
              <Link href="/contact">
                              <button className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles.sector} p-4  mt-5`} >
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={sector3}
              alt="Section 1 Image 1"
              width={240}
              height={240}
            />
            <div className="p-6">
              <h3 className="tracking-widest text-xs font-medium text-gray-900 mb-2">
                CATEGORY
              </h3>
              <h2 className="title-font text-lg font-medium text-gray-900 mb-3">
                Section 1 Item 1
              </h2>
              <p className="leading-relaxed mb-3">
                Description for Section 1 Item 1
              </p>
              <Link href="/about">
                              <button className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles.sector} p-4  mt-5`} >
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={sector4}
              alt="Section 1 Image 1"
              width={240}
              height={240}
            />
            <div className="p-6">
              <h3 className="tracking-widest text-xs font-medium text-gray-900 mb-2">
                CATEGORY
              </h3>
              <h2 className="title-font text-lg font-medium text-gray-900 mb-3">
                Section 1 Item 1
              </h2>
              <p className="leading-relaxed mb-3">
                Description for Section 1 Item 1
              </p>
              
              <Link href="/masterplan">
                              <button className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Add the other 3 div elements for section 1 here */}
      </div>

      {/* Our Partners Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Our Partners
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by Companies and Organizations
            </p>
          </div>

          <div className="mt-10">
            <ul
              role="list"
              className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:mx-auto xl:gap-x-8"
            >
              <li className="flex justify-center">
                <Image src={ partner1} alt="Partner Logo 1"
                  width={150}
                  height={150} />
              </li>
              <li className="flex justify-center">
                <Image src={partner2} alt="Partner Logo 2"  width={150}
                  height={150} />
              </li>
              <li className="flex justify-center">
                <Image src={partner3} alt="Partner Logo 3"  width={150}
                  height={150} />
              </li>
              <li className="flex justify-center">
                <Image src={partner4} alt="Partner Logo 4"  width={150}
                  height={150} />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Subscribe to News Section */}
      <div className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
              Stay Updated
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Subscribe to Our Newsletter
            </p>
          </div>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <form action="#" method="POST" className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md border-white/20"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-3 w-full px-5 py-3 border border-transparent rounded-md shadow bg-green-500 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}