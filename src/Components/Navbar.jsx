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
// //                       What We Do
// //                     </span>
// //                    </Link>
// //                   }
// //                   id="services-dropdown"
// //                   className="dropdown-custom nav-dropdown-custom"
// //                   align="end"
// //                   show={showDropdown}
// //                 >
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/corporate" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     Corporate
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/educational-institute" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     Educational Institute
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/hospitals" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     Hospitals
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/training" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
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
// //                     as={NavLink} 
// //                     to="/wedding-events" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     Wedding
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/housewarming-events" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     House warming
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/amddas-events#birthday-section" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     Birthday
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/engagement-events" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     Engagement
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/festivity" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     Community Festivals
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/bhandaara-events" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
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
// //                 className="nav-link-custom"
// //                 onClick={handleClose}
// //                 style={({ isActive }) => ({
// //                   color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                 })}
// //               >
// //            Contact Us
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
// //                   title={
// //                     <NavLink 
// //                       to="/what-we-do" 
// //                       className="nav-link-custom"
// //                       style={{ textDecoration: "none" }}
// //                       onClick={handleClose}
// //                     >
// //                       What We Do
// //                     </NavLink>
// //                   }
// //                   id="offcanvas-services-dropdown"
// //                   className="dropdown-custom nav-dropdown-custom"
// //                   align="end"
// //                   show={expanded}
// //                   onMouseEnter={() => setShowDropdown(true)}
// //                   onMouseLeave={() => setShowDropdown(false)}
// //                   onToggle={(isOpen) => setShowDropdown(isOpen)}
// //                 >
// //                  <NavDropdown.Item 
// //                    as={NavLink} 
// //                    to="/corporate" 
// //                    onClick={handleClose}
// //                    style={({ isActive }) => ({
// //                      color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                    })}
// //                  >
// //                    Corporate
// //                  </NavDropdown.Item>
// //                  <NavDropdown.Item 
// //                    as={NavLink} 
// //                    to="/educational-institute" 
// //                    onClick={handleClose}
// //                    style={({ isActive }) => ({
// //                      color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                    })}
// //                  >
// //                    Educational Institute
// //                  </NavDropdown.Item>
// //                  <NavDropdown.Item 
// //                    as={NavLink} 
// //                    to="/hospitals" 
// //                    onClick={handleClose}
// //                    style={({ isActive }) => ({
// //                      color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                    })}
// //                  >
// //                    Hospitals
// //                  </NavDropdown.Item>
// //                  <NavDropdown.Item 
// //                    as={NavLink} 
// //                    to="/training" 
// //                    onClick={handleClose}
// //                    style={({ isActive }) => ({
// //                      color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                    })}
// //                  >
// //                    Training
// //                  </NavDropdown.Item>
// //                 </NavDropdown>

// //                 {/* Mobile Events Dropdown */}
// //                 <NavDropdown
// //                   title={
// //                     <NavLink 
// //                       to="/amddas-events" 
// //                       className="nav-link-custom"
// //                       style={{ textDecoration: "none" }}
// //                       onClick={handleClose}
// //                     >
// //                       Events
// //                     </NavLink>
// //                   }
// //                   id="offcanvas-events-dropdown"
// //                   className="dropdown-custom nav-dropdown-custom"
// //                   align="end"
// //                   show={expanded}
// //                   onMouseEnter={() => setShowEventsDropdown(true)}
// //                   onMouseLeave={() => setShowEventsDropdown(false)}
// //                   onToggle={(isOpen) => setShowEventsDropdown(isOpen)}
// //                 >
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/wedding-events" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     Wedding
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/housewarming-events" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     House warming
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/amddas-events#birthday-section" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     Birthday
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/engagement-events" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     Engagement
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/festivity" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     Community Festivals
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/bhandaara-events" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
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
// //                   className="nav-link-custom" 
// //                   onClick={handleClose}
// //                   style={({ isActive }) => ({
// //                     color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
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
// //                       What We Do
// //                     </span>
// //                    </Link>
// //                   }
// //                   id="services-dropdown"
// //                   className="dropdown-custom nav-dropdown-custom"
// //                   align="end"
// //                   show={showDropdown}
// //                 >
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/corporate" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     Corporate
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/educational-institute" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     Educational Institute
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/hospitals" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     Hospitals
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/training" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
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
// //                    <Link to={'/amddas-events'} style={{textDecoration:"none"}} onClick={(e) => e.preventDefault()}>
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
// //                     as={NavLink} 
// //                     to="/amddas-events" 
// //                     onClick={() => {
// //                       sessionStorage.setItem('scrollToWedding', 'true');
// //                       handleClose();
// //                     }}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     Wedding
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/housewarming-events" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     House warming
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/amddas-events" 
// //                     onClick={() => {
// //                       sessionStorage.setItem('scrollToBirthday', 'true');
// //                       handleClose();
// //                     }}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     Birthday
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/engagement-events" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     Engagement
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/festivity" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     Community Festivals
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/bhandaara-events" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
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
// //                 className="nav-link-custom"
// //                 onClick={handleClose}
// //                 style={({ isActive }) => ({
// //                   color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                 })}
// //               >
// //            Contact Us
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
// //                   title={
// //                     <NavLink 
// //                       to="/what-we-do" 
// //                       className="nav-link-custom"
// //                       style={{ textDecoration: "none" }}
// //                       onClick={handleClose}
// //                     >
// //                       What We Do
// //                     </NavLink>
// //                   }
// //                   id="offcanvas-services-dropdown"
// //                   className="dropdown-custom nav-dropdown-custom"
// //                   align="end"
// //                   show={expanded}
// //                   onMouseEnter={() => setShowDropdown(true)}
// //                   onMouseLeave={() => setShowDropdown(false)}
// //                   onToggle={(isOpen) => setShowDropdown(isOpen)}
// //                 >
// //                  <NavDropdown.Item 
// //                    as={NavLink} 
// //                    to="/corporate" 
// //                    onClick={handleClose}
// //                    style={({ isActive }) => ({
// //                      color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                    })}
// //                  >
// //                    Corporate
// //                  </NavDropdown.Item>
// //                  <NavDropdown.Item 
// //                    as={NavLink} 
// //                    to="/educational-institute" 
// //                    onClick={handleClose}
// //                    style={({ isActive }) => ({
// //                      color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                    })}
// //                  >
// //                    Educational Institute
// //                  </NavDropdown.Item>
// //                  <NavDropdown.Item 
// //                    as={NavLink} 
// //                    to="/hospitals" 
// //                    onClick={handleClose}
// //                    style={({ isActive }) => ({
// //                      color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                    })}
// //                  >
// //                    Hospitals
// //                  </NavDropdown.Item>
// //                  <NavDropdown.Item 
// //                    as={NavLink} 
// //                    to="/training" 
// //                    onClick={handleClose}
// //                    style={({ isActive }) => ({
// //                      color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                    })}
// //                  >
// //                    Training
// //                  </NavDropdown.Item>
// //                 </NavDropdown>

// //                 {/* Mobile Events Dropdown */}
// //                 <NavDropdown
// //                   title={
// //                     <NavLink 
// //                       to="/amddas-events" 
// //                       className="nav-link-custom"
// //                       style={{ textDecoration: "none" }}
// //                       onClick={(e) => e.preventDefault()}
// //                     >
// //                       Events
// //                     </NavLink>
// //                   }
// //                   id="offcanvas-events-dropdown"
// //                   className="dropdown-custom nav-dropdown-custom"
// //                   align="end"
// //                   show={expanded}
// //                   onMouseEnter={() => setShowEventsDropdown(true)}
// //                   onMouseLeave={() => setShowEventsDropdown(false)}
// //                   onToggle={(isOpen) => setShowEventsDropdown(isOpen)}
// //                 >
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/amddas-events" 
// //                     onClick={() => {
// //                       sessionStorage.setItem('scrollToWedding', 'true');
// //                       handleClose();
// //                     }}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     Wedding
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/housewarming-events" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     House warming
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/amddas-events" 
// //                     onClick={() => {
// //                       sessionStorage.setItem('scrollToBirthday', 'true');
// //                       handleClose();
// //                     }}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     Birthday
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/engagement-events" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     Engagement
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/festivity" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     Community Festivals
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/bhandaara-events" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
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
// //                   className="nav-link-custom" 
// //                   onClick={handleClose}
// //                   style={({ isActive }) => ({
// //                     color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
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
// //                       What We Do
// //                     </span>
// //                    </Link>
// //                   }
// //                   id="services-dropdown"
// //                   className="dropdown-custom nav-dropdown-custom"
// //                   align="end"
// //                   show={showDropdown}
// //                 >
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/corporate" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     Corporate
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/educational-institute" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     Educational Institute
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/hospitals" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
// //                   >
// //                     Hospitals
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Item 
// //                     as={NavLink} 
// //                     to="/training" 
// //                     onClick={handleClose}
// //                     style={({ isActive }) => ({
// //                       color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                     })}
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
// //                 className="nav-link-custom"
// //                 onClick={handleClose}
// //                 style={({ isActive }) => ({
// //                   color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                 })}
// //               >
// //            Contact Us
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
// //                    as={NavLink} 
// //                    to="/corporate" 
// //                    onClick={handleClose}
// //                    style={({ isActive }) => ({
// //                      color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                    })}
// //                  >
// //                    Corporate
// //                  </NavDropdown.Item>
// //                  <NavDropdown.Item 
// //                    as={NavLink} 
// //                    to="/educational-institute" 
// //                    onClick={handleClose}
// //                    style={({ isActive }) => ({
// //                      color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                    })}
// //                  >
// //                    Educational Institute
// //                  </NavDropdown.Item>
// //                  <NavDropdown.Item 
// //                    as={NavLink} 
// //                    to="/hospitals" 
// //                    onClick={handleClose}
// //                    style={({ isActive }) => ({
// //                      color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                    })}
// //                  >
// //                    Hospitals
// //                  </NavDropdown.Item>
// //                  <NavDropdown.Item 
// //                    as={NavLink} 
// //                    to="/training" 
// //                    onClick={handleClose}
// //                    style={({ isActive }) => ({
// //                      color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
// //                    })}
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
// //                   className="nav-link-custom" 
// //                   onClick={handleClose}
// //                   style={({ isActive }) => ({
// //                     color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
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
// import { Navbar, Nav, NavDropdown, Container, Offcanvas, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../Styles/Navbar.css';
// import { FaHome, FaInfoCircle, FaCalendarAlt } from 'react-icons/fa'; 
// import { CgProfile } from "react-icons/cg";
// import { useDispatch, useSelector } from 'react-redux';
// import { logoutUser } from '../Redux/authActions';
// import { useNavigate, Link, NavLink } from 'react-router-dom';
// import { CiMenuBurger } from "react-icons/ci";
// import { MdRestaurantMenu } from "react-icons/md";
// import { GrGallery } from "react-icons/gr";

// function Navbarr() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const jwtToken = useSelector((state) => state.auth.token);
//   const email = useSelector((state) => state.auth.email);

//   const [expanded, setExpanded] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showEventsDropdown, setShowEventsDropdown] = useState(false);

//   const handleToggle = () => {
//     setExpanded(!expanded);
//   };

//   const handleClose = () => setExpanded(false);

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     navigate('/login');
//   };

//   const handleDelete = () => {
//     navigate('/delete-Account');
//   };

//   // Function to handle event navigation and scrolling - ALL events go to main events page
//   const handleEventNavigation = (eventType) => {
//     // Always navigate to the main events page
//     navigate('/amddas-events');
    
//     // Set session storage for the specific event
//     sessionStorage.setItem(`scrollTo${eventType}`, 'true');
    
//     // Close mobile menu if open
//     handleClose();
    
//     // Add a small delay to ensure navigation completes, then scroll
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

//   // Function to handle service navigation and scrolling - ALL services go to main what-we-do page
//   const handleServiceNavigation = (serviceType) => {
//     // Always navigate to the main what-we-do page
//     navigate('/what-we-do');
    
//     // Set session storage for the specific service
//     sessionStorage.setItem(`scrollTo${serviceType}`, 'true');
    
//     // Close mobile menu if open
//     handleClose();
    
//     // Add a small delay to ensure navigation completes, then scroll
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

//   return (
//     <div className="navv">
//       <Navbar
//         expand="lg"
//         className="vv"
//         expanded={expanded}
//         style={{
//           backgroundColor: 'transparent',
//           padding: "0px",
//         }}
//       >
//         <Container fluid style={{ paddingLeft: '60px', paddingRight: '40px' }}>
//           <Navbar.Brand as={Link} to="/">
//             <img src="./images/amd.png" alt="logo" style={{ width: '80px' }} />
//           </Navbar.Brand>
//           <CiMenuBurger 
//             onClick={handleToggle} 
//             className="d-lg-none" 
//             style={{ cursor: 'pointer', fontSize: "40px", color: "#000" }} 
//           />
//           <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex">
//             <Nav className="ms-auto align-items-center">
//               <Nav.Link 
//                 as={NavLink} 
//                 to="/" 
//                 className="nav-link-custom"
//                 onClick={handleClose}
//                 style={({ isActive }) => ({
//                   color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
//                 })}
//               >
//                 Home
//               </Nav.Link>
//               <Nav.Link 
//                 as={NavLink} 
//                 to="/about" 
//                 className="nav-link-custom about-link"
//                 onClick={handleClose}
//                 style={({ isActive }) => ({
//                 marginRight:"0px",
//                   color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
//                 })}
//               >
//                 About
//               </Nav.Link>

//               {/* What We Do Dropdown */}
//               <div 
//                 className="nav-dropdown-hover"
//                 onMouseEnter={() => setShowDropdown(true)}
//                 onMouseLeave={() => setShowDropdown(false)}
//               >
//                 <NavDropdown
//                   title={
//                    <Link to={'/what-we-do'} style={{textDecoration:"none"}}>
//                     <span className="nav-link-custom" style={{ justifyContent:"center",marginRight:"0px" }}>
//                       What We Do
//                     </span>
//                    </Link>
//                   }
//                   id="services-dropdown"
//                   className="dropdown-custom nav-dropdown-custom"
//                   align="end"
//                   show={showDropdown}
//                 >
//                   <NavDropdown.Item 
//                     onClick={() => handleServiceNavigation('Corporate')}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     Corporate
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleServiceNavigation('Educational')}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     Educational Institute
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleServiceNavigation('Hospital')}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     Hospitals
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleServiceNavigation('Training')}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     Training
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               </div>

//               {/* Events Dropdown */}
//               <div 
//                 className="nav-dropdown-hover"
//                 onMouseEnter={() => setShowEventsDropdown(true)}
//                 onMouseLeave={() => setShowEventsDropdown(false)}
//               >
//                 <NavDropdown
//                   title={
//                    <Link to={'/amddas-events'} style={{textDecoration:"none"}}>
//                     <span className="nav-link-custom" style={{ justifyContent:"center",marginRight:"0px" }}>
//                       Events
//                     </span>
//                    </Link>
//                   }
//                   id="events-dropdown"
//                   className="dropdown-custom nav-dropdown-custom"
//                   align="end"
//                   show={showEventsDropdown}
//                 >
//                   <NavDropdown.Item 
//                     onClick={() => handleEventNavigation('Wedding')}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     Wedding
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleEventNavigation('Housewarming')}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     House warming
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleEventNavigation('Birthday')}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     Birthday
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleEventNavigation('Engagement')}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     Engagement
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleEventNavigation('Festival')}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     Community Festivals
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleEventNavigation('Bhandaara')}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     Bhandaara
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               </div>

//               <Nav.Link 
//                 as={NavLink} 
//                 to="/why-us" 
//                 className="nav-link-custom"
//                 onClick={handleClose}
//                 style={({ isActive }) => ({
//                   color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
//                 })}
//               >
//                 Why Us
//               </Nav.Link>
//               <Nav.Link 
//                 as={NavLink} 
//                 to="/contact" 
//                 className="nav-link-custom"
//                 onClick={handleClose}
//                 style={({ isActive }) => ({
//                   color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
//                 })}
//               >
//            Contact Us
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>

//           <Navbar.Offcanvas
//             id="offcanvasNavbar"
//             aria-labelledby="offcanvasNavbarLabel"
//             placement="end"
//             show={expanded}
//             onHide={handleClose}
//             className="d-lg-none"
//             style={{
//               backgroundColor: 'rgb(111, 118, 125)',
//               visibility: 'visible',
//             }}
//           >
//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title id="offcanvasNavbarLabel">
//                 <img style={{width:"50px"}} src="./images/amd.png" alt="" />
//               </Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               <Nav className="justify-content-end flex-grow-1 pe-3">
//                 <Nav.Link 
//                   as={NavLink} 
//                   to="/" 
//                   className="nav-link-custom" 
//                   onClick={handleClose}
//                   style={({ isActive }) => ({
//                     color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
//                   })}
//                 >
//                   Home
//                 </Nav.Link>
//                 <Nav.Link 
//                   as={NavLink} 
//                   to="/about" 
//                   className="nav-link-custom" 
//                   onClick={handleClose}
//                   style={({ isActive }) => ({
//                     color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
//                   })}
//                 >
//                   About
//                 </Nav.Link>

//                 {/* Mobile What We Do Dropdown */}
//                 <NavDropdown
//                   title="What We Do"
//                   id="offcanvas-services-dropdown"
//                   className="dropdown-custom nav-dropdown-custom"
//                 >
//                  <NavDropdown.Item 
//                    onClick={() => handleServiceNavigation('Corporate')}
//                    style={{ cursor: 'pointer' }}
//                  >
//                    Corporate
//                  </NavDropdown.Item>
//                  <NavDropdown.Item 
//                    onClick={() => handleServiceNavigation('Educational')}
//                    style={{ cursor: 'pointer' }}
//                  >
//                    Educational Institute
//                  </NavDropdown.Item>
//                  <NavDropdown.Item 
//                    onClick={() => handleServiceNavigation('Hospital')}
//                    style={{ cursor: 'pointer' }}
//                  >
//                    Hospitals
//                  </NavDropdown.Item>
//                  <NavDropdown.Item 
//                    onClick={() => handleServiceNavigation('Training')}
//                    style={{ cursor: 'pointer' }}
//                  >
//                    Training
//                  </NavDropdown.Item>
//                 </NavDropdown>

//                 {/* Mobile Events Dropdown */}
//                 <NavDropdown
//                   title="Events"
//                   id="offcanvas-events-dropdown"
//                   className="dropdown-custom nav-dropdown-custom"
//                 >
//                   <NavDropdown.Item 
//                     onClick={() => handleEventNavigation('Wedding')}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     Wedding
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleEventNavigation('Housewarming')}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     House warming
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleEventNavigation('Birthday')}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     Birthday
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleEventNavigation('Engagement')}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     Engagement
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleEventNavigation('Festival')}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     Community Festivals
//                   </NavDropdown.Item>
//                   <NavDropdown.Item 
//                     onClick={() => handleEventNavigation('Bhandaara')}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     Bhandaara
//                   </NavDropdown.Item>
//                 </NavDropdown>

//                 <Nav.Link 
//                   as={NavLink} 
//                   to="/why-us"  
//                   className="nav-link-custom" 
//                   onClick={handleClose}
//                   style={({ isActive }) => ({
//                     color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
//                   })}
//                 >
//                   Why Us
//                 </Nav.Link>
                
//                 <Nav.Link 
//                   as={NavLink} 
//                   to="/contact"  
//                   className="nav-link-custom" 
//                   onClick={handleClose}
//                   style={({ isActive }) => ({
//                     color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
//                   })}
//                 >
//                   Contact Us
//                 </Nav.Link>
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
import { Navbar, Nav, NavDropdown, Container, Offcanvas, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Navbar.css';
import { FaHome, FaInfoCircle, FaCalendarAlt } from 'react-icons/fa'; 
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../Redux/authActions';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { MdRestaurantMenu } from "react-icons/md";
import { GrGallery } from "react-icons/gr";

function Navbarr() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const jwtToken = useSelector((state) => state.auth.token);
  const email = useSelector((state) => state.auth.email);

  const [expanded, setExpanded] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showEventsDropdown, setShowEventsDropdown] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => setExpanded(false);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  const handleDelete = () => {
    navigate('/delete-Account');
  };

  // Function to handle event navigation and scrolling - ALL events go to main events page
  const handleEventNavigation = (eventType) => {
    // Always navigate to the main events page
    navigate('/amddas-events');
    
    // Set session storage for the specific event
    sessionStorage.setItem(`scrollTo${eventType}`, 'true');
    
    // Close mobile menu if open
    handleClose();
    
    // Add a small delay to ensure navigation completes, then scroll
    setTimeout(() => {
      const element = document.getElementById(`${eventType.toLowerCase()}-section`);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 300);
  };

  // Function to handle service navigation and scrolling - ALL services go to main what-we-do page
  const handleServiceNavigation = (serviceType) => {
    // Always navigate to the main what-we-do page
    navigate('/what-we-do');
    
    // Set session storage for the specific service
    sessionStorage.setItem(`scrollTo${serviceType}`, 'true');
    
    // Close mobile menu if open
    handleClose();
    
    // Add a small delay to ensure navigation completes, then scroll
    setTimeout(() => {
      const element = document.getElementById(`${serviceType.toLowerCase()}-section`);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 300);
  };

  return (
    <div className="navv">
      <Navbar
        expand="lg"
        className="vv"
        expanded={expanded}
        style={{
          backgroundColor: 'transparent',
          padding: "0px",
        }}
      >
        <Container fluid style={{ paddingLeft: '60px', paddingRight: '40px' }}>
          <Navbar.Brand as={Link} to="/">
            <img src="./images/amd.png" alt="logo" style={{ width: '80px' }} />
          </Navbar.Brand>
          <CiMenuBurger 
            onClick={handleToggle} 
            className="d-lg-none" 
            style={{ cursor: 'pointer', fontSize: "40px", color: "#000" }} 
          />
          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex">
            <Nav className="ms-auto align-items-center">
              <Nav.Link 
                as={NavLink} 
                to="/" 
                className="nav-link-custom"
                onClick={handleClose}
                style={({ isActive }) => ({
                  color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
                })}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                as={NavLink} 
                to="/about" 
                className="nav-link-custom about-link"
                onClick={handleClose}
                style={({ isActive }) => ({
                marginRight:"0px",
                  color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
                })}
              >
                About
              </Nav.Link>

              {/* What We Do Dropdown */}
              <div 
                className="nav-dropdown-hover"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <NavDropdown
                  title={
                   <Link to={'/what-we-do'} style={{textDecoration:"none"}}>
                    <span className="nav-link-custom" style={{ justifyContent:"center",marginRight:"0px" }}>
                      What We Do
                    </span>
                   </Link>
                  }
                  id="services-dropdown"
                  className="dropdown-custom nav-dropdown-custom"
                  align="end"
                  show={showDropdown}
                >
                  <NavDropdown.Item 
                    onClick={() => handleServiceNavigation('Corporate')}
                    style={{ cursor: 'pointer' }}
                  >
                    Corporate
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleServiceNavigation('Educational')}
                    style={{ cursor: 'pointer' }}
                  >
                    Educational Institute
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleServiceNavigation('Hospital')}
                    style={{ cursor: 'pointer' }}
                  >
                    Hospitals
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleServiceNavigation('Training')}
                    style={{ cursor: 'pointer' }}
                  >
                    Training
                  </NavDropdown.Item>
                </NavDropdown>
              </div>

              {/* Events Dropdown */}
              <div 
                className="nav-dropdown-hover"
                onMouseEnter={() => setShowEventsDropdown(true)}
                onMouseLeave={() => setShowEventsDropdown(false)}
              >
                <NavDropdown
                  title={
                   <Link to={'/amddas-events'} style={{textDecoration:"none"}}>
                    <span className="nav-link-custom" style={{ justifyContent:"center",marginRight:"0px" }}>
                      Events
                    </span>
                   </Link>
                  }
                  id="events-dropdown"
                  className="dropdown-custom nav-dropdown-custom"
                  align="end"
                  show={showEventsDropdown}
                >
                  <NavDropdown.Item 
                    onClick={() => handleEventNavigation('Wedding')}
                    style={{ cursor: 'pointer' }}
                  >
                    Wedding
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleEventNavigation('Housewarming')}
                    style={{ cursor: 'pointer' }}
                  >
                    House warming
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleEventNavigation('Birthday')}
                    style={{ cursor: 'pointer' }}
                  >
                    Birthday
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleEventNavigation('Engagement')}
                    style={{ cursor: 'pointer' }}
                  >
                    Engagement
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleEventNavigation('Festival')}
                    style={{ cursor: 'pointer' }}
                  >
                    Community Festivals
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleEventNavigation('Bhandaara')}
                    style={{ cursor: 'pointer' }}
                  >
                    Bhandaara
                  </NavDropdown.Item>
                </NavDropdown>
              </div>

              <Nav.Link 
                as={NavLink} 
                to="/why-us" 
                className="nav-link-custom"
                onClick={handleClose}
                style={({ isActive }) => ({
                  color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
                })}
              >
                Why Us
              </Nav.Link>
              <Nav.Link 
                as={NavLink} 
                to="/contact" 
                className="nav-link-custom contact-link"
                onClick={handleClose}
                style={({ isActive }) => ({
                  color: isActive ? '#ff4f00' : '#ff4f00',
                })}
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={expanded}
            onHide={handleClose}
            className="d-lg-none"
            style={{
              backgroundColor: 'rgb(111, 118, 125)',
              visibility: 'visible',
            }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <img style={{width:"50px"}} src="./images/amd.png" alt="" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link 
                  as={NavLink} 
                  to="/" 
                  className="nav-link-custom" 
                  onClick={handleClose}
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
                  })}
                >
                  Home
                </Nav.Link>
                <Nav.Link 
                  as={NavLink} 
                  to="/about" 
                  className="nav-link-custom" 
                  onClick={handleClose}
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
                  })}
                >
                  About
                </Nav.Link>

                {/* Mobile What We Do Dropdown */}
                <NavDropdown
                  title="What We Do"
                  id="offcanvas-services-dropdown"
                  className="dropdown-custom nav-dropdown-custom"
                >
                 <NavDropdown.Item 
                   onClick={() => handleServiceNavigation('Corporate')}
                   style={{ cursor: 'pointer' }}
                 >
                   Corporate
                 </NavDropdown.Item>
                 <NavDropdown.Item 
                   onClick={() => handleServiceNavigation('Educational')}
                   style={{ cursor: 'pointer' }}
                 >
                   Educational Institute
                 </NavDropdown.Item>
                 <NavDropdown.Item 
                   onClick={() => handleServiceNavigation('Hospital')}
                   style={{ cursor: 'pointer' }}
                 >
                   Hospitals
                 </NavDropdown.Item>
                 <NavDropdown.Item 
                   onClick={() => handleServiceNavigation('Training')}
                   style={{ cursor: 'pointer' }}
                 >
                   Training
                 </NavDropdown.Item>
                </NavDropdown>

                {/* Mobile Events Dropdown */}
                <NavDropdown
                  title="Events"
                  id="offcanvas-events-dropdown"
                  className="dropdown-custom nav-dropdown-custom"
                >
                  <NavDropdown.Item 
                    onClick={() => handleEventNavigation('Wedding')}
                    style={{ cursor: 'pointer' }}
                  >
                    Wedding
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleEventNavigation('Housewarming')}
                    style={{ cursor: 'pointer' }}
                  >
                    House warming
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleEventNavigation('Birthday')}
                    style={{ cursor: 'pointer' }}
                  >
                    Birthday
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleEventNavigation('Engagement')}
                    style={{ cursor: 'pointer' }}
                  >
                    Engagement
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleEventNavigation('Festival')}
                    style={{ cursor: 'pointer' }}
                  >
                    Community Festivals
                  </NavDropdown.Item>
                  <NavDropdown.Item 
                    onClick={() => handleEventNavigation('Bhandaara')}
                    style={{ cursor: 'pointer' }}
                  >
                    Bhandaara
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link 
                  as={NavLink} 
                  to="/why-us"  
                  className="nav-link-custom" 
                  onClick={handleClose}
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
                  })}
                >
                  Why Us
                </Nav.Link>
                
                <Nav.Link 
                  as={NavLink} 
                  to="/contact"  
                  className="nav-link-custom contact-link-mobile" 
                  onClick={handleClose}
                  style={({ isActive }) => ({
                    color: isActive ? '#ff4f00' : '#ff4f00',
                  })}
                >
                  Contact Us
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarr;