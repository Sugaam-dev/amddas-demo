
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
                {/* <FaHome aria-label="Home" style={{ marginRight: '5px' }} /> */}
                Home
              </Nav.Link>
              <Nav.Link 
                as={NavLink} 
                to="/about" 
                className="nav-link-custom"
                onClick={handleClose}
                style={({ isActive }) => ({
                marginRight:"0px",
                  color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
                })}
              >
                {/* <FaInfoCircle aria-label="About" style={{ marginRight: '5px' }}/> */}
                About
              </Nav.Link>

              {/* Dropdown Menu */}
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

  show={showDropdown} // Controlled by hover state
  onMouseEnter={() => setShowDropdown(true)} // Show dropdown on hover
  onMouseLeave={() => setShowDropdown(false)} // Hide dropdown when mouse leaves

>
  <NavDropdown.Item 
    as={NavLink} 
    to="/corporate" 
    onClick={handleClose}
    style={({ isActive }) => ({
      color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
    })}
  >
    Corporate
  </NavDropdown.Item>
  
</NavDropdown>



              <Nav.Link 
                as={NavLink} 
                to="/amddas-events"  
                className="nav-link-custom"
                onClick={handleClose}
                style={({ isActive }) => ({
                  color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
                })}
              >
                {/* <FaCalendarAlt aria-label="Events" style={{ marginRight: '5px' }}/> */}
                Events
              </Nav.Link>
              <Nav.Link 
                as={NavLink} 
                to="/amddas-gallery" 
                className="nav-link-custom"
                onClick={handleClose}
                style={({ isActive }) => ({
                  color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
                })}
              >
                {/* <GrGallery aria-label="Gallery" style={{ marginRight: '5px' }}/> */}
                Gallery
              </Nav.Link>
              <Nav.Link 
                as={NavLink} 
                to="/contact" 
                className="nav-link-custom"
                onClick={handleClose}
                style={({ isActive }) => ({
                  color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
                })}
              >
                {/* <GrGallery aria-label="Gallery" style={{ marginRight: '5px' }}/> */}
           Contact Us
              </Nav.Link>

              {/* {jwtToken && (
                <Nav.Link 
                  as={NavLink} 
                  to="/booking" 
                  className="nav-link-custom"
                  onClick={handleClose}
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
                  })}
                >
                  <MdRestaurantMenu aria-label="Booking" style={{ marginRight: '5px' }}/>
                  Menu
                </Nav.Link>
              )} */}
{/* 
              {jwtToken ? (
                <NavDropdown
                  title={
                    <span className="email-link">
                      <CgProfile aria-label="Profile" style={{ marginRight: '5px' }} />
                      {email}
                    </span>
                  }
                  id="basic-nav-dropdown"
                  className="dropdown-custom nav-dropdown-custom"
                  align="end"
                >
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                  <NavDropdown.Item style={{ color: 'red' }} onClick={handleDelete}>
                    Delete Account
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Button 
                  as={NavLink} 
                  to="/login" 
                  className="login-button" 
                  onClick={handleClose}
                  style={({ isActive }) => ({
                    border: "none",
                    backgroundColor: "transparent",
                    fontSize: "20px",
                    color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
                  })}
                >
                  Login
                </Button>
              )} */}
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
                  {/* <FaHome aria-label="Home" style={{ marginRight: '5px' }} /> */}
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
                  {/* <FaInfoCircle aria-label="About" style={{ marginRight: '5px' }}/> */}
                  About
                </Nav.Link>

                <NavDropdown
              title={
                <NavLink 
                  to="/what-we-do" 
                  className="nav-link-custom"
                  style={{ textDecoration: "none" }}
                  onClick={handleClose}
                >
                  What We Do
                </NavLink>
              }
                  id="offcanvas-services-dropdown"
                  className="dropdown-custom nav-dropdown-custom"
                  align="end"
                  show={expanded}
                
                  onMouseEnter={() => setShowDropdown(true)} // Show on hover
                  onMouseLeave={() => setShowDropdown(false)} // Hide on mouse leave
                  onToggle={(isOpen) => setShowDropdown(isOpen)} // Sync hover and toggle
                
                >
               <NavDropdown.Item 
    as={NavLink} 
    to="/corporate" 
    onClick={handleClose}
    style={({ isActive }) => ({
      color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
    })}
  >
    Corporate
  </NavDropdown.Item>
                
                </NavDropdown>

                <Nav.Link 
                  as={NavLink} 
                  to="/amddas-events"  
                  className="nav-link-custom" 
                  onClick={handleClose}
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
                  })}
                >
                  {/* <FaCalendarAlt aria-label="Events" style={{ marginRight: '5px' }} /> */}
                  Events
                </Nav.Link>

                <Nav.Link 
                  as={NavLink} 
                  to="/amddas-gallery"  
                  className="nav-link-custom" 
                  onClick={handleClose}
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
                  })}
                >
                  {/* <FaCalendarAlt aria-label="Events" style={{ marginRight: '5px' }} /> */}
                  Gallery
                </Nav.Link>

                
                <Nav.Link 
                  as={NavLink} 
                  to="/contact"  
                  className="nav-link-custom" 
                  onClick={handleClose}
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
                  })}
                >
                  {/* <FaCalendarAlt aria-label="Events" style={{ marginRight: '5px' }} /> */}
                  Contact Us
                </Nav.Link>
{/* 
                {jwtToken && (
                  <Nav.Link 
                    as={NavLink} 
                    to="/booking" 
                    className="nav-link-custom" 
                    onClick={handleClose}
                    style={({ isActive }) => ({
                      color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
                    })}
                  >
                    <MdRestaurantMenu aria-label="Booking" style={{ marginRight: '5px' }}/>
                    Menu
                  </Nav.Link>
                )} */}

                {/* {jwtToken ? (
                  <NavDropdown
                    title={
                      <span className="email-link">
                        <CgProfile aria-label="Profile" style={{ marginRight: '5px' }} />
                        {email}
                      </span>
                    }
                    id="offcanvas-basic-nav-dropdown"
                    className="dropdown-custom nav-dropdown-custom"
                    align="end"
                  >
                    <NavDropdown.Item onClick={() => { handleLogout(); handleClose(); }}>
                      Logout
                    </NavDropdown.Item>
                    <NavDropdown.Item style={{ color: 'red' }} onClick={() => { handleDelete(); handleClose(); }}>
                      Delete Account
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Button 
                    as={NavLink} 
                    to="/login" 
                    className="login-button" 
                    onClick={handleClose}
                    style={({ isActive }) => ({
                      border: "none",
                      backgroundColor: "transparent",
                      fontSize: "20px",
                      color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
                    })}
                  >
                    Login
                  </Button>
                )} */}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarr;
