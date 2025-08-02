
// import './whatwedo.css';
// import Corporate_new from './Corporate_new'; 
// import Training from './Training';

// function WhatWeDo() {

//   return (
//     <div>
//       <div className="Our-services-container">
//         <h2 className="Our-services-title">Our Services</h2>
//         <span className="Our-services-description">
//           Our solutions are tailor made to specific requirements of Business & Corporate sectors.
//         </span>
//       </div>

//       <Corporate_new />

//       {/* Corporate Section
//       <div id="corporate-section" className="wedding-section">
//         <div className="wedding-container">
//           <div className="wedding-image">
//             <img src="/images/corporate.jpg" alt="Corporate Services" />
//           </div>
//           <div className="wedding-content">
//             <h1 className="wedding-title">Corporate Services</h1>
//             <p className="wedding-description">
//               AMDDAS FOODS offers a full suite of food solutions tailored for corporate environments, ensuring quality, hygiene, and employee satisfaction.
//               <br /><br />
//               <strong>a) Cafeteria Management</strong><br />
//               End-to-end cafeteria operations including meal planning, hygienic food preparation, and efficient service tailored to employee needs.
//             </p>
            
//             <div id="more-content" style={{ display: 'none' }}>
//               <p className="wedding-description">
//                 <br />
//                 <strong>b) Tuck Shop</strong><br />
//                 Quick snack and beverage counters within office premises offering healthy and indulgent options for mid-day cravings.
//                 <br /><br />
//                 <strong>c) Pop-up Counters</strong><br />
//                 Themed and seasonal food stalls set up for employee engagement, festivals, or special occasions within corporate campuses.
//                 <br /><br />
//                 <strong>d) Corporate Events</strong><br />
//                 Complete food and beverage services for conferences, team outings, annual parties, product launches, and other company events.
//                 <br /><br />
//                 <strong>e) Corporate CSR</strong><br />
//                 Supporting corporate social responsibility initiatives by providing nutritious meals during CSR drives, donation events, and outreach programs.
//               </p>
//             </div>
            
//             <button
//               id="toggle-btn"
//               className="see-more-btn"
//               onClick={() => {
//                 const moreContent = document.getElementById('more-content');
//                 const toggleBtn = document.getElementById('toggle-btn');
                
//                 if (moreContent.style.display === 'none') {
//                   moreContent.style.display = 'block';
//                   toggleBtn.textContent = 'See Less';
//                 } else {
//                   moreContent.style.display = 'none';
//                   toggleBtn.textContent = 'See More';
//                 }
//               }}
//               style={{
//                 backgroundColor: '#f59e0b',
//                 color: 'black',
//                 border: 'none',
//                 padding: '8px 16px',
//                 borderRadius: '5px',
//                 cursor: 'pointer',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 marginBottom: '15px',
//                 marginTop: '10px',
//                 transition: 'background-color 0.3s ease'
//               }}
//             >
//               See More
//             </button>
//           </div>
//         </div>
//       </div> */}

//       {/* Educational Institute Section */}
//       <div id="educational-section" className="wedding-section">
//         <div className="wedding-container">
//           <div className="wedding-content">
//             <h1 className="wedding-title">Educational Institute Catering</h1>
//             <p className="wedding-description">
//               We partner with schools, colleges, and universities to deliver balanced and nutritious meals for students and staff, while maintaining high standards of food safety and taste.
//             </p>
//           </div>
//           <div className="wedding-image">
//             <img src="/images/Catering.jpg" alt="Educational Institute Services" />
//           </div>
//         </div>
//       </div>

//       {/* Hospitals Section */}
//       <div id="hospital-section" className="wedding-section">
//         <div className="wedding-container">
//           <div className="wedding-image">
//             <img src="/images/doctors.jpg" alt="Hospital Services" />
//           </div>
//           <div className="wedding-content">
//             <h1 className="wedding-title">Hospital & Healthcare Catering</h1>
//             <p className="wedding-description">
//               Specialized catering services tailored to hospitals, focusing on dietary needs, medical nutrition standards, and hygienic food preparation for patients, staff, and visitors.
//             </p>
//           </div>
//         </div>
//       </div>

//       <Training/>

//       {/* Training Section */}
//       {/* <div id="training-section" className="wedding-section">
//         <div className="wedding-container">
//           <div className="wedding-content">
//             <h1 className="wedding-title">Training & Workshop Catering</h1>
//             <p className="wedding-description">
//               We don't just serve food – we also nurture talent and build food industry professionals through our robust training programs.
//               <br /><br />
//               <strong>a) Culinary Training</strong><br />
//               Hands-on culinary courses designed to build cooking skills, food knowledge, and kitchen efficiency for aspiring chefs and staff.
//             </p>
            
//             <div id="training-more-content" style={{ display: 'none' }}>
//               <p className="wedding-description">
//                 <br />
//                 <strong>b) Food Handler Training</strong><br />
//                 Hygiene, safety, and food handling best practices training to ensure your team meets FSSAI and quality standards.
//                 <br /><br />
//                 <strong>c) Kitchen Management</strong><br />
//                 Training in managing kitchen operations, inventory control, staff coordination, and cost-effective food production.
//                 <br /><br />
//                 <strong>d) Audit Training</strong><br />
//                 Preparing hospitality teams to meet compliance through internal audits, documentation, and hygiene standard reviews.
//               </p>
//             </div>
            
//             <button
//               id="training-toggle-btn"
//               className="see-more-btn"
//               onClick={() => {
//                 const moreContent = document.getElementById('training-more-content');
//                 const toggleBtn = document.getElementById('training-toggle-btn');
                
//                 if (moreContent.style.display === 'none') {
//                   moreContent.style.display = 'block';
//                   toggleBtn.textContent = 'See Less';
//                 } else {
//                   moreContent.style.display = 'none';
//                   toggleBtn.textContent = 'See More';
//                 }
//               }}
//               style={{
//                 backgroundColor: '#f59e0b',
//                 color: 'black',
//                 border: 'none',
//                 padding: '8px 16px',
//                 borderRadius: '5px',
//                 cursor: 'pointer',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 marginTop: '10px',
//                 transition: 'background-color 0.3s ease'
//               }}
//             >
//               See More
//             </button>
//           </div>
//           <div className="wedding-image">
//             <img src="/images/education1.jpg" alt="Training Services" />
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// }

// export default WhatWeDo;

import React, { useEffect } from 'react';
import './whatwedo.css';
import Corporate_new from './Corporate_new'; 
import Training from './Training';

function WhatWeDo() {

  // Add useEffect to handle smooth scrolling when coming from navbar
  useEffect(() => {
    // Check for scroll targets in sessionStorage
    const scrollTargets = ['Corporate', 'Educational', 'Hospital', 'Training'];
    
    scrollTargets.forEach(target => {
      if (sessionStorage.getItem(`scrollTo${target}`)) {
        // Clear the flag immediately
        sessionStorage.removeItem(`scrollTo${target}`);
        
        // Prevent default scroll behavior and scroll directly to target
        setTimeout(() => {
          const element = document.getElementById(`${target.toLowerCase()}-section`);
          if (element) {
            // Get current scroll position to avoid upward scroll
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const targetPosition = element.offsetTop;
            
            // Only scroll if target is not already in view or if we need to scroll down
            if (Math.abs(currentScrollTop - targetPosition) > 100) {
              // Use direct smooth scroll without allowing upward movement first
              element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
              });
            }
          }
        }, 50); // Reduced delay for faster response
      }
    });
  }, []);

  return (
    <div>
      <div className="Our-services-container">
        <h2 className="Our-services-title">Our Services</h2>
        <span className="Our-services-description">
          Our solutions are tailor made to specific requirements of Business & Corporate sectors.
        </span>
      </div>

      <Corporate_new />

      {/* Corporate Section
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
      </div> */}

      {/* Educational Institute Section */}
      <div id="educational-section" className="wedding-section">
        <div className="wedding-container">
          <div className="wedding-content">
            <h1 className="wedding-title">Educational Institute Catering</h1>
            <p className="wedding-description">
              We partner with schools, colleges, and universities to deliver balanced and nutritious meals for students and staff, while maintaining high standards of food safety and taste.
            </p>
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
          </div>
        </div>
      </div>

      <Training/>

      {/* Training Section */}
      {/* <div id="training-section" className="wedding-section">
        <div className="wedding-container">
          <div className="wedding-content">
            <h1 className="wedding-title">Training & Workshop Catering</h1>
            <p className="wedding-description">
              We don't just serve food – we also nurture talent and build food industry professionals through our robust training programs.
              <br /><br />
              <strong>a) Culinary Training</strong><br />
              Hands-on culinary courses designed to build cooking skills, food knowledge, and kitchen efficiency for aspiring chefs and staff.
            </p>
            
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
      </div> */}
    </div>
  );
}

export default WhatWeDo;