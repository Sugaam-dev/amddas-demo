import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Training.css';

function Training() {
  return (
    <div className="training-container" id="training-section">
      {/* Training Services Header Section */}
      <section className="life-at-compass-section">
        <div className="container-fluid">
          {/* Header within section */}
          <div className="row section-main">
            <div className="col-12">
              <div className="section-header">
                <h1 className="training-main-title">Training & Workshop Services</h1>
                <p className="training-main-description">
                  <strong>We don't just serve food – we also nurture talent and build food industry professionals through our robust training programs.</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="image-wrapper">
                <img 
                  src="/images/service.jpg" 
                  alt="Culinary Training" 
                  className="img-fluid training-image"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="content-wrapper">
                <h2 className="section-title">Culinary Training</h2>
                <p className="section-subtitle">
                  Hands-on culinary courses designed to build cooking skills, food knowledge, and kitchen efficiency for aspiring chefs and staff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Handler Training Section */}
      <section className="learning-development-section">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 order-lg-1 order-2">
              <div className="content-wrapper">
                <h2 className="section-title">Food Handler Training</h2>
                <p className="section-subtitle">
                  Hygiene, safety, and food handling best practices training to ensure your team meets FSSAI and quality standards.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-lg-2 order-1">
              <div className="image-wrapper">
                <img 
                  src="/images/corporate.jpg" 
                  alt="Food Handler Training" 
                  className="img-fluid training-image"
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
                  src="/images/experience.avif" 
                  alt="Kitchen Management Training" 
                  className="img-fluid training-image"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="content-wrapper">
                <h2 className="section-title">Kitchen Management</h2>
                <p className="section-subtitle">
                  Training in managing kitchen operations, inventory control, staff coordination, and cost-effective food production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Training Section */}
      <section className="learning-development-section">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 order-lg-1 order-2">
              <div className="content-wrapper">
                <h2 className="section-title">Audit Training</h2>
                <p className="section-subtitle">
                  Preparing hospitality teams to meet compliance through internal audits, documentation, and hygiene standard reviews.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-lg-2 order-1">
              <div className="image-wrapper">
                <img 
                  src="/images/mission.jpg" 
                  alt="Audit Training" 
                  className="img-fluid training-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Training;