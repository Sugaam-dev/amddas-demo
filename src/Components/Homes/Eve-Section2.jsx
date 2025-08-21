import React, { useEffect, useRef, useCallback } from 'react';
import './Eve-Section2.css';
import { useNavigate } from 'react-router-dom';

const EveSection2 = () => {
  const mainSectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const contentContainerRef = useRef(null);
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
    if (mainSectionRef.current) observer.observe(mainSectionRef.current);
    if (imageContainerRef.current) observer.observe(imageContainerRef.current);
    if (contentContainerRef.current) observer.observe(contentContainerRef.current);

    // Cleanup
    return () => {
      if (mainSectionRef.current) observer.unobserve(mainSectionRef.current);
      if (imageContainerRef.current) observer.unobserve(imageContainerRef.current);
      if (contentContainerRef.current) observer.unobserve(contentContainerRef.current);
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

  // Handle Wedding navigation using the same logic as navbar and footer
  const handleEventsNavigation = useCallback(() => {
    const eventType = 'Corporate'; // Wedding key
    const sectionId = `${eventType.toLowerCase()}-section`; // Creates 'wedding-section'
    const currentPath = window.location.pathname;
    
    if (currentPath === '/services') {
      // If already on events page, scroll to wedding section
      scrollToSection(sectionId);
    } else {
      // Navigate to events page and then scroll to wedding section
      navigate('/services');
      sessionStorage.setItem('scrollTarget', sectionId);
      setTimeout(() => scrollToSection(sectionId), SCROLL_DELAY);
    }
  }, [navigate, scrollToSection]);

  return (
    <div className="services-section">
      {/* Content Section with Image on Right */}
      <div className="main-content-section" ref={mainSectionRef}>
        <div className="layout-container">
          <div className="text-content-wrapper" ref={contentContainerRef}>
            <h2 className="section-heading">
              Corporate Event Catering Solutions
              <div className="heading-underline"></div>
            </h2>
            
            <p className="section-text">
             Provide your employees with nutritious and delicious meals that boost productivity and morale. We offer flexible catering solutions tailored to your company's needs and budget
            </p>
            <button className="cta-buttonn" onClick={handleEventsNavigation}>
              Learn More
            </button>
          </div>
          
          <div className="image-container" ref={imageContainerRef}>
            <img 
              src="./images/Corporate-Events.jpg" 
              alt="Corporate event catering with professional food service"
              className="feature-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveSection2;
