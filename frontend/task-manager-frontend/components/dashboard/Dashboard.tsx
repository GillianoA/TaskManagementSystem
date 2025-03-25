import React, { useState, useEffect } from 'react';
import api from '../../src/apiService';
import { CircleAlert } from 'lucide-react';

interface DashboardData {
    totalTasks: number;
    completedTasks: number;
    pendingTasks: number;
    overdueTasks: number;
}

interface RecentActivityItem {
    id: number;
    title: string;
    status: string;
    createdAt: string;
}

interface PriorityDistributionItem {
    priority: string;
    count: number;
}

interface UpcomingTaskItem {
    id: number;
    title: string;
    dueDate: string;
    isOverdue: boolean;
}

interface User {
    username: string;
}

const Dashboard: React.FC = () => {
    const [stats, setStats] = useState<DashboardData | null>(null);
    const [recentActivity, setRecentActivity] = useState<RecentActivityItem[]>([]);
    const [priorityDistribution, setPriorityDistribution] = useState<PriorityDistributionItem[]>([]);
    const [upcomingTasks, setUpcomingTasks] = useState<UpcomingTaskItem[]>([]);
    const [username, setUsername] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        // Debug token
        const token = localStorage.getItem('token');
        console.log("Token exists:", !!token);
        if (token) {
            console.log("Token first 20 chars:", token.substring(0, 20) + "...");
        }
        
        const fetchDashboardData = async () => {
            try {
                const userResponse = await api.get<User>('/user/me');
                setUsername(userResponse.data.username);

                const response = await api.get('/dashboard/stats');
                setStats(response.data);

                const recentActivityResponse = await api.get('/dashboard/recent-activity');
                setRecentActivity(recentActivityResponse.data);

                const priorityDistributionResponse = await api.get('/dashboard/priority-distribution');
                setPriorityDistribution(priorityDistributionResponse.data);

                const upcomingTasksResponse = await api.get('/dashboard/upcoming-tasks');
                setUpcomingTasks(upcomingTasksResponse.data);
            } catch (error: any) {
                setError(error.response?.data || "Failed to fetch dashboard data.");
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    return(
        <>
            <h1 className="block text-3xl font-bold text-black-600 mb-2 w-full">Dashboard Overview</h1>
            <p className="text-lg text-gray-600 mb-8">Welcome back, {username}!</p>
            {loading && <p className="text-center">Dashboard Loading...</p>}
            {error && <p className="text-red-500"> <CircleAlert className="h-4 w-4 inline-block text-red-500 stroke-2" /> {error}</p>}
            {/* Stats Panel */}
            {stats && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded shadow">
                        <h2 className="text-lg font-semibold text-gray-600">Total Tasks</h2>
                        <p className="text-3xl mt-4">{stats.totalTasks}</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow">
                        <h2 className="text-xl font-semibold text-gray-600">Completed Tasks</h2>
                        <p className="text-3xl mt-4">{stats.completedTasks}</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow">
                        <h2 className="text-xl font-semibold text-gray-600">Pending Tasks</h2>
                        <p className="text-3xl mt-4">{stats.pendingTasks}</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow">
                        <h2 className="text-xl font-semibold text-gray-600">Overdue Tasks</h2>
                        <p className="text-3xl mt-4">{stats.overdueTasks}</p>
                    </div>
                </div>
            )}
            {/* Recent Activity Panel */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-black-600 mb-4">Recent Activity</h2>
                {recentActivity.length === 0 ? (
                    <p className="text-gray-600">No recent activity.</p>
                ) : (
                    <ul className="bg-white p-4 rounded shadow">
                        {recentActivity.map((activity) => (
                            <li key={activity.id} className="mb-2">
                                <span className="font-semibold">{activity.title}</span> - {activity.status} on {new Date(activity.createdAt).toLocaleDateString()}
                            </li>
                        ))}
                    </ul>
                )}
            </section>
            {/* Priority Distribution Panel */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-black-600 mb-4">Priority Distribution</h2>
                {priorityDistribution.length === 0 ? (
                    <p className="text-gray-600">No data available.</p>
                ) : (
                    <div className="bg-white p-4 rounded shadow">
                        {priorityDistribution.map((item) => (
                            <p key={item.priority} className="mb-2">
                                Priority {item.priority} - {item.count} tasks
                            </p>
                        ))}
                    </div>
                )}
            </section>
        </>
    );
};

export default Dashboard;
