
import { useAuth } from "../context/AuthContext";
import "./Profile.css";

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      <p><strong>Username:</strong> {user?.username}</p>
      <p><strong>Email:</strong> {user?.email}</p>
      <p><strong>Role:</strong> {user?.role}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
