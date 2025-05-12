import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { useAuth } from "../store/auth";
import "./Navbar.css";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="container">
      <div className="navbar__logo">
        <NavLink to="/" onClick={closeMenu}>FaisalTechLabs</NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn" 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Backdrop */}
      <div 
        className={`mobile-menu-backdrop ${isMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
      />

      {/* Navigation Links */}
      <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <ul className="navbar__links">
          <li>
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          </li>
          <li>
            <NavLink to="/service" onClick={closeMenu}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          </li>

          {isLoggedIn ? (
            <li>
              <NavLink to="/logout" onClick={closeMenu}>Logout</NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink to="/register" onClick={closeMenu}>Register</NavLink>
              </li>
              <li>
                <NavLink to="/login" onClick={closeMenu}>Login</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;