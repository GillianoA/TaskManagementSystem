import React from "react";
import NavBar from "./sections/NavBar";
import HeroSection from "./sections/HeroSection";
import Features from "./sections/Features";

const LandingPage: React.FC = () => {
    return(
        <>
            <NavBar />
            <HeroSection />
            <Features />
        </>
    );
};

export default LandingPage;