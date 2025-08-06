import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import './Events.css';
// Import centralized caching system if you have it
// import { preloadImages, getCacheStats } from '../../utils/imageCache';

export default function Carousel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // ===== CENTRALIZED IMAGE CACHING (OPTIONAL) =====
    // Uncomment below if you have the imageCache utility
    /*
    const eventImages = [
      '/images/Marriage.jpg',
      '/images/events-bg.jpg',
      '/images/events.webp',
      '/images/Engagement1.jpg',
      '/images/community.jpg',
      '/images/Cafeteria1.jpg'
    ];

    preloadImages(eventImages, {
      delay: 50,
      highPriorityCount: 3,
      onProgress: ({ loaded, total, src, error }) => {
        if (error) {
          console.error(`Failed to cache image: ${src}`);
        }
      }
    }).catch((error) => {
      console.error('Image caching failed:', error);
    });
    */
    // ====================================

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);

    // FIXED: Better scroll handling with improved positioning and timing
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Wait for page to be fully rendered
        setTimeout(() => {
          // Get the element's position relative to the document
          const elementRect = element.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.pageYOffset;
          const navbarHeight = 90; // Account for navbar height + some padding
          const scrollToPosition = Math.max(0, absoluteElementTop - navbarHeight);
          
          // Scroll to the calculated position
          window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
          });
        }, 300); // Increased delay to ensure page is fully loaded
      }
    };

    // Function to handle scrolling to specific sections with improved logic
    const handleSectionScroll = () => {
      // Check all possible scroll flags in sessionStorage
      const scrollFlags = [
        { key: 'scrollToWedding', sectionId: 'wedding-section' },
        { key: 'scrollToBirthday', sectionId: 'birthday-section' },
        { key: 'scrollToHousewarming', sectionId: 'housewarming-section' },
        { key: 'scrollToEngagement', sectionId: 'engagement-section' },
        { key: 'scrollToFestival', sectionId: 'festival-section' },
        { key: 'scrollToBhandaara', sectionId: 'bhandaara-section' }
      ];

      // Check if any scroll target is set
      let scrollTarget = null;
      scrollFlags.forEach(({ key, sectionId }) => {
        if (sessionStorage.getItem(key)) {
          scrollTarget = { key, sectionId };
          sessionStorage.removeItem(key); // Clear immediately to prevent conflicts
        }
      });

      // If we found a target to scroll to
      if (scrollTarget) {
        // Clear all other scroll flags to prevent conflicts
        scrollFlags.forEach(({ key }) => {
          if (key !== scrollTarget.key) {
            sessionStorage.removeItem(key);
          }
        });

        // Perform the scroll with better timing
        scrollToSection(scrollTarget.sectionId);
      }
    };

    // Handle URL hash-based scrolling
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1);
        scrollToSection(sectionId);
      }
    };

    // Execute scroll handlers
    handleSectionScroll();
    handleHashScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array - run only once on mount

  const phoneNumber = '+919632764963'; 
  const whatsappURL = `https://wa.me/${phoneNumber.replace('+', '')}?text=Hello%20Amddas%20Foods!%20I%20would%20like%20to%20enquire%20about%20your%20services.`;

  const handleEnquireClick = () => {
    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      window.open(whatsappURL, '_blank');
    }
  };

  return (
    <div className="containerr">
      <div className="banner-section-event">
        <h1 className="banner-title-event">AMDDAS Foods Events</h1>
        <p className="banner-subtitle-event">
          From intimate gatherings to large-scale celebrations, AMDDAS FOODS brings flavor, finesse, and flawless execution to every occasion.
        </p>
      </div>

      {/* Wedding Section */}
      <div id="wedding-section" className="wedding-section">
        <div className="wedding-container">
          <div className="wedding-image">
            <img 
              src="/images/Marriage.jpg" 
              alt="Wedding Celebration"
              loading="lazy"
            />
          </div>
          <div className="wedding-content">
            <h1 className="wedding-title">Wedding Functions</h1>
            <p className="wedding-description">
              At AMDDAS FOODS PVT LTD, we understand that a wedding is more than just an event—it's a once-in-a-lifetime celebration of love, joy, and tradition. Our service is designed to make your big day even more special. From traditional South Indian feasts to global fusion menus, we specialize in creating custom-made dishes that reflect your unique style and heritage. Whether it's an intimate gathering or a grand celebration, we deliver an unforgettable dining experience for you and your guests.<br/><br/>

              Our expert chefs prepare every dish using the freshest ingredients, ensuring each meal is not only delicious but also hygienic and safe. From starters to desserts, we provide a range of options to suit every palate and preference, including vegetarian, vegan, Jain, and regional delicacies. Our presentation is as beautiful as the food itself, with every dish carefully crafted to impress.<br/><br/>

              With AMDDAS, you can relax and enjoy your wedding day, knowing that your food and service needs are in the hands of professionals who take pride in creating memorable moments through taste.
            </p>
          </div>
        </div>
      </div>

       {/* House Warming Section */}
       <div id="housewarming-section" className="wedding-section">
        <div className="wedding-container">
          <div className="wedding-content">
            <h1 className="wedding-title">House Warming Celebrations</h1>
            <p className="wedding-description">
              A housewarming is a time to celebrate new beginnings, and AMDDAS FOODS PVT LTD is here to ensure your celebration is filled with delightful flavors and warmth. Our service is designed to complement the joy and excitement of settling into a new home. Whether you're hosting a traditional Griha Pravesh ceremony or a casual get-together, we offer customizable menus that suit your occasion.<br/><br/>

              Our chefs use only the freshest ingredients to prepare traditional South Indian, North Indian, and regional specialties. We accommodate dietary preferences and religious customs, ensuring that everyone can enjoy the feast. From prasadam offerings to lavish buffet spreads, we handle every detail so you can focus on enjoying your new space with loved ones.<br/><br/>

              With AMDDAS, your housewarming will be a delicious and unforgettable event, marking the beginning of your journey in your new home.
            </p>
          </div>
          <div className="wedding-image">
            <img 
              src="/images/events-bg.jpg" 
              alt="House Warming Celebration"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Birthday Section */}
      <div id="birthday-section" className="wedding-section">
        <div className="wedding-container">
          <div className="wedding-image">
            <img 
              src="/images/events.webp" 
              alt="Birthday Celebration"
              loading="lazy"
            />
          </div>
          <div className="wedding-content">
            <h1 className="wedding-title">Birthday Celebrations</h1>
            <p className="wedding-description">
              At AMDDAS FOODS PVT LTD, we believe that birthdays should be as fun and flavorful as possible! Whether it's a child's first birthday, a milestone celebration, or a surprise party, we provide everything you need to make your special day truly enjoyable. Our birthday menus are designed to delight all age groups, featuring a variety of appetizers, mains, and decadent desserts.<br/><br/>

              We offer both traditional and modern dishes, from live pasta counters to customized birthday cakes, ensuring there's something for everyone. Our team focuses on presentation, taste, and hygiene, ensuring that every dish is prepared fresh and served with a smile. If you have a themed party, we can match the food presentation to your decor and party vibe.<br/><br/>

              Celebrate your birthday with AMDDAS, where delicious food adds the perfect touch to your joyous occasion.
            </p>
          </div>
        </div>
      </div>

       {/* Engagement Section */}
       <div id="engagement-section" className="wedding-section">
        <div className="wedding-container">
          <div className="wedding-content">
            <h1 className="wedding-title">Anniversary Ceremonies</h1>
            <p className="wedding-description">
              Whether it's your first anniversary or your golden jubilee, AMDDAS FOODS PVT LTD is honored to help you celebrate the milestone of love with food that speaks volumes. Our service is designed to reflect the elegance and beauty of your relationship. Whether you're hosting an intimate family dinner or a grand celebration with friends, we offer tailor-made menus to suit your event.<br/><br/>

              Our team ensures that every dish is meticulously prepared and beautifully presented. From multi-course meals to exquisite desserts, we bring the perfect blend of taste, luxury, and sophistication. We cater to various preferences, offering both Indian and continental options, ensuring a delightful dining experience for every guest.<br/><br/>

              Let AMDDAS add a flavorful dimension to your anniversary celebration, creating memories that will last a lifetime.
            </p>
          </div>
          <div className="wedding-image">
            <img 
              src="/images/Engagement1.jpg" 
              alt="Engagement Celebration"
              loading="lazy"
            />
          </div>
        </div>
      </div>

       {/* Community Festivals Section */}
       <div id="festival-section" className="wedding-section">
        <div className="wedding-container">
          <div className="wedding-image">
            <img 
              src="/images/community.jpg" 
              alt="Festival Celebration"
              loading="lazy"
            />
          </div>
          <div className="wedding-content">
            <h1 className="wedding-title">Community Festivals</h1>
            <p className="wedding-description">
              At AMDDAS FOODS PVT LTD, we know that festivals are a time to come together with family and friends, sharing good food and great memories. We offer specialized services for all major celebrations, including Diwali, Holi, Eid, Christmas, and more. Our team is passionate about delivering authentic, traditional dishes that honor the spirit of the season.<br/><br/>

              From rich sweets and delicacies for Diwali to hearty meals for Christmas, we prepare every dish with love and attention to detail. We cater to specific festival needs, offering prasadam, live counters, and eco-friendly serving options. Our chefs use only fresh ingredients to create meals that are not only delicious but also hygienic and safe.<br/><br/>

              Celebrate your festivals with AMDDAS, where every meal is a blessing.
            </p>
          </div>
        </div>
      </div>

       {/* Bhandaara Section */}
       <div id="bhandaara-section" className="wedding-section">
        <div className="wedding-container">
          <div className="wedding-content">
            <h1 className="wedding-title">Bhandaara Services</h1>
            <p className="wedding-description">
              Community events bring people together to celebrate, share, and create lasting connections. At AMDDAS FOODS PVT LTD, we specialize in providing delightful food experiences for a wide range of occasions—from cultural programs and apartment gatherings to temple festivals and society celebrations. Our extensive experience allows us to handle large-scale requirements with efficiency and professionalism.<br/><br/>

              We provide diverse menus that cater to the varied tastes and dietary preferences of the community. Whether it's a buffet-style meal or a plated dinner, our team ensures timely service, hygienic food preparation, and beautiful presentation. We also handle logistics, ensuring everything from meal timings to serving formats runs smoothly.<br/><br/>

              With AMDDAS, your community event will be a flavorful and seamless experience, where everyone enjoys great food and great company.
            </p>
          </div>
          <div className="wedding-image">
            <img 
              src="/images/Cafeteria1.jpg" 
              alt="Bhandaara Service"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <Swiper
        cssMode={true}
        navigation={false}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        {[
          {
            imgClass: 'slide_img1',
            title: 'Corporate Catering',
            subtitle: 'Fueling Workdays with Fresh, Hygienic, and Delicious Meals',
            description: 'We ensure that the event is made memorable with exquisite delicacies prepared according to the theme of the event.',
          },
          {
            imgClass: 'slide_img2',
            title: 'Weddings',
            subtitle: 'Flavors of Love, Crafted for Your Perfect Day',
            description: 'We make sure to make your wedding more memorable by serving the best food to you and your guests.',
          },
          {
            imgClass: 'slide_img3',
            title: 'Corporate Events',
            subtitle: 'From Boardrooms to Ballrooms — Exceptional Food for Every Corporate Occasion',
            description: 'Make your next event a success. We serve the right kind of delicacies, keeping in mind your guest profile.',
          },
          {
            imgClass: 'slide_img4',
            title: 'Birthday',
            subtitle: 'Adding Taste to Every Slice of Celebration',
            description: 'Our team is committed to making your events run smoothly by providing delicious food.',
          },
          {
            imgClass: 'slide_img5',
            title: 'Specialized Cuisines',
            subtitle: 'Celebrating Traditions with Food That Feels Like Home',
            description: 'We ensure that the event is made memorable with exquisite delicacies prepared according to the theme of the event.',
          },
        ].map((slide, index) => (
          <SwiperSlide key={index}>
            <h1 className="heading">Our Social & Professional Events</h1>
            <div className="slide">
              <div className={`${slide.imgClass} slide1`}></div>
              <div className="text">
                <h2 className="specialized-cuisines">{slide.title}</h2>
                <div className="events-description">
                  <h3>{slide.subtitle}</h3>
                  <p>{slide.description}</p>
                  <button
                    className="enquire-now"
                    onClick={handleEnquireClick}
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}