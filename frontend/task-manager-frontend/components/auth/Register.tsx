import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import { ListTodo, CircleAlert, Check} from 'lucide-react';

const Register: React.FC = () => {
    //state hooks
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailAvailable, setEmailAvailable] = useState<boolean | null>(null);
    const [passwordMatch, setPasswordMatch] = useState<boolean | null>(null);
    const [passwordValid, setPasswordValid] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const EmailOnBlur = async () => {
        try{
            const response = await axios.get(`http://localhost:5145/api/auth/check-email?email=${email}`);
            setEmailAvailable(response.data.isAvailable);
        } catch (error: any){
            setError(error.response?.data || 'Failed to check email availability.');
        }
    };

    const PasswordOnBlur = () => {
        setPasswordMatch(password === confirmPassword);
    };

    const PasswordValidBlur = () => {
        setPasswordValid(password.length >= 8);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if(password !== confirmPassword){
            setError('Passwords do not match. Please try again.');
            return;
        }

        if (password.length < 8) {
            setError('Password must be at least 8 characters.');
            return;
        }

        if (emailAvailable === false) {
            setError('Email is already taken. Please choose another.');
            return;
        }

        setLoading(true);

        try{
            await axios.post('http://localhost:5145/api/auth/register', {
                username,
                email,
                password
            });
            navigate('/login');
        } catch (error: any){
            setError(error.response?.data || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return( 
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
            {/* Form container styled as a white card with padding and shadow */}
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                {/* Blue header for the form */}
                <div className="flex justify-center"><ListTodo className="h-12 w-12 text-blue-600 stroke-2" /></div>
                <h2 className="text-2xl font-bold text-black-500 text-center">Create your account</h2>
                <h3 className="text-sm mb-6 text-gray-500 text-center">Get started with your task management journey.</h3>
                {/* Conditional rendering of error message */}
                {error && <div className="text-red-500 -mt-4 mb-6"><CircleAlert className="h-4 w-4 inline-block text-red-500 stroke-2" /> {error}</div>}
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
                    disabled={loading}
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
                    onBlur={EmailOnBlur}
                    disabled={loading}
                    required
                />
                {/* Display error message if email is available */}
                {emailAvailable === true && <div className="text-green-500 -mt-3 mb-4 text-sm"> <Check className="h-4 w-4 inline-block text-green-500 stroke-2" /> Email is available.</div>}
                {/* Display error message if email is not available */}
                {emailAvailable === false && <div className="text-red-500 -mt-3 mb-4 text-sm"> <CircleAlert className="h-4 w-4 inline-block text-red-500 stroke-2" /> Email is already taken.</div>}
                {/* Input for Password */}
                <label htmlFor="password" className="block text-left text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                    type="password"
                    placeholder="••••••••"
                    className="border border-gray-300 p-2 mb-4 w-full rounded-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={PasswordValidBlur}
                    disabled={loading}
                    required
                />
                {/* Display error message if password is less than 8 characters */}
                {passwordValid === false && <div className="text-red-500 -mt-3 mb-4 text-sm"> <CircleAlert className="h-4 w-4 inline-block text-red-500 stroke-2" /> Password must be at least 8 characters.</div>}
                {/* Input for ConfirmPassword */}
                <label htmlFor="password" className="block text-left text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <input
                    type="password"
                    placeholder="••••••••"
                    className="border border-gray-300 p-2 mb-4 w-full rounded-lg"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onBlur={PasswordOnBlur}
                    disabled={loading}
                    required
                />
                {/* Display error message if passwords do not match */}
                {passwordMatch === false && <div className="text-red-500 -mt-3 mb-4 text-sm"> <CircleAlert className="h-4 w-4 inline-block text-red-500 stroke-2" /> Passwords do not match.</div>}
                {/* Submit button styled with blue background */}
                <button type="submit" className="bg-blue-600 text-white p-3 w-full rounded-lg hover:bg-blue-700" disabled={loading}>
                    {loading ? 'Creating...' : 'Create Account'}
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