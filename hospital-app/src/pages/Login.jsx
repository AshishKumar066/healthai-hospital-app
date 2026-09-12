import { Link, useNavigate } from "react-router-dom";
import { Activity, Lock, Mail } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
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
          <span className="auth-tag">HOSPITAL MANAGEMENT</span>

          <h1>
            Smarter healthcare.
            <br />
            Better management.
          </h1>

          <p>
            Manage patients, doctors, appointments, medical records and
            hospital operations from one powerful platform.
          </p>
        </div>
      </div>

      <div className="auth-right">
        <form className="auth-form" onSubmit={handleLogin}>
          <h2>Welcome back</h2>
          <p>Sign in to your HealthAI account.</p>

          <div className="form-group">
            <label>Email Address</label>

            <div className="input-with-icon">
              <Mail size={18} />
              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>

            <div className="input-with-icon">
              <Lock size={18} />
              <input
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">Forgot password?</a>
          </div>

          <button className="primary-btn auth-btn">
            Sign In
          </button>

          <p className="auth-footer">
            Don't have an account? <Link to="/signup">Create account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;