import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./sections/NavBar";

const LandingPage: React.FC = () => {
    const navigate = useNavigate();
    const handleGetStarted = () => {
        navigate('/register');
    };

    return(
        <div>
            <NavBar />
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">           
            <header className="text-center p-8">
                <h1 className="text-4xl font-bold mb-4">
                    Welcome to Task Management System
                </h1>
                <p className="text-lg mb-6">
                    Organize your tasks effortlessly.
                </p>
                <button onClick={handleGetStarted} className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Get Started
                </button>
            </header>
        <section className="p-8">
            <h2 className="text-2xl font-semibold mb-2">Features</h2>
            <ul className="list-disc list-inside">
            <li>Create, update, and delete tasks</li>
            <li>Organize tasks by categories/projects</li>
            <li>Filter and search tasks easily</li>
            <li>Secure authentication and user management</li>
            </ul>
        </section>
    </div>
    </div>
    );
};

export default LandingPage;