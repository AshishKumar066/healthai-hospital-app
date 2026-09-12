import { useState } from "react";
import { Plus, Search, Eye, Edit, Trash2 } from "lucide-react";

import PageHeader from "../components/PageHeader";
import StatusBadge from "../components/StatusBadge";
import { patients as initialPatients } from "../data/mockData";

function Patients() {
    const [patients, setPatients] = useState(initialPatients);
    const [search, setSearch] = useState("");

    const filteredPatients = patients.filter(
        (patient) =>
            patient.name.toLowerCase().includes(search.toLowerCase()) ||
            patient.id.toLowerCase().includes(search.toLowerCase())
    );

    const deletePatient = (id) => {
        setPatients(patients.filter((patient) => patient.id !== id));
    };

    return (
        <div>
            <PageHeader
                title="Patients"
                subtitle="Manage patient information and treatment details."
                action={
                    <button className="primary-btn">
                        <Plus size={18} />
                        Add Patient
                    </button>
                }
            />

            <section className="panel">
                <div className="toolbar">
                    <div className="search-input">
                        <Search size={18} />
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search patient..."
                        />
                    </div>

                    <select className="filter-select">
                        <option>All Patients</option>
                        <option>Active</option>
                        <option>Critical</option>
                        <option>Under Treatment</option>
                    </select>
                </div>

                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Patient</th>
                                <th>Age / Gender</th>
                                <th>Phone</th>
                                <th>Blood Group</th>
                                <th>Condition</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredPatients.map((patient) => (
                                <tr key={patient.id}>
                                    <td>
                                        <div className="table-person">
                                            <div className="small-avatar">
                                                {patient.name
                                                    .split(" ")
                                                    .map((word) => word[0])
                                                    .join("")}
                                            </div>

                                            <div>
                                                <strong>{patient.name}</strong>
                                                <span>{patient.id}</span>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        {patient.age} / {patient.gender}
                                    </td>

                                    <td>{patient.phone}</td>
                                    <td>
                                        <strong>{patient.bloodGroup}</strong>
                                    </td>
                                    <td>{patient.condition}</td>

                                    <td>
                                        <StatusBadge status={patient.status} />
                                    </td>

                                    <td>
                                        <div className="action-buttons">
                                            <button title="View">
                                                <Eye size={17} />
                                            </button>

                                            <button title="Edit">
                                                <Edit size={17} />
                                            </button>

                                            <button
                                                className="danger-icon"
                                                title="Delete"
                                                onClick={() => deletePatient(patient.id)}
                                            >
                                                <Trash2 size={17} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}

export default Patients;