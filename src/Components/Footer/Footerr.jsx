import React, { useCallback } from "react";
import "./Footerr.css";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

// Constants for scroll behavior
const NAVBAR_HEIGHT = 110;
const SCROLL_OFFSET = 20;
const SCROLL_DELAY = 800;



const year =new Date().getFullYear();
// Services configuration (matching navbar)
const SERVICES = [
  { key: 'Corporate', label: 'Corporate' },
  { key: 'Educational', label: 'Educational Institute' },
  { key: 'Hospital', label: 'Hospitals' },
  { key: 'Training', label: 'Training' }
];

// Events configuration (matching navbar)
const EVENTS = [
  { key: 'Wedding', label: 'Weddings' },
  { key: 'Housewarming', label: 'Housewarming / Grihapravesh' },
  { key: 'Birthday', label: 'Birthday Parties' },
  { key: 'Engagement', label: 'Anniversaries' },
  { key: 'Festival', label: 'Community Festivals' },
  { key: 'Bhandara', label: 'Bhandara / Langar' }
];

// Social links configuration
const SOCIAL_LINKS = [
  { href: "https://linkedin.com/company/amddas", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://facebook.com/amddas", icon: FaFacebookF, label: "Facebook" },
  { href: "https://www.instagram.com/amddasgroup/", icon: FaInstagram, label: "Instagram" },
  { href: "https://youtube.com", icon: FaYoutube, label: "YouTube" }
];

const Footerr = () => {
  const navigate = useNavigate();

  // Scroll to section utility function
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const scrollToPosition = Math.max(0, absoluteElementTop - NAVBAR_HEIGHT - SCROLL_OFFSET);
      
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  // Handle service navigation
  const handleServiceClick = useCallback((serviceType) => {
    const sectionId = `${serviceType.toLowerCase()}-section`;
    const currentPath = window.location.pathname;
    
    if (currentPath === '/services') {
      scrollToSection(sectionId);
    } else {
      navigate('/services');
      sessionStorage.setItem('scrollTarget', sectionId);
      setTimeout(() => scrollToSection(sectionId), SCROLL_DELAY);
    }
  }, [navigate, scrollToSection]);

  // Handle event navigation
  const handleEventClick = useCallback((eventType) => {
    const sectionId = `${eventType.toLowerCase()}-section`;
    const currentPath = window.location.pathname;
    
    if (currentPath === '/events') {
      scrollToSection(sectionId);
    } else {
      navigate('/events');
      sessionStorage.setItem('scrollTarget', sectionId);
      setTimeout(() => scrollToSection(sectionId), SCROLL_DELAY);
    }
  }, [navigate, scrollToSection]);

  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo */}
        <div className="footer-logo">
          <img src="./images/amd.png" alt="AMDDAS Foods" />
        </div>

        {/* Links Section */}
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Important Links</h4>
            <ul>
              
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/why-Amddas">Why Amddas</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              {/* <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/privacy-policy">Terms & Conditions</Link></li> */}
            </ul>
          </div>

          <div className="footer-column">
          <h4>
  <Link to="/services" style={{ textDecoration: 'none' }} className="footer-heading-link">
    Services
  </Link>
</h4>
            <ul>
              {SERVICES.map(({ key, label }) => (
                <li key={key}>
                  <button 
                    onClick={() => handleServiceClick(key)}
                    className="footer-link-button"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>
              <Link to="/events" className="footer-heading-link"  style={{ textDecoration: 'none' }}>Events</Link>
            </h4>
            <ul>
              {EVENTS.map(({ key, label }) => (
                <li key={key}>
                  <button 
                    onClick={() => handleEventClick(key)}
                    className="footer-link-button"
                  >
                    {label}
                  </button>
                </li>
              ))}
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
                <Link to={'https://maps.app.goo.gl/fYZzn7KQt2BfN2us5'} target="_blank" rel="noopener noreferrer">
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
          copyright © {year} Designed by <Link to={'https://www.pmrgsolution.com/'}>PMRG Solution</Link> All Rights Reserved &nbsp; | &nbsp;
        </p>

        {/* Social Icons */}
        <div className="footer-social">
          {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
            <Link 
              key={label}
              to={href} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footerr;
