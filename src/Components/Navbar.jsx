import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Navbar, Container, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Navbar.css';
import { useNavigate, Link } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

// Constants moved outside component to prevent recreation
const NAVBAR_HEIGHT = 110;
const SCROLL_OFFSET = 20;
const DROPDOWN_DELAY = 150;
const NAV_LEAVE_DELAY = 100;
const SCROLL_DELAY = 800;
const SCROLL_THRESHOLD = 50;

// Social links configuration
const SOCIAL_LINKS = [
  { href: "https://linkedin.com", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://facebook.com", icon: FaFacebookF, label: "Facebook" },
  { href: "https://www.instagram.com/amddasgroup/", icon: FaInstagram, label: "Instagram" },
  { href: "https://youtube.com", icon: FaYoutube, label: "YouTube" }
];

// Services configuration
const SERVICES = [
  { key: 'Corporate', label: 'Corporate' },
  { key: 'Educational', label: 'Educational Institute' },
  { key: 'Hospital', label: 'Hospitals' },
  { key: 'Training', label: 'Training' }
];

// Events configuration
const EVENTS = [
  { key: 'Wedding', label: 'Weddings' },
  { key: 'Housewarming', label: 'Housewarming / Grihapravesh' },
  { key: 'Birthday', label: 'Birthday Parties' },
  { key: 'Engagement', label: 'Anniversary Ceremonies' },
  { key: 'Festival', label: 'Community Festivals' },
  { key: 'Bhandaara', label: 'Bhandara / Langar' }
];

function Navbarr() {
  const navigate = useNavigate();

  // State management
  const [expanded, setExpanded] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const [eventsHover, setEventsHover] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  // Memoized scroll handler
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  // Scroll effect with cleanup
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Memoized close all dropdowns function
  const closeAllDropdowns = useCallback(() => {
    setServicesOpen(false);
    setEventsOpen(false);
    setServicesHover(false);
    setEventsHover(false);
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  }, [dropdownTimeout]);

  // Click outside and escape key handlers
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navMenu = document.querySelector('.modern-nav-menu');
      if (navMenu && !navMenu.contains(event.target)) {
        closeAllDropdowns();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        closeAllDropdowns();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [closeAllDropdowns]);

  // Optimized handlers
  const handleClose = useCallback(() => {
    setExpanded(false);
    setMobileServicesOpen(false);
    setMobileEventsOpen(false);
  }, []);

  const handleDropdownEnter = useCallback((dropdownType) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    
    if (dropdownType === 'services') {
      setServicesOpen(true);
      setEventsOpen(false);
    } else if (dropdownType === 'events') {
      setEventsOpen(true);
      setServicesOpen(false);
    }
  }, [dropdownTimeout]);

  const handleDropdownLeave = useCallback((dropdownType) => {
    const timeout = setTimeout(() => {
      if (dropdownType === 'services') {
        setServicesOpen(false);
      } else if (dropdownType === 'events') {
        setEventsOpen(false);
      }
    }, DROPDOWN_DELAY);
    
    setDropdownTimeout(timeout);
  }, []);

  const handleNavMouseLeave = useCallback(() => {
    const timeout = setTimeout(() => {
      closeAllDropdowns();
    }, NAV_LEAVE_DELAY);
    setDropdownTimeout(timeout);
  }, [closeAllDropdowns]);

  const navigateToPage = useCallback((path) => {
    navigate(path);
    closeAllDropdowns();
    handleClose();
  }, [navigate, closeAllDropdowns, handleClose]);

  // Optimized scroll utility function
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
    
    setServicesOpen(false);
    setServicesHover(false);
    handleClose();
  }, [navigate, scrollToSection, handleClose]);

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
    
    setEventsOpen(false);
    setEventsHover(false);
    handleClose();
  }, [navigate, scrollToSection, handleClose]);

  // Memoized social icons
  const socialIcons = useMemo(() => 
    SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
      <Link 
        key={label}
        to={href}
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={label}
      >
        <Icon />
      </Link>
    )), []
  );

  // Memoized service items
  const serviceItems = useMemo(() => 
    SERVICES.map(({ key, label }) => (
      <button key={key} onClick={() => handleServiceClick(key)}>
        {label}
      </button>
    )), [handleServiceClick]
  );

  // Memoized event items
  const eventItems = useMemo(() => 
    EVENTS.map(({ key, label }) => (
      <button key={key} onClick={() => handleEventClick(key)}>
        {label}
      </button>
    )), [handleEventClick]
  );

  return (
    <div className={`modern-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="modern-navbar-bg"></div>
      
      <Navbar expand="lg" className="modern-nav">
        <Container fluid className="modern-container">
          <Navbar.Brand as={Link} to="/" className="modern-logo">
            <img src="./images/amd.png" alt="AMDDAS FOODS" className="logo-img" />
          </Navbar.Brand>

          <div className="modern-right-section">
            <div 
              className="modern-nav-menu d-none d-lg-flex"
              onMouseLeave={handleNavMouseLeave}
            >
              <Link to="/about" className="modern-nav-item">
                About Us
              </Link>
   <Link to="/why-Amddas" className="modern-nav-item">Why Amddas</Link>
              <div 
                className={`modern-dropdown ${servicesOpen ? 'active' : ''}`}
                onMouseEnter={() => { 
                  setServicesHover(true); 
                  handleDropdownEnter('services'); 
                }}
                onMouseLeave={() => { 
                  setServicesHover(false); 
                  handleDropdownLeave('services'); 
                }}
              >
                <button 
                  className="modern-dropdown-btn"
                  onClick={() => navigateToPage('/services')}
                >
                  Services {(servicesHover || servicesOpen) ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
                </button>
                {servicesOpen && (
                  <div 
                    className="modern-dropdown-menu"
                    onMouseEnter={() => { 
                      setServicesHover(true); 
                      handleDropdownEnter('services'); 
                    }}
                    onMouseLeave={() => { 
                      setServicesHover(false); 
                      handleDropdownLeave('services'); 
                    }}
                  >
                    {serviceItems}
                  </div>
                )}
              </div>

              <div 
                className={`modern-dropdown ${eventsOpen ? 'active' : ''}`}
                onMouseEnter={() => { 
                  setEventsHover(true); 
                  handleDropdownEnter('events'); 
                }}
                onMouseLeave={() => { 
                  setEventsHover(false); 
                  handleDropdownLeave('events'); 
                }}
              >
                <button 
                  className="modern-dropdown-btn"
                  onClick={() => navigateToPage('/events')}
                >
                  Events {(eventsHover || eventsOpen) ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
                </button>
                {eventsOpen && (
                  <div 
                    className="modern-dropdown-menu"
                    onMouseEnter={() => { 
                      setEventsHover(true); 
                      handleDropdownEnter('events'); 
                    }}
                    onMouseLeave={() => { 
                      setEventsHover(false); 
                      handleDropdownLeave('events'); 
                    }}
                  >
                    {eventItems}
                  </div>
                )}
              </div>

           
              {/* <Link to="/festivals" className="modern-nav-item">Festivals</Link> */}
              <Link to="/contact" className="modern-nav-item modern-contact-btn">Contact Us</Link>
            </div>

            <div className="modern-social-section d-none d-lg-flex">
              <div className="modern-social-icons">
                {socialIcons}
              </div>
              <div className="modern-divider"></div>
              <div className="modern-location">
                <MdLocationOn /> India
              </div>
            </div>

            <button 
              className="modern-mobile-toggle d-lg-none"
              onClick={() => setExpanded(!expanded)}
              aria-label="Toggle navigation menu"
            >
              <CiMenuBurger size={24} />
            </button>
          </div>

          <Navbar.Offcanvas
            show={expanded}
            onHide={handleClose}
            placement="end"
            className="d-lg-none modern-offcanvas"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <img src="./images/amd.png" alt="AMDDAS FOODS" style={{width: "50px"}} />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="modern-mobile-menu">
                <Link to="/about" className="modern-mobile-item" onClick={handleClose}>
                  About Us
                </Link>
 <Link to="/why-us" className="modern-mobile-item" onClick={handleClose}>
                  Why Amddas
                </Link>
                <div className="modern-mobile-dropdown">
                  <div className="modern-mobile-dropdown-header">
                    <span 
                      className="modern-mobile-main-link"
                      onClick={() => navigateToPage('/services')}
                    >
                      Services
                    </span>
                    <button 
                      className="modern-mobile-toggle-btn"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      aria-label="Toggle services menu"
                    >
                      {mobileServicesOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                    </button>
                  </div>
                  {mobileServicesOpen && (
                    <div className="modern-mobile-submenu">
                      {SERVICES.map(({ key, label }) => (
                        <button key={key} onClick={() => handleServiceClick(key)}>
                          {label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="modern-mobile-dropdown">
                  <div className="modern-mobile-dropdown-header">
                    <span 
                      className="modern-mobile-main-link"
                      onClick={() => navigateToPage('/events')}
                    >
                      Events
                    </span>
                    <button 
                      className="modern-mobile-toggle-btn"
                      onClick={() => setMobileEventsOpen(!mobileEventsOpen)}
                      aria-label="Toggle events menu"
                    >
                      {mobileEventsOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                    </button>
                  </div>
                  {mobileEventsOpen && (
                    <div className="modern-mobile-submenu">
                      {EVENTS.map(({ key, label }) => (
                        <button key={key} onClick={() => handleEventClick(key)}>
                          {label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

               
                {/* <Link to="/festivals" className="modern-mobile-item" onClick={handleClose}>
                  Festivals
                </Link> */}
                <Link to="/contact" className="modern-mobile-item modern-mobile-contact" onClick={handleClose}>
                  Contact Us
                </Link>
              </div>
              
              <div className="modern-mobile-social">
                {socialIcons}
              </div>
              
              <div className="modern-mobile-location">
                <MdLocationOn /> India
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarr;
