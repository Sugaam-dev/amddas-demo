import React, { useEffect, useState } from 'react';
import '../Styles/whatwedo.css';
import Corporate from './SubComponents/Corporate';

function WhatWeDo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);

    // Function to handle scrolling to specific sections
    const handleSectionScroll = () => {
      // Check all possible scroll flags in sessionStorage
      const scrollFlags = [
        { key: 'scrollToCorporate', sectionId: 'corporate-section' },
        { key: 'scrollToEducational', sectionId: 'educational-section' },
        { key: 'scrollToHospital', sectionId: 'hospital-section' },
        { key: 'scrollToTraining', sectionId: 'training-section' }
      ];

      scrollFlags.forEach(({ key, sectionId }) => {
        const shouldScroll = sessionStorage.getItem(key);
        if (shouldScroll === 'true') {
          sessionStorage.removeItem(key);
          setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
              element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }
          }, 500);
        }
      });
    };

    // Handle URL hash-based scrolling
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 500);
      }
    };

    // Execute scroll handlers
    handleSectionScroll();
    handleHashScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const phoneNumber = '+919632764963'; 
  const whatsappURL = `https://wa.me/${phoneNumber.replace('+', '')}?text=Hello%20Amddas%20Foods!%20I%20would%20like%20to%20enquire%20about%20your%20services.`;

  const handleEnquireClick = () => {
    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      window.open(whatsappURL, '_blank');
    }
  };

  return (
    <div>
      <div className="Our-services-container">
        <h2 className="Our-services-title">Our Services</h2>
        <span className="Our-services-description">
          Our solutions are tailor made to specific requirements of Business & Corporate sectors.
        </span>
      </div>

      {/* Corporate Section */}
      <div id="corporate-section" className="wedding-section">
        <div className="wedding-container">
          <div className="wedding-image">
            <img src="/images/corporate.jpg" alt="Corporate Services" />
          </div>
          <div className="wedding-content">
            <h1 className="wedding-title">Corporate Services</h1>
            <p className="wedding-description">
              AMDDAS FOODS offers a full suite of food solutions tailored for corporate environments, ensuring quality, hygiene, and employee satisfaction.
              <br /><br />
              <strong>a) Cafeteria Management</strong><br />
              End-to-end cafeteria operations including meal planning, hygienic food preparation, and efficient service tailored to employee needs.
            </p>
            
            {/* Hidden content that will be shown when "See More" is clicked */}
            <div id="more-content" style={{ display: 'none' }}>
              <p className="wedding-description">
                <br />
                <strong>b) Tuck Shop</strong><br />
                Quick snack and beverage counters within office premises offering healthy and indulgent options for mid-day cravings.
                <br /><br />
                <strong>c) Pop-up Counters</strong><br />
                Themed and seasonal food stalls set up for employee engagement, festivals, or special occasions within corporate campuses.
                <br /><br />
                <strong>d) Corporate Events</strong><br />
                Complete food and beverage services for conferences, team outings, annual parties, product launches, and other company events.
                <br /><br />
                <strong>e) Corporate CSR</strong><br />
                Supporting corporate social responsibility initiatives by providing nutritious meals during CSR drives, donation events, and outreach programs.
              </p>
            </div>
            
            {/* See More / See Less Button */}
            <button
              id="toggle-btn"
              className="see-more-btn"
              onClick={() => {
                const moreContent = document.getElementById('more-content');
                const toggleBtn = document.getElementById('toggle-btn');
                
                if (moreContent.style.display === 'none') {
                  moreContent.style.display = 'block';
                  toggleBtn.textContent = 'See Less';
                } else {
                  moreContent.style.display = 'none';
                  toggleBtn.textContent = 'See More';
                }
              }}
              style={{
                backgroundColor: '#f59e0b',
                color: 'black',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                marginBottom: '15px',
                marginTop: '10px',
                transition: 'background-color 0.3s ease'
              }}
            >
              See More
            </button>
          </div>
        </div>
      </div>

      {/* Educational Institute Section */}
      <div id="educational-section" className="wedding-section">
        <div className="wedding-container">
          <div className="wedding-content">
            <h1 className="wedding-title">Educational Institute Catering</h1>
            <p className="wedding-description">
            We partner with schools, colleges, and universities to deliver balanced and nutritious meals for students and staff, while maintaining high standards of food safety and taste..
            </p>
            {/* <button
              className="enquire-now wedding-enquire"
              onClick={handleEnquireClick}
            >
              Enquire Now
            </button> */}
          </div>
          <div className="wedding-image">
            <img src="/images/Catering.jpg" alt="Educational Institute Services" />
          </div>
        </div>
      </div>

      {/* Hospitals Section */}
      <div id="hospital-section" className="wedding-section">
        <div className="wedding-container">
          <div className="wedding-image">
            <img src="/images/doctors.jpg" alt="Hospital Services" />
          </div>
          <div className="wedding-content">
            <h1 className="wedding-title">Hospital & Healthcare Catering</h1>
            <p className="wedding-description">
            Specialized catering services tailored to hospitals, focusing on dietary needs, medical nutrition standards, and hygienic food preparation for patients, staff, and visitors.
            </p>
            {/* <button
              className="enquire-now wedding-enquire"
              onClick={handleEnquireClick}
            >
              Enquire Now
            </button> */}
          </div>
        </div>
      </div>

      {/* Training Section */}
      <div id="training-section" className="wedding-section">
          <div className="wedding-container">
            <div className="wedding-content">
              <h1 className="wedding-title">Training & Workshop Catering</h1>
              <p className="wedding-description">
                We don't just serve food – we also nurture talent and build food industry professionals through our robust training programs.
                <br /><br />
                <strong>a) Culinary Training</strong><br />
                Hands-on culinary courses designed to build cooking skills, food knowledge, and kitchen efficiency for aspiring chefs and staff.
              </p>
              
              {/* Hidden content that will be shown when "See More" is clicked */}
              <div id="training-more-content" style={{ display: 'none' }}>
                <p className="wedding-description">
                  <br />
                  <strong>b) Food Handler Training</strong><br />
                  Hygiene, safety, and food handling best practices training to ensure your team meets FSSAI and quality standards.
                  <br /><br />
                  <strong>c) Kitchen Management</strong><br />
                  Training in managing kitchen operations, inventory control, staff coordination, and cost-effective food production.
                  <br /><br />
                  <strong>d) Audit Training</strong><br />
                  Preparing hospitality teams to meet compliance through internal audits, documentation, and hygiene standard reviews.
                </p>
              </div>
              
              {/* See More / See Less Button */}
              <button
                id="training-toggle-btn"
                className="see-more-btn"
                onClick={() => {
                  const moreContent = document.getElementById('training-more-content');
                  const toggleBtn = document.getElementById('training-toggle-btn');
                  
                  if (moreContent.style.display === 'none') {
                    moreContent.style.display = 'block';
                    toggleBtn.textContent = 'See Less';
                  } else {
                    moreContent.style.display = 'none';
                    toggleBtn.textContent = 'See More';
                  }
                }}
                style={{
                  backgroundColor: '#f59e0b',
                  color: 'black',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginTop: '10px',
                  transition: 'background-color 0.3s ease'
                }}
              >
                See More
              </button>
            </div>
            <div className="wedding-image">
              <img src="/images/education1.jpg" alt="Training Services" />
            </div>
          </div>
        </div>
    </div>
  );
}

export default WhatWeDo;