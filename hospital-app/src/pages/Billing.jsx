import { Plus, Receipt, IndianRupee } from "lucide-react";

import PageHeader from "../components/PageHeader";
import StatusBadge from "../components/StatusBadge";
import { bills } from "../data/mockData";

function Billing() {
    return (
        <div>
            <PageHeader
                title="Billing"
                subtitle="Manage invoices, payments and hospital billing."
                action={
                    <button className="primary-btn">
                        <Plus size={18} />
                        Create Invoice
                    </button>
                }
            />

            <div className="stats-grid billing-stats">
                <div className="stat-card">
                    <div className="stat-icon green">
                        <IndianRupee size={22} />
                    </div>
                    <div className="stat-content">
                        <span>Total Revenue</span>
                        <h2>₹8.42L</h2>
                        <small>This month</small>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon orange">
                        <Receipt size={22} />
                    </div>
                    <div className="stat-content">
                        <span>Pending Bills</span>
                        <h2>₹1.28L</h2>
                        <small>32 invoices</small>
                    </div>
                </div>
            </div>

            <section className="panel">
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Invoice</th>
                                <th>Patient</th>
                                <th>Service</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {bills.map((bill) => (
                                <tr key={bill.id}>
                                    <td>
                                        <strong>{bill.id}</strong>
                                    </td>

                                    <td>{bill.patient}</td>
                                    <td>{bill.service}</td>

                                    <td>
                                        <strong>{bill.amount}</strong>
                                    </td>

                                    <td>{bill.date}</td>

                                    <td>
                                        <StatusBadge status={bill.status} />
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

export default Billing;