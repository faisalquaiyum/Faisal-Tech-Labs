import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/faisalquaiyum" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/md-faisal-quaiyum-b943a922b/" },
    { icon: <FaTwitter />, url: "https://x.com/faisalquaiyum" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/_faisalquaiyum/" },
    { icon: <FaEnvelope />, url: "mailto:mdfaisalquaiyum004@gmail.com" }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h1>Faisal Tech Labs</h1>
          <p>Innovating the future, one line of code at a time</p>
        </div>

        <div className="footer-social">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Social media link ${index + 1}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/service">Services</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Faisal Tech Labs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;