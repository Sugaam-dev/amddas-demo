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
    <Navbar
      expand="lg"
      className=""
      expanded={expanded}
      style={{
        backgroundColor: 'transparent',
      }}
    >
      <Container fluid style={{ paddingLeft: '40px', paddingRight: '40px' }}>
        <Navbar.Brand as={Link} to="/">
          <img src="./images/amd.png" alt="logo" style={{ width: '100px' }} />
        </Navbar.Brand>
        <CiMenuBurger 
          onClick={handleToggle} 
          className="d-lg-none" 
          style={{ cursor: 'pointer', fontSize: "40px" ,color:"#ffffff"}} 
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
              <FaHome aria-label="Home" style={{marginRight:'5px'}} />
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
              <FaInfoCircle aria-label="About" style={{marginRight:'5px'}}/>
              About
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/events"  
              className="nav-link-custom"
              onClick={handleClose}
              style={({ isActive }) => ({
                color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
              })}
            >
              <FaCalendarAlt aria-label="Events" style={{marginRight:'5px'}}/> {/* Optional Icon */}
              Events
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/gallery" 
              className="nav-link-custom"
              onClick={handleClose}
              style={({ isActive }) => ({
                color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
              })}
            >
              <GrGallery aria-label="Gallery" style={{marginRight:'5px'}}/>
              Gallery
            </Nav.Link>
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
                <MdRestaurantMenu aria-label="Booking" style={{marginRight:'5px'}}/>
                Menu
              </Nav.Link>
            )}
            {jwtToken ? (
              <NavDropdown
                title={
                  <span className="email-link">
                    <CgProfile aria-label="Profile" style={{marginRight:'5px'}} />
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
              >
                Login
              </Button>
            )}
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
              Amddas
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
                <FaHome aria-label="Home" style={{marginRight:'5px'}} />
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
                <FaInfoCircle aria-label="About" style={{marginRight:'5px'}}/>
                About
              </Nav.Link>
              <Nav.Link 
                as={NavLink} 
                to="/events"  
                className="nav-link-custom" 
                onClick={handleClose}
                style={({ isActive }) => ({
                  color: isActive ? 'var(--nav-link-active-color)' : 'var(--nav-link-color)',
                })}
              >
                <FaCalendarAlt aria-label="Events" style={{marginRight:'5px'}}/> 
                Events
              </Nav.Link>
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
                   <MdRestaurantMenu aria-label="Booking" style={{marginRight:'5px'}}/>
                  Menu
                </Nav.Link>
              )}
              
              {jwtToken ? (
                <NavDropdown
                  title={
                    <span className="email-link">
                      <CgProfile aria-label="Profile" style={{marginRight:'5px'}} />
                      {email}
                    </span>
                  }
                  id="offcanvasNavbarDropdown"
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
                >
                  Login
                </Button>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
