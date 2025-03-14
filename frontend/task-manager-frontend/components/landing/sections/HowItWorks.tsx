import React from 'react';
import { UserPlus, HeartHandshake, LayoutList, ChartLine } from 'lucide-react';

const HowItWorks: React.FC = () => {
    return(
        <section id="how-it-works" className="px-10 md:px-25 lg:px-45 py-18 bg-white">
            <h2 className="text-3xl grey-800 font-bold text-center mb-4">How TaskFlow Works</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
                Get started in minutes with our Simple WorkFlow.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
                {/* Step 1 */}
                <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100">
                        <UserPlus className="h-8 w-8 text-blue-600 stroke-2" />
                    </div>
                    <h3 className="text-xl font-semibold text-black-600 mb-2">Create an Account</h3>
                    <p className="text-gray-600">Sign up and create your workspace in seconds.</p>
                </div>
                {/* Step 2 */}
                <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100">
                        <HeartHandshake className="h-8 w-8 text-blue-600 stroke-2" />
                    </div>
                    <h3 className="text-xl font-semibold text-black-600 mb-2">Invite Team</h3>
                    <p className="text-gray-600">Add team members and collaborate in real-time.</p>
                </div>
                {/* Step 3 */}
                <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100">
                        <LayoutList className="h-8 w-8 text-blue-600 stroke-2" />
                    </div>
                    <h3 className="text-xl font-semibold text-black-600 mb-2">Creat Tasks</h3>
                    <p className="text-gray-600">Start adding and organizing your tasks.</p>
                </div>
                {/* Step 4 */}
                <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100">
                        <ChartLine className="h-8 w-8 text-blue-600 stroke-2" />
                    </div>
                    <h3 className="text-xl font-semibold text-black-600 mb-2">Track Progress</h3>
                    <p className="text-gray-600">Monitor performance and achieve goals</p>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;