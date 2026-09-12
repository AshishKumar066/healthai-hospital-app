import { Link, useNavigate } from "react-router-dom";
import { Activity, User, Mail, Lock } from "lucide-react";

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-brand">
          <div className="logo-icon">
            <Activity size={23} />
          </div>

          <span>HealthAI</span>
        </div>

        <div className="auth-content">
          <span className="auth-tag">HEALTHCARE PLATFORM</span>

          <h1>
            Build a better
            <br />
            healthcare experience.
          </h1>

          <p>
            Connect hospital operations, patient care and medical management
            in one modern platform.
          </p>
        </div>
      </div>

      <div className="auth-right">
        <form className="auth-form" onSubmit={handleSignup}>
          <h2>Create account</h2>
          <p>Create your HealthAI administrator account.</p>

          <div className="form-group">
            <label>Full Name</label>

            <div className="input-with-icon">
              <User size={18} />
              <input type="text" placeholder="Enter your name" required />
            </div>
          </div>

          <div className="form-group">
            <label>Email Address</label>

            <div className="input-with-icon">
              <Mail size={18} />
              <input type="email" placeholder="Enter your email" required />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>

            <div className="input-with-icon">
              <Lock size={18} />
              <input
                type="password"
                placeholder="Create a password"
                required
              />
            </div>
          </div>

          <button className="primary-btn auth-btn">
            Create Account
          </button>

          <p className="auth-footer">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;