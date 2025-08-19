import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../Redux/authActions';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

function Navbarr() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const jwtToken = useSelector((state) => state.auth.token);
  const email = useSelector((state) => state.auth.email);

  const [expanded, setExpanded] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Mobile dropdown states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
  
  // Dropdown timeout for better hover management
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
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
  }, []);

  const handleClose = () => {
    setExpanded(false);
    setMobileServicesOpen(false);
    setMobileEventsOpen(false);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  // Enhanced dropdown handlers - proper single dropdown behavior
  const handleDropdownEnter = (dropdownType) => {
    // Clear any existing timeout
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    
    // Open requested dropdown and close the other
    if (dropdownType === 'services') {
      setServicesOpen(true);
      setEventsOpen(false);
    } else if (dropdownType === 'events') {
      setEventsOpen(true);
      setServicesOpen(false);
    }
  };

  const handleDropdownLeave = (dropdownType) => {
    // Set timeout to close the dropdown after delay
    const timeout = setTimeout(() => {
      if (dropdownType === 'services') {
        setServicesOpen(false);
      } else if (dropdownType === 'events') {
        setEventsOpen(false);
      }
    }, 150); // 150ms delay for better UX
    
    setDropdownTimeout(timeout);
  };

  // Close all dropdowns immediately
  const closeAllDropdowns = () => {
    setServicesOpen(false);
    setEventsOpen(false);
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };

  // Close dropdowns when mouse leaves navigation area
  const handleNavMouseLeave = () => {
    const timeout = setTimeout(() => {
      closeAllDropdowns();
    }, 100);
    setDropdownTimeout(timeout);
  };

  // Simple navigation handlers
  const navigateToPage = (path) => {
    navigate(path);
    setServicesOpen(false);
    setEventsOpen(false);
    handleClose();
  };

  const handleServiceClick = (serviceType) => {
    const currentPath = window.location.pathname;
    if (currentPath === '/what-we-do') {
      const element = document.getElementById(`${serviceType.toLowerCase()}-section`);
      if (element) {
        // Better scroll calculation with navbar offset
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const navbarHeight = 80;
        const offset = 20;
        const scrollToPosition = Math.max(0, absoluteElementTop - navbarHeight - offset);
        
        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth'
        });
      }
    } else {
      navigate('/what-we-do');
      sessionStorage.setItem('scrollTarget', `${serviceType.toLowerCase()}-section`);
      
      setTimeout(() => {
        const element = document.getElementById(`${serviceType.toLowerCase()}-section`);
        if (element) {
          const elementRect = element.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.pageYOffset;
          const navbarHeight = 80;
          const offset = 20;
          const scrollToPosition = Math.max(0, absoluteElementTop - navbarHeight - offset);
          
          window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
          });
        }
      }, 800);
    }
    setServicesOpen(false);
    handleClose();
  };

  const handleEventClick = (eventType) => {
    const currentPath = window.location.pathname;
    if (currentPath === '/amddas-events') {
      const element = document.getElementById(`${eventType.toLowerCase()}-section`);
      if (element) {
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const navbarHeight = 80;
        const offset = 20;
        const scrollToPosition = Math.max(0, absoluteElementTop - navbarHeight - offset);
        
        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth'
        });
      }
    } else {
      navigate('/amddas-events');
      sessionStorage.setItem('scrollTarget', `${eventType.toLowerCase()}-section`);
      
      setTimeout(() => {
        const element = document.getElementById(`${eventType.toLowerCase()}-section`);
        if (element) {
          const elementRect = element.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.pageYOffset;
          const navbarHeight = 80;
          const offset = 20;
          const scrollToPosition = Math.max(0, absoluteElementTop - navbarHeight - offset);
          
          window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
          });
        }
      }, 800);
    }
    setEventsOpen(false);
    handleClose();
  };

  return (
    <div className={`modern-navbar ${scrolled ? 'scrolled' : ''}`}>
      <Navbar expand="lg" className="modern-nav">
        <Container fluid className="modern-container">
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="modern-logo">
            <img src="./images/amd.png" alt="AMDDAS FOODS" className="logo-img" />
          </Navbar.Brand>

          {/* Mobile Toggle */}
          <button 
            className="modern-mobile-toggle d-lg-none"
            onClick={() => setExpanded(!expanded)}
          >
            <CiMenuBurger size={24} />
          </button>

          {/* Desktop Navigation with perfect alignment */}
          <div 
            className="modern-nav-menu d-none d-lg-flex"
            onMouseLeave={handleNavMouseLeave}
          >
            {/* About */}
            <Link to="/about" className="modern-nav-item">
              About Us
            </Link>

            {/* Services with Dropdown */}
            <div 
              className={`modern-dropdown ${servicesOpen ? 'active' : ''}`}
              onMouseEnter={() => handleDropdownEnter('services')}
              onMouseLeave={() => handleDropdownLeave('services')}
            >
              <button 
                className="modern-dropdown-btn"
                onClick={() => navigateToPage('/what-we-do')}
              >
                Services <FaChevronDown size={10} />
              </button>
              {servicesOpen && (
                <div 
                  className="modern-dropdown-menu"
                  onMouseEnter={() => handleDropdownEnter('services')}
                  onMouseLeave={() => handleDropdownLeave('services')}
                >
                  <button onClick={() => handleServiceClick('Corporate')}>Corporate</button>
                  <button onClick={() => handleServiceClick('Educational')}>Educational Institute</button>
                  <button onClick={() => handleServiceClick('Hospital')}>Hospitals</button>
                  <button onClick={() => handleServiceClick('Training')}>Training</button>
                </div>
              )}
            </div>

            {/* Events with Dropdown */}
            <div 
              className={`modern-dropdown ${eventsOpen ? 'active' : ''}`}
              onMouseEnter={() => handleDropdownEnter('events')}
              onMouseLeave={() => handleDropdownLeave('events')}
            >
              <button 
                className="modern-dropdown-btn"
                onClick={() => navigateToPage('/amddas-events')}
              >
                Events <FaChevronDown size={10} />
              </button>
              {eventsOpen && (
                <div 
                  className="modern-dropdown-menu"
                  onMouseEnter={() => handleDropdownEnter('events')}
                  onMouseLeave={() => handleDropdownLeave('events')}
                >
                  <button onClick={() => handleEventClick('Wedding')}>Wedding</button>
                  <button onClick={() => handleEventClick('Housewarming')}>House Warming</button>
                  <button onClick={() => handleEventClick('Birthday')}>Birthday</button>
                  <button onClick={() => handleEventClick('Engagement')}>Engagement</button>
                  <button onClick={() => handleEventClick('Festival')}>Community Festivals</button>
                  <button onClick={() => handleEventClick('Bhandaara')}>Bhandaara</button>
                </div>
              )}
            </div>

            {/* Other Links */}
            <Link to="/why-us" className="modern-nav-item">Why Us</Link>
            <Link to="/festivals" className="modern-nav-item">Festivals</Link>
            <Link to="/contact" className="modern-nav-item modern-contact-btn">Contact Us</Link>
          </div>

          {/* Social + Location */}
          <div className="modern-social-section d-none d-lg-flex">
            <div className="modern-social-icons">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
            <div className="modern-divider"></div>
            <div className="modern-location">
              <MdLocationOn /> India
            </div>
          </div>

          {/* Mobile Menu with Separate Click Areas */}
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
                {/* About */}
                <Link to="/about" className="modern-mobile-item" onClick={handleClose}>
                  About Us
                </Link>

                {/* Services with Separate Click Areas */}
                <div className="modern-mobile-dropdown">
                  <div className="modern-mobile-dropdown-header">
                    {/* Main Services Link */}
                    <span 
                      className="modern-mobile-main-link"
                      onClick={() => navigateToPage('/what-we-do')}
                    >
                      Services
                    </span>
                    {/* Dropdown Toggle Button */}
                    <button 
                      className="modern-mobile-toggle-btn"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    >
                      {mobileServicesOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                    </button>
                  </div>
                  {mobileServicesOpen && (
                    <div className="modern-mobile-submenu">
                      <button onClick={() => handleServiceClick('Corporate')}>Corporate</button>
                      <button onClick={() => handleServiceClick('Educational')}>Educational Institute</button>
                      <button onClick={() => handleServiceClick('Hospital')}>Hospitals</button>
                      <button onClick={() => handleServiceClick('Training')}>Training</button>
                    </div>
                  )}
                </div>

                {/* Events with Separate Click Areas */}
                <div className="modern-mobile-dropdown">
                  <div className="modern-mobile-dropdown-header">
                    {/* Main Events Link */}
                    <span 
                      className="modern-mobile-main-link"
                      onClick={() => navigateToPage('/amddas-events')}
                    >
                      Events
                    </span>
                    {/* Dropdown Toggle Button */}
                    <button 
                      className="modern-mobile-toggle-btn"
                      onClick={() => setMobileEventsOpen(!mobileEventsOpen)}
                    >
                      {mobileEventsOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                    </button>
                  </div>
                  {mobileEventsOpen && (
                    <div className="modern-mobile-submenu">
                      <button onClick={() => handleEventClick('Wedding')}>Wedding</button>
                      <button onClick={() => handleEventClick('Housewarming')}>House Warming</button>
                      <button onClick={() => handleEventClick('Birthday')}>Birthday</button>
                      <button onClick={() => handleEventClick('Engagement')}>Engagement</button>
                      <button onClick={() => handleEventClick('Festival')}>Community Festivals</button>
                      <button onClick={() => handleEventClick('Bhandaara')}>Bhandaara</button>
                    </div>
                  )}
                </div>

                {/* Other Links */}
                <Link to="/why-us" className="modern-mobile-item" onClick={handleClose}>
                  Why Us
                </Link>
                <Link to="/festivals" className="modern-mobile-item" onClick={handleClose}>
                  Festivals
                </Link>
                <Link to="/contact" className="modern-mobile-item modern-mobile-contact" onClick={handleClose}>
                  Contact Us
                </Link>
              </div>
              
              {/* Mobile Social */}
              <div className="modern-mobile-social">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
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








// import React, { useState, useEffect } from 'react';
// import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../Styles/Navbar.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { logoutUser } from '../Redux/authActions';
// import { useNavigate, Link, NavLink } from 'react-router-dom';
// import { CiMenuBurger } from "react-icons/ci";
// import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaChevronDown, FaChevronUp } from 'react-icons/fa';
// import { MdLocationOn } from 'react-icons/md';

// function Navbarr() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const jwtToken = useSelector((state) => state.auth.token);
//   const email = useSelector((state) => state.auth.email);

//   const [expanded, setExpanded] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [eventsOpen, setEventsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
  
//   // Mobile dropdown states
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
//   const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
  
//   // Dropdown timeout for better hover management
//   const [dropdownTimeout, setDropdownTimeout] = useState(null);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       const navMenu = document.querySelector('.modern-nav-menu');
//       if (navMenu && !navMenu.contains(event.target)) {
//         closeAllDropdowns();
//       }
//     };

//     const handleEscapeKey = (event) => {
//       if (event.key === 'Escape') {
//         closeAllDropdowns();
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     document.addEventListener('keydown', handleEscapeKey);
    
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//       document.removeEventListener('keydown', handleEscapeKey);
//     };
//   }, []);

//   const handleClose = () => {
//     setExpanded(false);
//     setMobileServicesOpen(false);
//     setMobileEventsOpen(false);
//   };

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     navigate('/login');
//   };

//   // Enhanced dropdown handlers - proper single dropdown behavior
//   const handleDropdownEnter = (dropdownType) => {
//     // Clear any existing timeout
//     if (dropdownTimeout) {
//       clearTimeout(dropdownTimeout);
//       setDropdownTimeout(null);
//     }
    
//     // Open requested dropdown and close the other
//     if (dropdownType === 'services') {
//       setServicesOpen(true);
//       setEventsOpen(false);
//     } else if (dropdownType === 'events') {
//       setEventsOpen(true);
//       setServicesOpen(false);
//     }
//   };

//   const handleDropdownLeave = (dropdownType) => {
//     // Set timeout to close the dropdown after delay
//     const timeout = setTimeout(() => {
//       if (dropdownType === 'services') {
//         setServicesOpen(false);
//       } else if (dropdownType === 'events') {
//         setEventsOpen(false);
//       }
//     }, 150); // 150ms delay for better UX
    
//     setDropdownTimeout(timeout);
//   };

//   // Close all dropdowns immediately
//   const closeAllDropdowns = () => {
//     setServicesOpen(false);
//     setEventsOpen(false);
//     if (dropdownTimeout) {
//       clearTimeout(dropdownTimeout);
//       setDropdownTimeout(null);
//     }
//   };

//   // Close dropdowns when mouse leaves navigation area
//   const handleNavMouseLeave = () => {
//     const timeout = setTimeout(() => {
//       closeAllDropdowns();
//     }, 100);
//     setDropdownTimeout(timeout);
//   };

//   // Simple navigation handlers
//   const navigateToPage = (path) => {
//     navigate(path);
//     setServicesOpen(false);
//     setEventsOpen(false);
//     handleClose();
//   };

//   const handleServiceClick = (serviceType) => {
//     const currentPath = window.location.pathname;
//     if (currentPath === '/what-we-do') {
//       const element = document.getElementById(`${serviceType.toLowerCase()}-section`);
//       if (element) {
//         // Better scroll calculation with navbar offset
//         const elementRect = element.getBoundingClientRect();
//         const absoluteElementTop = elementRect.top + window.pageYOffset;
//         const navbarHeight = 110; // Updated for new navbar height
//         const offset = 20;
//         const scrollToPosition = Math.max(0, absoluteElementTop - navbarHeight - offset);
        
//         window.scrollTo({
//           top: scrollToPosition,
//           behavior: 'smooth'
//         });
//       }
//     } else {
//       navigate('/what-we-do');
//       sessionStorage.setItem('scrollTarget', `${serviceType.toLowerCase()}-section`);
      
//       setTimeout(() => {
//         const element = document.getElementById(`${serviceType.toLowerCase()}-section`);
//         if (element) {
//           const elementRect = element.getBoundingClientRect();
//           const absoluteElementTop = elementRect.top + window.pageYOffset;
//           const navbarHeight = 110; // Updated for new navbar height
//           const offset = 20;
//           const scrollToPosition = Math.max(0, absoluteElementTop - navbarHeight - offset);
          
//           window.scrollTo({
//             top: scrollToPosition,
//             behavior: 'smooth'
//           });
//         }
//       }, 800);
//     }
//     setServicesOpen(false);
//     handleClose();
//   };

//   const handleEventClick = (eventType) => {
//     const currentPath = window.location.pathname;
//     if (currentPath === '/amddas-events') {
//       const element = document.getElementById(`${eventType.toLowerCase()}-section`);
//       if (element) {
//         const elementRect = element.getBoundingClientRect();
//         const absoluteElementTop = elementRect.top + window.pageYOffset;
//         const navbarHeight = 110; // Updated for new navbar height
//         const offset = 20;
//         const scrollToPosition = Math.max(0, absoluteElementTop - navbarHeight - offset);
        
//         window.scrollTo({
//           top: scrollToPosition,
//           behavior: 'smooth'
//         });
//       }
//     } else {
//       navigate('/amddas-events');
//       sessionStorage.setItem('scrollTarget', `${eventType.toLowerCase()}-section`);
      
//       setTimeout(() => {
//         const element = document.getElementById(`${eventType.toLowerCase()}-section`);
//         if (element) {
//           const elementRect = element.getBoundingClientRect();
//           const absoluteElementTop = elementRect.top + window.pageYOffset;
//           const navbarHeight = 110; // Updated for new navbar height
//           const offset = 20;
//           const scrollToPosition = Math.max(0, absoluteElementTop - navbarHeight - offset);
          
//           window.scrollTo({
//             top: scrollToPosition,
//             behavior: 'smooth'
//           });
//         }
//       }, 800);
//     }
//     setEventsOpen(false);
//     handleClose();
//   };

//   return (
//     <div className={`modern-navbar ${scrolled ? 'scrolled' : ''}`}>
//       {/* Navbar Background - positioned behind logo */}
//       <div className="modern-navbar-bg"></div>
      
//       <Navbar expand="lg" className="modern-nav">
//         <Container fluid className="modern-container">
//           {/* Logo - Now with overflow effect */}
//           <Navbar.Brand as={Link} to="/" className="modern-logo">
//             <img src="./images/amd.png" alt="AMDDAS FOODS" className="logo-img" />
//           </Navbar.Brand>

//           {/* Mobile Toggle */}
//           <button 
//             className="modern-mobile-toggle d-lg-none"
//             onClick={() => setExpanded(!expanded)}
//           >
//             <CiMenuBurger size={24} />
//           </button>

//           {/* Desktop Navigation with perfect alignment */}
//           <div 
//             className="modern-nav-menu d-none d-lg-flex"
//             onMouseLeave={handleNavMouseLeave}
//           >
//             {/* About */}
//             <Link to="/about" className="modern-nav-item">
//               About Us
//             </Link>

//             {/* Services with Dropdown */}
//             <div 
//               className={`modern-dropdown ${servicesOpen ? 'active' : ''}`}
//               onMouseEnter={() => handleDropdownEnter('services')}
//               onMouseLeave={() => handleDropdownLeave('services')}
//             >
//               <button 
//                 className="modern-dropdown-btn"
//                 onClick={() => navigateToPage('/what-we-do')}
//               >
//                 Services <FaChevronDown size={10} />
//               </button>
//               {servicesOpen && (
//                 <div 
//                   className="modern-dropdown-menu"
//                   onMouseEnter={() => handleDropdownEnter('services')}
//                   onMouseLeave={() => handleDropdownLeave('services')}
//                 >
//                   <button onClick={() => handleServiceClick('Corporate')}>Corporate</button>
//                   <button onClick={() => handleServiceClick('Educational')}>Educational Institute</button>
//                   <button onClick={() => handleServiceClick('Hospital')}>Hospitals</button>
//                   <button onClick={() => handleServiceClick('Training')}>Training</button>
//                 </div>
//               )}
//             </div>

//             {/* Events with Dropdown */}
//             <div 
//               className={`modern-dropdown ${eventsOpen ? 'active' : ''}`}
//               onMouseEnter={() => handleDropdownEnter('events')}
//               onMouseLeave={() => handleDropdownLeave('events')}
//             >
//               <button 
//                 className="modern-dropdown-btn"
//                 onClick={() => navigateToPage('/amddas-events')}
//               >
//                 Events <FaChevronDown size={10} />
//               </button>
//               {eventsOpen && (
//                 <div 
//                   className="modern-dropdown-menu"
//                   onMouseEnter={() => handleDropdownEnter('events')}
//                   onMouseLeave={() => handleDropdownLeave('events')}
//                 >
//                   <button onClick={() => handleEventClick('Wedding')}>Wedding</button>
//                   <button onClick={() => handleEventClick('Housewarming')}>House Warming</button>
//                   <button onClick={() => handleEventClick('Birthday')}>Birthday</button>
//                   <button onClick={() => handleEventClick('Engagement')}>Engagement</button>
//                   <button onClick={() => handleEventClick('Festival')}>Community Festivals</button>
//                   <button onClick={() => handleEventClick('Bhandaara')}>Bhandaara</button>
//                 </div>
//               )}
//             </div>

//             {/* Other Links */}
//             <Link to="/why-us" className="modern-nav-item">Why Us</Link>
//             <Link to="/festivals" className="modern-nav-item">Festivals</Link>
//             <Link to="/contact" className="modern-nav-item modern-contact-btn">Contact Us</Link>
//           </div>

//           {/* Social + Location */}
//           <div className="modern-social-section d-none d-lg-flex">
//             <div className="modern-social-icons">
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//               <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
//             </div>
//             <div className="modern-divider"></div>
//             <div className="modern-location">
//               <MdLocationOn /> India
//             </div>
//           </div>

//           {/* Mobile Menu with Separate Click Areas */}
//           <Navbar.Offcanvas
//             show={expanded}
//             onHide={handleClose}
//             placement="end"
//             className="d-lg-none modern-offcanvas"
//           >
//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title>
//                 <img src="./images/amd.png" alt="AMDDAS FOODS" style={{width: "50px"}} />
//               </Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               <div className="modern-mobile-menu">
//                 {/* About */}
//                 <Link to="/about" className="modern-mobile-item" onClick={handleClose}>
//                   About Us
//                 </Link>

//                 {/* Services with Separate Click Areas */}
//                 <div className="modern-mobile-dropdown">
//                   <div className="modern-mobile-dropdown-header">
//                     {/* Main Services Link */}
//                     <span 
//                       className="modern-mobile-main-link"
//                       onClick={() => navigateToPage('/what-we-do')}
//                     >
//                       Services
//                     </span>
//                     {/* Dropdown Toggle Button */}
//                     <button 
//                       className="modern-mobile-toggle-btn"
//                       onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
//                     >
//                       {mobileServicesOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
//                     </button>
//                   </div>
//                   {mobileServicesOpen && (
//                     <div className="modern-mobile-submenu">
//                       <button onClick={() => handleServiceClick('Corporate')}>Corporate</button>
//                       <button onClick={() => handleServiceClick('Educational')}>Educational Institute</button>
//                       <button onClick={() => handleServiceClick('Hospital')}>Hospitals</button>
//                       <button onClick={() => handleServiceClick('Training')}>Training</button>
//                     </div>
//                   )}
//                 </div>

//                 {/* Events with Separate Click Areas */}
//                 <div className="modern-mobile-dropdown">
//                   <div className="modern-mobile-dropdown-header">
//                     {/* Main Events Link */}
//                     <span 
//                       className="modern-mobile-main-link"
//                       onClick={() => navigateToPage('/amddas-events')}
//                     >
//                       Events
//                     </span>
//                     {/* Dropdown Toggle Button */}
//                     <button 
//                       className="modern-mobile-toggle-btn"
//                       onClick={() => setMobileEventsOpen(!mobileEventsOpen)}
//                     >
//                       {mobileEventsOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
//                     </button>
//                   </div>
//                   {mobileEventsOpen && (
//                     <div className="modern-mobile-submenu">
//                       <button onClick={() => handleEventClick('Wedding')}>Wedding</button>
//                       <button onClick={() => handleEventClick('Housewarming')}>House Warming</button>
//                       <button onClick={() => handleEventClick('Birthday')}>Birthday</button>
//                       <button onClick={() => handleEventClick('Engagement')}>Engagement</button>
//                       <button onClick={() => handleEventClick('Festival')}>Community Festivals</button>
//                       <button onClick={() => handleEventClick('Bhandaara')}>Bhandaara</button>
//                     </div>
//                   )}
//                 </div>

//                 {/* Other Links */}
//                 <Link to="/why-us" className="modern-mobile-item" onClick={handleClose}>
//                   Why Us
//                 </Link>
//                 <Link to="/festivals" className="modern-mobile-item" onClick={handleClose}>
//                   Festivals
//                 </Link>
//                 <Link to="/contact" className="modern-mobile-item modern-mobile-contact" onClick={handleClose}>
//                   Contact Us
//                 </Link>
//               </div>
              
//               {/* Mobile Social */}
//               <div className="modern-mobile-social">
//                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
//                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
//                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//                 <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
//               </div>
              
//               <div className="modern-mobile-location">
//                 <MdLocationOn /> India
//               </div>
//             </Offcanvas.Body>
//           </Navbar.Offcanvas>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

// export default Navbarr;

