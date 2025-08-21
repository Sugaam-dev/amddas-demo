// App.jsx
import './App.css';
import './ScrollAnimations.css'; // Add scroll animations CSS

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Home from './Components/Homes/Home';

import Navbarr from './Components/Navbar';
import Error from './Components/Error';


// import Foot from './Components/Footers/Foot';
import PrivacyPolicy from './Components/PrivacyPolicy';
// import DeleteAccount from './Components/DeleteAccount';

import About from './Components/Abouts/About';
import Gallery from './Components/Homes/Gallery';
import Events from "./Components/Events/Events";


import WhatWeDo from './Components/Services/WhatWeDo';



import Contact from './Components/Contacts/Contact';

import Why_Us from './Components/WhyUs/Why_Us';
import Festivals from './Components/Festivals/Festivals';
import Footerr from './Components/Footer/Footerr'; // Import the new footer component
import WhatsAppFloat from './Components/SubComponents/WhatsAppFloat';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top instantly when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'smooth' if you want animated scrolling
    });
  }, [pathname]);

  return null; // This component doesn't render anything
}

// Scroll Animation Observer Component
function ScrollAnimationObserver() {
  useEffect(() => {
    // Initialize scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: Log which element is animating (remove in production)
          console.log('Element animated:', entry.target.className);
        }
      });
    }, observerOptions);

    // Function to observe elements
    const observeElements = () => {
      const animatedElements = document.querySelectorAll(`
        .fade-in-up,
        .fade-in-down,
        .fade-in-left,
        .fade-in-right,
        .scale-in,
        .slide-in-up,
        .slide-in-left,
        .slide-in-right,
        .animate-on-scroll
      `);

      animatedElements.forEach((el) => {
        observer.observe(el);
      });
    };

    // Initial observation
    observeElements();

    // Re-observe elements when new content is loaded (for dynamic content)
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Cleanup
    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Add ScrollToTop component here - it must be inside BrowserRouter */}
      <ScrollAnimationObserver /> {/* Add scroll animation observer */}
      <Navbarr />
      {/* <Nav/> */}

      <Routes>
        <Route path='/' element={<Home/>}/>
      
        {/* <Route path='/login' element={<Log />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/getotp' element={<Otp />} /> */}
        {/* <Route path='/forgot-password' element={<Forget />} />
        <Route path='/done' element={<Done />} />
        <Route path='/verify-otp' element={<Otpforget />} />
        <Route path='/confirmpassword' element={<Cnfpassword />} /> */}
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/amddas-gallery' element={<Gallery/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/services' element={<WhatWeDo/>}/>

       
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/why-us" element={<Why_Us />} />
        <Route path="/festivals" element={<Festivals />} />

      
       

        {/* Catch-all Route for Undefined Paths */}
        <Route path='/*' element={<Error />} />
      </Routes>
      <WhatsAppFloat/>
      <Footerr />
    </BrowserRouter>
  );
}

export default App;