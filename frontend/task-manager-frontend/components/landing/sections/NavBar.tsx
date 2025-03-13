import React, { useState } from 'react';
import {ClipboardCheck, Menu, X} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NavBar: React.FC = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleRegister = () => {
        navigate('/register');
    };

    const handleLogin = () => {
        navigate('/login');
    };

    return(
        <nav className="bg-white p-4 px-16 shadow border-b-3 border-gray-200">
            {/* Mobile Menu Button */}
            <div className="md:hidden flex justify-end">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-blue-600">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Container for all content */}
            <div className={`flex flex-col md:flex-row md:items-center md:justify-between ${isMenuOpen ? 'block' : 'hidden md:flex'}`}>
                {/* Logo Section */}
                <div className="flex items-center justify-center md:justify-start space-x-2 py-4 md:py-0">
                    <ClipboardCheck className="h-8 w-8 text-blue-600 stroke-2" />
                    <div className="text-xl font-bold text-black-600">TaskFlow</div>
                </div>

                {/* Navigation Links and Buttons */}
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                    {/* Navigation Links */}
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-center">
                        <a href="#features" className="text-gray-600 hover:text-blue-600 w-full md:w-auto">Features</a>
                        <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 w-full md:w-auto">How it Works</a>
                        <a href="#pricing" className="text-gray-600 hover:text-blue-600 w-full md:w-auto">Pricing</a>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 pt-4 md:pt-0">
                        <a onClick={handleLogin} className="text-blue-600 hover:cursor-pointer w-full md:w-auto text-center">Login</a>
                        <button onClick={handleRegister} className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:cursor-pointer w-full md:w-auto">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;