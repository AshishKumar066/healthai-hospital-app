import { useEffect, useState } from "react";
import {
  MapPin,
  Phone,
  Ambulance,
  Navigation,
  ShieldAlert,
  Clock3,
  CheckCircle2,
  LoaderCircle,
} from "lucide-react";

const cities = [
  {
    name: "Muzaffarnagar",
    lat: 29.4727,
    lng: 77.7085,
  },
  {
    name: "Noida",
    lat: 28.5355,
    lng: 77.391,
  },
  {
    name: "Delhi",
    lat: 28.6139,
    lng: 77.209,
  },
  {
    name: "Ghaziabad",
    lat: 28.6692,
    lng: 77.4538,
  },
  {
    name: "Meerut",
    lat: 28.9845,
    lng: 77.7064,
  },
  {
    name: "Lucknow",
    lat: 26.8467,
    lng: 80.9462,
  },
  {
    name: "Jaipur",
    lat: 26.9124,
    lng: 75.7873,
  },
  {
    name: "Chandigarh",
    lat: 30.7333,
    lng: 76.7794,
  },
  {
    name: "Mumbai",
    lat: 19.076,
    lng: 72.8777,
  },
  {
    name: "Bengaluru",
    lat: 12.9716,
    lng: 77.5946,
  },
];

function calculateDistance(lat1, lon1, lat2, lon2) {
  const earthRadius = 6371;

  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
    Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadius * c;
}

function Emergency() {
  const [locationStatus, setLocationStatus] =
    useState("detecting");

  const [selectedCity, setSelectedCity] =
    useState("");

  const [coordinates, setCoordinates] =
    useState(null);

  useEffect(() => {
    detectLocation();
  }, []);

  const detectLocation = () => {
    setLocationStatus("detecting");

    if (!navigator.geolocation) {
      setLocationStatus("unsupported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setCoordinates({
          latitude,
          longitude,
        });

        let nearestCity = cities[0];
        let shortestDistance = Infinity;

        cities.forEach((city) => {
          const distance = calculateDistance(
            latitude,
            longitude,
            city.lat,
            city.lng
          );

          if (distance < shortestDistance) {
            shortestDistance = distance;
            nearestCity = city;
          }
        });

        setSelectedCity(nearestCity.name);
        setLocationStatus("success");
      },
      () => {
        setLocationStatus("denied");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  };

  const callAmbulance = () => {
    window.location.href = "tel:108";
  };

  return (
    <div className="emergency-page">

      {/* HEADER */}
      <div className="emergency-page-header">
        <div>
          <span className="section-eyebrow">
            EMERGENCY SERVICES
          </span>

          <h1>Emergency Assistance</h1>

          <p>
            Get immediate access to ambulance and emergency
            healthcare services.
          </p>
        </div>

        <div className="emergency-live">
          <span></span>
          Emergency services available
        </div>
      </div>

      {/* EMERGENCY HERO */}
      <section className="emergency-hero">

        <div className="emergency-hero-content">

          <div className="emergency-icon-large">
            <ShieldAlert size={40} />
          </div>

          <span className="emergency-label">
            24 × 7 EMERGENCY SUPPORT
          </span>

          <h2>
            Need emergency medical help?
          </h2>

          <p>
            We can use your device location to identify your
            nearest service area and help you contact an ambulance.
          </p>

          {/* LOCATION */}
          <div className="emergency-location">

            <MapPin size={20} />

            <div>
              <small>Your detected location</small>

              {locationStatus === "detecting" && (
                <strong className="location-detecting">
                  <LoaderCircle size={15} />
                  Detecting location...
                </strong>
              )}

              {locationStatus === "success" && (
                <strong>
                  {selectedCity}
                </strong>
              )}

              {locationStatus === "denied" && (
                <strong>
                  Location permission denied
                </strong>
              )}

              {locationStatus === "unsupported" && (
                <strong>
                  Location unavailable
                </strong>
              )}
            </div>

            {locationStatus === "success" && (
              <CheckCircle2
                size={21}
                className="location-success"
              />
            )}
          </div>

          {/* CITY SELECT */}
          <div className="emergency-manual-location">

            <label>
              Select emergency service city
            </label>

            <select
              value={selectedCity}
              onChange={(e) =>
                setSelectedCity(e.target.value)
              }
            >
              <option value="">
                Select city
              </option>

              {cities.map((city) => (
                <option
                  key={city.name}
                  value={city.name}
                >
                  {city.name}
                </option>
              ))}
            </select>

          </div>

          {/* CALL */}
          <button
            className="ambulance-call-btn"
            onClick={callAmbulance}
          >
            <div className="ambulance-btn-icon">
              <Phone size={23} />
            </div>

            <div>
              <strong>Call Ambulance</strong>
              <span>Emergency Helpline · 108</span>
            </div>
          </button>

          <p className="emergency-note">
            <Clock3 size={14} />
            Ambulance services are available 24 hours a day.
          </p>

        </div>

        {/* RIGHT VISUAL */}
        <div className="ambulance-visual">

          <div className="ambulance-circle">
            <Ambulance size={95} strokeWidth={1.2} />
          </div>

          <div className="ambulance-ring ring-one"></div>
          <div className="ambulance-ring ring-two"></div>

          <div className="ambulance-location-card">
            <Navigation size={18} />

            <div>
              <strong>Nearest Service Area</strong>
              <span>
                {selectedCity || "Detecting..."}
              </span>
            </div>
          </div>

        </div>

      </section>

      {/* EMERGENCY OPTIONS */}
      <section className="emergency-options">

        <div className="emergency-option-card">
          <div className="option-icon">
            <Ambulance size={23} />
          </div>

          <h3>Ambulance</h3>

          <p>
            Request immediate ambulance assistance for
            critical medical situations.
          </p>

          <button onClick={callAmbulance}>
            Call 108
            <Phone size={15} />
          </button>
        </div>

        <div className="emergency-option-card">
          <div className="option-icon">
            <Navigation size={23} />
          </div>

          <h3>Nearest Hospital</h3>

          <p>
            Find the nearest emergency hospital based on
            your current service area.
          </p>

          <button>
            Find Hospital
            <Navigation size={15} />
          </button>
        </div>

        <div className="emergency-option-card">
          <div className="option-icon">
            <ShieldAlert size={23} />
          </div>

          <h3>Critical Care</h3>

          <p>
            Access emergency departments and critical
            care information quickly.
          </p>

          <button>
            View Services
            <ShieldAlert size={15} />
          </button>
        </div>

      </section>

    </div>
  );
}

export default Emergency;