import React from 'react';
import { ListTodo, ChartBarStacked, Users } from 'lucide-react';

const Testimonials: React.FC = () => {
    return(
        <section id="features" className="px-16 py-18 bg-blue-50">
            <h2 className="text-3xl grey-800 font-bold text-center mb-4">Loved by Teams Worldwide</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
                See what our customers have to say about TaskFlow.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <div className="p-6 bg-white rounded-xl shadow">
                    <div className="flex items-center mb-4">
                        <img className="w-16 h-16 rounded-full" src="/testimonial-1.jpg" alt="Testimonial 1" />
                        <div className="ml-4">
                            <h4 className="font-semibold text-gray-800">Aiony Haust</h4>
                            <p className="text-gray-600 text-sm">Product Manger</p>
                        </div>
                    </div>
                    <p className="text-gray-600 italic">
                        "TaskFlow boosted my team's productivity by 30%. It's a game-changer for project management."
                    </p>
                </div>
                {/* Testimonial 2 */}
                <div className="p-6 bg-white rounded-xl shadow">
                    <div className="flex items-center mb-4">
                        <img className="w-16 h-16 rounded-full" src="/testimonial-2.jpg" alt="Testimonial 2" />
                        <div className="ml-4">
                            <h4 className="font-semibold text-gray-800">Gilliano Agard</h4>
                            <p className="text-gray-600 text-sm">Software Developer</p>
                        </div>
                    </div>
                    <p className="text-gray-600 italic">
                        "TaskFlow has made my work life so much easier. It's a must-have for any team looking to stay organized and on track."
                    </p>
                </div>
                {/* Testimonial 3 */}
                <div className="p-6 bg-white rounded-xl shadow">
                    <div className="flex items-center mb-4">
                        <img className="w-16 h-16 rounded-full" src="/testimonial-3.jpg" alt="Testimonial 3" />
                        <div className="ml-4">
                            <h4 className="font-semibold text-gray-800">Alexander Hipp</h4>
                            <p className="text-gray-600 text-sm">Marketing Director</p>
                        </div>
                    </div>
                    <p className="text-gray-600 italic">
                        "TaskFlow has transformed our team's workflow. It's a powerful tool for managing tasks and projects."
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;