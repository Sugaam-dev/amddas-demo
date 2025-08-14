
// import './About_service.css';// update with your actual path

// const AboutService = () => {
//   return (
//     <section className="about-service-section">
//       <div className="about-service-container">
//         <div className="about-service-image">
//           <img src='/images/about_service.jpg' alt="Traditional Indian Platter" />
//         </div>
//         <div className="about-service-text">
//           <h2>We offer a comprehensive range of services:</h2>
//           <ul className="service-list">
//             <li>Corporate Catering</li>
//             <li>Corporate Event Management</li>
//             <li>Cafeteria Management</li>
//             <li>Birthday Celebrations</li>
//             <li>Weddings & Private Parties</li>
//           </ul>
//           <p>
//             At AMDDAS, we combine authentic flavors with efficient service and
//             modern kitchen practices, ensuring every plate and every event exceeds expectations.
//           </p>
//         </div>

        
//       </div>
//     </section>
//   );
// };

// export default AboutService;



import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import './About_service.css';

// Custom hook for intersection observer with enhanced options
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setIsVisible(true);
        setHasAnimated(true);
        if (options.once !== false) {
          observer.unobserve(entry.target);
        }
      }
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -30px 0px',
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
  }, [hasAnimated, options]);

  return [elementRef, isVisible, hasAnimated];
};

// Custom hook for image lazy loading with WebP support
const useImageLoader = (src, options = {}) => {
  const [imageState, setImageState] = useState({
    loaded: false,
    error: false,
    src: null,
    webpSupported: false
  });

  useEffect(() => {
    // Check WebP support
    const checkWebPSupport = () => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        setImageState(prev => ({
          ...prev,
          webpSupported: webP.height === 2
        }));
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    };

    checkWebPSupport();
  }, []);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    
    const handleLoad = () => {
      setImageState(prev => ({
        ...prev,
        loaded: true,
        error: false,
        src: src
      }));
    };

    const handleError = () => {
      setImageState(prev => ({
        ...prev,
        loaded: false,
        error: true,
        src: options.fallback || null
      }));
    };

    img.onload = handleLoad;
    img.onerror = handleError;
    
    // Use WebP if supported
    const imageSrc = imageState.webpSupported && options.webpSrc ? options.webpSrc : src;
    img.src = imageSrc;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, options.fallback, options.webpSrc, imageState.webpSupported]);

  return imageState;
};

// Enhanced Lazy Image Component
const LazyImage = memo(({ 
  src, 
  webpSrc,
  alt, 
  className = '', 
  fallback = '/images/placeholder-service.jpg',
  onLoad,
  onError,
  ...props 
}) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);
  const imageState = useImageLoader(src, { fallback, webpSrc });

  // Intersection observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
      rootMargin: '150px 0px'
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

  // Handle callbacks
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
      className={`lazy-image-container ${className} ${imageState.loaded ? 'loaded' : ''} ${imageState.error ? 'error' : ''}`}
      {...props}
    >
      {/* Loading placeholder */}
      {!imageState.loaded && !imageState.error && (
        <div className="image-placeholder">
          <div className="placeholder-content">
            <div className="loading-spinner"></div>
            <span className="loading-text">Loading...</span>
          </div>
        </div>
      )}
      
      {/* Main image */}
      {isInView && (
        <img
          src={imageState.src || src}
          alt={alt}
          className={`service-lazy-image ${imageState.loaded ? 'fade-in' : ''}`}
          loading="lazy"
          decoding="async"
        />
      )}
      
      {/* Error fallback */}
      {imageState.error && (
        <div className="image-error-state">
          <div className="error-icon">📷</div>
          <span className="error-text">Failed to load image</span>
        </div>
      )}
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

// Enhanced Service List Component
const ServiceList = memo(({ services, isVisible }) => {
  return (
    <ul className="service-list">
      {services.map((service, index) => (
        <li 
          key={index}
          className={`service-item ${isVisible ? `animate-service-item-${index + 1}` : ''}`}
        >
          <span className="service-bullet">•</span>
          <span className="service-text">{service}</span>
        </li>
      ))}
    </ul>
  );
});

ServiceList.displayName = 'ServiceList';

// Main About Service Component
const AboutService = memo(({ onLoad }) => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver();
  const [imageRef, isImageVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  const [textRef, isTextVisible] = useIntersectionObserver({
    threshold: 0.2,
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

  // Handle image load callback
  const handleImageLoad = useCallback(() => {
    if (onLoad) {
      onLoad();
    }
  }, [onLoad]);

  // Handle image error
  const handleImageError = useCallback(() => {
    console.warn('About_service: Image failed to load');
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`about-service-section ${isSectionVisible ? 'animate-section-in' : ''}`}
    >
      <div className="about-service-container">
        {/* Image Section */}
        <div 
          ref={imageRef}
          className={`about-service-image ${isImageVisible ? 'animate-image-in' : ''}`}
        >
          <LazyImage
            src="/images/about_service.jpg"
            // webpSrc="/images/about_service.webp"
            alt="Traditional Indian food platter showcasing AMDDAS Foods diverse cuisine offerings"
            fallback="/images/about_service_fallback.jpg"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </div>

        {/* Text Section */}
        <div 
          ref={textRef}
          className={`about-service-text ${isTextVisible ? 'animate-text-in' : ''}`}
        >
          <h2 className={`service-heading ${isTextVisible ? 'animate-heading-in' : ''}`}>
            We offer a comprehensive range of services:
          </h2>
          
          <ServiceList 
            services={services} 
            isVisible={isTextVisible}
          />
          
          <p className={`service-description ${isTextVisible ? 'animate-description-in' : ''}`}>
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