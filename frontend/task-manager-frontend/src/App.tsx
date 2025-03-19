import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from '../components/landing/LandingPage';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import Dashboard from '../components/dashboard/Dashboard';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import TaskList from '../components/tasks/TaskList';
import TaskDetail from '../components/tasks/TaskDetail';
import EditTask from '../components/tasks/EditTask';
import CreateTask from '../components/tasks/CreateTask';
import ComingSoon from '../components/comingsoon/ComingSoon';
import ProtectedRoute from '../components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          /* Public Routes */
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          /* Protected Routes */
          <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout><Dashboard /></DashboardLayout></ProtectedRoute>} />
          <Route path="/tasks" element={<ProtectedRoute><TaskList /></ProtectedRoute>} />
          <Route path="/tasks/:id" element={<ProtectedRoute><TaskDetail /></ProtectedRoute>} />
          <Route path="/tasks/:id/edit" element={<ProtectedRoute><EditTask /></ProtectedRoute>} />
          <Route path="/tasks/create" element={<ProtectedRoute><CreateTask /></ProtectedRoute>} />
          <Route path="/comingsoon" element={<ComingSoon />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
