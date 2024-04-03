import React from 'react'
import styles from "./about.module.css"
import { skyBg,homePark } from '@/public/assets'
import Image from 'next/image'
export default function About() {
  return (
    <div className={styles.about}>
      <h1>About</h1>



      <section className={`${styles.banner} overflow-hidden pt-0 pb-4 md:pb-14 mt-0 mb-0 text-tertiary relative z-[20] border-b`}>
      <div className="">
        <div className="relative aspect-[1440/2800] overflow-hidden sm:aspect-[1440/1220] lg:aspect-[1440/920]">
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
          <div className="absolute inset-0 flex items-center justify-center"> {/* Center button within its container */}
            <button type="button" className="bg-transparent text-white border border-white hover:bg-white hover:text-green-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">Read More</button> {/* Button styling */}
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
