import { Search, Bell, ChevronDown } from "lucide-react";

function Navbar() {
  return (
    <header className="top-navbar">
      <div className="search-box">
        <Search size={19} />
        <input
          type="text"
          placeholder="Search patients, doctors, appointments..."
        />
      </div>

      <div className="navbar-right">
        <button className="notification-btn">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

        <div className="profile">
          <div className="profile-avatar">AK</div>

          <div className="profile-info">
            <strong>Admin User</strong>
            <span>Administrator</span>
          </div>

          <ChevronDown size={17} />
        </div>
      </div>
    </header>
  );
}

export default Navbar;