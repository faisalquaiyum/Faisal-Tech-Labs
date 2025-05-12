import { NavLink } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <section id="error-page">
      <div className="content">
        <h2 className="header">404</h2>
        <h4>Sorry! Page not found.</h4>
        <p>
          Oops! The page you are looking for does not exist. It might have been
          removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="btns">
          <NavLink to="/" className="btn">
            Back to Home
          </NavLink>
          <NavLink to="/contact" className="btn">
            Contact Us
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Error;
