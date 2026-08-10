import AllProducts from "../modules/Collection/AllProduct";
import BestSellingCollection from "../modules/Collection/BestSellingCollection";
import ExclusiveOffers from "../modules/Collection/ExclusiveOffers";
import LuxuryCollection from "../modules/Collection/LuxuryCollection";
import SeasonalCollection from "../modules/Collection/SeasonalCollection";
import StreetWearCollection from "../modules/Collection/StreetWearCollection";
import SummerCollection from "../modules/Collection/SummerCollection";
import WinterCollection from "../modules/Collection/WinterCollection";


export default function Collection(){
    return(
        <div>
           < AllProducts/>
           <WinterCollection/>
           <LuxuryCollection/>
          <SummerCollection/>
        <StreetWearCollection/>
        <BestSellingCollection/>
<ExclusiveOffers/>
<SeasonalCollection/>
    
        </div>
        
    )
}