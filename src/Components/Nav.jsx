import React from 'react';
import '../Styles/nav.css'; // Ensure you create this CSS file and include the styles above
import { FaBars, FaTimes } from 'react-icons/fa';
const Nav = () => {
  const openMenu = () => {
    document.getElementById('sidemenu').style.right = '0';
  };

  const closeMenu = () => {
    document.getElementById('sidemenu').style.right = '-140px';
  };

  return (
    <nav>
      <img src="images/pamir-logo.png" className="logo" alt="Logo" />
      <ul id="sidemenu">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">Contact</a></li>
        <FaTimes className="menu-icon close-icon" onClick={closeMenu} />
      </ul>
      <FaBars className="menu-icon open-icon" onClick={openMenu} />
    </nav>
  );
};

export default Nav;
