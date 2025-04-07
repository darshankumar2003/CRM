import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Leads from './pages/Leads';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import axios from "axios"; // ⬅️ This line is missing
import Register from './pages/Register'; // ⬅️ This line is missing

// Add this once in App.jsx or main.jsx
axios.defaults.baseURL = 'https://crm-backend-s619.onrender.com';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('crmToken')}`;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
