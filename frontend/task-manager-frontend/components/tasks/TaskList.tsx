import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://localhost:5145/api/tasks');
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
            <div className="grid grid-cols-1 gap-6">
                {tasks.map(task => (
                    <div key={task.id} className="bg-white p-6 rounded shadow">
                    <h2 className="text-2xl font-semibold text-blue-600">{task.title}</h2>
                    <p className="mt-2">{task.description}</p>
                    <p className="mt-2 text-sm text-gray-600">Status: {task.status}</p>
                    <p className="mt-2 text-sm text-gray-600">
                      Due: {new Date(task.dueDate).toLocaleDateString()}
                    </p>
                    <p className="mt-2 text-sm text-gray-600">Priority: {task.priority}</p>
                  </div>
                ))}
            </div>
        </div>
    );
}

export default TaskList;