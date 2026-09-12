import { Plus, Search, MoreVertical } from "lucide-react";

import PageHeader from "../components/PageHeader";
import StatusBadge from "../components/StatusBadge";
import { doctors } from "../data/mockData";

function Doctors() {
  return (
    <div>
      <PageHeader
        title="Doctors"
        subtitle="Manage doctors, specializations and availability."
        action={
          <button className="primary-btn">
            <Plus size={18} />
            Add Doctor
          </button>
        }
      />

      <section className="panel">
        <div className="toolbar">
          <div className="search-input">
            <Search size={18} />
            <input placeholder="Search doctor..." />
          </div>

          <select className="filter-select">
            <option>All Departments</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Orthopedics</option>
            <option>Dermatology</option>
          </select>
        </div>

        <div className="doctor-grid">
          {doctors.map((doctor) => (
            <div className="doctor-card" key={doctor.id}>
              <div className="doctor-card-top">
                <div className="doctor-avatar">
                  {doctor.name
                    .replace("Dr. ", "")
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>

                <button className="more-btn">
                  <MoreVertical size={18} />
                </button>
              </div>

              <h3>{doctor.name}</h3>
              <p>{doctor.specialization}</p>

              <div className="doctor-info">
                <span>Department</span>
                <strong>{doctor.department}</strong>
              </div>

              <div className="doctor-info">
                <span>Experience</span>
                <strong>{doctor.experience}</strong>
              </div>

              <div className="doctor-footer">
                <StatusBadge status={doctor.status} />

                <button className="outline-btn">View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Doctors;