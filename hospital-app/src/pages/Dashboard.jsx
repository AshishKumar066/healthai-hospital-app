import { useEffect, useRef, useState } from "react";
import {
  MapPin,
  ChevronLeft,
  ChevronRight,
  CalendarPlus,
  Users,
  Stethoscope,
  Bed,
  Activity,
  ArrowUpRight,
} from "lucide-react";

import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";

const cityData = {
  Muzaffarnagar: {
    state: "Uttar Pradesh",
    hospitals: [
      {
        id: 1,
        name: "City Care Hospital",
        location: "Civil Lines, Muzaffarnagar",
        distance: "1.2 km",
        beds: 18,
        available: 7,
        emergency: true,
        rating: "4.7",
      },
      {
        id: 2,
        name: "Shanti Medical Centre",
        location: "Gandhi Colony, Muzaffarnagar",
        distance: "2.4 km",
        beds: 25,
        available: 11,
        emergency: true,
        rating: "4.5",
      },
      {
        id: 3,
        name: "District Hospital",
        location: "New Mandi, Muzaffarnagar",
        distance: "3.1 km",
        beds: 40,
        available: 16,
        emergency: true,
        rating: "4.3",
      },
      {
        id: 4,
        name: "LifeLine Hospital",
        location: "Bhopa Road, Muzaffarnagar",
        distance: "4.2 km",
        beds: 30,
        available: 9,
        emergency: false,
        rating: "4.4",
      },
      {
        id: 5,
        name: "Apollo Care Centre",
        location: "Roorkee Road, Muzaffarnagar",
        distance: "5.3 km",
        beds: 35,
        available: 13,
        emergency: true,
        rating: "4.6",
      },
    ],
  },

  Noida: {
    state: "Uttar Pradesh",
    hospitals: [
      {
        id: 1,
        name: "Metro Heart Institute",
        location: "Sector 12, Noida",
        distance: "1.5 km",
        beds: 45,
        available: 18,
        emergency: true,
        rating: "4.8",
      },
      {
        id: 2,
        name: "Fortis Medical Centre",
        location: "Sector 62, Noida",
        distance: "2.1 km",
        beds: 60,
        available: 21,
        emergency: true,
        rating: "4.7",
      },
      {
        id: 3,
        name: "Kailash Hospital",
        location: "Sector 27, Noida",
        distance: "3.4 km",
        beds: 55,
        available: 17,
        emergency: true,
        rating: "4.6",
      },
      {
        id: 4,
        name: "Jaypee Hospital",
        location: "Sector 128, Noida",
        distance: "5.2 km",
        beds: 80,
        available: 29,
        emergency: true,
        rating: "4.8",
      },
      {
        id: 5,
        name: "Green Life Hospital",
        location: "Sector 51, Noida",
        distance: "6.1 km",
        beds: 35,
        available: 12,
        emergency: false,
        rating: "4.4",
      },
    ],
  },

  Delhi: {
    state: "Delhi",
    hospitals: [
      {
        id: 1,
        name: "Max Healthcare",
        location: "Saket, New Delhi",
        distance: "2.0 km",
        beds: 75,
        available: 28,
        emergency: true,
        rating: "4.8",
      },
      {
        id: 2,
        name: "Apollo Hospital",
        location: "Sarita Vihar, Delhi",
        distance: "3.2 km",
        beds: 90,
        available: 31,
        emergency: true,
        rating: "4.7",
      },
      {
        id: 3,
        name: "Fortis Hospital",
        location: "Shalimar Bagh, Delhi",
        distance: "4.1 km",
        beds: 70,
        available: 23,
        emergency: true,
        rating: "4.6",
      },
      {
        id: 4,
        name: "AIIMS Delhi",
        location: "Ansari Nagar, Delhi",
        distance: "5.0 km",
        beds: 100,
        available: 34,
        emergency: true,
        rating: "4.9",
      },
      {
        id: 5,
        name: "Safdarjung Hospital",
        location: "Ring Road, Delhi",
        distance: "6.4 km",
        beds: 85,
        available: 26,
        emergency: true,
        rating: "4.5",
      },
    ],
  },

  Ghaziabad: {
    state: "Uttar Pradesh",
    hospitals: [
      {
        id: 1,
        name: "Yashoda Hospital",
        location: "Kaushambi, Ghaziabad",
        distance: "1.4 km",
        beds: 60,
        available: 20,
        emergency: true,
        rating: "4.7",
      },
      {
        id: 2,
        name: "Columbia Asia",
        location: "Indirapuram, Ghaziabad",
        distance: "2.3 km",
        beds: 50,
        available: 15,
        emergency: true,
        rating: "4.6",
      },
      {
        id: 3,
        name: "Santosh Hospital",
        location: "Pratap Vihar, Ghaziabad",
        distance: "3.2 km",
        beds: 40,
        available: 12,
        emergency: true,
        rating: "4.5",
      },
      {
        id: 4,
        name: "Shivalik Hospital",
        location: "Vaishali, Ghaziabad",
        distance: "4.0 km",
        beds: 35,
        available: 14,
        emergency: false,
        rating: "4.4",
      },
      {
        id: 5,
        name: "Sanjeevani Hospital",
        location: "Raj Nagar, Ghaziabad",
        distance: "5.5 km",
        beds: 45,
        available: 18,
        emergency: true,
        rating: "4.3",
      },
    ],
  },

  Meerut: {
    state: "Uttar Pradesh",
    hospitals: [
      {
        id: 1,
        name: "Anand Hospital",
        location: "Garh Road, Meerut",
        distance: "1.7 km",
        beds: 50,
        available: 19,
        emergency: true,
        rating: "4.6",
      },
      {
        id: 2,
        name: "KMC Hospital",
        location: "Lala Ka Bazar, Meerut",
        distance: "2.5 km",
        beds: 65,
        available: 22,
        emergency: true,
        rating: "4.5",
      },
      {
        id: 3,
        name: "Lok Priya Hospital",
        location: "Delhi Road, Meerut",
        distance: "3.4 km",
        beds: 55,
        available: 16,
        emergency: true,
        rating: "4.4",
      },
      {
        id: 4,
        name: "NMC Hospital",
        location: "Shastri Nagar, Meerut",
        distance: "4.1 km",
        beds: 40,
        available: 13,
        emergency: false,
        rating: "4.3",
      },
      {
        id: 5,
        name: "Subharti Hospital",
        location: "NH-58, Meerut",
        distance: "5.8 km",
        beds: 75,
        available: 27,
        emergency: true,
        rating: "4.7",
      },
    ],
  },

  Lucknow: {
    state: "Uttar Pradesh",
    hospitals: [
      {
        id: 1,
        name: "Medanta Hospital",
        location: "Sushant Golf City, Lucknow",
        distance: "2.0 km",
        beds: 85,
        available: 31,
        emergency: true,
        rating: "4.8",
      },
      {
        id: 2,
        name: "Apollo Medics",
        location: "LDA Colony, Lucknow",
        distance: "3.0 km",
        beds: 70,
        available: 24,
        emergency: true,
        rating: "4.7",
      },
      {
        id: 3,
        name: "Ram Manohar Lohia Hospital",
        location: "Vibhuti Khand, Lucknow",
        distance: "4.2 km",
        beds: 90,
        available: 33,
        emergency: true,
        rating: "4.6",
      },
      {
        id: 4,
        name: "KGMU Hospital",
        location: "Chowk, Lucknow",
        distance: "5.1 km",
        beds: 100,
        available: 38,
        emergency: true,
        rating: "4.8",
      },
      {
        id: 5,
        name: "Charak Hospital",
        location: "Mawaiya, Lucknow",
        distance: "6.0 km",
        beds: 45,
        available: 17,
        emergency: false,
        rating: "4.4",
      },
    ],
  },

  Jaipur: {
    state: "Rajasthan",
    hospitals: [
      {
        id: 1,
        name: "Fortis Hospital Jaipur",
        location: "Malviya Nagar, Jaipur",
        distance: "1.8 km",
        beds: 70,
        available: 25,
        emergency: true,
        rating: "4.7",
      },
      {
        id: 2,
        name: "Narayana Hospital",
        location: "Pratap Nagar, Jaipur",
        distance: "2.6 km",
        beds: 80,
        available: 29,
        emergency: true,
        rating: "4.8",
      },
      {
        id: 3,
        name: "SMS Hospital",
        location: "JLN Marg, Jaipur",
        distance: "3.5 km",
        beds: 100,
        available: 35,
        emergency: true,
        rating: "4.6",
      },
      {
        id: 4,
        name: "Eternal Hospital",
        location: "Jagatpura, Jaipur",
        distance: "4.3 km",
        beds: 50,
        available: 18,
        emergency: true,
        rating: "4.5",
      },
      {
        id: 5,
        name: "Manipal Hospital",
        location: "Sector 5, Jaipur",
        distance: "5.7 km",
        beds: 65,
        available: 21,
        emergency: false,
        rating: "4.6",
      },
    ],
  },

  Chandigarh: {
    state: "Chandigarh",
    hospitals: [
      {
        id: 1,
        name: "Fortis Hospital",
        location: "Mohali Road, Chandigarh",
        distance: "1.6 km",
        beds: 70,
        available: 24,
        emergency: true,
        rating: "4.8",
      },
      {
        id: 2,
        name: "Max Hospital",
        location: "Phase 6, Mohali",
        distance: "2.4 km",
        beds: 75,
        available: 28,
        emergency: true,
        rating: "4.7",
      },
      {
        id: 3,
        name: "PGIMER",
        location: "Sector 12, Chandigarh",
        distance: "3.2 km",
        beds: 100,
        available: 40,
        emergency: true,
        rating: "4.9",
      },
      {
        id: 4,
        name: "Alchemist Hospital",
        location: "Sector 21, Panchkula",
        distance: "4.1 km",
        beds: 45,
        available: 16,
        emergency: false,
        rating: "4.4",
      },
      {
        id: 5,
        name: "Ivy Hospital",
        location: "Sector 71, Mohali",
        distance: "5.2 km",
        beds: 55,
        available: 20,
        emergency: true,
        rating: "4.5",
      },
    ],
  },

  Mumbai: {
    state: "Maharashtra",
    hospitals: [
      {
        id: 1,
        name: "Kokilaben Hospital",
        location: "Andheri West, Mumbai",
        distance: "1.5 km",
        beds: 90,
        available: 32,
        emergency: true,
        rating: "4.8",
      },
      {
        id: 2,
        name: "Lilavati Hospital",
        location: "Bandra West, Mumbai",
        distance: "2.3 km",
        beds: 80,
        available: 27,
        emergency: true,
        rating: "4.7",
      },
      {
        id: 3,
        name: "Nanavati Max",
        location: "Vile Parle, Mumbai",
        distance: "3.4 km",
        beds: 75,
        available: 25,
        emergency: true,
        rating: "4.6",
      },
      {
        id: 4,
        name: "Hinduja Hospital",
        location: "Mahim, Mumbai",
        distance: "4.5 km",
        beds: 65,
        available: 21,
        emergency: true,
        rating: "4.7",
      },
      {
        id: 5,
        name: "Breach Candy Hospital",
        location: "Breach Candy, Mumbai",
        distance: "5.8 km",
        beds: 55,
        available: 19,
        emergency: false,
        rating: "4.5",
      },
    ],
  },

  Bengaluru: {
    state: "Karnataka",
    hospitals: [
      {
        id: 1,
        name: "Manipal Hospital",
        location: "Old Airport Road, Bengaluru",
        distance: "1.3 km",
        beds: 80,
        available: 30,
        emergency: true,
        rating: "4.8",
      },
      {
        id: 2,
        name: "Apollo Hospital",
        location: "Bannerghatta Road, Bengaluru",
        distance: "2.1 km",
        beds: 75,
        available: 26,
        emergency: true,
        rating: "4.7",
      },
      {
        id: 3,
        name: "Narayana Health",
        location: "Hosur Road, Bengaluru",
        distance: "3.0 km",
        beds: 100,
        available: 37,
        emergency: true,
        rating: "4.8",
      },
      {
        id: 4,
        name: "Fortis Hospital",
        location: "Cunningham Road, Bengaluru",
        distance: "4.2 km",
        beds: 65,
        available: 23,
        emergency: true,
        rating: "4.6",
      },
      {
        id: 5,
        name: "Columbia Asia",
        location: "Hebbal, Bengaluru",
        distance: "5.4 km",
        beds: 50,
        available: 18,
        emergency: false,
        rating: "4.5",
      },
    ],
  },
};

const cities = Object.keys(cityData);

function Dashboard() {
  const [selectedCity, setSelectedCity] = useState("Muzaffarnagar");
  const hospitalSliderRef = useRef(null);
  const heroRef = useRef(null);

  const city = cityData[selectedCity];
  const hospitals = city.hospitals;

  const scrollHospitals = (direction) => {
    if (!hospitalSliderRef.current) return;

    const amount = direction === "left" ? -380 : 380;

    hospitalSliderRef.current.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const heroHeight = heroRef.current.offsetHeight;
      const scrollPosition = window.scrollY;

      const percentage = (scrollPosition / heroHeight) * 100;

      document.body.classList.toggle(
        "dashboard-nav-transparent",
        scrollPosition > 40,
      );

      document.body.classList.toggle("dashboard-nav-hide", percentage >= 75);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove("dashboard-nav-transparent");
      document.body.classList.remove("dashboard-nav-hide");
    };
  }, []);

  return (
    <div className="dashboard-page">
      {/* HERO BANNER */}
      <section ref={heroRef} className="dashboard-hero">
        <div className="hero-background">
          <div className="hero-orb hero-orb-one"></div>
          <div className="hero-orb hero-orb-two"></div>
          <div className="hero-grid"></div>
          <div className="hero-pulse"></div>
        </div>

        <div className="hero-content">
          <div className="hero-copy">
            <span className="hero-label">
              <Activity size={15} />
              SMART HEALTHCARE PLATFORM
            </span>

            <h1>
              Healthcare that puts
              <span> you first.</span>
            </h1>

            <p>
              Find nearby hospitals, manage appointments, monitor hospital
              capacity and access essential healthcare information from one
              place.
            </p>

            <div className="hero-actions">
              <a href="/appointments" className="hero-primary-btn">
                <CalendarPlus size={18} />
                Book Appointment
              </a>

              <a href="/hospitals" className="hero-secondary-btn">
                Explore Hospitals
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          <div className="hero-medical-card">
            <div className="medical-circle">
              <Activity size={55} strokeWidth={1.4} />
            </div>

            <div className="heartbeat-line">
              <span></span>
            </div>

            <div className="medical-status">
              <div className="status-dot"></div>
              <div>
                <strong>Healthcare System</strong>
                <small>Operational & Connected</small>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <span>Scroll to explore</span>
          <div></div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="location-section">
        <div className="location-content">
          <div>
            <span className="section-eyebrow">YOUR LOCATION</span>
            <h2>Healthcare near you</h2>
            <p>
              Select your city to discover hospitals and healthcare services
              around you.
            </p>
          </div>

          <div className="location-selector">
            <MapPin size={20} />

            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              {cities.map((cityName) => (
                <option key={cityName} value={cityName}>
                  {cityName}
                </option>
              ))}
            </select>

            <span className="location-state">{city.state}</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="dashboard-stats">
        <StatCard
          title="Total Patients"
          value="1,284"
          icon={<Users size={22} />}
          trend="+12.5%"
        />

        <StatCard
          title="Available Doctors"
          value="48"
          icon={<Stethoscope size={22} />}
          trend="+4.2%"
        />

        <StatCard
          title="Appointments"
          value="326"
          icon={<CalendarPlus size={22} />}
          trend="+8.7%"
        />

        <StatCard
          title="Available Beds"
          value={hospitals.reduce(
            (total, hospital) => total + hospital.available,
            0,
          )}
          icon={<Bed size={22} />}
          trend="Live"
        />
      </section>

      {/* NEAREST HOSPITALS */}
      <section className="hospital-section">
        <div className="section-heading-row">
          <div>
            <span className="section-eyebrow">NEARBY HEALTHCARE</span>
            <h2>Nearest Hospitals</h2>
            <p>Top hospitals around {selectedCity}, sorted by distance.</p>
          </div>

          <div className="hospital-slider-buttons">
            <button
              onClick={() => scrollHospitals("left")}
              aria-label="Previous hospitals"
            >
              <ChevronLeft size={21} />
            </button>

            <button
              onClick={() => scrollHospitals("right")}
              aria-label="Next hospitals"
            >
              <ChevronRight size={21} />
            </button>
          </div>
        </div>

        <div ref={hospitalSliderRef} className="hospital-slider">
          {hospitals.map((hospital) => (
            <article className="hospital-dashboard-card" key={hospital.id}>
              <div className="hospital-card-top">
                <div className="hospital-icon">
                  <Activity size={23} />
                </div>

                <span className="distance-badge">{hospital.distance}</span>
              </div>

              <div className="hospital-card-content">
                <div className="hospital-rating">★ {hospital.rating}</div>

                <h3>{hospital.name}</h3>

                <p>
                  <MapPin size={15} />
                  {hospital.location}
                </p>

                <div className="hospital-capacity">
                  <div>
                    <span>Available Beds</span>
                    <strong>{hospital.available}</strong>
                  </div>

                  <div>
                    <span>Total Beds</span>
                    <strong>{hospital.beds}</strong>
                  </div>
                </div>

                <div className="hospital-card-bottom">
                  {hospital.emergency ? (
                    <StatusBadge status="Active" />
                  ) : (
                    <span className="normal-status">Regular Care</span>
                  )}

                  <button className="view-hospital-btn">
                    View Details
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* LOWER DASHBOARD */}
      <section className="dashboard-lower-grid">
        <div className="panel">
          <div className="panel-header">
            <div>
              <h3>Today's Appointments</h3>
              <p>Upcoming patient appointments</p>
            </div>

            <a href="/appointments" className="panel-link">
              View all
            </a>
          </div>

          <div className="appointment-list">
            <div className="appointment-item">
              <div className="appointment-avatar">RK</div>

              <div>
                <strong>Rahul Kumar</strong>
                <span>Dr. Amit Sharma · Cardiology</span>
              </div>

              <b>10:30 AM</b>
            </div>

            <div className="appointment-item">
              <div className="appointment-avatar">PS</div>

              <div>
                <strong>Priya Singh</strong>
                <span>Dr. Neha Gupta · Neurology</span>
              </div>

              <b>11:45 AM</b>
            </div>

            <div className="appointment-item">
              <div className="appointment-avatar">AM</div>

              <div>
                <strong>Arjun Mehta</strong>
                <span>Dr. Raj Verma · Orthopedics</span>
              </div>

              <b>01:15 PM</b>
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <div>
              <h3>Hospital Capacity</h3>
              <p>Current capacity around {selectedCity}</p>
            </div>
          </div>

          <div className="capacity-list">
            {hospitals.slice(0, 4).map((hospital) => {
              const percentage = Math.round(
                (hospital.available / hospital.beds) * 100,
              );

              return (
                <div className="capacity-item" key={hospital.id}>
                  <div className="capacity-info">
                    <strong>{hospital.name}</strong>
                    <span>{hospital.available} beds available</span>
                  </div>

                  <div className="capacity-progress">
                    <div
                      style={{
                        width: `${percentage}%`,
                      }}
                    ></div>
                  </div>

                  <b>{percentage}%</b>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
