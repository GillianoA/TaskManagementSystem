import LandingPage from '../components/LandingPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
