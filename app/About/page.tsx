import AboutHero from "../modules/About/HeroBanner";
import MissionVisionSection from "../modules/About/MissionVisionSection";
import OurStory from "../modules/About/OurStory";
import WhyChooseUs from "../modules/Home/Attractive";
import LifestyleGallery from "../modules/About/LifestyleGallery";
import OurAchievements from "../modules/About/OurAchievements";
import MeetOurTeam from "../modules/About/MeetOurTeam";
import CustomerTestimonials from "../modules/About/CustomerTestimonials";


export default function About(){


    return (
        <div>
         <AboutHero/>
         <OurStory/>
         <MissionVisionSection/>
         <WhyChooseUs/>
         <LifestyleGallery/>
         <OurAchievements/>
         < MeetOurTeam/>
         <CustomerTestimonials/>
        </div>

    )
}