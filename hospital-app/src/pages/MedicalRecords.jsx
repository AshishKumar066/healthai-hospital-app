import { Plus, FileText, Download } from "lucide-react";

import PageHeader from "../components/PageHeader";
import StatusBadge from "../components/StatusBadge";
import { medicalRecords } from "../data/mockData";

function MedicalRecords() {
    return (
        <div>
            <PageHeader
                title="Medical Records"
                subtitle="Access and manage patient medical records."
                action={
                    <button className="primary-btn">
                        <Plus size={18} />
                        Upload Record
                    </button>
                }
            />

            <section className="panel">
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Record ID</th>
                                <th>Patient</th>
                                <th>Record Type</th>
                                <th>Doctor</th>
                                <th>Date</th>
                                <th>Result</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {medicalRecords.map((record) => (
                                <tr key={record.id}>
                                    <td>
                                        <div className="icon-title">
                                            <div className="mini-icon">
                                                <FileText size={17} />
                                            </div>
                                            <strong>{record.id}</strong>
                                        </div>
                                    </td>

                                    <td>{record.patient}</td>
                                    <td>{record.type}</td>
                                    <td>{record.doctor}</td>
                                    <td>{record.date}</td>

                                    <td>
                                        <StatusBadge status={record.result} />
                                    </td>

                                    <td>
                                        <button className="outline-btn">
                                            <Download size={15} />
                                            View
                                        </button>
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

export default MedicalRecords;