import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import Dashboard from '../components/dashboard/Dashboard';
import TaskList from '../components/tasks/TaskList';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<TaskList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
