import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import { ListTodo } from 'lucide-react';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:5145/api/auth/login', {
                email,
                password
            });
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard');
        } catch(Error: any){
            setError(Error.response?.data || 'Invalid credentials. Please try again.');
        }
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <div className="flex justify-center">
                    <ListTodo className="h-12 w-12 text-blue-600 stroke-2" />
                </div>
                <h2 className="text-2xl font-bold text-black-500 text-center">TaskFlow</h2>
                <h3 className="text-sm mb-6 text-gray-500 text-center">
                    Welcome back! Please login to continue.
                </h3>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700 mb-1">
                    Email
                </label>
                <input
                    type="email"
                    placeholder="your@email.com"
                    className="border border-gray-300 p-2 mb-4 w-full rounded-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password" className="block text-left text-sm font-medium text-gray-700 mb-1">
                    Password
                </label>
                <input
                    type="password"
                    placeholder="••••••••"
                    className="border border-gray-300 p-2 mb-6 w-full rounded-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="bg-blue-600 text-white p-3 w-full rounded-lg hover:bg-blue-700">
                    Sign In
                </button>
                <p className="mt-4 text-center">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-blue-600 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Login;