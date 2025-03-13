import React from 'react';
import { Link } from 'react-router-dom';
import {ClipboardCheck} from 'lucide-react';

const ComingSoon: React.FC = () => {
    return (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-4">
            <div className="flex flex-col justify-center items-center mb-8 bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <div className="flex items-center justify-center md:justify-start space-x-2 py-4 md:py-0 mb-4">
                    <ClipboardCheck className="h-12 w-12 text-blue-600 stroke-2" />                    
                    <div className="text-2xl font-bold text-black-600">TaskFlow</div>
                </div>
                <h1 className="text-4xl font-bold text-black-600 mb-4 text-center">Coming Soon</h1>
                <p className="text-gray-600 text-center max-w-lg mb-8">
                    We’re working hard to bring you this feature. Stay tuned for updates and get ready to streamline your tasks even more effectively!
                </p>
                <div className="">
                    <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-1/2 nowrap">
                        Back to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ComingSoon;