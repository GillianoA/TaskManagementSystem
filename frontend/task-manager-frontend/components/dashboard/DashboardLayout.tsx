import React from "react";
import { NavLink } from "react-router-dom";
import { Activity, Gauge, ListTodo, Users } from 'lucide-react';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return(
        <div className="flex min-h-screen ">
            <aside className="w-74 bg-blue-800 text-white flex flex-col p-6">
                {/* Sidebar content */}
                <h1 className="text-2xl font-bold text-white mb-4">TaskFlow</h1>
                <nav className="flex-1">
                    <ul>
                        <li className="mb-4">
                            <NavLink to="/dashboard" className={({ isActive }) => 
                                `block px-4 py-3 hover:bg-blue-900 rounded-lg ${isActive ? 'bg-blue-900' : ''}`}>
                                    <Gauge className="h-6 w-6 inline-block mr-4" />
                                    Dashboard
                            </NavLink>
                        </li>
                        <li className="mb-4">
                            <NavLink to="/tasks" className={({ isActive }) => 
                                `block px-4 py-3 hover:bg-blue-900 rounded-lg ${isActive ? 'bg-blue-900' : ''}`}>
                                    <ListTodo className="h-6 w-6 inline-block mr-4" />
                                    My Tasks
                            </NavLink>
                        </li>
                        <li className="mb-4">
                            <NavLink to="/tasks" className={({ isActive }) => 
                                `block px-4 py-3 hover:bg-blue-900 rounded-lg ${isActive ? 'bg-blue-900' : ''}`}>
                                    <Users className="h-6 w-6 inline-block mr-4" />
                                    Manage Users
                            </NavLink>
                        </li>
                        <li className="mb-4">
                            <NavLink to="/tasks" className={({ isActive }) => 
                                `block px-4 py-3 hover:bg-blue-900 rounded-lg ${isActive ? 'bg-blue-900' : ''}`}>
                                    <Activity className="h-6 w-6 inline-block mr-4" />
                                    Activity Logs
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;