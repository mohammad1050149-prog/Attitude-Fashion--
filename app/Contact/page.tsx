import ContactCTA from "../modules/Contact/ContactCTA";
import ContactFAQ from "../modules/Contact/ContactFAQ";
import ContactForm from "../modules/Contact/ContactForm";
import ContactHero from "../modules/Contact/ContactHero";
import ContactInfo from "../modules/Contact/ContactInfo";
import FashionProcess from "../modules/Contact/FashionProcess";
import Testimonials from "../modules/Contact/Testimonials";

import VisitStore from "../modules/Contact/VisitStore";


export default function ContactPage() {
  return (
    <main>
      <ContactHero/>
       <ContactInfo/>
        <VisitStore/>
         <ContactForm/>
          <FashionProcess/>
            <Testimonials/>
             <ContactFAQ/>
             <ContactCTA/>
    </main>
  );
}