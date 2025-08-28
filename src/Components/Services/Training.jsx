import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Training.css';
import culinaritraining from './images/Culrinary Training.webp';
import food from './images/Food Handler Training.webp';
import kitchen from './images/Kitchen Management Training.webp';
import audit from './images/Audit Training.webp';

function Training() {
  const observerRef = useRef(null);
  const sectionsSetRef = useRef(new Set());

  // Memoize observer options to prevent recreation
  const observerOptions = useMemo(() => ({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }), []);

  // Memoized callback for intersection observer
  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('training-animate-in');
      }
    });
  }, []);

  // Optimized ref callback using Set for O(1) lookups
  const addToRefs = useCallback((el) => {
    if (el && !sectionsSetRef.current.has(el)) {
      sectionsSetRef.current.add(el);
      // Only observe if observer exists
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    }
  }, []);

  useEffect(() => {
    // Create observer once
    observerRef.current = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe existing sections that were already added to refs
    sectionsSetRef.current.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    // Cleanup function
    return () => {
      if (observerRef.current) {
        sectionsSetRef.current.forEach((section) => {
          observerRef.current.unobserve(section);
        });
        observerRef.current.disconnect();
      }
      sectionsSetRef.current.clear();
    };
  }, [observerOptions, handleIntersection]);

  return (
    <div className="training-container" id="training-section">
      {/* Training Services Header Section */}
      <section 
        className="training-life-section" 
        ref={addToRefs}
        id="culinary-training-section"
      >
        <div className="training-container-fluid">
          {/* Header within section */}
          <div className="row section-main">
            <div className="col-12">
              <div className="training-section-header">
                <h1 className="training-main-title">Training & Workshop Services</h1>
                <p className="training-main-description">
                  <strong>We don't just serve food – we also nurture talent and build food industry professionals through our robust training programs.</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="training-image-wrapper">
                <img 
                  src={culinaritraining}
                  alt="Culinary Training" 
                  className="training-main-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="training-content-wrapper">
                <h2 className="training-section-title">Culinary Training</h2>
                <p className="training-section-subtitle">
                  Hands-on culinary courses designed to build cooking skills, food knowledge, and kitchen efficiency for aspiring chefs and staff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Handler Training Section */}
      <section 
        className="training-learning-section" 
        ref={addToRefs}
        id="food-handler-training-section"
      >
        <div className="training-container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 order-lg-1 order-2">
              <div className="training-content-wrapper">
                <h2 className="training-section-title">Food Handler Training</h2>
                <p className="training-section-subtitle">
                  Hygiene, safety, and food handling best practices training to ensure your team meets FSSAI and quality standards.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-lg-2 order-1">
              <div className="training-image-wrapper">
                <img 
                  src={food} 
                  alt="Food Handler Training" 
                  className="training-main-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Management Section */}
      <section 
        className="training-life-section" 
        ref={addToRefs}
        id="kitchen-management-training-section"
      >
        <div className="training-container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="training-image-wrapper">
                <img 
                  src={kitchen} 
                  alt="Kitchen Management Training" 
                  className="training-main-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="training-content-wrapper">
                <h2 className="training-section-title">Kitchen Management</h2>
                <p className="training-section-subtitle">
                  Training in managing kitchen operations, inventory control, staff coordination, and cost-effective food production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Training Section */}
      <section 
        className="training-learning-section" 
        ref={addToRefs}
        id="audit-training-section"
      >
        <div className="training-container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 order-lg-1 order-2">
              <div className="training-content-wrapper">
                <h2 className="training-section-title">Audit Training</h2>
                <p className="training-section-subtitle">
                  Preparing hospitality teams to meet compliance through internal audits, documentation, and hygiene standard reviews.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-lg-2 order-1">
              <div className="training-image-wrapper">
                <img 
                  src={audit}
                  alt="Audit Training" 
                  className="training-main-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default React.memo(Training);
