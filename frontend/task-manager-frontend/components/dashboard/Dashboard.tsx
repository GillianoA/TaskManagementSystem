import React from 'react';

const Dashboard: React.FC = () => {
    const totalTasks = 24;
    const completedTasks = 12;
    const pendingTasks = totalTasks - completedTasks;

    return(
        <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-semibold text-blue-600">Total Tasks</h2>
            <p className="text-3xl mt-4">{totalTasks}</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-semibold text-blue-600">Completed Tasks</h2>
            <p className="text-3xl mt-4">{completedTasks}</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-semibold text-blue-600">Pending Tasks</h2>
            <p className="text-3xl mt-4">{pendingTasks}</p>
            </div>
        </div>
        {/* Future: Additional sections for recent activity, upcoming deadlines, etc. */}
        </div>
    );
};

export default Dashboard;