import React from "react";
import NavBar from "./sections/NavBar";
import HeroSection from "./sections/HeroSection";
import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";

const LandingPage: React.FC = () => {
    return(
        <>
            <NavBar />
            <HeroSection />
            <Features />
            <HowItWorks />
        </>
    );
};

export default LandingPage;