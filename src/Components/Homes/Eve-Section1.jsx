
import React, { useEffect, useRef } from 'react';
import './Eve-Section1.css';

const EveSection1 = () => {
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

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
    if (headerRef.current) observer.observe(headerRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);

    // Cleanup
    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

    const handleEventsNavigation = () => {
    // Navigate to events page - you can replace this with your routing logic
    window.location.href = '/amddas-events';
  };


  return (
    <div className="events-section">
      {/* Full Width Header Section */}
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

      {/* Content Section with Image */}
      <div className="contentt-section" ref={contentRef}>
        <div className="content-container">
          <div className="image-wrapperr" ref={imageRef}>
            <img 
              src="./images/weeding-and-engagement.jpg" 
              alt="Cafeteria management with professional food service"
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