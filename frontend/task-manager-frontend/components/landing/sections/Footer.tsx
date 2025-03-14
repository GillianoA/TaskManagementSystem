import React from 'react';
import {ClipboardCheck} from 'lucide-react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 pt-16 px-10 md:px-25 lg:px-45 text-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
                <div className="flex flex-col md:flex-row justify-between ">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold mb-2 flex items-center space-x-2">
                            <ClipboardCheck className="h-8 w-8 text-blue-600 stroke-2 mr-2" />
                            TaskFlow
                        </h3>
                        <p className="text-sm">Making task management simple and efficient.</p>
                    </div>
                </div>
                <div className="flex space-x-8">
                    <div className="mb-4 md:mb-0">
                        <h4 className="font-semibold text-white mb-2">Product</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:underline">Features</a></li>
                            <li><a href="#" className="hover:underline">Pricing</a></li>
                            <li><a href="#" className="hover:underline">Security</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex space-x-8">
                    <div className="mb-4 md:mb-0">
                        <h4 className="font-semibold text-white mb-2">Company</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Careers</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>
                </div>
                {/* Social Media Section */}
                <div className="flex space-x-8">
                    <div className="mb-4 md:mb-0">
                        <h4 className="font-semibold text-white mb-2">Connect</h4>
                        <ul className="space-y-1 flex items-center space-x-4">
                            <li><a href="https://www.instagram.com/gilli.tt/" target="_blank"><FaInstagram className="h-6 w-6 transition-transform hover:-translate-y-1"/></a></li>
                            <li><a href="https://github.com/GillianoA" target="_blank"><FaGithub className="h-6 w-6 transition-transform hover:-translate-y-1"/></a></li>
                            <li><a href="https://www.linkedin.com/in/gilliano-agard/" target="_blank"><FaLinkedin className="h-6 w-6 transition-transform hover:-translate-y-1"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center py-4">
                <p className="text-sm">&copy; {new Date().getFullYear()} TaskFlow. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;