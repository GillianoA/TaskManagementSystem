import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import { ListTodo } from 'lucide-react';

const Register: React.FC = () => {
    //state hooks
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try{
            await axios.post('http://localhost:5145/api/auth/register', {
                username,
                email,
                password
            });
            navigate('/login');
        } catch (error: any){
            setError(error.response?.data || 'Registration failed. Please try again.');
        }
    };

    return( 
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            {/* Form container styled as a white card with padding and shadow */}
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                {/* Blue header for the form */}
                <div className="flex justify-center"><ListTodo className="h-12 w-12 text-blue-600 stroke-2" /></div>
                <h2 className="text-2xl font-bold text-black-500">Create your account</h2>
                <h3 className="text-sm mb-6 text-gray-500 text-wrap">Get started with your task management journey.</h3>
                {/* Conditional rendering of error message */}
                {error && <div className="text-red-500 mb-4">{error}</div>}
                {/* Input for Username */}
                <label htmlFor="username" className="block text-left text-sm font-medium text-gray-700 mb-1">
                    Username
                </label>
                <input
                    type="text"
                    placeholder="John Doe"
                    className="border border-gray-300 p-2 mb-4 w-full rounded-lg"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                {/* Input for Email */}
                <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                    type="email"
                    placeholder="you@example.com"
                    className="border border-gray-300 p-2 mb-4 w-full rounded-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                {/* Input for Password */}
                <label htmlFor="password" className="block text-left text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                    type="password"
                    placeholder="••••••••"
                    className="border border-gray-300 p-2 mb-6 w-full rounded-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {/* Submit button styled with blue background */}
                <button type="submit" className="bg-blue-600 text-white p-3 w-full rounded-lg hover:bg-blue-700">
                    Create Account
                </button>
                {/* Link to navigate to the Login screen */}
                <p className="mt-4 text-center">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 hover:underline">
                    Sign In
                </Link>
                </p>
            </form>
            </div>
    );
}

export default Register;