import BoyFashionHero from "../modules/Video/BoyFashionHero";
import BoyFashionSlider from "../modules/Video/FashionSlider";

import BoyFashionCategories from "../modules/Video/BoyFashionCategories";
import FeaturedProducts from "../modules/Video/FeaturedProducts";
import TrendingLooks from "../modules/Video/TrendingLooks";
import ShopByStyle from "../modules/Video/ShopByStyle";

import BoyFashionCollection from "../modules/Video/BoyFashionCollection";
export default function Home() {
  return (
    <main>
      <BoyFashionHero />
        <BoyFashionCollection/>
      <BoyFashionSlider/>
       <BoyFashionCategories/>
        <FeaturedProducts/>
         <TrendingLooks/>
          <ShopByStyle/>
 
    </main>
  );
}