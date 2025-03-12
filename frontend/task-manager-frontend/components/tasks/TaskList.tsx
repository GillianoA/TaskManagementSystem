import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface TaskItem {
    id: number;
    title: string;
    description: string;
    status: string;
    dueDate: string;
    priority: number;
}

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<TaskItem[]>([]);
    const [error, setError] = useState<string>('');
    const [filterStatus, setFilterStatus] = useState<'All' | 'Completed' | 'Pending'>('All');
    const [sortField, setSortField] = useState<'dueDate' | 'priority'>('dueDate');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    const filteredTasks = tasks.filter(task => {
        if (filterStatus === 'All') return true;
        return task.status.toLowerCase() === filterStatus.toLowerCase();
    });

    const sortedTasks = [...filteredTasks].sort((a, b) => {
        let comparison = 0;
        if (sortField === 'dueDate') {
            // Convert dueDate strings to timestamps for comparison.
            comparison = new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        } else if (sortField === 'priority') {
            comparison = a.priority - b.priority;
        }
        return sortOrder === 'asc' ? comparison : -comparison;
    });

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://localhost:5145/api/task');
                setTasks(response.data);
            } catch (error: any) {
                setError(error.response?.data || "Failed to fetch tasks.");
            }
        };

        fetchTasks();
    }, []);

    return(
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-8">Task List</h1>
            {/* If Error Display red text */}            
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="mb-4">
                <label className="block text-blue-600 font-semibold mb-2">Filter by Status</label>
                <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value as 'All' | 'Completed' | 'Pending')}
                    className="border border-gray-300 p-2 rounded-lg"
                >
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                </select>
            </div>
            <div className="mb-4">
            <label className="block text-blue-600 font-semibold mb-2">Sort By</label>
                <select
                    value={sortField}
                    onChange={(e) => setSortField(e.target.value as 'dueDate' | 'priority')}
                    className="border border-gray-300 p-2 rounded-lg"
                >
                    <option value="dueDate">Due Date</option>
                    <option value="priority">Priority</option>
                </select>
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
                    className="border border-gray-300 p-2 ml-2 rounded-lg"
                >
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
            <div className="grid grid-cols-1 gap-6">
                {sortedTasks.map(task => (
                    <div key={task.id} className="bg-white p-6 rounded shadow">
                        <h2 className="text-2xl font-semibold text-blue-600">{task.title}</h2>
                        <p className="mt-2">{task.description}</p>
                        <p className="mt-2 text-sm text-gray-600">Status: {task.status}</p>
                        <p className="mt-2 text-sm text-gray-600">
                            Due: {new Date(task.dueDate).toLocaleDateString()}
                        </p>
                        <p className="mt-2 text-sm text-gray-600">Priority: {task.priority}</p>
                        <Link to={`/tasks/${task.id}`} className="text-blue-600 hover:underline">View Details</Link>
                    </div>
                ))}
            </div>
            <Link to="/tasks/create" className="text-blue-600 hover:underline">Create Task</Link>
        </div>
    );
}

export default TaskList;