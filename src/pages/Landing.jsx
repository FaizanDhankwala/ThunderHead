import HeroSection from "../components/Landing/HeroSection";
import FeaturesSection from "../components/Landing/FeaturesSection";
import PricingSection from "../components/Landing/PricingSection";

import CallToActionSection from "../components/Landing/CallToActionSection";
import FooterSection from "../components/Landing/FooterSection";
import TestimonialsSection from "../components/Landing/TestimonialsSection";
import { features } from "../../src/assets/features"; // adjust path if needed
import { testimonials } from "../../src/assets/testimonials"; // adjust path if needed

import { pricingPlans  } from "../../src/assets/pricingPlans"; // adjust path if needed


const Landing = () => {
    return (
        <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100">

            {/* Hero Section*/}
            <HeroSection />

            {/* Feature Section*/}
            <FeaturesSection features={features} />

            {/* Pricing*/}
            <PricingSection pricingPlans={pricingPlans} />


            {/* Testimonals*/}
            <TestimonialsSection testimonials={testimonials}/>


            {/* Call to Action*/}
            <CallToActionSection/>


            {/* Footer Section*/}
            <FooterSection/>

        </div>
    )
}
export default Landing;