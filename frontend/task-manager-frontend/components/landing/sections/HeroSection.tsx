import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
    const navigate = useNavigate();
    const handleTrial = () => {
        navigate('/register');
    };
    const handleVideo = () => {
        navigate('/comingsoon');
    };

    return(
        <section className="flex flex-col md:flex-row items-center justify-center pt-26 md:pt-46 pb-16 px-10 md:px-25 lg:px-45 bg-white space-x-8">
            {/* Left Content */}
            <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-black-600 mb-4">
                    Manage Tasks Smarter, Achieve More Together
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-6 text-justify">
                    Streamline your workflow, boost team collaboration, and track progress with our intuitive task management platform.
                </p>
                <div className="flex space-x-4">
                    <button onClick={handleTrial} className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
                        Start Free Trial
                    </button>
                    <button onClick={handleVideo} className="bg-white text-grey-800 px-6 py-3 rounded hover:bg-blue-700 hover:text-white hover:border-white border border-gray-300">
                        View Demo
                    </button>
                </div>
            </div>
            {/* Right Content */}
            <div className="md:w-1/2 flex justify-center relative">
                <div className="absolute -bottom-20 -right-10 w-full h-full bg-blue-200 py-12 px-4 rounded-2xl shadow-md "></div> 
                <div className="absolute -bottom-10 -right-5 w-full h-full bg-gray-400 py-12 px-4 rounded-2xl shadow-md "></div>
                <div className="relative">            
                    <img src="/Dashboard.png" alt="TaskFlow Screenshot" className="max-w-full h-auto rounded-2xl shadow-lg" />
                </div>
            </div>            
        </section>
    );
}

export default HeroSection;