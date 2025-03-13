import React from 'react';
import { ListTodo, ChartBarStacked, Users } from 'lucide-react';

const Features: React.FC = () => {
    return(
        <section id="features" className="px-16 py-18 bg-blue-50">
            <h2 className="text-3xl grey-800 font-bold text-center mb-4">Everything You Need to Stay Organized</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
                Powerful features to help you and your team manage tasks more effectively.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="p-6 bg-white rounded-xl shadow">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-xl bg-blue-100">
                        <ListTodo className="h-8 w-8 text-blue-600 stroke-2" />
                    </div>
                    <h3 className="text-xl font-semibold text-black-600 mb-2">Task Tracking</h3>
                    <p className="text-gray-600">
                        Create, assign, and track tasks in real-time to monitor progress effectively.
                    </p>
                </div>
                {/* Feature 2 */}
                <div className="p-6 bg-white rounded-xl shadow">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-xl bg-blue-100">
                        <ChartBarStacked className="h-8 w-8 text-blue-600 stroke-2" />
                    </div>
                    <h3 className="text-xl font-semibold text-black-600 mb-2">Smart Categories</h3>
                    <p className="text-gray-600">
                        Organize tasks into categories, projects, or labels for easy sorting and filtering.
                    </p>
                </div>
                {/* Feature 3 */}
                <div className="p-6 bg-white rounded-xl shadow">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-xl bg-blue-100">
                        <Users className="h-8 w-8 text-blue-600 stroke-2" />
                    </div>
                    <h3 className="text-xl font-semibold text-black-600 mb-2">Team Collaboration</h3>
                    <p className="text-gray-600">
                        Work together seamlessly with real-time updates and shared task boards.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Features;