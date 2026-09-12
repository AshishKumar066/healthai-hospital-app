import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Stethoscope,
  CalendarDays,
  Building2,
  Pill,
  FileText,
  CreditCard,
  Settings,
  X,
  HeartPulse,
} from "lucide-react";

const mainMenu = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Patients",
    path: "/patients",
    icon: Users,
  },
  {
    name: "Doctors",
    path: "/doctors",
    icon: Stethoscope,
  },
  {
    name: "Appointments",
    path: "/appointments",
    icon: CalendarDays,
  },
  {
    name: "Departments",
    path: "/departments",
    icon: Building2,
  },
  {
    name: "Prescriptions",
    path: "/prescriptions",
    icon: Pill,
  },
  {
    name: "Medical Records",
    path: "/medical-records",
    icon: FileText,
  },
  {
    name: "Billing",
    path: "/billing",
    icon: CreditCard,
  },
];

const systemMenu = [
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

function Sidebar({ isOpen, closeSidebar }) {
  return (
    <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <div className="brand-icon">
            <HeartPulse size={20} />
          </div>

          <div>
            <strong>HealthAI</strong>
            <span>Healthcare Platform</span>
          </div>
        </div>

        <button
          className="sidebar-close"
          onClick={closeSidebar}
        >
          <X size={20} />
        </button>
      </div>

      <div className="sidebar-content">
        <span className="menu-label">MAIN MENU</span>

        <nav>
          {mainMenu.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        <span className="menu-label system-label">
          SYSTEM
        </span>

        <nav>
          {systemMenu.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="sidebar-status">
          <div className="status-live-dot"></div>

          <div>
            <strong>System Online</strong>
            <span>All services operational</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;