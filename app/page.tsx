import { skyBg, homePark } from "../public/assets";
import NavBar from "@/components/navbar/NavBar";
import Image from 'next/image'
import styles from "./page.module.css"
export default function Home() {
  return (
  
 <div className="home">
    <div className={`${styles.banner}overflow-hidden`}>
      <div className="">
        <div className={`${styles.banners}relative aspect-[1440/2800] overflow-hidden sm:aspect-[1440/1220] lg:aspect-[1440/920]`}>
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
            <button type="button" className="bg-green text-white border border-white hover:bg-white hover:text-green-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">Read More</button> {/* Button styling */}
          </div>
        </div>
      </div>
    </div>

    <div className={styles.centers}>
      {/* ... your center content ... */}


      
    </div>
    <div className={styles.clients}>
      {/* ... your center content ... */}


      
    </div>
    

  </div>
  );
}
