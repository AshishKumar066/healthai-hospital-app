import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <div>
        <span>404</span>
        <h1>Page Not Found</h1>
        <p>
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link to="/" className="primary-btn">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default NotFound;