import React from "react";
import NavBar from "./sections/NavBar";
import HeroSection from "./sections/HeroSection";
import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";
import Testimonials from "./sections/Testimonials";
import Pricing from "./sections/Pricing";
import MobileApp from "./sections/MobileApp";
import Footer from "./sections/Footer";

const LandingPage: React.FC = () => {
    return(
        <>
            <NavBar />
            <HeroSection />
            <Features />
            <HowItWorks />
            <Testimonials />
            <Pricing />
            <MobileApp />
            <Footer />
        </>
    );
};

export default LandingPage;