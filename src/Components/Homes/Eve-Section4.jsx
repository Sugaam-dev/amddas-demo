import React, { useEffect, useRef, useCallback } from 'react';
import './Eve-Section4.css';
import { useNavigate } from 'react-router-dom';

const EveSection4 = () => {
  const bannerRef = useRef(null);
  const featureRef = useRef(null);
  const mediaRef = useRef(null);
  const infoRef = useRef(null);
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
    if (bannerRef.current) observer.observe(bannerRef.current);
    if (featureRef.current) observer.observe(featureRef.current);
    if (mediaRef.current) observer.observe(mediaRef.current);
    if (infoRef.current) observer.observe(infoRef.current);

    // Cleanup
    return () => {
      if (bannerRef.current) observer.unobserve(bannerRef.current);
      if (featureRef.current) observer.unobserve(featureRef.current);
      if (mediaRef.current) observer.unobserve(mediaRef.current);
      if (infoRef.current) observer.unobserve(infoRef.current);
    };
  }, []);

// Scroll to section utility function with improved centering
const scrollToSection = useCallback((sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.pageYOffset;
    const elementHeight = elementRect.height;
    const viewportHeight = window.innerHeight;
    
    // Calculate position to center the element
    const centerPosition = absoluteElementTop - (viewportHeight / 2) + (elementHeight / 2);
    const scrollToPosition = Math.max(0, centerPosition);
    
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });
  }
}, []);


  // Handle Training navigation using the same logic as navbar and footer
  const handleEventsRedirect = useCallback(() => {
    const sectionId = 'culinary-training-section'; // Specific section ID
    const currentPath = window.location.pathname;
    
    if (currentPath === '/services') {
      // If already on services page, scroll to culinary training section
      scrollToSection(sectionId);
    } else {
      // Navigate to services page and then scroll to culinary training section
      navigate('/services');
      sessionStorage.setItem('scrollTarget', sectionId);
      setTimeout(() => scrollToSection(sectionId), SCROLL_DELAY);
    }
  }, [navigate, scrollToSection]);

  return (
    <div className="showcase-section">
      {/* Full Width Header Section */}
      <div className="banner-section" ref={bannerRef}>
        <div className="wrapper">
          <h1 className="Head-title">
            Elevate Your Skills with Our Expert Training Programs
            <div className="hero-underline"></div>
          </h1>
          
          <p className="hero-description">
            AMDDAS offers comprehensive training programs designed to equip you with the skills and knowledge needed to excel in the culinary arts and food service industry. Our courses cover everything from basic cooking techniques to advanced kitchen management, ensuring you're ready for any challenge. Join us and take your career to the next level!
          </p>
        </div>
      </div>

      {/* Content Section with Image */}
      <div className="feature-section" ref={featureRef}>
        <div className="feature-container">
          <div className="media-wrapper" ref={mediaRef}>
            <img 
              src="./images/Culinary-Arts-Fundamentals.jpeg" 
              alt="Culinary Arts Fundamentals training program with professional cooking"
              className="feature-media"
            />
          </div>
          
          <div className="info-wrapper" ref={infoRef}>
            <h2 className="feature-title">
              Culinary Arts Fundamentals
              <div className="feature-underline"></div>
            </h2>
            
            <p className="feature-text">
              Master the essential techniques of cooking, baking, and pastry arts. Our program provides a solid foundation for a successful culinary career. Learn from industry experts and refine your skills.
            </p>
            
            <button className="discover-btn" onClick={handleEventsRedirect}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveSection4;
