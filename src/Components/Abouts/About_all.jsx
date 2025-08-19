import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import './About_all.css';

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
      rootMargin: '150px 0px -20px 0px',
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

// Simplified lazy image loading
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

// Simplified LazyImage Component
const LazyImage = memo(({ 
  src, 
  alt, 
  className = '', 
  fallback = '/images/placeholder.jpg',
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
      className={`lazy-image-container ${className}`}
      {...props}
    >
      {!imageState.loaded && !imageState.error && (
        <div className="image-placeholder">
          <div className="placeholder-shimmer"></div>
        </div>
      )}
      
      {isInView && (
        <img
          src={imageState.error ? fallback : src}
          alt={alt}
          className={`lazy-image ${imageState.loaded ? 'fade-in' : ''}`}
          loading="lazy"
          decoding="async"
        />
      )}
      
      {imageState.error && (
        <div className="image-error">
          <span>Image failed to load</span>
        </div>
      )}
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

// Main About_all Component
const About_all = memo(({ onLoad }) => {
  const [containerRef, isVisible] = useIntersectionObserver();

  const handleImageLoad = useCallback(() => {
    if (onLoad) onLoad();
  }, [onLoad]);

  const handleImageError = useCallback(() => {
    console.warn('About_all: Image failed to load');
  }, []);

  // Split text into paragraphs
  const textContent = `Established in 2016, AMDDAS Foods has grown into a trusted name in the corporate and institutional catering space, delivering quality meals with consistency, hygiene, and heart. With a robust production capacity of 4,000 plates per day, we are equipped to serve large-scale requirements across corporate offices, events, and food courts. Our culinary repertoire includes a wide variety of cuisines â€" from Indian vegetarian and non-vegetarian, South Indian, Maharashtrian, Bengali, and Odiya specialties to popular Chinese, Continental, and Italian dishes. Each menu is thoughtfully curated to suit regional tastes and modern preferences.`;

  const paragraphs = textContent.split('. ').map((sentence, index, array) => {
    return index === array.length - 1 ? sentence : sentence + '.';
  });

  return (
    <div className="about-page-wrapper">
      <div 
        ref={containerRef}
        className={`leadership-container ${isVisible ? 'animate-container-in' : ''}`}
      >
        <div className="leadership-content">
          <div className={`text-section ${isVisible ? 'animate-text-in' : ''}`}>
            <h1 className={`main-title ${isVisible ? 'animate-title-in' : ''}`}>
              All About Us
            </h1>
            
            <div className="description-container">
              {paragraphs.map((paragraph, index) => (
                <p 
                  key={index}
                  className={`description ${isVisible ? `animate-paragraph-${index + 1}` : ''}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          <div className={`image-section ${isVisible ? 'animate-image-in' : ''}`}>
            <LazyImage
              src="/images/aboutus.png"
              alt="AMDDAS Foods - Corporate catering and food service excellence"
              fallback="/images/aboutus-fallback.jpg"
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

About_all.displayName = 'About_all';

export default About_all;