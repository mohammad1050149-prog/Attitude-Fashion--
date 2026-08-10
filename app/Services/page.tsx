import BookConsultation from "../modules/Services/BookConsultation";
import CustomerExperience from "../modules/Services/CustomerExperience";
import CustomTailoring from "../modules/Services/CustomTailoring";
import FashionConsultation from "../modules/Services/FashionConsultation";
import PremiumServices from "../modules/Services/PremiumServices";
import ServicesHero from "../modules/Services/ServicesHero";
import StylingExperience from "../modules/Services/StylingExperience";
import VipMembership from "../modules/Services/VipMembership";


export default function ServicesPage() {
  return (
    <main>
      <ServicesHero/>
       <PremiumServices/>
        <StylingExperience/>
         <CustomTailoring/>
           <FashionConsultation/>
             <CustomerExperience/>
              <VipMembership/>
               <BookConsultation/>
    </main>
  );
}