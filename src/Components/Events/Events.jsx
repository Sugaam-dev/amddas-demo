

// import React, { useEffect, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';

// import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
// import '../Styles/events.css'; 

// export default function Carousel() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     handleResize();
//     window.addEventListener('resize', handleResize);

//     // Function to handle scrolling to specific sections
//     const handleSectionScroll = () => {
//       // Check all possible scroll flags in sessionStorage
//       const scrollFlags = [
//         { key: 'scrollToWedding', sectionId: 'wedding-section' },
//         { key: 'scrollToBirthday', sectionId: 'birthday-section' },
//         { key: 'scrollToHousewarming', sectionId: 'housewarming-section' },
//         { key: 'scrollToEngagement', sectionId: 'engagement-section' },
//         { key: 'scrollToFestival', sectionId: 'festival-section' },
//         { key: 'scrollToBhandaara', sectionId: 'bhandaara-section' }
//       ];

//       scrollFlags.forEach(({ key, sectionId }) => {
//         const shouldScroll = sessionStorage.getItem(key);
//         if (shouldScroll === 'true') {
//           sessionStorage.removeItem(key);
//           setTimeout(() => {
//             const element = document.getElementById(sectionId);
//             if (element) {
//               element.scrollIntoView({ 
//                 behavior: 'smooth',
//                 block: 'start'
//               });
//             }
//           }, 500);
//         }
//       });
//     };

//     // Handle URL hash-based scrolling
//     const handleHashScroll = () => {
//       const hash = window.location.hash;
//       if (hash) {
//         setTimeout(() => {
//           const element = document.getElementById(hash.substring(1));
//           if (element) {
//             element.scrollIntoView({ 
//               behavior: 'smooth',
//               block: 'start'
//             });
//           }
//         }, 500);
//       }
//     };

//     // Execute scroll handlers
//     handleSectionScroll();
//     handleHashScroll();

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const phoneNumber = '+919632764963'; 
//   const whatsappURL = `https://wa.me/${phoneNumber.replace('+', '')}?text=Hello%20Amddas%20Foods!%20I%20would%20like%20to%20enquire%20about%20your%20services.`; // WhatsApp URL with a prefilled message

//   const handleEnquireClick = () => {
//     if (isMobile) {
//       window.location.href = `tel:${phoneNumber}`; // Open the phone dialer
//     } else {
//       window.open(whatsappURL, '_blank'); // Open WhatsApp in a new tab
//     }
//   };

//   return (
//     <div className="containerr">
//       <div className="banner-section-event">
//         <h1 className="banner-title-event">Amddas Foods Events</h1>
//         <p className="banner-subtitle-event">
//           From intimate gatherings to large-scale celebrations, AMDDAS FOODS brings flavor, finesse, and flawless execution to every occasion.
//         </p>
//       </div>
//       {/* <div className="content-section">
//         <section> */}
//           {/* <span>
//             Amddas Foods offers personalized menus, premium-quality dishes, and exceptional service for all occasions,
//             ensuring unforgettable culinary experiences through attention to detail, themed delicacies, and a commitment
//             to customer satisfaction.
//           </span>
//           <h2 className="section-heading">Uncompromising Quality</h2>
//           <p>
//             We ensure every dish meets our unwavering standards of excellence, crafted with premium ingredients to
//             provide a delightful dining experience that exceeds expectations and celebrates the art of fine cuisine.
//           </p>
//           <h2 className="section-heading">Diverse Event Offerings</h2>
//           <p>
//             From private events to weddings, birthdays, and corporate gatherings, we specialize in delivering versatile
//             catering solutions tailored to your needs, offering exceptional service to make every occasion truly
//             memorable.
//           </p>
//           <h2 className="section-heading">Attention to Detail</h2>
//           <p>
//             Every aspect of our service is meticulously planned and executed, including menu customization, presentation,
//             and ambiance, ensuring your event is flawless and perfectly aligned with your vision.
//           </p>
//           <h2 className="section-heading">Convenience and Reliability </h2>
//           <p>
//             Our dedicated team guarantees a hassle-free experience by managing every detail of your event, delivering
//             seamless execution that you can trust for efficiency and dependability.
//           </p>
//           <h2 className="section-heading">Exquisite Themed Delicacies</h2>
//           <p>
//             We craft extraordinary dishes designed to complement your celebration's theme, creating a culinary experience
//             that resonates with the occasion and delights your guests.
//           </p>
//           <h2 className="section-heading">Customer Satisfaction</h2>
//           <p>
//             We prioritize your happiness by delivering exceptional food, impeccable service, and unforgettable
//             experiences, ensuring you and your guests leave with cherished memories.
//           </p>
//           <h2 className="section-heading">Trusted Partner for All Occasions</h2>
//           <p>
//             Whether it's a small gathering or a grand event, we are your reliable partner in creating extraordinary
//             experiences that leave a lasting impression.
//           </p>
//           <span>
//             Let us transform your celebrations into timeless memories with our expertise, passion, and dedication to
//             excellence.
//           </span> */} 
//         {/* </section>
//       </div> */}

//       {/* Wedding Section */}
//       <div id="wedding-section" className="wedding-section">
//         <div className="wedding-container">
//           <div className="wedding-image">
//             <img src="/images/Engagement1.jpg" alt="Wedding Celebration" />
//           </div>
//           <div className="wedding-content">
//             <h1 className="wedding-title">Wedding Functions</h1>
//             <p className="wedding-description">
//             Custom wedding catering for all cultures and rituals – from pre-wedding functions to the main event – with live counters, themed menus, and personalized service.
//             </p>
//             {/* <button
//               className="enquire-now wedding-enquire"
//               onClick={handleEnquireClick}
//             >
//               Enquire Now
//             </button> */}
//           </div>
//         </div>
//       </div>

//        {/* House Warming Section */}
//        <div id="housewarming-section" className="wedding-section">
//         <div className="wedding-container">
//           <div className="wedding-content">
//             <h1 className="wedding-title">House Warming Celebrations</h1>
//             <p className="wedding-description">
//             Delicious and auspicious food offerings to make your Griha Pravesh celebration memorable for your guests.
//             </p>
//             {/* <button
//               className="enquire-now wedding-enquire"
//               onClick={handleEnquireClick}
//             >
//               Enquire Now
//             </button> */}
//           </div>
//           <div className="wedding-image">
//             <img src="/images/events-bg.jpg" alt="House Warming Celebration" />
//           </div>
//         </div>
//       </div>

//       {/* Birthday Section */}
//       <div id="birthday-section" className="wedding-section">
//         <div className="birthday-container">
//           <div className="birthday-image">
//             <img src="/images/events.webp" alt="Birthday Celebration" />
//           </div>
//           <div className="birthday-content">
//             <h1 className="wedding-title">Birthday Celebrations</h1>
//             <p className="birthday-description">
//             Fun, themed, and age-appropriate catering solutions for birthdays – from kids’ parties to milestone celebrations.
//             </p>
//             {/* <button
//               className="enquire-now birthday-enquire"
//               onClick={handleEnquireClick}
//             >
//               Enquire Now
//             </button> */}
//           </div>
//         </div>
//       </div>

//        {/* Engagement Section */}
//        <div id="engagement-section" className="wedding-section">
//         <div className="wedding-container">
//           <div className="wedding-content">
//             <h1 className="wedding-title">Engagement Ceremonies</h1>
//             <p className="wedding-description">
//             Elegant and tasteful catering services for engagement ceremonies, including welcome drinks, starters, main course, and desserts.
//             </p>
//             {/* <button
//               className="enquire-now wedding-enquire"
//               onClick={handleEnquireClick}
//             >
//               Enquire Now
//             </button> */}
//           </div>
//           <div className="wedding-image">
//             <img src="/images/events.jpg" alt="Engagement Celebration" />
//           </div>
//         </div>
//       </div>

//        {/* Community Festivals Section */}
//        <div id="festival-section" className="wedding-section">
//         <div className="wedding-container">
//           <div className="wedding-image">
//             <img src="/images/supply.jpeg" alt="Festival Celebration" />
//           </div>
//           <div className="wedding-content">
//             <h1 className="wedding-title">Community Festivals</h1>
//             <p className="wedding-description">
//             Large-scale catering for religious, cultural, and neighborhood festivals with traditional menus and regional specialties.
//             </p>
//             {/* <button
//               className="enquire-now wedding-enquire"
//               onClick={handleEnquireClick}
//             >
//               Enquire Now
//             </button> */}
//           </div>
//         </div>
//       </div>

//        {/* Bhandaara Section */}
//        <div id="bhandaara-section" className="wedding-section">
//         <div className="wedding-container">
//           <div className="wedding-content">
//             <h1 className="wedding-title">Bhandaara Services</h1>
//             <p className="wedding-description">
//             Mass meal distribution with spiritual essence – catering to religious or charitable gatherings with satvik and hygienic food preparations.
//             </p>
//             {/* <button
//               className="enquire-now wedding-enquire"
//               onClick={handleEnquireClick}
//             >
//               Enquire Now
//             </button> */}
//           </div>
//           <div className="wedding-image">
//             <img src="/images/Cafeteria1.jpg" alt="Bhandaara Service" />
//           </div>
//         </div>
//       </div>

//       <Swiper
//         cssMode={true}
//         navigation={false}
//         pagination={{ clickable: true }}
//         mousewheel={true}
//         keyboard={true}
//         autoplay={{
//           delay: 3000, 
//           disableOnInteraction: false, 
//         }}
//         modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
//         className="mySwiper"
//       >
//         {[
//           {
//             imgClass: 'slide_img1',
//             title: 'Private Events',
//             description: 'We ensure that the event is made memorable with exquisite delicacies prepared according to the theme of the event.',
//           },
//           {
//             imgClass: 'slide_img2',
//             title: 'Weddings',
//             description: 'We make sure to make your wedding more memorable by serving the best food to you and your guests.',
//           },
//           {
//             imgClass: 'slide_img3',
//             title: 'Corporate Events',
//             description: 'Make your next event a success. We serve the right kind of delicacies, keeping in mind your guest profile.',
//           },
//           {
//             imgClass: 'slide_img4',
//             title: 'Birthday',
//             description: 'Our team is committed to making your events run smoothly by providing delicious food.',
//           },
//           {
//             imgClass: 'slide_img5',
//             title: 'Specialized Cuisines',
//             description: 'We ensure that the event is made memorable with exquisite delicacies prepared according to the theme of the event.',
//           },
//         ].map((slide, index) => (
//           <SwiperSlide key={index}>
//             <h1 className="heading">Our Social & Professional Events</h1>
//             <div className="slide">
//               <div className={`${slide.imgClass} slide1`}></div>
//               <div className="text">
//                 <h2 className="specialized-cuisines">{slide.title}</h2>
//                 <div className="events-description">
//                   <h3>Always fresh & high-quality food</h3>
//                   <p>{slide.description}</p>
//                   <button
//                     className="enquire-now"
//                     onClick={handleEnquireClick}
//                   >
//                     Enquire Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

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
// Import centralized caching system
import { preloadImages, getCacheStats } from '../../utils/imageCache';

export default function Carousel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // ===== CENTRALIZED IMAGE CACHING =====
    // To disable caching: Comment out the preloadImages call below
    // To enable caching: Uncomment the preloadImages call below
    
    // Verify these are the EXACT images used in the component
    const eventImages = [
      '/images/Marriage.jpg',        // Wedding section
      '/images/events-bg.jpg',       // House warming section  
      '/images/events.webp',         // Birthday section
      '/images/Engagement1.jpg',     // Engagement section
      '/images/community.jpg',       // Community festivals section
      '/images/Cafeteria1.jpg'       // Bhandaara section
    ];

    // UNCOMMENT BELOW TO ENABLE CACHING
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
    
    // COMMENT OUT ABOVE BLOCK TO DISABLE CACHING
    // ====================================

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);

    // Function to handle scrolling to specific sections
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

      scrollFlags.forEach(({ key, sectionId }) => {
        const shouldScroll = sessionStorage.getItem(key);
        if (shouldScroll === 'true') {
          sessionStorage.removeItem(key);
          setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
              element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }
          }, 500);
        }
      });
    };

    // Handle URL hash-based scrolling
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 500);
      }
    };

    // Execute scroll handlers
    handleSectionScroll();
    handleHashScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const phoneNumber = '+919632764963'; 
  const whatsappURL = `https://wa.me/${phoneNumber.replace('+', '')}?text=Hello%20Amddas%20Foods!%20I%20would%20like%20to%20enquire%20about%20your%20services.`; // WhatsApp URL with a prefilled message

  const handleEnquireClick = () => {
    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`; // Open the phone dialer
    } else {
      window.open(whatsappURL, '_blank'); // Open WhatsApp in a new tab
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
            
                  At AMDDAS FOODS PVT LTD, we understand that a wedding is more than just an event—it’s a once-in-a-lifetime celebration of love, joy, and tradition. Our service is designed to make your big day even more special. From traditional South Indian feasts to global fusion menus, we specialize in creating custom-made dishes that reflect your unique style and heritage. Whether it’s an intimate gathering or a grand celebration, we deliver an unforgettable dining experience for you and your guests.<br/>

                  Our expert chefs prepare every dish using the freshest ingredients, ensuring each meal is not only delicious but also hygienic and safe. From starters to desserts, we provide a range of options to suit every palate and preference, including vegetarian, vegan, Jain, and regional delicacies. Our presentation is as beautiful as the food itself, with every dish carefully crafted to impress.<br/>

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
            A housewarming is a time to celebrate new beginnings, and AMDDAS FOODS PVT LTD is here to ensure your celebration is filled with delightful flavors and warmth. Our service is designed to complement the joy and excitement of settling into a new home. Whether you’re hosting a traditional Griha Pravesh ceremony or a casual get-together, we offer customizable menus that suit your occasion.<br/>

            Our chefs use only the freshest ingredients to prepare traditional South Indian, North Indian, and regional specialties. We accommodate dietary preferences and religious customs, ensuring that everyone can enjoy the feast. From prasadam offerings to lavish buffet spreads, we handle every detail so you can focus on enjoying your new space with loved ones.<br/>

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

      {/* Birthday Section - Fixed to use wedding-container */}
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
            At AMDDAS FOODS PVT LTD, we believe that birthdays should be as fun and flavorful as possible! Whether it’s a child’s first birthday, a milestone celebration, or a surprise party, we provide everything you need to make your special day truly enjoyable. Our birthday menus are designed to delight all age groups, featuring a variety of appetizers, mains, and decadent desserts.<br/>

            We offer both traditional and modern dishes, from live pasta counters to customized birthday cakes, ensuring there’s something for everyone. Our team focuses on presentation, taste, and hygiene, ensuring that every dish is prepared fresh and served with a smile. If you have a themed party, we can match the food presentation to your decor and party vibe.<br/>

            Celebrate your birthday with AMDDAS, where delicious food adds the perfect touch to your joyous occasion.
            </p>
          </div>
        </div>
      </div>

       {/* Engagement Section */}
       <div id="engagement-section" className="wedding-section">
        <div className="wedding-container">
          <div className="wedding-content">
            <h1 className="wedding-title">Anniversory Ceremonies</h1>
            <p className="wedding-description">
            Whether it’s your first anniversary or your golden jubilee, AMDDAS FOODS PVT LTD is honored to help you celebrate the milestone of love with food that speaks volumes. Our service is designed to reflect the elegance and beauty of your relationship. Whether you're hosting an intimate family dinner or a grand celebration with friends, we offer tailor-made menus to suit your event.<br/>

            Our team ensures that every dish is meticulously prepared and beautifully presented. From multi-course meals to exquisite desserts, we bring the perfect blend of taste, luxury, and sophistication. We cater to various preferences, offering both Indian and continental options, ensuring a delightful dining experience for every guest.<br/>

            Let AMDDAS add a flavorful dimension to your anniversary celebration, creating memories that will last a lifetim
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
            At AMDDAS FOODS PVT LTD, we know that festivals are a time to come together with family and friends, sharing good food and great memories. We offer specialized services for all major celebrations, including Diwali, Holi, Eid, Christmas, and more. Our team is passionate about delivering authentic, traditional dishes that honor the spirit of the season.<br/>

            From rich sweets and delicacies for Diwali to hearty meals for Christmas, we prepare every dish with love and attention to detail. We cater to specific festival needs, offering prasadam, live counters, and eco-friendly serving options. Our chefs use only fresh ingredients to create meals that are not only delicious but also hygienic and safe.<br/>

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
            Community events bring people together to celebrate, share, and create lasting connections. At AMDDAS FOODS PVT LTD, we specialize in providing delightful food experiences for a wide range of occasions—from cultural programs and apartment gatherings to temple festivals and society celebrations. Our extensive experience allows us to handle large-scale requirements with efficiency and professionalism.<br/>

            We provide diverse menus that cater to the varied tastes and dietary preferences of the community. Whether it’s a buffet-style meal or a plated dinner, our team ensures timely service, hygienic food preparation, and beautiful presentation. We also handle logistics, ensuring everything from meal timings to serving formats runs smoothly.<br/>

            With AMDDAS, your community event will be a flavorful and seamless experience, where everyone enjoys great food and great company
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