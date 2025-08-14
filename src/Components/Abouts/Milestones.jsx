// import React from 'react';
// import './Milestone.css';

// function Milestones() {
//   return (
//     <div className="milestones-section">
//       <div className="milestones-container">
//         <h2 className="milestones-heading">Milestones</h2>
//         <div className="milestones-image">
//           <img src="/images/milestone-img.png" alt="Milestones" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Milestones;


import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import './Milestone.css';

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
      threshold: options.threshold || 0.15,
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
  }, [hasAnimated, options]);

  return [elementRef, isVisible, hasAnimated];
};

// Custom hook for progressive image loading with WebP support
const useProgressiveImage = (src, options = {}) => {
  const [imageState, setImageState] = useState({
    loaded: false,
    error: false,
    src: null,
    webpSupported: false,
    lowQualityLoaded: false
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

    // Load low quality first if available
    if (options.lowQualitySrc) {
      const lowQualityImg = new Image();
      lowQualityImg.onload = () => {
        setImageState(prev => ({
          ...prev,
          lowQualityLoaded: true,
          src: options.lowQualitySrc
        }));
      };
      lowQualityImg.src = options.lowQualitySrc;
    }

    // Load high quality image
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
    
    // Use WebP if supported and available
    const imageSrc = imageState.webpSupported && options.webpSrc ? options.webpSrc : src;
    img.src = imageSrc;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, options.fallback, options.webpSrc, options.lowQualitySrc, imageState.webpSupported]);

  return imageState;
};

// Enhanced Progressive Image Component
const ProgressiveImage = memo(({ 
  src, 
  webpSrc,
  lowQualitySrc,
  alt, 
  className = '', 
  fallback = '/images/placeholder-milestone.jpg',
  onLoad,
  onError,
  ...props 
}) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);
  const imageState = useProgressiveImage(src, { fallback, webpSrc, lowQualitySrc });

  // Intersection observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
      rootMargin: '200px 0px' // Large margin for milestones image
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
      className={`milestone-lazy-image-container ${className} ${imageState.loaded ? 'loaded' : ''} ${imageState.error ? 'error' : ''}`}
      {...props}
    >
      {/* Loading placeholder with progress indicator */}
      {!imageState.loaded && !imageState.error && (
        <div className="milestone-image-placeholder">
          <div className="milestone-loading-content">
            <div className="milestone-loading-spinner"></div>
            <div className="milestone-loading-bar">
              <div className="milestone-loading-progress"></div>
            </div>
            <span className="milestone-loading-text">Loading Milestones...</span>
          </div>
        </div>
      )}
      
      {/* Low quality image (blurred) */}
      {isInView && imageState.lowQualityLoaded && !imageState.loaded && (
        <img
          src={imageState.src}
          alt={alt}
          className="milestone-low-quality-image"
        />
      )}
      
      {/* High quality image */}
      {isInView && (
        <img
          src={imageState.src || src}
          alt={alt}
          className={`milestone-lazy-image ${imageState.loaded ? 'fade-in' : ''}`}
          loading="lazy"
          decoding="async"
        />
      )}
      
      {/* Error fallback */}
      {imageState.error && (
        <div className="milestone-image-error">
          <div className="milestone-error-icon">📊</div>
          <span className="milestone-error-text">Milestones image unavailable</span>
          <button 
            className="milestone-retry-button"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
});

ProgressiveImage.displayName = 'ProgressiveImage';

// Enhanced Milestone Heading Component
const MilestoneHeading = memo(({ isVisible }) => {
  return (
    <h2 className={`milestones-heading ${isVisible ? 'animate-heading-in' : ''}`}>
      <span className="heading-text">Milestones</span>
      <span className="heading-underline"></span>
    </h2>
  );
});

MilestoneHeading.displayName = 'MilestoneHeading';

// Main Milestones Component
const Milestones = memo(({ onLoad }) => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver();
  const [headingRef, isHeadingVisible] = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: '0px 0px -30px 0px'
  });
  const [imageRef, isImageVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  // Handle image load callback
  const handleImageLoad = useCallback(() => {
    if (onLoad) {
      onLoad();
    }
  }, [onLoad]);

  // Handle image error
  const handleImageError = useCallback(() => {
    console.warn('Milestones: Image failed to load');
  }, []);

  // Call onLoad when section becomes visible
  useEffect(() => {
    if (isSectionVisible) {
      handleImageLoad();
    }
  }, [isSectionVisible, handleImageLoad]);

  return (
    <div 
      ref={sectionRef}
      className={`milestones-section ${isSectionVisible ? 'animate-section-in' : ''}`}
    >
      <div className="milestones-container">
        <div ref={headingRef}>
          <MilestoneHeading isVisible={isHeadingVisible} />
        </div>
        
        <div 
          ref={imageRef}
          className={`milestones-image ${isImageVisible ? 'animate-image-in' : ''}`}
        >
          <ProgressiveImage
            src="/images/milestone-img.png"
            // webpSrc="/images/milestone-img.webp"
            // lowQualitySrc="/images/milestone-img-low.jpg"
            alt="AMDDAS Foods milestones and achievements timeline showcasing company growth and success"
            fallback="/images/milestone-fallback.jpg"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
          
          {/* Decorative elements */}
          <div className="milestone-decorative-elements">
            <div className="milestone-badge">
              <span className="badge-year">2016</span>
              <span className="badge-text">Est.</span>
            </div>
            <div className="milestone-stats">
              <div className="stat-item">
                <span className="stat-number">4000+</span>
                <span className="stat-label">Daily Capacity</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Milestones.displayName = 'Milestones';

export default Milestones;