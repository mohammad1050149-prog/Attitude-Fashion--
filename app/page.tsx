// 'use client'
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// export default function Home() {
//   const router=useRouter()
//   const Navigate=()=>{
//     router.push('/About')
//   }
//   return (
//              <div>
//              <button onClick={()=>{
//               Navigate()
//              }}>
//               about
//              </button>
//              </div>
//   );
// }




import Hero from "./modules/Home/Hero";
import Collection from "./modules/Home/Collection";
import Category from "./modules/Home/Category";
import  Arrivals  from "./modules/Home/Arrivals";
import Reviews from  "./modules/Home/Reviews"
import Newsletter from  "./modules/Home/Newsletter"
import InstagramGallery from "./modules/Home/InstagramGallery";
import WhatsAppButton from "./modules/Home/WhatsAppButton";
import MapSection from "./modules/Home/MapSection";
import VideoGallery from "./modules/Home/VideoGallery";

                                


export default function Home() {
    return (
        <div>
            <Hero />
            <VideoGallery/>
            < Collection/>
            <Category />
            <Arrivals/>
            <Reviews/>
           <Newsletter/>
           <InstagramGallery/>
            <MapSection/>
           
           <WhatsAppButton/>
          
        </div>

    )
}