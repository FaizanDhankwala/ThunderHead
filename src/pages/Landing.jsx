import HeroSection from "../components/Landing/HeroSection";
import FeaturesSection from "../components/Landing/FeaturesSection";
import PricingSection from "../components/Landing/PricingSection";

import CallToActionSection from "../components/Landing/CallToActionSection";
import FooterSection from "../components/Landing/FooterSection";
import TestimonialsSection from "../components/Landing/TestimonialsSection";
import { features } from "../../src/assets/features"; // adjust path if needed
import { testimonials } from "../../src/assets/testimonials"; // adjust path if needed

import { pricingPlans  } from "../../src/assets/pricingPlans"; // adjust path if needed

import { useEffect } from "react";   // ✅ add this
import { useClerk, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
   const {openSignIn, openSignUp}=useClerk();
   const {isSignedIn}=useUser();
   const navigate= useNavigate();
useEffect(()=>{
    if(isSignedIn){
        navigate("/dashboard");
    }
}, [isSignedIn, navigate]);
   

    return (
        <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100">

            {/* Hero Section*/}
            <HeroSection openSignIn={openSignIn} openSignUp={openSignUp} />

            {/* Feature Section*/}
            <FeaturesSection features={features} />

            {/* Pricing*/}
            <PricingSection pricingPlans={pricingPlans} openSignUp={openSignUp} />


            {/* Testimonals*/}
            <TestimonialsSection testimonials={testimonials}/>


            {/* Call to Action*/}
            <CallToActionSection  openSignUp={openSignUp}/>


            {/* Footer Section*/}
            <FooterSection/>

        </div>
    )
}
export default Landing;