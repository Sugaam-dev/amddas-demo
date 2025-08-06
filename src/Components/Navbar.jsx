

// import React, { useState } from 'react';
// import { Navbar, Nav, NavDropdown, Container, Offcanvas } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../Styles/Navbar.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { logoutUser } from '../Redux/authActions';
// import { useNavigate, Link, NavLink } from 'react-router-dom';
// import { CiMenuBurger } from "react-icons/ci";
// import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
// import { MdLocationOn } from 'react-icons/md';

// function Navbarr() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const jwtToken = useSelector((state) => state.auth.token);
//   const email = useSelector((state) => state.auth.email);

//   const [expanded, setExpanded] = useState(false);
//   const [showSectorsDropdown, setShowSectorsDropdown] = useState(false);
//   const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);

//   const handleToggle = () => {
//     setExpanded(!expanded);
//   };

//   const handleClose = () => setExpanded(false);

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     navigate('/login');
//   };

//   // UPDATED: Function to handle service navigation with smoother scrolling
//   const handleServiceNavigation = (serviceType) => {
//     // Close mobile menu if open
//     handleClose();
    
//     // Check if we're already on the services page
//     const currentPath = window.location.pathname;
//     const isOnServicesPage = currentPath === '/what-we-do';
    
//     if (isOnServicesPage) {
//       // If already on services page, scroll directly
//       const element = document.getElementById(`${serviceType.toLowerCase()}-section`);
//       if (element) {
//         const navbarHeight = 80;
//         const elementPosition = element.offsetTop - navbarHeight;
        
//         window.scrollTo({
//           top: Math.max(0, elementPosition),
//           behavior: 'smooth'
//         });
//       }
//     } else {
//       // Navigate to services page first, then scroll
//       navigate('/what-we-do');
      
//       // Set session storage for the specific service (WhatWeDo component will handle the scrolling)
//       sessionStorage.setItem(`scrollTo${serviceType}`, 'true');
      
//       // Remove any existing service scroll flags to prevent conflicts
//       const serviceTypes = ['Corporate', 'Educational', 'Hospital', 'Training'];
//       serviceTypes.forEach(type => {
//         if (type !== serviceType) {
//           sessionStorage.removeItem(`scrollTo${type}`);
//         }
//       });
//     }
//   };

//   // UPDATED: Function to handle event navigation with smoother scrolling
//   const handleEventNavigation = (eventType) => {
//     // Close mobile menu if open
//     handleClose();
    
//     // Check if we're already on the events page
//     const currentPath = window.location.pathname;
//     const isOnEventsPage = currentPath === '/amddas-events';
    
//     if (isOnEventsPage) {
//       // If already on events page, scroll directly
//       const element = document.getElementById(`${eventType.toLowerCase()}-section`);
//       if (element) {
//         const navbarHeight = 80;
//         const elementPosition = element.offsetTop - navbarHeight;
        
//         window.scrollTo({
//           top: Math.max(0, elementPosition),
//           behavior: 'smooth'
//         });
//       }
//     } else {
//       // Navigate to events page first, then scroll
//       navigate('/amddas-events');
      
//       // Set session storage for the specific event (Events component will handle the scrolling)
//       sessionStorage.setItem(`scrollTo${eventType}`, 'true');
      
//       // Remove any existing scroll flags to prevent conflicts
//       const eventTypes = ['Wedding', 'Birthday', 'Housewarming', 'Engagement', 'Festival', 'Bhandaara'];
//       eventTypes.forEach(type => {
//         if (type !== eventType) {
//           sessionStorage.removeItem(`scrollTo${type}`);
//         }
//       });
//     }
//   };

//   return (
//     <div className="compass-navbar">
//       <Navbar
//         expand="lg"
//         className="compass-nav"
//         expanded={expanded}
//         style={{
//           backgroundColor: 'white',
//           padding: "0px",
//           boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//         }}
//       >
//         <Container fluid className="compass-container">
//           {/* Logo - Clickable to home */}
//           <Navbar.Brand as={Link} to="/" className="compass-logo">
//             <img src="./images/amd.png" alt="AMDDAS FOODS" className="logo-img" />
//           </Navbar.Brand>

//           {/* Mobile Menu Toggle */}
//           <CiMenuBurger 
//             onClick={handleToggle} 
//             className="d-lg-none compass-mobile-toggle" 
//             style={{ cursor: 'pointer', fontSize: "28px", color: "#666" }} 
//           />

//           {/* Desktop Navigation */}
//           <Navbar.Collapse id="compass-navbar-nav" className="d-none d-lg-flex">
//             <Nav className="compass-nav-right-menu">
//               {/* About */}
//               <Nav.Link 
//                 as={NavLink} 
//                 to="/about" 
//                 className="compass-nav-pill"
//                 onClick={handleClose}
//               >
//                 About Us
//               </Nav.Link>

//               {/* What We Do Dropdown */}
//               <div 
//                 className="compass-dropdown-wrapper"
//                 onMouseEnter={() => setShowSectorsDropdown(true)}
//                 onMouseLeave={() => setShowSectorsDropdown(false)}
//               >
//                 <NavDropdown
//                   title={
//                     <Link to={'/what-we-do'} style={{textDecoration:"none"}}>
//                       <span className="compass-nav-pill-span">
//                         Services
//                       </span>
//                     </Link>
//                   }
//                   id="sectors-dropdown"
//                   className="compass-dropdown"
//                   show={showSectorsDropdown}
//                 >
//                   <NavDropdown.Item 
//                     onClick={() => handleServiceNavigation('Corporate')}
//                     className="compass-dropdown-item"
//                   >
//                     Corporate
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleServiceNavigation('Educational')}
//                     className="compass-dropdown-item"
//                   >
//                     Educational Institute
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleServiceNavigation('Hospital')}
//                     className="compass-dropdown-item"
//                   >
//                     Hospitals
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleServiceNavigation('Training')}
//                     className="compass-dropdown-item"
//                   >
//                     Training
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               </div>

//               {/* Events Dropdown */}
//               <div 
//                 className="compass-dropdown-wrapper"
//                 onMouseEnter={() => setShowSolutionsDropdown(true)}
//                 onMouseLeave={() => setShowSolutionsDropdown(false)}
//               >
//                 <NavDropdown
//                   title={
//                     <Link to={'/amddas-events'} style={{textDecoration:"none"}}>
//                       <span className="compass-nav-pill-span">
//                         Events
//                       </span>
//                     </Link>
//                   }
//                   id="solutions-dropdown"
//                   className="compass-dropdown"
//                   show={showSolutionsDropdown}
//                 >
//                   <NavDropdown.Item 
//                     onClick={() => handleEventNavigation('Wedding')}
//                     className="compass-dropdown-item"
//                   >
//                     Wedding
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleEventNavigation('Birthday')}
//                     className="compass-dropdown-item"
//                   >
//                     Birthday
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleEventNavigation('Engagement')}
//                     className="compass-dropdown-item"
//                   >
//                     Engagement
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleEventNavigation('Festival')}
//                     className="compass-dropdown-item"
//                   >
//                     Community Festivals
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleEventNavigation('Bhandaara')}
//                     className="compass-dropdown-item"
//                   >
//                     Bhandaara
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               </div>

//               {/* Why Us */}
//               <Nav.Link 
//                 as={NavLink} 
//                 to="/why-us" 
//                 className="compass-nav-pill"
//                 onClick={handleClose}
//               >
//                 Why Us
//               </Nav.Link>

//               {/* Contact Us */}
//               <Nav.Link 
//                 as={NavLink} 
//                 to="/contact" 
//                 className="compass-nav-pill compass-contact-pill"
//                 onClick={handleClose}
//               >
//                 Contact Us
//               </Nav.Link>
//             </Nav>

//             {/* Right side icons and location - Combined Social + Location */}
//             <div className="compass-social-location-combined">
//               {/* Combined Social Media Icons + Location */}
//               <div className="compass-combined-pill">
//                 <div className="compass-social-icons-inline">
//                   <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="compass-social-link-inline">
//                     <FaLinkedinIn />
//                   </a>
//                   <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="compass-social-link-inline">
//                     <FaFacebookF />
//                   </a>
//                   <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="compass-social-link-inline">
//                     <FaInstagram />
//                   </a>
//                   <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="compass-social-link-inline">
//                     <FaYoutube />
//                   </a>
//                 </div>
                
//                 <div className="compass-divider"></div>
                
//                 <div className="compass-location-inline">
//                   <MdLocationOn className="compass-location-icon-inline" />
//                   <span className="compass-location-text-inline">India</span>
//                 </div>
//               </div>
//             </div>
//           </Navbar.Collapse>

//           {/* Mobile Offcanvas */}
//           <Navbar.Offcanvas
//             id="offcanvasNavbar"
//             aria-labelledby="offcanvasNavbarLabel"
//             placement="end"
//             show={expanded}
//             onHide={handleClose}
//             className="d-lg-none compass-offcanvas"
//           >
//             <Offcanvas.Header closeButton className="compass-offcanvas-header">
//               <Offcanvas.Title id="offcanvasNavbarLabel">
//                 <img style={{width:"50px"}} src="./images/amd.png" alt="AMDDAS FOODS" />
//               </Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body className="compass-offcanvas-body">
//               <Nav className="compass-mobile-nav">
//                 <Nav.Link 
//                   as={NavLink} 
//                   to="/about" 
//                   className="compass-mobile-link" 
//                   onClick={handleClose}
//                 >
//                   About
//                 </Nav.Link>

//                 {/* Mobile What We Do Dropdown */}
//                 <NavDropdown
//                   title="What We Do"
//                   id="mobile-sectors-dropdown"
//                   className="compass-mobile-dropdown"
//                 >
//                   <NavDropdown.Item 
//                     onClick={() => handleServiceNavigation('Corporate')}
//                     className="compass-mobile-dropdown-item"
//                   >
//                     Corporate
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleServiceNavigation('Educational')}
//                     className="compass-mobile-dropdown-item"
//                   >
//                     Educational Institute
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleServiceNavigation('Hospital')}
//                     className="compass-mobile-dropdown-item"
//                   >
//                     Hospitals
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleServiceNavigation('Training')}
//                     className="compass-mobile-dropdown-item"
//                   >
//                     Training
//                   </NavDropdown.Item>
//                 </NavDropdown>

//                 {/* Mobile Events Dropdown */}
//                 <NavDropdown
//                   title="Events"
//                   id="mobile-solutions-dropdown"
//                   className="compass-mobile-dropdown"
//                 >
//                   <NavDropdown.Item 
//                     onClick={() => handleEventNavigation('Wedding')}
//                     className="compass-mobile-dropdown-item"
//                   >
//                     Wedding
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleEventNavigation('Birthday')}
//                     className="compass-mobile-dropdown-item"
//                   >
//                     Birthday
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleEventNavigation('Engagement')}
//                     className="compass-mobile-dropdown-item"
//                   >
//                     Engagement
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleEventNavigation('Festival')}
//                     className="compass-mobile-dropdown-item"
//                   >
//                     Community Festivals
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleEventNavigation('Bhandaara')}
//                     className="compass-mobile-dropdown-item"
//                   >
//                     Bhandaara
//                   </NavDropdown.Item>
//                 </NavDropdown>

//                 <Nav.Link 
//                   as={NavLink} 
//                   to="/why-us"  
//                   className="compass-mobile-link" 
//                   onClick={handleClose}
//                 >
//                   Why Us
//                 </Nav.Link>
                
//                 <Nav.Link 
//                   as={NavLink} 
//                   to="/contact"  
//                   className="compass-mobile-link compass-mobile-contact" 
//                   onClick={handleClose}
//                 >
//                   Contact Us
//                 </Nav.Link>

//                 {/* Mobile Social Icons */}
//                 <div className="compass-mobile-social">
//                   <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="compass-mobile-social-link">
//                     <FaLinkedinIn />
//                   </a>
//                   <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="compass-mobile-social-link">
//                     <FaFacebookF />
//                   </a>
//                   <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="compass-mobile-social-link">
//                     <FaInstagram />
//                   </a>
//                   <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="compass-mobile-social-link">
//                     <FaYoutube />
//                   </a>
//                 </div>

//                 {/* Mobile Location */}
//                 <div className="compass-mobile-location">
//                   <MdLocationOn className="compass-mobile-location-icon" />
//                   <span className="compass-mobile-location-text">India</span>
//                 </div>
//               </Nav>
//             </Offcanvas.Body>
//           </Navbar.Offcanvas>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

// export default Navbarr;

import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../Redux/authActions';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

function Navbarr() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const jwtToken = useSelector((state) => state.auth.token);
  const email = useSelector((state) => state.auth.email);

  const [expanded, setExpanded] = useState(false);
  const [showSectorsDropdown, setShowSectorsDropdown] = useState(false);
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => setExpanded(false);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  // FIXED: Function to handle service navigation with better scrolling
  const handleServiceNavigation = (serviceType) => {
    // Close mobile menu if open
    handleClose();
    
    // Check if we're already on the services page
    const currentPath = window.location.pathname;
    const isOnServicesPage = currentPath === '/what-we-do';
    
    if (isOnServicesPage) {
      // If already on services page, scroll directly with better positioning
      setTimeout(() => {
        const element = document.getElementById(`${serviceType.toLowerCase()}-section`);
        if (element) {
          // Calculate scroll position more accurately
          const elementRect = element.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.pageYOffset;
          const navbarHeight = 90; // Increased for better spacing
          const scrollToPosition = Math.max(0, absoluteElementTop - navbarHeight);
          
          window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
          });
        }
      }, 100); // Small delay for better reliability
    } else {
      // Navigate to services page first, then scroll
      navigate('/what-we-do');
      
      // Set session storage for the specific service (WhatWeDo component will handle the scrolling)
      sessionStorage.setItem(`scrollTo${serviceType}`, 'true');
      
      // Remove any existing service scroll flags to prevent conflicts
      const serviceTypes = ['Corporate', 'Educational', 'Hospital', 'Training'];
      serviceTypes.forEach(type => {
        if (type !== serviceType) {
          sessionStorage.removeItem(`scrollTo${type}`);
        }
      });
    }
  };

  // FIXED: Function to handle event navigation with better scrolling
  const handleEventNavigation = (eventType) => {
    // Close mobile menu if open
    handleClose();
    
    // Check if we're already on the events page
    const currentPath = window.location.pathname;
    const isOnEventsPage = currentPath === '/amddas-events';
    
    if (isOnEventsPage) {
      // If already on events page, scroll directly with better positioning
      setTimeout(() => {
        const element = document.getElementById(`${eventType.toLowerCase()}-section`);
        if (element) {
          // Calculate scroll position more accurately
          const elementRect = element.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.pageYOffset;
          const navbarHeight = 90; // Increased for better spacing
          const scrollToPosition = Math.max(0, absoluteElementTop - navbarHeight);
          
          window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
          });
        }
      }, 100); // Small delay for better reliability
    } else {
      // Navigate to events page first, then scroll
      navigate('/amddas-events');
      
      // Set session storage for the specific event (Events component will handle the scrolling)
      sessionStorage.setItem(`scrollTo${eventType}`, 'true');
      
      // Remove any existing event scroll flags to prevent conflicts
      const eventTypes = ['Wedding', 'Birthday', 'Housewarming', 'Engagement', 'Festival', 'Bhandaara'];
      eventTypes.forEach(type => {
        if (type !== eventType) {
          sessionStorage.removeItem(`scrollTo${type}`);
        }
      });
    }
  };

  return (
    <div className="compass-navbar">
      <Navbar
        expand="lg"
        className="compass-nav"
        expanded={expanded}
        style={{
          backgroundColor: 'white',
          padding: "0px",
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        <Container fluid className="compass-container">
          {/* Logo - Clickable to home */}
          <Navbar.Brand as={Link} to="/" className="compass-logo">
            <img src="./images/amd.png" alt="AMDDAS FOODS" className="logo-img" />
          </Navbar.Brand>

          {/* Mobile Menu Toggle */}
          <CiMenuBurger 
            onClick={handleToggle} 
            className="d-lg-none compass-mobile-toggle" 
            style={{ cursor: 'pointer', fontSize: "28px", color: "#666" }} 
          />

          {/* Desktop Navigation */}
          <Navbar.Collapse id="compass-navbar-nav" className="d-none d-lg-flex">
            <Nav className="compass-nav-right-menu">
              {/* About */}
              <Nav.Link 
                as={NavLink} 
                to="/about" 
                className="compass-nav-pill"
                onClick={handleClose}
              >
                About Us
              </Nav.Link>

              {/* What We Do Dropdown */}
              <div 
                className="compass-dropdown-wrapper"
                onMouseEnter={() => setShowSectorsDropdown(true)}
                onMouseLeave={() => setShowSectorsDropdown(false)}
              >
                <NavDropdown
                  title={
                    <Link to={'/what-we-do'} style={{textDecoration:"none"}}>
                      <span className="compass-nav-pill-span">
                        Services
                      </span>
                    </Link>
                  }
                  id="sectors-dropdown"
                  className="compass-dropdown"
                  show={showSectorsDropdown}
                >
                  <NavDropdown.Item 
                    onClick={() => handleServiceNavigation('Corporate')}
                    className="compass-dropdown-item"
                  >
                    Corporate
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleServiceNavigation('Educational')}
                    className="compass-dropdown-item"
                  >
                    Educational Institute
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleServiceNavigation('Hospital')}
                    className="compass-dropdown-item"
                  >
                    Hospitals
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleServiceNavigation('Training')}
                    className="compass-dropdown-item"
                  >
                    Training
                  </NavDropdown.Item>
                </NavDropdown>
              </div>

              {/* Events Dropdown */}
              <div 
                className="compass-dropdown-wrapper"
                onMouseEnter={() => setShowSolutionsDropdown(true)}
                onMouseLeave={() => setShowSolutionsDropdown(false)}
              >
                <NavDropdown
                  title={
                    <Link to={'/amddas-events'} style={{textDecoration:"none"}}>
                      <span className="compass-nav-pill-span">
                        Events
                      </span>
                    </Link>
                  }
                  id="solutions-dropdown"
                  className="compass-dropdown"
                  show={showSolutionsDropdown}
                >
                  <NavDropdown.Item 
                    onClick={() => handleEventNavigation('Wedding')}
                    className="compass-dropdown-item"
                  >
                    Wedding
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleEventNavigation('Birthday')}
                    className="compass-dropdown-item"
                  >
                    Birthday
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleEventNavigation('Engagement')}
                    className="compass-dropdown-item"
                  >
                    Engagement
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleEventNavigation('Festival')}
                    className="compass-dropdown-item"
                  >
                    Community Festivals
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleEventNavigation('Bhandaara')}
                    className="compass-dropdown-item"
                  >
                    Bhandaara
                  </NavDropdown.Item>
                </NavDropdown>
              </div>

              {/* Why Us */}
              <Nav.Link 
                as={NavLink} 
                to="/why-us" 
                className="compass-nav-pill"
                onClick={handleClose}
              >
                Why Us
              </Nav.Link>

              {/* Contact Us */}
              <Nav.Link 
                as={NavLink} 
                to="/contact" 
                className="compass-nav-pill compass-contact-pill"
                onClick={handleClose}
              >
                Contact Us
              </Nav.Link>
            </Nav>

            {/* Right side icons and location - Combined Social + Location */}
            <div className="compass-social-location-combined">
              {/* Combined Social Media Icons + Location */}
              <div className="compass-combined-pill">
                <div className="compass-social-icons-inline">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="compass-social-link-inline">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="compass-social-link-inline">
                    <FaFacebookF />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="compass-social-link-inline">
                    <FaInstagram />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="compass-social-link-inline">
                    <FaYoutube />
                  </a>
                </div>
                
                <div className="compass-divider"></div>
                
                <div className="compass-location-inline">
                  <MdLocationOn className="compass-location-icon-inline" />
                  <span className="compass-location-text-inline">India</span>
                </div>
              </div>
            </div>
          </Navbar.Collapse>

          {/* Mobile Offcanvas */}
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={expanded}
            onHide={handleClose}
            className="d-lg-none compass-offcanvas"
          >
            <Offcanvas.Header closeButton className="compass-offcanvas-header">
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <img style={{width:"50px"}} src="./images/amd.png" alt="AMDDAS FOODS" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="compass-offcanvas-body">
              <Nav className="compass-mobile-nav">
                <Nav.Link 
                  as={NavLink} 
                  to="/about" 
                  className="compass-mobile-link" 
                  onClick={handleClose}
                >
                  About
                </Nav.Link>

                {/* Mobile What We Do Dropdown */}
                <NavDropdown
                  title="What We Do"
                  id="mobile-sectors-dropdown"
                  className="compass-mobile-dropdown"
                >
                  <NavDropdown.Item 
                    onClick={() => handleServiceNavigation('Corporate')}
                    className="compass-mobile-dropdown-item"
                  >
                    Corporate
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleServiceNavigation('Educational')}
                    className="compass-mobile-dropdown-item"
                  >
                    Educational Institute
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleServiceNavigation('Hospital')}
                    className="compass-mobile-dropdown-item"
                  >
                    Hospitals
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleServiceNavigation('Training')}
                    className="compass-mobile-dropdown-item"
                  >
                    Training
                  </NavDropdown.Item>
                </NavDropdown>

                {/* Mobile Events Dropdown */}
                <NavDropdown
                  title="Events"
                  id="mobile-solutions-dropdown"
                  className="compass-mobile-dropdown"
                >
                  <NavDropdown.Item 
                    onClick={() => handleEventNavigation('Wedding')}
                    className="compass-mobile-dropdown-item"
                  >
                    Wedding
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleEventNavigation('Birthday')}
                    className="compass-mobile-dropdown-item"
                  >
                    Birthday
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleEventNavigation('Engagement')}
                    className="compass-mobile-dropdown-item"
                  >
                    Engagement
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleEventNavigation('Festival')}
                    className="compass-mobile-dropdown-item"
                  >
                    Community Festivals
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleEventNavigation('Bhandaara')}
                    className="compass-mobile-dropdown-item"
                  >
                    Bhandaara
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link 
                  as={NavLink} 
                  to="/why-us"  
                  className="compass-mobile-link" 
                  onClick={handleClose}
                >
                  Why Us
                </Nav.Link>
                
                <Nav.Link 
                  as={NavLink} 
                  to="/contact"  
                  className="compass-mobile-link compass-mobile-contact" 
                  onClick={handleClose}
                >
                  Contact Us
                </Nav.Link>

                {/* Mobile Social Icons */}
                <div className="compass-mobile-social">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="compass-mobile-social-link">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="compass-mobile-social-link">
                    <FaFacebookF />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="compass-mobile-social-link">
                    <FaInstagram />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="compass-mobile-social-link">
                    <FaYoutube />
                  </a>
                </div>

                {/* Mobile Location */}
                <div className="compass-mobile-location">
                  <MdLocationOn className="compass-mobile-location-icon" />
                  <span className="compass-mobile-location-text">India</span>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarr;