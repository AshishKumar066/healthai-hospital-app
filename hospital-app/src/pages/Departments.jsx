import { Plus, Building2, Users, BedDouble } from "lucide-react";

import PageHeader from "../components/PageHeader";
import StatusBadge from "../components/StatusBadge";
import { departments } from "../data/mockData";

function Departments() {
    return (
        <div>
            <PageHeader
                title="Departments"
                subtitle="Hospital departments and their current capacity."
                action={
                    <button className="primary-btn">
                        <Plus size={18} />
                        Add Department
                    </button>
                }
            />

            <div className="department-grid">
                {departments.map((department) => (
                    <div className="department-card" key={department.id}>
                        <div className="department-icon">
                            <Building2 size={23} />
                        </div>

                        <div className="department-heading">
                            <div>
                                <h3>{department.name}</h3>
                                <span>{department.id}</span>
                            </div>

                            <StatusBadge status={department.status} />
                        </div>

                        <div className="department-stats">
                            <div>
                                <Users size={18} />
                                <span>Doctors</span>
                                <strong>{department.doctors}</strong>
                            </div>

                            <div>
                                <Users size={18} />
                                <span>Patients</span>
                                <strong>{department.patients}</strong>
                            </div>

                            <div>
                                <BedDouble size={18} />
                                <span>Beds</span>
                                <strong>{department.beds}</strong>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Departments;