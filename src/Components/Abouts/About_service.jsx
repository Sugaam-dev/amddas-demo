import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import './About_service.css';

// Intersection Observer Hook
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (options.once !== false) {
          observer.unobserve(entry.target);
        }
      }
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px 0px -50px 0px',
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
  }, [options.threshold, options.rootMargin, options.once]);

  return [elementRef, isVisible];
};

// Image Loader Hook
const useImageLoader = (src) => {
  const [imageState, setImageState] = useState({
    loaded: false,
    error: false,
    loading: true
  });

  useEffect(() => {
    if (!src) {
      setImageState({ loaded: false, error: true, loading: false });
      return;
    }

    setImageState({ loaded: false, error: false, loading: true });

    const img = new Image();
    
    const handleLoad = () => {
      setImageState({ loaded: true, error: false, loading: false });
    };

    const handleError = () => {
      setImageState({ loaded: false, error: true, loading: false });
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

// Lazy Image Component
const LazyImage = memo(({ 
  src, 
  alt, 
  className = '', 
  fallback = '/images/placeholder-service.jpg',
  onLoad,
  onError,
  ...props 
}) => {
  const [containerRef, isInView] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px 0px'
  });
  
  const imageState = useImageLoader(isInView ? src : null);

  useEffect(() => {
    if (imageState.loaded && onLoad) {
      onLoad();
    }
    if (imageState.error && onError) {
      onError();
    }
  }, [imageState.loaded, imageState.error, onLoad, onError]);

  return (
    <div 
      ref={containerRef}
      className={`lazy-image-container ${className}`}
      {...props}
    >
      {/* Loading State */}
      {imageState.loading && isInView && (
        <div className="image-placeholder">
          <div className="placeholder-content">
            <div className="loading-spinner"></div>
            <span className="loading-text">Loading image...</span>
          </div>
        </div>
      )}
      
      {/* Image */}
      {isInView && imageState.loaded && (
        <img
          src={src}
          alt={alt}
          className="service-lazy-image"
          loading="lazy"
          decoding="async"
        />
      )}
      
      {/* Error State */}
      {isInView && imageState.error && (
        <>
          {fallback && (
            <img
              src={fallback}
              alt={alt}
              className="service-lazy-image"
              loading="lazy"
              decoding="async"
            />
          )}
          <div className="image-error-state">
            <div className="error-icon">📷</div>
            <span className="error-text">Image unavailable</span>
          </div>
        </>
      )}
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

// Service List Component
const ServiceList = memo(({ services }) => {
  return (
    <ul className="service-list">
      {services.map((service, index) => (
        <li 
          key={`service-item-${index}`}
          className="service-item"
        >
          <span className="service-bullet"></span>
          <span className="service-text">{service}</span>
        </li>
      ))}
    </ul>
  );
});

ServiceList.displayName = 'ServiceList';

// Main About Service Component
const AboutService = memo(({ 
  onLoad,
  imageSrc = "/images/ComprehensiveServices.png",
  fallbackSrc = "/images/about_service_fallback.jpg",
  className = ""
}) => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({
    threshold: 0.05,
    rootMargin: '0px 0px -30px 0px'
  });

  // Services data
  const services = [
    'Corporate Catering',
    'Corporate Event Management',
    'Cafeteria Management',
    'Birthday Celebrations',
    'Weddings & Private Parties'
  ];

  const handleImageLoad = useCallback(() => {
    if (onLoad) {
      onLoad();
    }
  }, [onLoad]);

  const handleImageError = useCallback(() => {
    console.warn('About_service: Image failed to load');
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`about-service-section ${className}`}
      aria-labelledby="service-heading"
    >
      <div className="about-service-container">
        {/* Image Section - Left Side */}
        <div className="about-service-image">
          <LazyImage
            src={imageSrc}
            alt="AMDDAS Foods comprehensive catering services including corporate events, cafeteria management, and private celebrations"
            fallback={fallbackSrc}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </div>

        {/* Text Section - Right Side */}
        <div className="about-service-text">
          <h2 
            id="service-heading"
            className="service-heading"
          >
            We offer a comprehensive range of services:
          </h2>
          
          <ServiceList services={services} />
          
          <p className="service-description">
            At AMDDAS, we combine authentic flavors with efficient service and
            modern kitchen practices, ensuring every plate and every event exceeds expectations.
          </p>
        </div>
      </div>
    </section>
  );
});

AboutService.displayName = 'AboutService';

export default AboutService;