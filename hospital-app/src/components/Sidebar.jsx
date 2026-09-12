import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Stethoscope,
  CalendarDays,
  Building2,
  Pill,
  FileText,
  Receipt,
  Siren,
  Settings,
  Activity,
} from "lucide-react";

function Sidebar() {
  const menuItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Patients",
      path: "/patients",
      icon: Users,
    },
    {
      title: "Doctors",
      path: "/doctors",
      icon: Stethoscope,
    },
    {
      title: "Appointments",
      path: "/appointments",
      icon: CalendarDays,
    },
    {
      title: "Departments",
      path: "/departments",
      icon: Building2,
    },
    {
      title: "Prescriptions",
      path: "/prescriptions",
      icon: Pill,
    },
    {
      title: "Medical Records",
      path: "/medical-records",
      icon: FileText,
    },
    {
      title: "Billing",
      path: "/billing",
      icon: Receipt,
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">
          <Activity size={23} />
        </div>

        <div>
          <h2>HealthAI</h2>
          <span>Hospital System</span>
        </div>
      </div>

      <div className="menu-title">MAIN MENU</div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <Icon size={19} />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="menu-title">SYSTEM</div>

      <nav className="sidebar-menu">
        <NavLink
          to="/emergency"
          className={({ isActive }) =>
            isActive ? "menu-item emergency-link active" : "menu-item emergency-link"
          }
        >
          <Siren size={19} />
          <span>Emergency</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <Settings size={19} />
          <span>Settings</span>
        </NavLink>
      </nav>

      <div className="sidebar-bottom">
        <div className="support-box">
          <Activity size={20} />
          <div>
            <strong>System Status</strong>
            <small>All systems operational</small>
          </div>
          <span className="online-dot"></span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;