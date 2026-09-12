import { Plus, Pill } from "lucide-react";

import PageHeader from "../components/PageHeader";
import StatusBadge from "../components/StatusBadge";
import { prescriptions } from "../data/mockData";

function Prescriptions() {
    return (
        <div>
            <PageHeader
                title="Prescriptions"
                subtitle="Manage patient medicines and prescriptions."
                action={
                    <button className="primary-btn">
                        <Plus size={18} />
                        New Prescription
                    </button>
                }
            />

            <section className="panel">
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Prescription</th>
                                <th>Patient</th>
                                <th>Doctor</th>
                                <th>Medicine</th>
                                <th>Dosage</th>
                                <th>Duration</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {prescriptions.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <div className="icon-title">
                                            <div className="mini-icon">
                                                <Pill size={17} />
                                            </div>
                                            <strong>{item.id}</strong>
                                        </div>
                                    </td>

                                    <td>{item.patient}</td>
                                    <td>{item.doctor}</td>
                                    <td>{item.medicine}</td>
                                    <td>{item.dosage}</td>
                                    <td>{item.duration}</td>

                                    <td>
                                        <StatusBadge status={item.status} />
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

export default Prescriptions;