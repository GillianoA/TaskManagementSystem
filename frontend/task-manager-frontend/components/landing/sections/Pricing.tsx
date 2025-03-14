import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
    const navigate = useNavigate();
    const handleGetStarted = () => {
        navigate('/register');
    };

    const handleContactSales = () => {
        navigate('/comingsoon');
    };

    return(
        <section id="how-it-works" className="px-10 md:px-25 lg:px-45 py-18 bg-white min-h-screen ">
            <h2 className="text-3xl grey-800 font-bold text-center mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
                Choose the plan that best suits your needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Starter Plan */}
                <div className="p-6 bg-white rounded-xl shadow transform transition-transform hover:scale-105">
                    <h3 className="text-xl font-semibold text-black-600 mb-2">Starter</h3>
                    <p className="text-3xl font-bold text-black-600 mb-4">$9<span className="grey-600 text-base font-normal">/month</span></p>
                    <ul className="text-gray-600 mb-6">
                        <li className="flex items-center mb-4"> <Check className="h-5 w-5 text-blue-600 mr-2" /> Up to 5 team members</li>
                        <li className="flex items-center mb-4"> <Check className="h-5 w-5 text-blue-600 mr-2" /> Basic Task Management</li>
                        <li className="flex items-center mb-4"> <Check className="h-5 w-5 text-blue-600 mr-2" /> 5GB storage</li>
                    </ul>
                    <button onClick={handleGetStarted} className="bg-gray-300 text-grey-400 px-6 py-3 rounded hover:bg-blue-700 hover:text-white w-full">
                        Get Started
                    </button>
                </div>
                {/* Premium Plan */}
                <div className="p-6 bg-blue-600 rounded-xl shadow transform scale-105 -translate-y-4 transition-transform hover:scale-110">
                    <h3 className="text-xl font-semibold text-white mb-2">Premium</h3>
                    <p className="text-3xl font-bold text-white mb-4">$39<span className="grey-600 text-base font-normal">/month</span></p>
                    <ul className="text-white mb-6">
                        <li className="flex items-center mb-4"> <Check className="h-5 w-5 text-white mr-2" /> Up to 20 team members</li>
                        <li className="flex items-center mb-4"> <Check className="h-5 w-5 text-white mr-2" /> Advanced Task Management</li>
                        <li className="flex items-center mb-4"> <Check className="h-5 w-5 text-white mr-2" /> 20GB storage</li>
                        <li className="flex items-center mb-4"> <Check className="h-5 w-5 text-white mr-2" /> Priority Support</li>
                    </ul>
                    <button onClick={handleGetStarted} className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-blue-800 hover:text-white w-full">
                        Get Started
                    </button>
                </div>
                {/* Enterprise Plan */}
                <div className="p-6 bg-white rounded-xl shadow transform transition-transform hover:scale-105">
                    <h3 className="text-xl font-semibold text-black-600 mb-2">Enterprise</h3>
                    <p className="text-3xl font-bold text-black-600 mb-4">$99<span className="grey-600 text-base font-normal">/month</span></p>
                    <ul className="text-gray-600 mb-6">
                        <li className="flex items-center mb-4"> <Check className="h-5 w-5 text-blue-600 mr-2" /> Unlimited team members</li>
                        <li className="flex items-center mb-4"> <Check className="h-5 w-5 text-blue-600 mr-2" /> Custom Workflows</li>
                        <li className="flex items-center mb-4"> <Check className="h-5 w-5 text-blue-600 mr-2" /> Unlimited storage</li>
                        <li className="flex items-center mb-4"> <Check className="h-5 w-5 text-blue-600 mr-2" /> 24/7 Support</li>
                    </ul>
                    <button onClick={handleContactSales} className="bg-gray-300 text-grey-400 px-6 py-3 rounded hover:bg-blue-700 hover:text-white w-full">
                        Contact Sales
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Pricing;