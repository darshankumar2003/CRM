import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="heading">Welcome, {user?.username}</h1>
      <p>Your role: {user?.role}</p>

      <div className="button-container">
        <Link to="/leads">
          <button id="btn">View Leads</button>
        </Link>
        <Link to="/profile">
          <button id="btn1">Profile</button>
        </Link>
        
      </div>
    </div>
  );
};

export default Dashboard;
