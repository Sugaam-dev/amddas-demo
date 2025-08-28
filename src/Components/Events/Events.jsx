import React, { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import './Events.css';

// Constants
const PHONE_NUMBER = '+919632764963';
const SCROLL_DELAY = 100; // Reduced from 300ms
const NAVBAR_HEIGHT = 90;

// Memoized constants to prevent recreation
const EVENT_SECTIONS = {
  wedding: 'wedding-section',
  birthday: 'birthday-section',
  housewarming: 'housewarming-section',
  engagement: 'engagement-section',
  festival: 'festival-section',
  bhandaara: 'bhandaara-section'
};

// Optimized debounce with WeakMap for better performance
const debounce = (func, wait) => {
  let timeout;
  const debounced = (...args) => {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
  debounced.cancel = () => clearTimeout(timeout);
  return debounced;
};

export default React.memo(function Carousel() {
  const [isMobile, setIsMobile] = useState(false);
  const [imageErrors, setImageErrors] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const observerRef = useRef(null);
  const resizeTimeoutRef = useRef(null);

  // Memoized slide data with optimized structure
  const slideData = useMemo(() => [
    {
      image: '/images/CorporateCatering.webp',
      title: 'Corporate Catering',
      subtitle: 'Fueling Workdays with Fresh, Hygienic, and Delicious Meals',
      description: 'We ensure that the event is made memorable with exquisite delicacies prepared according to the theme of the event.',
      alt: 'Corporate Catering Services'
    },
    {
      image: '/images/weedingandengagement.webp',
      title: 'Weddings',
      subtitle: 'Flavors of Love, Crafted for Your Perfect Day',
      description: 'We make sure to make your wedding more memorable by serving the best food to you and your guests.',
      alt: 'Wedding Catering Services'
    },
    {
      image: '/images/Corporateevent.webp',
      title: 'Corporate Events',
      subtitle: 'From Boardrooms to Ballrooms — Exceptional Food for Every Corporate Occasion',
      description: 'Make your next event a success. We serve the right kind of delicacies, keeping in mind your guest profile.',
      alt: 'Corporate Events Catering'
    },
    {
      image: '/images/Birthday.webp',
      title: 'Birthday',
      subtitle: 'Adding Taste to Every Slice of Celebration',
      description: 'Our team is committed to making your events run smoothly by providing delicious food.',
      alt: 'Birthday Party Catering'
    },
    {
      image: '/images/Weedingcatering.webp',
      title: 'Specialized Cuisines',
      subtitle: 'Celebrating Traditions with Food That Feels Like Home',
      description: 'We ensure that the event is made memorable with exquisite delicacies prepared according to the theme of the event.',
      alt: 'Specialized Cuisines Catering'
    },
  ], []);

  // Optimized Intersection Observer with performance improvements
  const setupIntersectionObserver = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Use requestAnimationFrame for better performance
        requestAnimationFrame(() => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const delay = parseInt(entry.target.dataset.delay) || 0;
              if (delay > 0) {
                setTimeout(() => {
                  entry.target.classList.add('amddas-animate-in');
                }, delay);
              } else {
                entry.target.classList.add('amddas-animate-in');
              }
              // Unobserve after animation for better performance
              observerRef.current?.unobserve(entry.target);
            }
          });
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    const elementsToObserve = document.querySelectorAll('.amddas-animate-on-scroll');
    elementsToObserve.forEach((el, index) => {
      el.dataset.delay = (index % 3) * 50; // Reduced delay for faster animations
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });
  }, []);

  // Optimized image load handler with better performance
  const handleImageLoad = useCallback((event, slideIndex) => {
    const img = event.target;
    const container = img.parentElement;
    
    // Use requestAnimationFrame for DOM updates
    requestAnimationFrame(() => {
      img.classList.add('loaded');
      
      const imgNaturalWidth = img.naturalWidth;
      const imgNaturalHeight = img.naturalHeight;

      if (imgNaturalWidth && imgNaturalHeight) {
        const aspectRatio = imgNaturalWidth / imgNaturalHeight;
        const slideContent = container.closest('.amddas-slide-content');
        const availableWidth = slideContent ? slideContent.offsetWidth / 2 - 30 : container.offsetWidth;

        let optimalWidth, optimalHeight;

        if (aspectRatio > 1) {
          // Landscape images
          optimalWidth = Math.min(availableWidth, 500);
          optimalHeight = optimalWidth / aspectRatio;
        } else {
          // Portrait or square images
          optimalHeight = Math.min(400, availableWidth / aspectRatio);
          optimalWidth = optimalHeight * aspectRatio;
        }

        // Apply styles with better performance
        const styles = {
          transition: 'height 0.3s ease-out, width 0.3s ease-out',
          width: `${Math.min(optimalWidth, availableWidth)}px`,
          height: `${Math.max(optimalHeight, 200)}px`,
          maxWidth: '100%',
          overflow: 'hidden',
          boxSizing: 'border-box'
        };

        Object.assign(container.style, styles);

        // Store data for resize handling
        container.dataset.aspectRatio = aspectRatio;
        container.dataset.optimalWidth = optimalWidth;
        container.dataset.optimalHeight = optimalHeight;
      }
    });
  }, []);

  // Optimized resize handler with throttling
  const handleContainerResize = useCallback(() => {
    // Use requestAnimationFrame for better performance
    requestAnimationFrame(() => {
      const slideImages = document.querySelectorAll('.amddas-slide-image[data-aspect-ratio]');
      slideImages.forEach(container => {
        const aspectRatio = parseFloat(container.dataset.aspectRatio);
        const slideContent = container.closest('.amddas-slide-content');
        
        if (aspectRatio && slideContent) {
          const availableWidth = slideContent.offsetWidth / 2 - 30;

          let optimalWidth, optimalHeight;

          if (aspectRatio > 1) {
            optimalWidth = Math.min(availableWidth, 500);
            optimalHeight = optimalWidth / aspectRatio;
          } else {
            optimalHeight = Math.min(400, availableWidth / aspectRatio);
            optimalWidth = optimalHeight * aspectRatio;
          }

          const styles = {
            width: `${Math.min(optimalWidth, availableWidth)}px`,
            height: `${Math.max(optimalHeight, 200)}px`,
            maxWidth: '100%',
            overflow: 'hidden',
            boxSizing: 'border-box'
          };

          Object.assign(container.style, styles);
        }
      });
    });
  }, []);

  // Optimized error handler
  const handleImageError = useCallback((slideIndex) => {
    setImageErrors(prev => ({
      ...prev,
      [`slide-${slideIndex}`]: true
    }));
    
    requestAnimationFrame(() => {
      const containers = document.querySelectorAll('.amddas-slide-image');
      if (containers[slideIndex]) {
        const container = containers[slideIndex];
        container.setAttribute('data-error', 'true');
        Object.assign(container.style, {
          height: '200px',
          maxWidth: '100%',
          overflow: 'hidden'
        });
      }
    });
  }, []);

  // Updated scroll function with proper centering
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Use requestAnimationFrame for smoother scrolling
      requestAnimationFrame(() => {
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const elementHeight = elementRect.height;
        const viewportHeight = window.innerHeight;
        
        // Calculate position to center the element in viewport
        const centerPosition = absoluteElementTop - (viewportHeight / 2) + (elementHeight / 2);
        const scrollToPosition = Math.max(0, centerPosition);
        
        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth'
        });
      });
    }
  }, []);

  // Alternative method using scrollIntoView with center block
  const scrollToSectionAlternative = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      requestAnimationFrame(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest'
        });
      });
    }
  }, []);

  // Memoized scroll flags for better performance
  const scrollFlags = useMemo(() => [
    { key: 'scrollToWedding', sectionId: EVENT_SECTIONS.wedding },
    { key: 'scrollToBirthday', sectionId: EVENT_SECTIONS.birthday },
    { key: 'scrollToHousewarming', sectionId: EVENT_SECTIONS.housewarming },
    { key: 'scrollToEngagement', sectionId: EVENT_SECTIONS.engagement },
    { key: 'scrollToFestival', sectionId: EVENT_SECTIONS.festival },
    { key: 'scrollToBhandaara', sectionId: EVENT_SECTIONS.bhandaara }
  ], []);

  // Enhanced section scroll handler with scrollTarget support
  const handleSectionScroll = useCallback(() => {
    // First check for scrollTarget (from other pages)
    let scrollTarget = null;
    try {
      scrollTarget = sessionStorage.getItem('scrollTarget');
      if (scrollTarget) {
        sessionStorage.removeItem('scrollTarget');
        setTimeout(() => scrollToSection(scrollTarget), SCROLL_DELAY);
        return;
      }
    } catch (error) {
      console.warn('SessionStorage not available:', error);
    }

    // Then check for regular scroll flags
    for (const { key, sectionId } of scrollFlags) {
      try {
        if (sessionStorage.getItem(key)) {
          scrollTarget = { key, sectionId };
          sessionStorage.removeItem(key);
          break;
        }
      } catch (error) {
        console.warn('SessionStorage not available:', error);
        return;
      }
    }

    if (scrollTarget) {
      // Clear other flags
      scrollFlags.forEach(({ key }) => {
        if (key !== scrollTarget.key) {
          try {
            sessionStorage.removeItem(key);
          } catch (error) {
            // Ignore sessionStorage errors
          }
        }
      });
      
      setTimeout(() => scrollToSection(scrollTarget.sectionId), SCROLL_DELAY);
    }
  }, [scrollFlags, scrollToSection]);

  // Hash scroll handler
  const handleHashScroll = useCallback(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1);
      setTimeout(() => scrollToSection(sectionId), SCROLL_DELAY);
    }
  }, [scrollToSection]);

  // Optimized WhatsApp/Phone handler
  const handleEnquireClick = useCallback(() => {
    const whatsappURL = `https://wa.me/${PHONE_NUMBER.replace('+', '')}?text=Hello%20Amddas%20Foods!%20I%20would%20like%20to%20enquire%20about%20your%20services.`;
    
    if (isMobile) {
      window.location.href = `tel:${PHONE_NUMBER}`;
    } else {
      window.open(whatsappURL, '_blank', 'noopener,noreferrer');
    }
  }, [isMobile]);

  // Optimized resize effect with proper cleanup
  useEffect(() => {
    const debouncedResize = debounce(() => {
      setIsMobile(window.innerWidth <= 768);
      handleContainerResize();
    }, 100);

    // Initial call
    debouncedResize();
    window.addEventListener('resize', debouncedResize);

    return () => {
      window.removeEventListener('resize', debouncedResize);
      debouncedResize.cancel();
    };
  }, [handleContainerResize]);

  // Main effect with better cleanup
  useEffect(() => {
    handleSectionScroll();
    handleHashScroll();
    
    // Set loading to false after a minimal delay
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 50);

    const observerTimeout = setTimeout(() => {
      setupIntersectionObserver();
    }, 100);

    return () => {
      clearTimeout(loadingTimeout);
      clearTimeout(observerTimeout);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleSectionScroll, handleHashScroll, setupIntersectionObserver]);

  // Rest of your component remains the same...
  // (eventSections, swiperConfig, etc.)

  // Memoized event sections data
  const eventSections = useMemo(() => [
    {
      id: EVENT_SECTIONS.wedding,
      title: 'Weddings',
      image: '/images/weedingandengagement.webp',
      imageAlt: 'Wedding Celebration',
      imageName: 'marriage',
      description: `At AMDDAS FOODS PVT LTD, we understand that a wedding is more than just an event—it's a once-in-a-lifetime celebration of love, joy, and tradition. Our service is designed to make your big day even more special. From traditional South Indian feasts to global fusion menus, we specialize in creating custom-made dishes that reflect your unique style and heritage. Our expert chefs prepare every dish using the freshest ingredients, ensuring each meal is not only delicious but also hygienic and safe. From starters to desserts, we provide a range of options to suit every palate and preference, including vegetarian, vegan, Jain, and regional delicacies. With AMDDAS, you can relax and enjoy your wedding day, knowing that your food and service needs are in the hands of professionals who take pride in creating memorable moments through taste.`
    },
    {
      id: EVENT_SECTIONS.housewarming,
      title: 'HouseWarming Celebration',
      image: '/images/HouseWarming.webp',
      imageAlt: 'House Warming Celebration',
      imageName: 'housewarming',
      reverse: true,
      description: `A housewarming is a time to celebrate new beginnings, and AMDDAS FOODS PVT LTD is here to ensure your celebration is filled with delightful flavors and warmth. Our service is designed to complement the joy and excitement of settling into a new home. Whether you're hosting a traditional Griha Pravesh ceremony or a casual get-together, we offer customizable menus that suit your occasion. Our chefs use only the freshest ingredients to prepare traditional South Indian, North Indian, and regional specialties. We accommodate dietary preferences and religious customs, ensuring that everyone can enjoy the feast. From prasadam offerings to lavish buffet spreads, we handle every detail so you can focus on enjoying your new space with loved ones. With AMDDAS, your housewarming will be a delicious and unforgettable event, marking the beginning of your journey in your new home.`
    },
    {
      id: EVENT_SECTIONS.birthday,
      title: 'Birthday Party',
      image: '/images/Birthday.webp',
      imageAlt: 'Birthday Celebration',
      imageName: 'birthday',
      description: `At AMDDAS FOODS PVT LTD, we believe that birthdays should be as fun and flavorful as possible! Whether it's a child's first birthday, a milestone celebration, or a surprise party, we provide everything you need to make your special day truly enjoyable. Our birthday menus are designed to delight all age groups, featuring a variety of appetizers, mains, and decadent desserts. We offer both traditional and modern dishes, from live pasta counters to customized birthday cakes, ensuring there's something for everyone. Our team focuses on presentation, taste, and hygiene, ensuring that every dish is prepared fresh and served with a smile. Celebrate your birthday with AMDDAS, where delicious food adds the perfect touch to your joyous occasion.`
    },
    {
      id: EVENT_SECTIONS.engagement,
      title: 'Anniversaries',
      image: '/images/Engagement1.jpg',
      imageAlt: 'Engagement Celebration',
      imageName: 'engagement',
      reverse: true,
      description: `Whether it's your first anniversary or your golden jubilee, AMDDAS FOODS PVT LTD is honored to help you celebrate the milestone of love with food that speaks volumes. Our service is designed to reflect the elegance and beauty of your relationship. Whether you're hosting an intimate family dinner or a grand celebration with friends, we offer tailor-made menus to suit your event. Our team ensures that every dish is meticulously prepared and beautifully presented. From multi-course meals to exquisite desserts, we bring the perfect blend of taste, luxury, and sophistication. We cater to various preferences, offering both Indian and continental options, ensuring a delightful dining experience for every guest. Let AMDDAS add a flavorful dimension to your anniversary celebration, creating memories that will last a lifetime.`
    },
    {
      id: EVENT_SECTIONS.festival,
      title: 'Community Festivals',
      image: '/images/CommunityFestival.webp',
      imageAlt: 'Festival Celebration',
      imageName: 'festival',
      description: `At AMDDAS FOODS PVT LTD, we know that festivals are a time to come together with family and friends, sharing good food and great memories. We offer specialized services for all major celebrations, including Diwali, Holi, Eid, Christmas, and more. Our team is passionate about delivering authentic, traditional dishes that honor the spirit of the season. From rich sweets and delicacies for Diwali to hearty meals for Christmas, we prepare every dish with love and attention to detail. We cater to specific festival needs, offering prasadam, live counters, and eco-friendly serving options. Our chefs use only fresh ingredients to create meals that are not only delicious but also hygienic and safe. Celebrate your festivals with AMDDAS, where every meal is a blessing.`
    },
    {
      id: EVENT_SECTIONS.bhandaara,
      title: 'Bhandara Services',
      image: '/images/Bhandaras.webp',
      imageAlt: 'Bhandaara Service',
      imageName: 'bhandaara',
      reverse: true,
      description: `Community events bring people together to celebrate, share, and create lasting connections. At AMDDAS FOODS PVT LTD, we specialize in providing delightful food experiences for a wide range of occasions—from cultural programs and apartment gatherings to temple festivals and society celebrations. Our extensive experience allows us to handle large-scale requirements with efficiency and professionalism. We provide diverse menus that cater to the varied tastes and dietary preferences of the community. Whether it's a buffet-style meal or a plated dinner, our team ensures timely service, hygienic food preparation, and beautiful presentation. We also handle logistics, ensuring everything from meal timings to serving formats runs smoothly. With AMDDAS, your community event will be a flavorful and seamless experience, where everyone enjoys great food and great company.`
    }
  ], []);

  // Memoized Swiper configuration
  const swiperConfig = useMemo(() => ({
    modules: [Navigation, Pagination, Mousewheel, Keyboard, Autoplay],
    spaceBetween: 30,
    slidesPerView: 1,
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    mousewheel: {
      forceToAxis: true,
    },
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    loop: true,
    speed: 800,
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
    }
  }), []);

  if (isLoading) {
    return (
      <div className="amddas-loading-container">
        <div className="amddas-loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="amddas-events-container amddas-no-scroll">
      {/* Banner Section */}
      <section className="amddas-banner-section">
        <div className="amddas-banner-overlay"></div>
        <div className="amddas-banner-content">
          <h1 className="amddas-banner-title">AMDDAS Foods Events</h1>
          <p className="amddas-banner-subtitle">
            From intimate gatherings to large-scale celebrations, AMDDAS FOODS brings flavor, finesse, and flawless execution to every occasion.
          </p>
        </div>
      </section>

      {/* Event Sections */}
      {eventSections.map((section) => (
        <section 
          key={section.id}
          id={section.id}
          className={`amddas-event-section ${section.reverse ? 'amddas-reverse' : ''}`}
        >
          <div className="amddas-event-container amddas-container-fix">
            <div className="amddas-event-image-wrapper amddas-animate-on-scroll">
              <div className="amddas-event-image">
                <img
                  src={section.image}
                  alt={section.imageAlt}
                  className="amddas-responsive-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            
            <div className="amddas-event-content amddas-animate-on-scroll">
              <h2 className="amddas-event-title amddas-animate-on-scroll">{section.title}</h2>
              <div className="amddas-event-description">
                {section.description.split('\\n').map((paragraph, index) => (
                  <p key={index} className="amddas-event-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Swiper Section */}
      <section className="amddas-swiper-section">
        <div className="amddas-swiper-container amddas-container-fix">
          <h2 className="amddas-swiper-heading amddas-animate-on-scroll">
            Our Signature Services
          </h2>
          
          <Swiper
            className="amddas-events-swiper"
            {...swiperConfig}
          >
            {slideData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="amddas-slide-content">
                  <div 
                    className="amddas-slide-image"
                    style={{ maxWidth: '100%', overflow: 'hidden', boxSizing: 'border-box' }}
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="amddas-slide-img"
                      onLoad={(e) => handleImageLoad(e, index)}
                      onError={() => handleImageError(index)}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  
                  <div className="amddas-slide-text">
                    <h3 className="amddas-slide-title">{slide.title}</h3>
                    <h4 className="amddas-slide-subtitle">{slide.subtitle}</h4>
                    <p className="amddas-slide-description">{slide.description}</p>
                    <button 
                      className="amddas-enquire-btn"
                      onClick={handleEnquireClick}
                      aria-label="Contact us for enquiry"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
});
