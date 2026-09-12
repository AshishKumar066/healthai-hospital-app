import {
  Users,
  Stethoscope,
  CalendarCheck,
  BedDouble,
  Plus,
  ArrowUpRight,
} from "lucide-react";

import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";
import { appointments } from "../data/mockData";

function Dashboard() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back. Here's what's happening in your hospital today."
        action={
          <button className="primary-btn">
            <Plus size={18} />
            New Appointment
          </button>
        }
      />

      <div className="stats-grid">
        <StatCard
          title="Total Patients"
          value="1,248"
          description="+12% from last month"
          icon={<Users size={22} />}
          type="green"
        />

        <StatCard
          title="Total Doctors"
          value="86"
          description="+4 new this month"
          icon={<Stethoscope size={22} />}
          type="blue"
        />

        <StatCard
          title="Appointments"
          value="324"
          description="18 scheduled today"
          icon={<CalendarCheck size={22} />}
          type="purple"
        />

        <StatCard
          title="Available Beds"
          value="142"
          description="68% occupancy rate"
          icon={<BedDouble size={22} />}
          type="orange"
        />
      </div>

      <div className="dashboard-grid">
        <section className="panel appointment-panel">
          <div className="panel-header">
            <div>
              <h3>Today's Appointments</h3>
              <p>Upcoming patient appointments</p>
            </div>

            <a href="/appointments">
              View All <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Doctor</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {appointments.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="table-person">
                        <div className="small-avatar">
                          {item.patient
                            .split(" ")
                            .map((word) => word[0])
                            .join("")}
                        </div>

                        <div>
                          <strong>{item.patient}</strong>
                          <span>{item.id}</span>
                        </div>
                      </div>
                    </td>

                    <td>{item.doctor}</td>
                    <td>{item.time}</td>

                    <td>
                      <StatusBadge status={item.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="panel">
          <div className="panel-header">
            <div>
              <h3>Hospital Overview</h3>
              <p>Current capacity</p>
            </div>
          </div>

          <div className="capacity-item">
            <div>
              <span>General Ward</span>
              <strong>72%</strong>
            </div>
            <div className="progress">
              <span style={{ width: "72%" }}></span>
            </div>
          </div>

          <div className="capacity-item">
            <div>
              <span>ICU</span>
              <strong>84%</strong>
            </div>
            <div className="progress">
              <span style={{ width: "84%" }}></span>
            </div>
          </div>

          <div className="capacity-item">
            <div>
              <span>Emergency</span>
              <strong>58%</strong>
            </div>
            <div className="progress">
              <span style={{ width: "58%" }}></span>
            </div>
          </div>

          <div className="dashboard-alert">
            <strong>System Status</strong>
            <span>All hospital services are operating normally.</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;