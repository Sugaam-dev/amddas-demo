import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import './Milestone.css';

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
      rootMargin: '150px 0px -50px 0px',
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

// Basic image loader with simple progress
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

// Simplified Progressive Image Component
const ProgressiveImage = memo(({ 
  src, 
  alt, 
  className = '', 
  fallback = '/images/placeholder-milestone.jpg',
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
      rootMargin: '200px 0px'
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
      className={`milestone-lazy-image-container ${className}`}
      {...props}
    >
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
      
      {isInView && (
        <img
          src={imageState.error ? fallback : src}
          alt={alt}
          className={`milestone-lazy-image ${imageState.loaded ? 'fade-in' : ''}`}
          loading="lazy"
          decoding="async"
        />
      )}
      
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

// Milestone Heading Component
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
  const [sectionRef, isVisible] = useIntersectionObserver();

  const handleImageLoad = useCallback(() => {
    if (onLoad) onLoad();
  }, [onLoad]);

  const handleImageError = useCallback(() => {
    console.warn('Milestones: Image failed to load');
  }, []);

  useEffect(() => {
    if (isVisible) {
      handleImageLoad();
    }
  }, [isVisible, handleImageLoad]);

  return (
    <div 
      ref={sectionRef}
      className={`milestones-section ${isVisible ? 'animate-section-in' : ''}`}
    >
      <div className="milestones-container">
        <MilestoneHeading isVisible={isVisible} />
        
        <div className={`milestones-image ${isVisible ? 'animate-image-in' : ''}`}>
          <ProgressiveImage
            src="/images/milestone-img.png"
            alt="AMDDAS Foods milestones and achievements timeline showcasing company growth and success"
            fallback="/images/milestone-fallback.jpg"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </div>
      </div>
    </div>
  );
});

Milestones.displayName = 'Milestones';

export default Milestones;