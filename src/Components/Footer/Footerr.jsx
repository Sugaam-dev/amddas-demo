import React from "react";
import "./Footerr.css";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footerr = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo */}
        <div className="footer-logo">
          <img src="./images/amd.png" alt="Compass Group" />
        </div>

        {/* Links Section */}
        <div className="footer-columns">

              <div className="footer-column">
            <h4>Important Links</h4>
            <ul>
              <li><Link to="/why-us">Why Us</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
               <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/contact">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><Link to="/corporate">Corporate</Link></li>
              <li><Link to="/what-we-do">Educational Institute</Link></li>
              <li><Link to="/what-we-do">Hospitals</Link></li>
              <li><Link to="/corporate-experience">Training</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Events</h4>
            <ul>
              <li><Link to="/amddas-events">Wedding</Link></li>
              <li><Link to="/amddas-events">House Warming</Link></li>
              <li><Link to="/amddas-events">Birthday</Link></li>
              <li><Link to="/amddas-events">Engagement</Link></li>
              <li><Link to="/festivals">Community Festivals</Link></li>
              <li><Link to="/festivals">Bhandaara</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <div className="footer-connect">
              <h4>Connect with Us</h4>
              <div className="contact-infoo">
                <Link to={'mailto:info@amddas.net'}>
                  <MdEmail style={{ fontSize: "24px", marginRight: "10px" }} />
                  info@amddas.net
                </Link>
              </div>
              <div className="location">
                <Link to={'https://maps.app.goo.gl/fYZzn7KQt2BfN2us5'}>
                  <IoLocationSharp style={{ fontSize: "24px", marginRight: "10px", marginTop: "2px", flexShrink: 0 }} />
                  AMDDAS Foods Pvt Ltd <br /> Sy No: 67,
                  Seegehalli Village, <br /> Bidarahalli Hobli,
                  Bengaluru, <br /> East Taluk, Bangalore-67
                </Link>
                <div className="address-mobile">
                  <Link to={'tel:+919632764963'}>
                    <FaPhone style={{ fontSize: "18px", marginRight: "8px" }} />
                    +91-9632764963
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          copyright © 2025 Designed by Sugaam.in All Rights Reserved &nbsp; | &nbsp;
          {/* <a href="#">Terms of Use</a> &nbsp; | &nbsp;
          <a href="#">Annual Return - Food Service</a> &nbsp; | &nbsp;
          <a href="#">Annual Return - Support Service</a> &nbsp; | &nbsp;
          <a href="#">Privacy Policy & Cookies Policy</a> */}
        </p>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="https://linkedin.com/company/amddas" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://facebook.com/amddas" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com/amddas" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://youtube.com/@amddas" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footerr;