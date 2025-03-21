import React from 'react';

const Dashboard: React.FC = () => {
    const totalTasks = 248;
    const completedTasks = 142;
    const pendingTasks = totalTasks - completedTasks;
    const overdueTasks = 21;

    return(
        <>
            <h1 className="block text-3xl font-bold text-black-600 mb-2 w-full">Dashboard Overview</h1>
            <p className="text-lg text-gray-600 mb-8">Welcome back, Jane!</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                <div className="bg-white p-6 rounded shadow">
                    <h2 className="text-2xl font-semibold text-blue-600">Overdue Tasks</h2>
                    <p className="text-3xl mt-4">{overdueTasks}</p>
                </div>
            </div>  
        </>
    );
};

export default Dashboard;