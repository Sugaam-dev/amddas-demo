import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import './OurCommitment.css';

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
  fallback = '/images/placeholder-commitment.jpg',
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
      className={`commitment-lazy-image-container ${className}`}
      {...props}
    >
      {/* Loading State */}
      {imageState.loading && isInView && (
        <div className="commitment-image-placeholder">
          <div className="commitment-placeholder-content">
            <div className="commitment-loading-spinner"></div>
            <span className="commitment-loading-text">Loading image...</span>
          </div>
        </div>
      )}
      
      {/* Image */}
      {isInView && imageState.loaded && (
        <img
          src={src}
          alt={alt}
          className="commitment-lazy-image"
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
              className="commitment-lazy-image"
              loading="lazy"
              decoding="async"
            />
          )}
          <div className="commitment-image-error-state">
            <div className="commitment-error-icon">📷</div>
            <span className="commitment-error-text">Image unavailable</span>
          </div>
        </>
      )}
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

// Commitment Points Component
const CommitmentPoints = memo(({ points }) => {
  return (
    <ul className="commitment-points">
      {points.map((point, index) => (
        <li 
          key={`commitment-point-${index}`}
          className="commitment-point"
        >
          <span className="commitment-point-title">{point.title}:</span>
          <span className="commitment-point-text">{point.text}</span>
        </li>
      ))}
    </ul>
  );
});

CommitmentPoints.displayName = 'CommitmentPoints';

// Main Our Commitment Component
const OurCommitment = memo(({ 
  onLoad,
  imageSrc = "/images/OurCommitment1.png",
  fallbackSrc = "/images/commitment-fallback.jpg",
  className = ""
}) => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({
    threshold: 0.05,
    rootMargin: '0px 0px -30px 0px'
  });

  // Commitment points data
  const commitmentPoints = [
    {
      title: 'Uncompromising Quality',
      text: 'We source the finest ingredients and employ rigorous quality control measures.'
    },
    {
      title: 'Customer-Centric Approach',
      text: 'Your satisfaction is our top priority, and we tailor our services to meet your unique needs.'
    },
    {
      title: 'Continuous Improvement',
      text: 'We constantly seek innovative ways to enhance our offerings and stay ahead of industry trends.'
    }
  ];

  const handleImageLoad = useCallback(() => {
    if (onLoad) {
      onLoad();
    }
  }, [onLoad]);

  const handleImageError = useCallback(() => {
    console.warn('OurCommitment: Image failed to load');
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`commitment-section ${className}`}
      aria-labelledby="commitment-heading"
    >
      <div className="commitment-container">
        {/* Text Section */}
        <div className="commitment-text">
          <h2 
            id="commitment-heading"
            className="commitment-heading"
          >
            Our unwavering commitment to excellence in catering and training services.
          </h2>
          
          <p className="commitment-description">
            At Amddas, our commitment to excellence is more than just a statement; it's the foundation of everything we do. Since 2016, we've strived to exceed expectations in both our catering services and training programs, ensuring every client and student receives the best possible experience.
          </p>
          
          <CommitmentPoints points={commitmentPoints} />
        </div>

        {/* Image Section */}
        <div className="commitment-image">
          <LazyImage
            src={imageSrc}
            alt="AMDDAS Foods chef presenting quality catering services with fresh ingredients"
            fallback={fallbackSrc}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </div>
      </div>
    </section>
  );
});

OurCommitment.displayName = 'OurCommitment';

export default OurCommitment;