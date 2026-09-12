import { Phone, Siren, Ambulance, HeartPulse } from "lucide-react";

import PageHeader from "../components/PageHeader";

function Emergency() {
  return (
    <div>
      <PageHeader
        title="Emergency Center"
        subtitle="Emergency services and critical patient management."
      />

      <div className="emergency-banner">
        <div className="emergency-banner-icon">
          <Siren size={28} />
        </div>

        <div>
          <h2>Emergency Services Active</h2>
          <p>Emergency department is available 24/7.</p>
        </div>

        <button className="emergency-btn">
          <Phone size={18} />
          Emergency: 112
        </button>
      </div>

      <div className="emergency-grid">
        <div className="emergency-card">
          <div className="emergency-card-icon">
            <Ambulance size={25} />
          </div>

          <h3>Ambulance Service</h3>
          <p>8 ambulances are currently available.</p>

          <button className="outline-btn">Manage Ambulances</button>
        </div>

        <div className="emergency-card">
          <div className="emergency-card-icon">
            <HeartPulse size={25} />
          </div>

          <h3>ICU Availability</h3>
          <p>12 ICU beds are currently available.</p>

          <button className="outline-btn">View ICU</button>
        </div>

        <div className="emergency-card">
          <div className="emergency-card-icon">
            <Siren size={25} />
          </div>

          <h3>Critical Patients</h3>
          <p>5 patients currently require critical care.</p>

          <button className="outline-btn">View Patients</button>
        </div>
      </div>
    </div>
  );
}

export default Emergency;