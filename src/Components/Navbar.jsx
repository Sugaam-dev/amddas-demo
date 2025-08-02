

// // import React, { useState } from 'react';
// // import { Navbar, Nav, NavDropdown, Container, Offcanvas, Button } from 'react-bootstrap';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import '../Styles/Navbar.css';
// // import { FaHome, FaInfoCircle, FaCalendarAlt } from 'react-icons/fa'; 
// // import { CgProfile } from "react-icons/cg";
// // import { useDispatch, useSelector } from 'react-redux';
// // import { logoutUser } from '../Redux/authActions';
// // import { useNavigate, Link, NavLink } from 'react-router-dom';
// // import { CiMenuBurger } from "react-icons/ci";
// // import { MdRestaurantMenu } from "react-icons/md";
// // import { GrGallery } from "react-icons/gr";

// // function Navbarr() {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   const jwtToken = useSelector((state) => state.auth.token);
// //   const email = useSelector((state) => state.auth.email);

// //   const [expanded, setExpanded] = useState(false);
// //   const [showDropdown, setShowDropdown] = useState(false);
// //   const [showEventsDropdown, setShowEventsDropdown] = useState(false);

// //   const handleToggle = () => {
// //     setExpanded(!expanded);
// //   };

// //   const handleClose = () => setExpanded(false);

// //   const handleLogout = () => {
// //     dispatch(logoutUser());
// //     navigate('/login');
// //   };

// //   const handleDelete = () => {
// //     navigate('/delete-Account');
// //   };

// //   // Function to handle event navigation and scrolling - ALL events go to main events page
// //   const handleEventNavigation = (eventType) => {
// //     // Always navigate to the main events page
// //     navigate('/amddas-events');
    
// //     // Set session storage for the specific event
// //     sessionStorage.setItem(`scrollTo${eventType}`, 'true');
    
// //     // Close mobile menu if open
// //     handleClose();
    
// //     // Add a small delay to ensure navigation completes, then scroll
// //     setTimeout(() => {
// //       const element = document.getElementById(`${eventType.toLowerCase()}-section`);
// //       if (element) {
// //         element.scrollIntoView({ 
// //           behavior: 'smooth',
// //           block: 'start'
// //         });
// //       }
// //     }, 300);
// //   };

// //   // Function to handle service navigation and scrolling - ALL services go to main what-we-do page
// //   const handleServiceNavigation = (serviceType) => {
// //     // Always navigate to the main what-we-do page
// //     navigate('/what-we-do');
    
// //     // Set session storage for the specific service
// //     sessionStorage.setItem(`scrollTo${serviceType}`, 'true');
    
// //     // Close mobile menu if open
// //     handleClose();
    
// //     // Add a small delay to ensure navigation completes, then scroll
// //     setTimeout(() => {
// //       const element = document.getElementById(`${serviceType.toLowerCase()}-section`);
// //       if (element) {
// //         element.scrollIntoView({ 
// //           behavior: 'smooth',
// //           block: 'start'
// //         });
// //       }
// //     }, 300);
// //   };

// //   return (
// //     <div className="navv">
// //       <Navbar
// //         expand="lg"
// //         className="vv"
// //         expanded={expanded}
// //         style={{
// //           backgroundColor: 'transparent',
// //           padding: "0px",
// //         }}
// //       >
// //         <Container fluid style={{ paddingLeft: '60px', paddingRight: '40px' }}>
// //           <Navbar.Brand as={Link} to="/">
// //             <img src="./images/amd.png" alt="logo" style={{ width: '80px' }} />
// //           </Navbar.Brand>
// //           <CiMenuBurger 
// //             onClick={handleToggle} 
// //             className="d-lg-none" 
// //             style={{ cursor: 'pointer', fontSize: "40px", color: "#000" }} 
// //           />
// //           <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex">
// //             <Nav className="ms-auto align-items-center">
// //               <Nav.Link 
// //                 as={NavLink} 
// //                 to="/" 
// //                 className="nav-link-custom"
// //                 onClick={handleClose}
// //                 style={({ isActive }) => ({
// //                   color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                 })}
// //               >
// //                 Home
// //               </Nav.Link>
// //               <Nav.Link 
// //                 as={NavLink} 
// //                 to="/about" 
// //                 className="nav-link-custom about-link"
// //                 onClick={handleClose}
// //                 style={({ isActive }) => ({
// //                 marginRight:"0px",
// //                   color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                 })}
// //               >
// //                 About
// //               </Nav.Link>

// //               {/* What We Do Dropdown */}
// //               <div 
// //                 className="nav-dropdown-hover"
// //                 onMouseEnter={() => setShowDropdown(true)}
// //                 onMouseLeave={() => setShowDropdown(false)}
// //               >
// //                 <NavDropdown
// //                   title={
// //                    <Link to={'/what-we-do'} style={{textDecoration:"none"}}>
// //                     <span className="nav-link-custom" style={{ justifyContent:"center",marginRight:"0px" }}>
// //                       Services
// //                     </span>
// //                    </Link>
// //                   }
// //                   id="services-dropdown"
// //                   className="dropdown-custom nav-dropdown-custom"
// //                   align="end"
// //                   show={showDropdown}
// //                 >
// //                   <NavDropdown.Item 
// //                     onClick={() => handleServiceNavigation('Corporate')}
// //                     style={{ cursor: 'pointer' }}
// //                   >
// //                     Corporate
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     onClick={() => handleServiceNavigation('Educational')}
// //                     style={{ cursor: 'pointer' }}
// //                   >
// //                     Educational Institute
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     onClick={() => handleServiceNavigation('Hospital')}
// //                     style={{ cursor: 'pointer' }}
// //                   >
// //                     Hospitals
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     onClick={() => handleServiceNavigation('Training')}
// //                     style={{ cursor: 'pointer' }}
// //                   >
// //                     Training
// //                   </NavDropdown.Item>
// //                 </NavDropdown>
// //               </div>

// //               {/* Events Dropdown */}
// //               <div 
// //                 className="nav-dropdown-hover"
// //                 onMouseEnter={() => setShowEventsDropdown(true)}
// //                 onMouseLeave={() => setShowEventsDropdown(false)}
// //               >
// //                 <NavDropdown
// //                   title={
// //                    <Link to={'/amddas-events'} style={{textDecoration:"none"}}>
// //                     <span className="nav-link-custom" style={{ justifyContent:"center",marginRight:"0px" }}>
// //                       Events
// //                     </span>
// //                    </Link>
// //                   }
// //                   id="events-dropdown"
// //                   className="dropdown-custom nav-dropdown-custom"
// //                   align="end"
// //                   show={showEventsDropdown}
// //                 >
// //                   <NavDropdown.Item 
// //                     onClick={() => handleEventNavigation('Wedding')}
// //                     style={{ cursor: 'pointer' }}
// //                   >
// //                     Wedding
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     onClick={() => handleEventNavigation('Housewarming')}
// //                     style={{ cursor: 'pointer' }}
// //                   >
// //                     House warming
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     onClick={() => handleEventNavigation('Birthday')}
// //                     style={{ cursor: 'pointer' }}
// //                   >
// //                     Birthday
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     onClick={() => handleEventNavigation('Engagement')}
// //                     style={{ cursor: 'pointer' }}
// //                   >
// //                     Engagement
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     onClick={() => handleEventNavigation('Festival')}
// //                     style={{ cursor: 'pointer' }}
// //                   >
// //                     Community Festivals
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     onClick={() => handleEventNavigation('Bhandaara')}
// //                     style={{ cursor: 'pointer' }}
// //                   >
// //                     Bhandaara
// //                   </NavDropdown.Item>
// //                 </NavDropdown>
// //               </div>

// //               <Nav.Link 
// //                 as={NavLink} 
// //                 to="/why-us" 
// //                 className="nav-link-custom"
// //                 onClick={handleClose}
// //                 style={({ isActive }) => ({
// //                   color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                 })}
// //               >
// //                 Why Us
// //               </Nav.Link>
// //               <Nav.Link 
// //                 as={NavLink} 
// //                 to="/contact" 
// //                 className="nav-link-custom contact-link"
// //                 onClick={handleClose}
// //                 style={({ isActive }) => ({
// //                   color: isActive ? '#ff4f00' : '#ff4f00',
// //                 })}
// //               >
// //                 Contact Us
// //               </Nav.Link>
// //             </Nav>
// //           </Navbar.Collapse>

// //           <Navbar.Offcanvas
// //             id="offcanvasNavbar"
// //             aria-labelledby="offcanvasNavbarLabel"
// //             placement="end"
// //             show={expanded}
// //             onHide={handleClose}
// //             className="d-lg-none"
// //             style={{
// //               backgroundColor: 'rgb(111, 118, 125)',
// //               visibility: 'visible',
// //             }}
// //           >
// //             <Offcanvas.Header closeButton>
// //               <Offcanvas.Title id="offcanvasNavbarLabel">
// //                 <img style={{width:"50px"}} src="./images/amd.png" alt="" />
// //               </Offcanvas.Title>
// //             </Offcanvas.Header>
// //             <Offcanvas.Body>
// //               <Nav className="justify-content-end flex-grow-1 pe-3">
// //                 <Nav.Link 
// //                   as={NavLink} 
// //                   to="/" 
// //                   className="nav-link-custom" 
// //                   onClick={handleClose}
// //                   style={({ isActive }) => ({
// //                     color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                   })}
// //                 >
// //                   Home
// //                 </Nav.Link>
// //                 <Nav.Link 
// //                   as={NavLink} 
// //                   to="/about" 
// //                   className="nav-link-custom" 
// //                   onClick={handleClose}
// //                   style={({ isActive }) => ({
// //                     color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                   })}
// //                 >
// //                   About
// //                 </Nav.Link>

// //                 {/* Mobile What We Do Dropdown */}
// //                 <NavDropdown
// //                   title="What We Do"
// //                   id="offcanvas-services-dropdown"
// //                   className="dropdown-custom nav-dropdown-custom"
// //                 >
// //                  <NavDropdown.Item 
// //                    onClick={() => handleServiceNavigation('Corporate')}
// //                    style={{ cursor: 'pointer' }}
// //                  >
// //                    Corporate
// //                  </NavDropdown.Item>
// //                  <NavDropdown.Item 
// //                    onClick={() => handleServiceNavigation('Educational')}
// //                    style={{ cursor: 'pointer' }}
// //                  >
// //                    Educational Institute
// //                  </NavDropdown.Item>
// //                  <NavDropdown.Item 
// //                    onClick={() => handleServiceNavigation('Hospital')}
// //                    style={{ cursor: 'pointer' }}
// //                  >
// //                    Hospitals
// //                  </NavDropdown.Item>
// //                  <NavDropdown.Item 
// //                    onClick={() => handleServiceNavigation('Training')}
// //                    style={{ cursor: 'pointer' }}
// //                  >
// //                    Training
// //                  </NavDropdown.Item>
// //                 </NavDropdown>

// //                 {/* Mobile Events Dropdown */}
// //                 <NavDropdown
// //                   title="Events"
// //                   id="offcanvas-events-dropdown"
// //                   className="dropdown-custom nav-dropdown-custom"
// //                 >
// //                   <NavDropdown.Item 
// //                     onClick={() => handleEventNavigation('Wedding')}
// //                     style={{ cursor: 'pointer' }}
// //                   >
// //                     Wedding
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     onClick={() => handleEventNavigation('Housewarming')}
// //                     style={{ cursor: 'pointer' }}
// //                   >
// //                     House warming
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     onClick={() => handleEventNavigation('Birthday')}
// //                     style={{ cursor: 'pointer' }}
// //                   >
// //                     Birthday
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     onClick={() => handleEventNavigation('Engagement')}
// //                     style={{ cursor: 'pointer' }}
// //                   >
// //                     Engagement
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     onClick={() => handleEventNavigation('Festival')}
// //                     style={{ cursor: 'pointer' }}
// //                   >
// //                     Community Festivals
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     onClick={() => handleEventNavigation('Bhandaara')}
// //                     style={{ cursor: 'pointer' }}
// //                   >
// //                     Bhandaara
// //                   </NavDropdown.Item>
// //                 </NavDropdown>

// //                 <Nav.Link 
// //                   as={NavLink} 
// //                   to="/why-us"  
// //                   className="nav-link-custom" 
// //                   onClick={handleClose}
// //                   style={({ isActive }) => ({
// //                     color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                   })}
// //                 >
// //                   Why Us
// //                 </Nav.Link>
                
// //                 <Nav.Link 
// //                   as={NavLink} 
// //                   to="/contact"  
// //                   className="nav-link-custom contact-link-mobile" 
// //                   onClick={handleClose}
// //                   style={({ isActive }) => ({
// //                     color: isActive ? '#ff4f00' : '#ff4f00',
// //                   })}
// //                 >
// //                   Contact Us
// //                 </Nav.Link>
// //               </Nav>
// //             </Offcanvas.Body>
// //           </Navbar.Offcanvas>
// //         </Container>
// //       </Navbar>
// //     </div>
// //   );
// // }

// // export default Navbarr;

// import React, { useState } from 'react';
// import { Navbar, Nav, NavDropdown, Container, Offcanvas } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../Styles/Navbar.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { logoutUser } from '../Redux/authActions';
// import { useNavigate, Link, NavLink } from 'react-router-dom';
// import { CiMenuBurger } from "react-icons/ci";
// import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaSearch } from 'react-icons/fa';
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

//   // Function to handle service navigation and scrolling - ALL services go to main what-we-do page
//   const handleServiceNavigation = (serviceType) => {
//     navigate('/what-we-do');
//     sessionStorage.setItem(`scrollTo${serviceType}`, 'true');
//     handleClose();
    
//     setTimeout(() => {
//       const element = document.getElementById(`${serviceType.toLowerCase()}-section`);
//       if (element) {
//         element.scrollIntoView({ 
//           behavior: 'smooth',
//           block: 'start'
//         });
//       }
//     }, 300);
//   };

//   // Function to handle event navigation and scrolling - ALL events go to main events page
//   const handleEventNavigation = (eventType) => {
//     navigate('/amddas-events');
//     sessionStorage.setItem(`scrollTo${eventType}`, 'true');
//     handleClose();
    
//     setTimeout(() => {
//       const element = document.getElementById(`${eventType.toLowerCase()}-section`);
//       if (element) {
//         element.scrollIntoView({ 
//           behavior: 'smooth',
//           block: 'start'
//         });
//       }
//     }, 300);
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

  // UPDATED: Function to handle service navigation with direct smooth scrolling
  const handleServiceNavigation = (serviceType) => {
    // Close mobile menu if open
    handleClose();
    
    // Navigate to what-we-do page
    navigate('/what-we-do');
    
    // Set session storage for the specific service
    sessionStorage.setItem(`scrollTo${serviceType}`, 'true');
    
    // Add a delay to ensure navigation completes, then scroll directly
    setTimeout(() => {
      const element = document.getElementById(`${serviceType.toLowerCase()}-section`);
      if (element) {
        // Prevent any upward scrolling by checking current position
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetPosition = element.offsetTop - 80; // Account for sticky navbar
        
        // Only scroll if we need to move to a different position
        if (Math.abs(currentScrollTop - targetPosition) > 50) {
          // Use smooth scroll with custom behavior to prevent upward jump
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    }, 100);
  };

  // UPDATED: Function to handle event navigation with direct smooth scrolling
  const handleEventNavigation = (eventType) => {
    // Close mobile menu if open
    handleClose();
    
    // Navigate to events page
    navigate('/amddas-events');
    
    // Set session storage for the specific event
    sessionStorage.setItem(`scrollTo${eventType}`, 'true');
    
    // Add a delay to ensure navigation completes, then scroll directly
    setTimeout(() => {
      const element = document.getElementById(`${eventType.toLowerCase()}-section`);
      if (element) {
        // Prevent any upward scrolling by checking current position
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetPosition = element.offsetTop - 80; // Account for sticky navbar
        
        // Only scroll if we need to move to a different position
        if (Math.abs(currentScrollTop - targetPosition) > 50) {
          // Use smooth scroll with custom behavior to prevent upward jump
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    }, 100);
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