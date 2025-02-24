import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.styles.css";
import { CircleX, Menu } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <a href="#" className="logo">
          Logo
        </a>
      </Link>

      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
      <CircleX className="menu-icon close-icon" size={32} onClick={toggleMenu} />
        <li>
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/photography"
            className={`nav-link ${
              location.pathname === "/blogs" ? "active" : ""
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Photography
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`nav-link ${
              location.pathname === "/learning-path" ? "active" : ""
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/film"
            className={`nav-link ${
              location.pathname === "/learning-path" ? "active" : ""
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Film
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className={`nav-link ${
              location.pathname === "/learning-path" ? "active" : ""
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </li>

        <button>Get In Touch</button>
      </ul>
      <Menu className="menu-icon" size={32} onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
