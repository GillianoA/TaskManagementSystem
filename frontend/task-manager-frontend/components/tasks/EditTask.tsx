import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from '../../src/apiService';

interface TaskItem {
    id: number;
    title: string;
    description: string;
    status: string;
    dueDate: string;
    priority: number;
    userId: number;
    categoryId?: number;
}

const EditTask: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [task, setTask] = useState<TaskItem | null>(null);
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await api.get(`/task/${id}`);
                setTask(response.data);
            } catch (error: any) {
                setError(error.response?.data || "Failed to fetch task.");
            }
        };

        fetchTask();
    }, [id]);

    //handle change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if(task)
            setTask({ ...task, [e.target.name]: e.target.value });
    };

    //handle submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(!task) return;

        try{
            await api.put(`http://localhost:5145/api/task/${id}`, task);
            navigate(`/tasks/${id}`);
        } catch (error: any){
            setError(error.response?.data || "Failed to update task.");
        }
    }

    if(error) return <p className="text-red-500">{error}</p>;
    if(!task) return <p>Loading...</p>;

    return(
        <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Edit Task</h1>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
            {/* Title Field */}
            <div className="mb-4">
            <label className="block text-blue-600 font-semibold mb-2">Title</label>
            <input
                type="text"
                name="title"
                value={task.title}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-lg"
                required
            />
            </div>
            {/* Description Field */}
            <div className="mb-4">
            <label className="block text-blue-600 font-semibold mb-2">Description</label>
            <textarea
                name="description"
                value={task.description}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-lg"
                required
            />
            </div>
            {/* Due Date Field */}
            <div className="mb-4">
            <label className="block text-blue-600 font-semibold mb-2">Due Date</label>
            <input
                type="date"
                name="dueDate"
                value={task.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : ''}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-lg"
            />
            </div>
            {/* Priority Field */}
            <div className="mb-4">
            <label className="block text-blue-600 font-semibold mb-2">Priority</label>
            <input
                type="number"
                name="priority"
                value={task.priority}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-lg"
                min="1"
                max="5"
                required
            />
            </div>
            {/* Submit Button */}
            <button type="submit" className="bg-blue-600 text-white p-3 w-full rounded-lg hover:bg-blue-700">
            Save Changes
            </button>
        </form>
        {/* Cancel Link */}
        <div className="mt-4">
            <Link to={`/tasks/${task.id}`} className="text-blue-600 hover:underline">
            Cancel
            </Link>
        </div>
        </div>
    );
};

export default EditTask;