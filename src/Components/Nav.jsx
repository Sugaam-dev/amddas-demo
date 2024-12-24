import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/nav.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container" style={{display:"flex",justifyContent:"space-between"}}>
        {/* Logo */}
        <div className="logo">
          <img
            src="/images/amd.png"
            alt="Compass Group"
          />
        </div>

        {/* Menu Toggle Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${isMenuOpen ? "nav-active" : ""}`}>
          <li>
            <a href="#story">Compass Story</a>
          </li>
          <li>
            <a href="#people">People</a>
          </li>
          <li className="dropdown">
            <a
              href="#whatwedo"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown();
              }}
            >
              What We Do <span className="arrow">&#9662;</span>
            </a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#service1">Service 1</a>
                </li>
                <li>
                  <a href="#service2">Service 2</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#news">Compass in News</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


