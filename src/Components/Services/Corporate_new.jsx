import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Corporate_new.css';
import { preloadImages } from '../../utils/imageCache';

import cafeterian from './images/Cafeteria Management.webp'
import shop from './images/Tuck Shop.webp'
import pop from './images/popup.webp'
import events from './images/Corporateevent.webp'
import corporate from './images/Corporate CSR.webp'



function CorporateNewPage() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const corporateImages = [
      '/images/corporate.jpg',
      '/images/corporatebanner.jpg',
      '/images/contact.jpg',
      '/images/meal.jpg',
      '/images/service.jpg'
    ];

    preloadImages(corporateImages, {
      delay: 50,
      highPriorityCount: 2,
      onProgress: ({ loaded, total, src, error }) => {
        if (error) {
          console.error(`Failed to cache image: ${src}`);
        }
      }
    }).catch((error) => {
      console.error('Corporate services image caching failed:', error);
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('corporate-animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="corporate-container" id="corporate-section">
      {/* Header Section */}
      <header className="corporate-section-header">
        <h1 className="corporate-main-title">Corporate Services</h1>
        <p className="corporate-main-description">
          <strong>AMDDAS FOODS offers a full suite of food solutions tailored for corporate environments, ensuring quality, hygiene, and employee satisfaction.</strong>
        </p>
      </header>

      {/* Cafeteria Management Section */}
      <section 
        className="corporate-life-section" 
        ref={addToRefs}
      >
        <div className="corporate-container-fluid">
          <div className="row align-items-center g-0">
            <div className="col-lg-6 col-md-12">
              <div className="corporate-image-wrapper">
                <img 
                  src={cafeterian}
                  alt="Modern corporate cafeteria with professional dining setup and hygienic food preparation area" 
                  className="corporate-main-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="corporate-content-wrapper">
                <h2 className="corporate-section-title">Cafeteria Management</h2>
                <p className="corporate-section-subtitle">
                  End-to-end cafeteria operations including meal planning, hygienic food preparation, and efficient service tailored to employee needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tuck Shop Section */}
      <section 
        className="corporate-learning-section" 
        ref={addToRefs}
      >
        <div className="corporate-container-fluid">
          <div className="row align-items-center g-0">
            <div className="col-lg-6 col-md-12 order-lg-1 order-2">
              <div className="corporate-content-wrapper">
                <h2 className="corporate-section-title">Tuck Shop</h2>
                <p className="corporate-section-subtitle">
                  Quick snack and beverage counters within office premises offering healthy and indulgent options for mid-day cravings.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-lg-2 order-1">
              <div className="corporate-image-wrapper">
                <img 
                
                  src={shop}
                  alt="Corporate tuck shop with variety of snacks and beverages for office employees" 
                  className="corporate-main-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pop-up Counters Section */}
      <section 
        className="corporate-life-section" 
        ref={addToRefs}
      >
        <div className="corporate-container-fluid">
          <div className="row align-items-center g-0">
            <div className="col-lg-6 col-md-12">
              <div className="corporate-image-wrapper">
                <img 
            
                  src={pop}
                  alt="Themed pop-up food counter setup for corporate events and festivals" 
                  className="corporate-main-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="corporate-content-wrapper">
                <h2 className="corporate-section-title">Pop-up Counters</h2>
                <p className="corporate-section-subtitle">
                  Themed and seasonal food stalls set up for employee engagement, festivals, or special occasions within corporate campuses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Events Section */}
      <section 
        className="corporate-learning-section" 
        ref={addToRefs}
      >
        <div className="corporate-container-fluid">
          <div className="row align-items-center g-0">
            <div className="col-lg-6 col-md-12 order-lg-1 order-2">
              <div className="corporate-content-wrapper">
                <h2 className="corporate-section-title">Corporate Events</h2>
                <p className="corporate-section-subtitle">
                  Complete food and beverage services for conferences, team outings, annual parties, product launches, and other company events.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-lg-2 order-1">
              <div className="corporate-image-wrapper">
                <img 
                  src={events} 
                  alt="Professional catering setup for corporate events and business conferences" 
                  className="corporate-main-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate CSR Section */}
      <section 
        className="corporate-life-section" 
        ref={addToRefs}
      >
        <div className="corporate-container-fluid">
          <div className="row align-items-center g-0">
            <div className="col-lg-6 col-md-12">
              <div className="corporate-image-wrapper">
                <img 
                  src={corporate}
                  alt="Corporate CSR food service supporting community outreach and donation events" 
                  className="corporate-main-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="corporate-content-wrapper">
                <h2 className="corporate-section-title">Corporate CSR</h2>
                <p className="corporate-section-subtitle">
                  Supporting corporate social responsibility initiatives by providing nutritious meals during CSR drives, donation events, and outreach programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CorporateNewPage;
