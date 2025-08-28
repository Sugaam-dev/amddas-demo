import React, { useEffect, useRef, useCallback } from "react";
import './Eve-Section1.css';
import { useNavigate } from "react-router-dom";

const EveSection1 = () => {
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const navigate = useNavigate();

  // Animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('animate-in');
      });
    }, observerOptions);

    [headerRef, contentRef, imageRef, textRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [headerRef, contentRef, imageRef, textRef].forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  // Updated scroll to section utility function with proper centering
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const elementHeight = elementRect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate position to center the element in viewport
      const centerPosition = absoluteElementTop - (viewportHeight / 2) + (elementHeight / 2);
      const scrollToPosition = Math.max(0, centerPosition);
      
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  // Button handler with improved centering
  const handleEventsNavigation = useCallback(() => {
    const eventType = 'Wedding';
    const sectionId = `${eventType.toLowerCase()}-section`; // 'wedding-section'
    const currentPath = window.location.pathname;

    if (currentPath === '/events') {
      // If already on the events page, scroll with centering
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100); // Short delay to ensure DOM ready
    } else {
      // Navigate and trigger scroll on next page load
      sessionStorage.setItem('scrollTarget', sectionId);
      navigate('/events');
    }
  }, [navigate, scrollToSection]);

  return (
    <div className="events-section">
      <div className="header-section" ref={headerRef}>
        <div className="container">
          <h1 className="mainn-title">
            We Cater to a Wide Range of Events and Institutions
            <div className="title-underline"></div>
          </h1>
          <p className="main-description">
            AMDDAS is equipped to handle catering for various events and institutions. 
            From corporate cafeterias and educational institutions to weddings and 
            community festivals, we ensure high-quality meals and services tailored to 
            your specific needs. Our experienced team is dedicated to making your event 
            a success.
          </p>
        </div>
      </div>
      <div className="contentt-section" ref={contentRef}>
        <div className="content-container">
          <div className="image-wrapperr" ref={imageRef}>
            <img 
              src="./images/weedingandengagement.webp" 
              alt="Wedding and engagement catering services"
              className="section-image"
            />
          </div>
          <div className="contentt-wrapper" ref={textRef}>
            <h2 className="content-title">
              Weddings and Engagements
              <div className="content-underline"></div>
            </h2>
            <p className="content-description">
              Make your special day unforgettable with our bespoke catering services. We offer customized menus and elegant presentations to create the perfect culinary experience for you and your guests.
            </p>
            <button className="learn-more-btnn" onClick={handleEventsNavigation}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveSection1;
