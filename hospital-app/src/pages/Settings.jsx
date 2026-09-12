import { Save, User, Bell, Shield, Database } from "lucide-react";

import PageHeader from "../components/PageHeader";

function Settings() {
    return (
        <div>
            <PageHeader
                title="Settings"
                subtitle="Manage your hospital system preferences."
            />

            <div className="settings-grid">
                <section className="panel settings-menu">
                    <div className="settings-menu-item active">
                        <User size={19} />
                        <span>Profile Settings</span>
                    </div>

                    <div className="settings-menu-item">
                        <Bell size={19} />
                        <span>Notifications</span>
                    </div>

                    <div className="settings-menu-item">
                        <Shield size={19} />
                        <span>Security</span>
                    </div>

                    <div className="settings-menu-item">
                        <Database size={19} />
                        <span>System & Database</span>
                    </div>
                </section>

                <section className="panel settings-form">
                    <h3>Profile Settings</h3>
                    <p className="form-description">
                        Update your administrator profile information.
                    </p>

                    <div className="form-grid">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" defaultValue="Admin User" />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" defaultValue="admin@healthai.com" />
                        </div>

                        <div className="form-group">
                            <label>Phone</label>
                            <input type="text" defaultValue="+91 98765 43210" />
                        </div>

                        <div className="form-group">
                            <label>Role</label>
                            <input type="text" defaultValue="Administrator" disabled />
                        </div>
                    </div>

                    <button className="primary-btn">
                        <Save size={17} />
                        Save Changes
                    </button>
                </section>
            </div>
        </div>
    );
}

export default Settings;