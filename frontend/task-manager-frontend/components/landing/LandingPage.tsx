import React from "react";
import NavBar from "./sections/NavBar";
import HeroSection from "./sections/HeroSection";
import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";
import Testimonials from "./sections/Testimonials";
import Pricing from "./sections/Pricing";

const LandingPage: React.FC = () => {
    return(
        <>
            <NavBar />
            <HeroSection />
            <Features />
            <HowItWorks />
            <Testimonials />
            <Pricing />
        </>
    );
};

export default LandingPage;