import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface TaskItem {
    id: number;
    title: string;
    description: string;
    status: boolean;
    dueDate: string;
    priority: number;
    userId: number;
    categoryId?: number;
}

const TaskDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [task, setTask] = useState<TaskItem | null>(null);
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await axios.get(`http://localhost:5145/api/task/${id}`);
                setTask(response.data);
            } catch (error: any) {
                setError(error.response?.data || "Failed to fetch task.");
            }
        };

        fetchTask();
    }, [id]);

    if (error) return <p className="text-red-500">{error}</p>;
    // While the task data is being fetched, show a loading message
    if (!task) return <p>Loading...</p>;
    
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-8">Task Detail</h1>
            <div className="bg-white p-6 rounded shadow mb-4">
            <h2 className="text-2xl font-semibold text-blue-600">{task.title}</h2>
            <p className="mt-2">{task.description}</p>
            <p className="mt-2 text-sm text-gray-600">Status: {task.status ? 'Completed' : 'Pending'}</p>
            <p className="mt-2 text-sm text-gray-600">
                Due: {new Date(task.dueDate).toLocaleDateString()}
            </p>
            <p className="mt-2 text-sm text-gray-600">Priority: {task.priority}</p>
            </div>
            {/* Navigation Buttons */}
            <div className="flex space-x-4">
            <button
                onClick={() => navigate(`/tasks/${task.id}/edit`)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Edit Task
            </button>
            <Link to="/tasks" className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
                Back to Task List
            </Link>
            </div>
        </div>
    );
}

export default TaskDetail;