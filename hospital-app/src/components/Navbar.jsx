import { useNavigate } from "react-router-dom";
import {
  Menu,
  Search,
  Bell,
  ChevronDown,
  HeartPulse,
  Siren,
} from "lucide-react";

function Navbar({ onMenuClick }) {
  const navigate = useNavigate();

  const handleEmergency = () => {
    navigate("/emergency");
  };

  return (
    <header className="top-navbar">
      {/* LEFT */}
      <div className="navbar-left">
        <button
          className="menu-toggle"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <Menu size={23} />
        </button>

        <div
          className="navbar-brand"
          onClick={() => navigate("/")}
        >
          <div className="navbar-brand-icon">
            <HeartPulse size={19} />
          </div>

          <div className="navbar-brand-text">
            <strong>HealthAI</strong>
            <span>Smart Healthcare</span>
          </div>
        </div>
      </div>

      {/* SEARCH */}
      <div className="navbar-search">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search patients, doctors, appointments..."
        />
      </div>

      {/* RIGHT */}
      <div className="navbar-actions">

        <button
          className="emergency-navbar-btn"
          onClick={handleEmergency}
        >
          <Siren size={18} />
          <span>Emergency</span>
        </button>

        <button className="navbar-icon-btn">
          <Bell size={20} />

          <span className="notification-dot"></span>
        </button>

        <div className="navbar-profile">
          <div className="profile-avatar">
            AU
          </div>

          {/* <div className="profile-info">
            <strong>Admin User</strong>
            <span>Administrator</span>
          </div> */}

          {/* <ChevronDown size={16} /> */}
        </div>
      </div>
    </header>
  );
}

export default Navbar;