import React, { useEffect, useRef, useCallback } from 'react';
import './Eve-Section3.css';
import { useNavigate } from 'react-router-dom';

const EveSection3 = () => {
  const primarySectionRef = useRef(null);
  const pictureWrapperRef = useRef(null);
  const detailsWrapperRef = useRef(null);
  const navigate = useNavigate();

  // Constants for scroll behavior (matching other components)
  const SCROLL_DELAY = 800;
  const NAVBAR_HEIGHT = 110;
  const SCROLL_OFFSET = 20;

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements
    if (primarySectionRef.current) observer.observe(primarySectionRef.current);
    if (pictureWrapperRef.current) observer.observe(pictureWrapperRef.current);
    if (detailsWrapperRef.current) observer.observe(detailsWrapperRef.current);

    // Cleanup
    return () => {
      if (primarySectionRef.current) observer.unobserve(primarySectionRef.current);
      if (pictureWrapperRef.current) observer.unobserve(pictureWrapperRef.current);
      if (detailsWrapperRef.current) observer.unobserve(detailsWrapperRef.current);
    };
  }, []);

  // Scroll to section utility function (matching navbar and footer logic)
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

  // Handle Festival navigation using the same logic as navbar and footer
  const handleEventPageNavigation = useCallback(() => {
    const eventType = 'Festival'; // Festival key for Community Festivals
    const sectionId = `${eventType.toLowerCase()}-section`; // Creates 'festival-section'
    const currentPath = window.location.pathname;
    
    if (currentPath === '/events') {
      // If already on events page, scroll to festival section
      scrollToSection(sectionId);
    } else {
      // Navigate to events page and then scroll to festival section
      navigate('/events');
      sessionStorage.setItem('scrollTarget', sectionId);
      setTimeout(() => scrollToSection(sectionId), SCROLL_DELAY);
    }
  }, [navigate, scrollToSection]);

  return (
    <div className="portfolio-section">
      {/* Content Section with Image on Left */}
      <div className="display-content-section" ref={primarySectionRef}>
        <div className="arrangement-container">
          <div className="picture-wrapper" ref={pictureWrapperRef}>
            <img 
              src="./images/Community-Festival.jpg" 
              alt="Community festival catering with diverse food options"
              className="showcase-image"
            />
          </div>
          
          <div className="details-wrapper" ref={detailsWrapperRef}>
            <h2 className="primary-heading">
             Community Festivals and Events
              <div className="primary-underline"></div>
            </h2>
            
            <p className="primary-description">
              Add flavor to your community events with our diverse and exciting catering options. We provide delicious food and efficient service to make your festival a success.
            </p>
            
            <button className="action-button" onClick={handleEventPageNavigation}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveSection3;
