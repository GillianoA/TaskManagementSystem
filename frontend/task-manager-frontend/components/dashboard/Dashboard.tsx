import React, { useState, useEffect } from 'react';
import api from '../../src/apiService';
import { CircleAlert } from 'lucide-react';

interface DashboardData {
    totalTasks: number;
    completedTasks: number;
    pendingTasks: number;
    overdueTasks: number;
}

const Dashboard: React.FC = () => {
    const [stats, setStats] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        // Debug token
        const token = localStorage.getItem('token');
        console.log("Token exists:", !!token);
        if (token) {
            console.log("Token first 20 chars:", token.substring(0, 20) + "...");
        }
        
        const fetchStats = async () => {
            try {
                const response = await api.get('/dashboard/stats');
                setStats(response.data);
            } catch (error: any) {
                console.error("Dashboard error:", error);
                setError(error.response?.data || "Failed to fetch dashboard data.");
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    return(
        <>
            <h1 className="block text-3xl font-bold text-black-600 mb-2 w-full">Dashboard Overview</h1>
            <p className="text-lg text-gray-600 mb-8">Welcome back, Jane!</p>
            {loading && <p className="text-center">Dashboard Loading...</p>}
            {error && <p className="text-red-500"> <CircleAlert className="h-4 w-4 inline-block text-red-500 stroke-2" /> {error}</p>}
            {stats && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded shadow">
                        <h2 className="text-2xl font-semibold text-blue-600">Total Tasks</h2>
                        <p className="text-3xl mt-4">{stats.totalTasks}</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow">
                        <h2 className="text-2xl font-semibold text-blue-600">Completed Tasks</h2>
                        <p className="text-3xl mt-4">{stats.completedTasks}</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow">
                        <h2 className="text-2xl font-semibold text-blue-600">Pending Tasks</h2>
                        <p className="text-3xl mt-4">{stats.pendingTasks}</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow">
                        <h2 className="text-2xl font-semibold text-blue-600">Overdue Tasks</h2>
                        <p className="text-3xl mt-4">{stats.overdueTasks}</p>
                    </div>
                </div>
            )}  
        </>
    );
};

export default Dashboard;
