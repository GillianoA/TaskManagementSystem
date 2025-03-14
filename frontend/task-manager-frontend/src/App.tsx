import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from '../components/landing/LandingPage';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import Dashboard from '../components/dashboard/Dashboard';
import TaskList from '../components/tasks/TaskList';
import TaskDetail from '../components/tasks/TaskDetail';
import EditTask from '../components/tasks/EditTask';
import CreateTask from '../components/tasks/CreateTask';
import ComingSoon from '../components/comingsoon/ComingSoon';
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
          <Route path="/tasks/:id" element={<TaskDetail />} />
          <Route path="/tasks/:id/edit" element={<EditTask />} />
          <Route path="/tasks/create" element={<CreateTask />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
