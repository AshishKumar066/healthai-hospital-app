import { Plus, CalendarDays } from "lucide-react";

import PageHeader from "../components/PageHeader";
import StatusBadge from "../components/StatusBadge";
import { appointments } from "../data/mockData";

function Appointments() {
    return (
        <div>
            <PageHeader
                title="Appointments"
                subtitle="Schedule and manage patient appointments."
                action={
                    <button className="primary-btn">
                        <Plus size={18} />
                        New Appointment
                    </button>
                }
            />

            <div className="appointment-summary">
                <div>
                    <CalendarDays size={20} />
                    <span>Today's Appointments</span>
                    <strong>18</strong>
                </div>

                <div>
                    <CalendarDays size={20} />
                    <span>Pending</span>
                    <strong>6</strong>
                </div>

                <div>
                    <CalendarDays size={20} />
                    <span>Completed</span>
                    <strong>42</strong>
                </div>
            </div>

            <section className="panel">
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Appointment ID</th>
                                <th>Patient</th>
                                <th>Doctor</th>
                                <th>Department</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {appointments.map((appointment) => (
                                <tr key={appointment.id}>
                                    <td>
                                        <strong>{appointment.id}</strong>
                                    </td>

                                    <td>{appointment.patient}</td>
                                    <td>{appointment.doctor}</td>
                                    <td>{appointment.department}</td>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.time}</td>

                                    <td>
                                        <StatusBadge status={appointment.status} />
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

export default Appointments;