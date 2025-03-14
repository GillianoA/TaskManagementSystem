import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const MobileApp: React.FC = () => {
    const navigate = useNavigate();

    const handleDownload = () => {
        navigate('/comingsoon');
    };

    return (
        <section className="flex flex-col md:flex-row items-center justify-center py-16 px-10 md:px-25 lg:px-45 bg-blue-50 space-x-8">
            {/* Left Content */}
            <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold text-black-600 mb-4">
                    Take TaskFlow Anywhere
                </h2>
                <p className="text-lg text-gray-600 mb-6 text-justify">
                    Download our mobile app to stay productive on the go. Available for iOS and Android.
                </p>
                <div className="flex space-x-4 justify-center md:justify-start">
                    <button onClick={handleDownload} className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded hover:cursor-pointer">
                        <FaApple className="h-6 w-6 mr-2" /> App Store
                    </button>
                    <button onClick={handleDownload} className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded hover:cursor-pointer">
                        <FaGooglePlay className="h-6 w-6 mr-2" /> Play Store
                    </button>
                </div>
            </div>
            {/* Right Content */}
            <div className="md:w-1/2 flex justify-center relative">
                <div className="relative">            
                    <img src="/Mobile-App.jpg" alt="Mobile-App Screenshot" className="max-w-full h-auto rounded-2xl shadow-lg" />
                </div>
            </div>  
        </section>
    );
}
export default MobileApp;