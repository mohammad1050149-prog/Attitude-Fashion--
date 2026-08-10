import WinterCollection from "../modules/Collection/WinterCollection";
import FashionCTA from "../modules/Lookbook/FashionCTA";
import FeaturedLooks from "../modules/Lookbook/FeaturedLooks";
import JoinCommunity from "../modules/Lookbook/JoinCommunity";
import LookbookHero from "../modules/Lookbook/LookbookHero";
import LuxuryGallery from "../modules/Lookbook/LuxuryGallery";
import StyleCategories from "../modules/Lookbook/StyleCategories";
import StyleShowcase from "../modules/Lookbook/StyleShowcase";

export default function LookbookPage() {
  return (
   <div>
     <LookbookHero/>
      <FeaturedLooks/>
       <WinterCollection/>
         <LuxuryGallery/>
         <StyleCategories/>
          <FashionCTA/>
           <JoinCommunity/>
              <StyleShowcase/>




   </div>
  );
}