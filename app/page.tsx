import { skyBg, homePark } from "../public/assets";
import NavBar from "@/components/navbar/NavBar";
import Image from "next/image";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div className="home">
      <div className={`${styles.banner}overflow-hidden`}>
        <div
          className={`${styles.banners}relative aspect-[1440/2800] overflow-hidden sm:aspect-[1440/1220] lg:aspect-[1440/920]`}
        >
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
            <h2 className="text-center font-size: 2rem; font-bold  ">
              Welcome to stp
            </h2>{" "}
            <p className="mb-10 text-xl al justify-center justify-self-center">
              Dedan Kimathi Science and Technology Park (DeST-Park) is bringing
              rapid development of knowledge intensive areas and to facilitate
              creation of new enterprises.
            </p>
            <button
              type="button"
              className="bg-green text-xl text-white border border-white hover:bg-white hover:text-green-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
