import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import './Standards.css';

// Simplified intersection observer hook
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.05,
      rootMargin: '150px 0px -30px 0px',
      ...options
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};

// Basic image loader
const useImageLoader = (src, fallback) => {
  const [imageState, setImageState] = useState({
    loaded: false,
    error: false
  });

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    
    const handleLoad = () => {
      setImageState({ loaded: true, error: false });
    };

    const handleError = () => {
      setImageState({ loaded: false, error: true });
    };

    img.onload = handleLoad;
    img.onerror = handleError;
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return imageState;
};

// Basic LazyImage Component
const LazyImage = memo(({ 
  src, 
  alt, 
  className = '', 
  fallback = '/images/placeholder-standard.jpg',
  onLoad,
  onError,
  ...props 
}) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);
  const imageState = useImageLoader(src, fallback);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
      rootMargin: '100px 0px'
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (imageState.loaded && onLoad) onLoad();
    if (imageState.error && onError) onError();
  }, [imageState.loaded, imageState.error, onLoad, onError]);

  return (
    <div 
      ref={containerRef}
      className={`standard-lazy-image-container ${className}`}
      {...props}
    >
      {!imageState.loaded && !imageState.error && (
        <div className="standard-image-placeholder">
          <div className="standard-loading-content">
            <div className="standard-loading-spinner"></div>
            <span className="standard-loading-text">Loading...</span>
          </div>
        </div>
      )}
      
      {isInView && (
        <img
          src={imageState.error ? fallback : src}
          alt={alt}
          className={`standard-lazy-image ${imageState.loaded ? 'fade-in' : ''}`}
          loading="lazy"
          decoding="async"
        />
      )}
      
      {imageState.error && (
        <div className="standard-image-error">
          <div className="standard-error-icon">🏢</div>
          <span className="standard-error-text">Image unavailable</span>
        </div>
      )}
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

// Standard Card Component
const StandardCard = memo(({ standard, index, isVisible }) => {
  const handleImageLoad = useCallback(() => {
    // Image loaded callback if needed
  }, []);

  const handleImageError = useCallback(() => {
    console.warn(`Standards: Image failed to load for ${standard.title}`);
  }, [standard.title]);

  return (
    <div className={`standard-card ${isVisible ? `animate-card-${index + 1}` : ''}`}>
      <div className="standard-image-wrapper">
        <LazyImage
          src={standard.image}
          alt={`${standard.title} - AMDDAS Foods quality standards`}
          className="standard-img"
          fallback="/images/standard-fallback.jpg"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        {/* <div className="standard-overlay">
          <span className="standard-number">{String(index + 1).padStart(2, '0')}</span>
        </div> */}
      </div>
      
      <div className="standard-info">
        <h3 className={`standard-title ${isVisible ? 'animate-title' : ''}`}>
          {standard.title}
        </h3>
        <div className={`standard-info-text ${isVisible ? 'animate-text' : ''}`}>
          <p>{standard.description}</p>
        </div>
      </div>
    </div>
  );
});

StandardCard.displayName = 'StandardCard';

// Section Title Component
const SectionTitle = memo(({ isVisible }) => {
  return (
    <div className={`section-title ${isVisible ? 'animate-title-section' : ''}`}>
      <h2 className={`section-main-title ${isVisible ? 'animate-main-title' : ''}`}>
        Our <span className="title-accent">Standards</span>
      </h2>
      <p className={`section-subtitle ${isVisible ? 'animate-subtitle' : ''}`}>
        Excellence in every aspect of our food service operations
      </p>
    </div>
  );
});

SectionTitle.displayName = 'SectionTitle';

// Main Standards Component
const Standards = memo(({ onLoad }) => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  const standardsData = [
    {
      id: 'risk-management',
      title: 'Risk Management Standards',
      description: 'Public Liability Policy is issued per site where our food is being supplied/consumed. Strictly GST compliant with updated ledger and bank records. Regular on-time tax return filing done.',
      image: '/images/risky.webp'
    },
    {
      id: 'employee-standards',
      title: 'Employee Standards',
      description: 'All employees undergo quarterly medical fitness test clearance while in service at AMDDAS Foods. All staff have segregated dress codes based on their job roles. Company-provided staff quarters .',
      image: '/images/employeestandard.webp'
    },
    {
      id: 'manufacturing-standards',
      title: 'Manufacturing Unit Standards',
      description: 'HACCP (Hazard Analysis and Critical Control Points) standards met. Segregated veg and non-veg cooking & storage sections. Gas bank located outside the kitchen. Fire extinguishers installed .',
      image: '/images/Manufacturingunit.webp'
    },
    {
      id: 'certified-kitchen',
      title: 'Certified Kitchen',
      description: 'Our kitchen is certified by food safety authorities and follows international hygiene protocols. Regular third-party audits ensure compliance with health department regulations. Temperature-controlled storage facilities maintain food quality and freshness at all times.',
      image: '/images/CertifiedKitchen.png'
    },
    {
      id: 'quality-standards',
      title: 'Quality Standards',
      description: 'ISO 22000 food safety management system implementation. Stringent quality control measures at every stage of food preparation. Fresh ingredients sourced daily from verified suppliers. Regular taste testing and nutritional analysis of all menu items.',
      image: '/images/qualitystandard123.webp'
    }
  ];

  const handleComponentLoad = useCallback(() => {
    if (onLoad) onLoad();
  }, [onLoad]);

  useEffect(() => {
    if (isVisible) {
      handleComponentLoad();
    }
  }, [isVisible, handleComponentLoad]);

  return (
    <section 
      ref={sectionRef}
      className={`standards-section ${isVisible ? 'animate-section-in' : ''}`}
    >
      <SectionTitle isVisible={isVisible} />
      
      <div className="standards-main-container">
        {standardsData.map((standard, index) => (
          <StandardCard
            key={standard.id}
            standard={standard}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>
    </section>
  );
});

Standards.displayName = 'Standards';

export default Standards;
