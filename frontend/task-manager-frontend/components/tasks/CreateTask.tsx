import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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

const CreateTask: React.FC = () => {
    const [formData, setFormData] = useState<TaskItem>({
        id: 0,
        title: '',
        description: '',
        status: 'Pending',
        dueDate: '',
        priority: 1,
        userId: 1,
        categoryId: undefined
    });
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'priority' ? Number(value) : value,
        }));
    };

    //handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const newTask = {
            ...formData,
            dueDate: formData.dueDate ? new Date(formData.dueDate).toISOString() : undefined,
        };

        try{
            await api.post('/task', newTask);
            navigate('/tasks');
        } catch (error: any){
            setError(error.response?.data || "Failed to create task.");
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Create Task</h1>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
            {/* Display error message if any */}
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {/* Title Field */}
            <div className="mb-4">
                <label className="block text-blue-600 font-semibold mb-2">Title</label>
                <input
                type="text"
                name="title"
                placeholder="Enter task title"
                className="border border-gray-300 p-2 w-full rounded-lg"
                value={formData.title}
                onChange={handleChange}
                required
                />
            </div>
            {/* Description Field */}
            <div className="mb-4">
                <label className="block text-blue-600 font-semibold mb-2">Description</label>
                <textarea
                name="description"
                placeholder="Enter task description"
                className="border border-gray-300 p-2 w-full rounded-lg"
                value={formData.description}
                onChange={handleChange}
                required
                />
            </div>
            {/* Due Date Field */}
            <div className="mb-4">
                <label className="block text-blue-600 font-semibold mb-2">Due Date</label>
                <input
                type="date"
                name="dueDate"
                className="border border-gray-300 p-2 w-full rounded-lg"
                value={formData.dueDate}
                onChange={handleChange}
                />
            </div>
            {/* Priority Field */}
            <div className="mb-4">
                <label className="block text-blue-600 font-semibold mb-2">Priority</label>
                <input
                type="number"
                name="priority"
                className="border border-gray-300 p-2 w-full rounded-lg"
                value={formData.priority}
                onChange={handleChange}
                min="1"
                max="5"
                required
                />
            </div>
            {/* Submit Button */}
            <button type="submit" className="bg-blue-600 text-white p-3 w-full rounded-lg hover:bg-blue-700" disabled={loading}>
                {loading ? 'Creating...' : 'Create Task'}
            </button>
            </form>
            <div className="mt-4">
            <Link to="/tasks" className="text-blue-600 hover:underline">
                Back to Task List
            </Link>
            </div>
        </div>
    );
}

export default CreateTask;