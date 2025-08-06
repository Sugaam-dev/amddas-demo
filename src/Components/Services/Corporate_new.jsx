import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Corporate_new.css';
// Import centralized caching system
import { preloadImages } from '../../utils/imageCache';

function CorporateNewPage() {
  useEffect(() => {
    // ===== CENTRALIZED IMAGE CACHING =====
    // To disable caching: Comment out the preloadImages call below
    // To enable caching: Uncomment the preloadImages call below
    
    const corporateImages = [
      '/images/corporate.jpg',
      '/images/corporatebanner.jpg',
      '/images/contact.jpg',
      '/images/meal.jpg',
      '/images/service.jpg'
    ];

    // UNCOMMENT BELOW TO ENABLE CACHING
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
    
    // COMMENT OUT ABOVE BLOCK TO DISABLE CACHING
    // ====================================
  }, []);

  return (
    <div className="corporate-container" id="corporate-section">
      {/* Life At Compass Section */}
      <section className="life-at-compass-section">
        <div className="container-fluid">
          {/* Header within section */}
          <div className="row">
            <div className="col-12">
              <div className="section-header">
                <h1 className="corporate-main-title">Corporate Services</h1>
                <p className="corporate-main-description">
                  <strong>AMDDAS FOODS offers a full suite of food solutions tailored for corporate environments, ensuring quality, hygiene, and employee satisfaction.</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="image-wrapper">
                <img 
                  src="/images/corporate.jpg" 
                  alt="Life At Compass Team" 
                  className="img-fluid corporate-image"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="content-wrapper">
                <h2 className="section-title">Cafeteria Management</h2>
                <p className="section-subtitle">
                  End-to-end cafeteria operations including meal planning, hygienic food preparation, and efficient service tailored to employee needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning & Development Section */}
      <section className="learning-development-section">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 order-lg-1 order-2">
              <div className="content-wrapper">
                <h2 className="section-title">Tuck Shop</h2>
                <p className="section-subtitle">
                  Quick snack and beverage counters within office premises offering healthy and indulgent options for mid-day cravings.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-lg-2 order-1">
              <div className="image-wrapper">
                <img 
                  src="/images/corporatebanner.jpg" 
                  alt="Learning & Development" 
                  className="img-fluid corporate-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="life-at-compass-section">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="image-wrapper">
                <img 
                  src="/images/contact.jpg" 
                  alt="Life At Compass Team" 
                  className="img-fluid corporate-image"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="content-wrapper">
                <h2 className="section-title">Pop-up Counters</h2>
                <p className="section-subtitle">
                  Themed and seasonal food stalls set up for employee engagement, festivals, or special occasions within corporate campuses.</p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Learning & Development Section */}
      <section className="learning-development-section">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 order-lg-1 order-2">
              <div className="content-wrapper">
                <h2 className="section-title">Corporate Events</h2>
                <p className="section-subtitle">
                  Complete food and beverage services for conferences, team outings, annual parties, product launches, and other company events.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-lg-2 order-1">
              <div className="image-wrapper">
                <img 
                  src="/images/meal.jpg" 
                  alt="Learning & Development" 
                  className="img-fluid corporate-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="life-at-compass-section">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="image-wrapper">
                <img 
                  src="/images/service.jpg" 
                  alt="Life At Compass Team" 
                  className="img-fluid corporate-image"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="content-wrapper">
                <h2 className="section-title">Corporate CSR</h2>
                <p className="section-subtitle">
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