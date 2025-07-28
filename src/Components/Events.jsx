// // import React, { useEffect, useState } from 'react';
// // // Import Swiper React components
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // // Import Swiper styles
// // import 'swiper/css';
// // import 'swiper/css/navigation';
// // import 'swiper/css/pagination';
// // import 'swiper/css/autoplay';

// // import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
// // import '../Styles/events.css'; 

// // export default function Carousel() {
// //   const [isMobile, setIsMobile] = useState(false);

// //   useEffect(() => {
// //     const handleResize = () => setIsMobile(window.innerWidth <= 768);
// //     handleResize();
// //     window.addEventListener('resize', handleResize);

// //     // Handle wedding section scroll on component mount
// //     const scrollToWeddingSection = () => {
// //       if (window.location.hash === '#wedding-section' || window.location.pathname.includes('wedding')) {
// //         setTimeout(() => {
// //           const element = document.getElementById('wedding-section');
// //           if (element) {
// //             element.scrollIntoView({ 
// //               behavior: 'smooth',
// //               block: 'start'
// //             });
// //           }
// //         }, 500);
// //       }
// //     };

// //     // Handle birthday section scroll on component mount
// //     const scrollToBirthdaySection = () => {
// //       if (window.location.hash === '#birthday-section' || window.location.pathname.includes('birthday')) {
// //         setTimeout(() => {
// //           const element = document.getElementById('birthday-section');
// //           if (element) {
// //             element.scrollIntoView({ 
// //               behavior: 'smooth',
// //               block: 'start'
// //             });
// //           }
// //         }, 500);
// //       }
// //     };

// //     // Check sessionStorage for scroll flags
// //     const scrollToWedding = sessionStorage.getItem('scrollToWedding');
// //     const scrollToBirthday = sessionStorage.getItem('scrollToBirthday');
    
// //     if (scrollToWedding === 'true') {
// //       sessionStorage.removeItem('scrollToWedding');
// //       setTimeout(() => {
// //         const element = document.getElementById('wedding-section');
// //         if (element) {
// //           element.scrollIntoView({ 
// //             behavior: 'smooth',
// //             block: 'start'
// //           });
// //         }
// //       }, 1000);
// //     }

// //     if (scrollToBirthday === 'true') {
// //       sessionStorage.removeItem('scrollToBirthday');
// //       setTimeout(() => {
// //         const element = document.getElementById('birthday-section');
// //         if (element) {
// //           element.scrollIntoView({ 
// //             behavior: 'smooth',
// //             block: 'start'
// //           });
// //         }
// //       }, 1000);
// //     }

// //     // Scroll to sections based on hash
// //     scrollToWeddingSection();
// //     scrollToBirthdaySection();

// //     return () => {
// //       window.removeEventListener('resize', handleResize);
// //     };
// //   }, []);

// //   const phoneNumber = '+919632764963'; 
// //   const whatsappURL = `https://wa.me/${phoneNumber.replace('+', '')}?text=Hello%20Amddas%20Foods!%20I%20would%20like%20to%20enquire%20about%20your%20services.`; // WhatsApp URL with a prefilled message

// //   const handleEnquireClick = () => {
// //     if (isMobile) {
// //       window.location.href = `tel:${phoneNumber}`; // Open the phone dialer
// //     } else {
// //       window.open(whatsappURL, '_blank'); // Open WhatsApp in a new tab
// //     }
// //   };

// //   return (
// //     <div className="containerr">
// //       <div className="banner-section-event">
// //         <h1 className="banner-title-event">Amddas Foods Events</h1>
// //       </div>
// //       <div className="content-section">
// //         <section>
// //           <span>
// //             Amddas Foods offers personalized menus, premium-quality dishes, and exceptional service for all occasions,
// //             ensuring unforgettable culinary experiences through attention to detail, themed delicacies, and a commitment
// //             to customer satisfaction.
// //           </span>
// //           <h2 className="section-heading">Uncompromising Quality</h2>
// //           <p>
// //             We ensure every dish meets our unwavering standards of excellence, crafted with premium ingredients to
// //             provide a delightful dining experience that exceeds expectations and celebrates the art of fine cuisine.
// //           </p>
// //           <h2 className="section-heading">Diverse Event Offerings</h2>
// //           <p>
// //             From private events to weddings, birthdays, and corporate gatherings, we specialize in delivering versatile
// //             catering solutions tailored to your needs, offering exceptional service to make every occasion truly
// //             memorable.
// //           </p>
// //           <h2 className="section-heading">Attention to Detail</h2>
// //           <p>
// //             Every aspect of our service is meticulously planned and executed, including menu customization, presentation,
// //             and ambiance, ensuring your event is flawless and perfectly aligned with your vision.
// //           </p>
// //           <h2 className="section-heading">Convenience and Reliability </h2>
// //           <p>
// //             Our dedicated team guarantees a hassle-free experience by managing every detail of your event, delivering
// //             seamless execution that you can trust for efficiency and dependability.
// //           </p>
// //           <h2 className="section-heading">Exquisite Themed Delicacies</h2>
// //           <p>
// //             We craft extraordinary dishes designed to complement your celebration's theme, creating a culinary experience
// //             that resonates with the occasion and delights your guests.
// //           </p>
// //           <h2 className="section-heading">Customer Satisfaction</h2>
// //           <p>
// //             We prioritize your happiness by delivering exceptional food, impeccable service, and unforgettable
// //             experiences, ensuring you and your guests leave with cherished memories.
// //           </p>
// //           <h2 className="section-heading">Trusted Partner for All Occasions</h2>
// //           <p>
// //             Whether it's a small gathering or a grand event, we are your reliable partner in creating extraordinary
// //             experiences that leave a lasting impression.
// //           </p>
// //           <span>
// //             Let us transform your celebrations into timeless memories with our expertise, passion, and dedication to
// //             excellence.
// //           </span>
// //         </section>
// //       </div>

// //       {/* Wedding Section */}
// //       <div id="wedding-section" className="wedding-section">
// //         <div className="wedding-container">
// //           <div className="wedding-image">
// //             <img src="/images/Engagement1.jpg" alt="Wedding Celebration" />
// //           </div>
// //           <div className="wedding-content">
// //             <h1 className="wedding-title">Wedding Functions</h1>
// //             <p className="wedding-description">
// //               At AMDDAS FOODS PVT LTD, our mission is to redefine corporate dining and events through exceptional quality, 
// //               customized culinary solutions, and a commitment to reliability, hygiene, and customer satisfaction. We aim to create lasting 
// //               impressions by blending flavor with flawless service, ensuring every event is a success.
// //             </p>
// //             {/* <button
// //               className="enquire-now wedding-enquire"
// //               onClick={handleEnquireClick}
// //             >
// //               READ MORE
// //             </button> */}
// //           </div>
// //         </div>
// //       </div>

// //        {/* House Warming */}
// //        <div id="wedding-section" className="wedding-section">
// //         <div className="wedding-container">
          
// //           <div className="wedding-content">
// //             <h1 className="wedding-title">House Warming</h1>
// //             <p className="wedding-description">
// //               At AMDDAS FOODS PVT LTD, our mission is to redefine corporate dining and events through exceptional quality, 
// //               customized culinary solutions, and a commitment to reliability, hygiene, and customer satisfaction. We aim to create lasting 
// //               impressions by blending flavor with flawless service, ensuring every event is a success.
// //             </p>
// //             {/* <button
// //               className="enquire-now wedding-enquire"
// //               onClick={handleEnquireClick}
// //             >
// //               READ MORE
// //             </button> */}
// //           </div>
// //           <div className="wedding-image">
// //             <img src="/images/events-bg.jpg" alt="Wedding Celebration" />
// //           </div>
// //         </div>
// //       </div>

// //       {/* Birthday Section */}
// //       <div id="birthday-section" className="birthday-section">
// //         <div className="birthday-container">
// //           <div className="birthday-image">
// //             <img src="/images/events.jpg" alt="Birthday Celebration" />
// //           </div>
// //           <div className="birthday-content">
// //             <h1 className="birthday-title">Birthday</h1>
// //             <h2 className="birthday-subtitle">Always fresh & high-quality food</h2>
// //             <p className="birthday-description">
// //               Our team is committed to making your events run smoothly by providing delicious food.
// //             </p>
// //             {/* <button
// //               className="enquire-now birthday-enquire"
// //               onClick={handleEnquireClick}
// //             >
// //               Enquire Now
// //             </button> */}
// //           </div>
// //         </div>
// //       </div>

// //        {/* Engegement section */}
// //        <div id="wedding-section" className="wedding-section">
// //         <div className="wedding-container">
          
// //           <div className="wedding-content">
// //             <h1 className="wedding-title">Engagements</h1>
// //             <p className="wedding-description">
// //               At AMDDAS FOODS PVT LTD, our mission is to redefine corporate dining and events through exceptional quality, 
// //               customized culinary solutions, and a commitment to reliability, hygiene, and customer satisfaction. We aim to create lasting 
// //               impressions by blending flavor with flawless service, ensuring every event is a success.
// //             </p>
// //             {/* <button
// //               className="enquire-now wedding-enquire"
// //               onClick={handleEnquireClick}
// //             >
// //               READ MORE
// //             </button> */}
// //           </div>
// //           <div className="wedding-image">
// //             <img src="/images/events.jpg" alt="Wedding Celebration" />
// //           </div>
// //         </div>
// //       </div>


// //        {/* Community Festivals Section */}
// //        <div id="wedding-section" className="wedding-section">
// //         <div className="wedding-container">
// //           <div className="wedding-image">
// //             <img src="/images/supply.jpeg" alt="Wedding Celebration" />
// //           </div>
// //           <div className="wedding-content">
// //             <h1 className="wedding-title">Community Festivals</h1>
// //             <p className="wedding-description">
// //               At AMDDAS FOODS PVT LTD, our mission is to redefine corporate dining and events through exceptional quality, 
// //               customized culinary solutions, and a commitment to reliability, hygiene, and customer satisfaction. We aim to create lasting 
// //               impressions by blending flavor with flawless service, ensuring every event is a success.
// //             </p>
// //             {/* <button
// //               className="enquire-now wedding-enquire"
// //               onClick={handleEnquireClick}
// //             >
// //               READ MORE
// //             </button> */}
// //           </div>
// //         </div>
// //       </div>

// //        {/* Bhandaara section */}
// //        <div id="wedding-section" className="wedding-section">
// //         <div className="wedding-container">
          
// //           <div className="wedding-content">
// //             <h1 className="wedding-title">Bhandaara</h1>
// //             <p className="wedding-description">
// //               At AMDDAS FOODS PVT LTD, our mission is to redefine corporate dining and events through exceptional quality, 
// //               customized culinary solutions, and a commitment to reliability, hygiene, and customer satisfaction. We aim to create lasting 
// //               impressions by blending flavor with flawless service, ensuring every event is a success.
// //             </p>
// //             {/* <button
// //               className="enquire-now wedding-enquire"
// //               onClick={handleEnquireClick}
// //             >
// //               READ MORE
// //             </button> */}
// //           </div>
// //           <div className="wedding-image">
// //             <img src="/images/cafeteria1.jpg" alt="Wedding Celebration" />
// //           </div>
// //         </div>
// //       </div>

// //       <Swiper
// //         cssMode={true}
// //         navigation={false}
// //         pagination={{ clickable: true }}
// //         mousewheel={true}
// //         keyboard={true}
// //         autoplay={{
// //           delay: 3000, 
// //           disableOnInteraction: false, 
// //         }}
// //         modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
// //         className="mySwiper"
// //       >
// //         {[
// //           {
// //             imgClass: 'slide_img1',
// //             title: 'Private Events',
// //             description: 'We ensure that the event is made memorable with exquisite delicacies prepared according to the theme of the event.',
// //           },
// //           {
// //             imgClass: 'slide_img2',
// //             title: 'Weddings',
// //             description: 'We make sure to make your wedding more memorable by serving the best food to you and your guests.',
// //           },
// //           {
// //             imgClass: 'slide_img3',
// //             title: 'Corporate Events',
// //             description: 'Make your next event a success. We serve the right kind of delicacies, keeping in mind your guest profile.',
// //           },
// //           {
// //             imgClass: 'slide_img4',
// //             title: 'Birthday',
// //             description: 'Our team is committed to making your events run smoothly by providing delicious food.',
// //           },
// //           {
// //             imgClass: 'slide_img5',
// //             title: 'Specialized Cuisines',
// //             description: 'We ensure that the event is made memorable with exquisite delicacies prepared according to the theme of the event.',
// //           },
// //         ].map((slide, index) => (
// //           <SwiperSlide key={index}>
// //             <h1 className="heading">Our Social & Professional Events</h1>
// //             <div className="slide">
// //               <div className={`${slide.imgClass} slide1`}></div>
// //               <div className="text">
// //                 <h2 className="specialized-cuisines">{slide.title}</h2>
// //                 <div className="events-description">
// //                   <h3>Always fresh & high-quality food</h3>
// //                   <p>{slide.description}</p>
// //                   <button
// //                     className="enquire-now"
// //                     onClick={handleEnquireClick}
// //                   >
// //                     Enquire Now
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>
// //     </div>
// //   );
// // }

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
//       </div>
//       <div className="content-section">
//         <section>
//           <span>
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
//           </span>
//         </section>
//       </div>

//       {/* Wedding Section */}
//       <div id="wedding-section" className="wedding-section">
//         <div className="wedding-container">
//           <div className="wedding-image">
//             <img src="/images/Engagement1.jpg" alt="Wedding Celebration" />
//           </div>
//           <div className="wedding-content">
//             <h1 className="wedding-title">Wedding Functions</h1>
//             <p className="wedding-description">
//               At AMDDAS FOODS PVT LTD, we specialize in creating magical wedding experiences with our exquisite culinary offerings. 
//               From traditional ceremonies to modern celebrations, we craft personalized menus that reflect your cultural heritage 
//               and personal preferences. Our expert team ensures every dish is prepared with the finest ingredients, creating 
//               unforgettable moments for you and your loved ones on your special day.
//             </p>
//             <button
//               className="enquire-now wedding-enquire"
//               onClick={handleEnquireClick}
//             >
//               Enquire Now
//             </button>
//           </div>
//         </div>
//       </div>

//        {/* House Warming Section */}
//        <div id="housewarming-section" className="wedding-section">
//         <div className="wedding-container">
//           <div className="wedding-content">
//             <h1 className="wedding-title">House Warming Celebrations</h1>
//             <p className="wedding-description">
//               Celebrate your new beginning with AMDDAS FOODS! Our house warming catering services bring warmth and joy to your 
//               new home with traditional and contemporary dishes. We understand the significance of this auspicious occasion and 
//               create memorable dining experiences that welcome prosperity and happiness into your new abode with authentic flavors 
//               and exceptional service.
//             </p>
//             <button
//               className="enquire-now wedding-enquire"
//               onClick={handleEnquireClick}
//             >
//               Enquire Now
//             </button>
//           </div>
//           <div className="wedding-image">
//             <img src="/images/events-bg.jpg" alt="House Warming Celebration" />
//           </div>
//         </div>
//       </div>

//       {/* Birthday Section */}
//       <div id="birthday-section" className="birthday-section">
//         <div className="birthday-container">
//           <div className="birthday-image">
//             <img src="/images/events.jpg" alt="Birthday Celebration" />
//           </div>
//           <div className="birthday-content">
//             <h1 className="birthday-title">Birthday Celebrations</h1>
//             <h2 className="birthday-subtitle">Always fresh & high-quality food</h2>
//             <p className="birthday-description">
//               Make every birthday special with our delightful catering services. From kids' parties to milestone celebrations, 
//               we create customized menus featuring birthday favorites, themed cakes, and party treats that bring smiles to 
//               faces of all ages. Our team ensures your celebration is filled with delicious memories that last a lifetime.
//             </p>
//             <button
//               className="enquire-now birthday-enquire"
//               onClick={handleEnquireClick}
//             >
//               Enquire Now
//             </button>
//           </div>
//         </div>
//       </div>

//        {/* Engagement Section */}
//        <div id="engagement-section" className="wedding-section">
//         <div className="wedding-container">
//           <div className="wedding-content">
//             <h1 className="wedding-title">Engagement Ceremonies</h1>
//             <p className="wedding-description">
//               Mark the beginning of your journey together with our elegant engagement catering services. We create romantic 
//               and sophisticated dining experiences that celebrate your love story. From intimate gatherings to grand celebrations, 
//               our culinary expertise ensures your engagement ceremony is as beautiful and memorable as your love, featuring 
//               premium delicacies and impeccable presentation.
//             </p>
//             <button
//               className="enquire-now wedding-enquire"
//               onClick={handleEnquireClick}
//             >
//               Enquire Now
//             </button>
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
//               Bring communities together with our festival catering services. We specialize in large-scale events that celebrate 
//               cultural diversity and traditional festivities. From religious ceremonies to cultural celebrations, we provide 
//               authentic cuisines that honor traditions while creating memorable experiences for entire communities. Our team 
//               manages logistics seamlessly for events of all sizes.
//             </p>
//             <button
//               className="enquire-now wedding-enquire"
//               onClick={handleEnquireClick}
//             >
//               Enquire Now
//             </button>
//           </div>
//         </div>
//       </div>

//        {/* Bhandaara Section */}
//        <div id="bhandaara-section" className="wedding-section">
//         <div className="wedding-container">
//           <div className="wedding-content">
//             <h1 className="wedding-title">Bhandaara Services</h1>
//             <p className="wedding-description">
//               Experience the true spirit of community service with our Bhandaara catering. We understand the sacred nature 
//               of serving free meals and ensure every dish is prepared with devotion and care. Our team manages large-scale 
//               food distribution with efficiency, maintaining the highest standards of hygiene and quality in this noble service. 
//               We honor the tradition while ensuring smooth operations.
//             </p>
//             <button
//               className="enquire-now wedding-enquire"
//               onClick={handleEnquireClick}
//             >
//               Enquire Now
//             </button>
//           </div>
//           <div className="wedding-image">
//             <img src="/images/cafeteria1.jpg" alt="Bhandaara Service" />
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
import '../Styles/events.css'; 

export default function Carousel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
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
        <h1 className="banner-title-event">Amddas Foods Events</h1>
        <p className="banner-subtitle-event">
          From intimate gatherings to large-scale celebrations, AMDDAS FOODS brings flavor, finesse, and flawless execution to every occasion.
        </p>
      </div>
      {/* <div className="content-section">
        <section> */}
          {/* <span>
            Amddas Foods offers personalized menus, premium-quality dishes, and exceptional service for all occasions,
            ensuring unforgettable culinary experiences through attention to detail, themed delicacies, and a commitment
            to customer satisfaction.
          </span>
          <h2 className="section-heading">Uncompromising Quality</h2>
          <p>
            We ensure every dish meets our unwavering standards of excellence, crafted with premium ingredients to
            provide a delightful dining experience that exceeds expectations and celebrates the art of fine cuisine.
          </p>
          <h2 className="section-heading">Diverse Event Offerings</h2>
          <p>
            From private events to weddings, birthdays, and corporate gatherings, we specialize in delivering versatile
            catering solutions tailored to your needs, offering exceptional service to make every occasion truly
            memorable.
          </p>
          <h2 className="section-heading">Attention to Detail</h2>
          <p>
            Every aspect of our service is meticulously planned and executed, including menu customization, presentation,
            and ambiance, ensuring your event is flawless and perfectly aligned with your vision.
          </p>
          <h2 className="section-heading">Convenience and Reliability </h2>
          <p>
            Our dedicated team guarantees a hassle-free experience by managing every detail of your event, delivering
            seamless execution that you can trust for efficiency and dependability.
          </p>
          <h2 className="section-heading">Exquisite Themed Delicacies</h2>
          <p>
            We craft extraordinary dishes designed to complement your celebration's theme, creating a culinary experience
            that resonates with the occasion and delights your guests.
          </p>
          <h2 className="section-heading">Customer Satisfaction</h2>
          <p>
            We prioritize your happiness by delivering exceptional food, impeccable service, and unforgettable
            experiences, ensuring you and your guests leave with cherished memories.
          </p>
          <h2 className="section-heading">Trusted Partner for All Occasions</h2>
          <p>
            Whether it's a small gathering or a grand event, we are your reliable partner in creating extraordinary
            experiences that leave a lasting impression.
          </p>
          <span>
            Let us transform your celebrations into timeless memories with our expertise, passion, and dedication to
            excellence.
          </span> */} 
        {/* </section>
      </div> */}

      {/* Wedding Section */}
      <div id="wedding-section" className="wedding-section">
        <div className="wedding-container">
          <div className="wedding-image">
            <img src="/images/Engagement1.jpg" alt="Wedding Celebration" />
          </div>
          <div className="wedding-content">
            <h1 className="wedding-title">Wedding Functions</h1>
            <p className="wedding-description">
            Custom wedding catering for all cultures and rituals – from pre-wedding functions to the main event – with live counters, themed menus, and personalized service.
            </p>
            {/* <button
              className="enquire-now wedding-enquire"
              onClick={handleEnquireClick}
            >
              Enquire Now
            </button> */}
          </div>
        </div>
      </div>

       {/* House Warming Section */}
       <div id="housewarming-section" className="wedding-section">
        <div className="wedding-container">
          <div className="wedding-content">
            <h1 className="wedding-title">House Warming Celebrations</h1>
            <p className="wedding-description">
            Delicious and auspicious food offerings to make your Griha Pravesh celebration memorable for your guests.
            </p>
            {/* <button
              className="enquire-now wedding-enquire"
              onClick={handleEnquireClick}
            >
              Enquire Now
            </button> */}
          </div>
          <div className="wedding-image">
            <img src="/images/events-bg.jpg" alt="House Warming Celebration" />
          </div>
        </div>
      </div>

      {/* Birthday Section */}
      <div id="birthday-section" className="wedding-section">
        <div className="birthday-container">
          <div className="birthday-image">
            <img src="/images/events.jpg" alt="Birthday Celebration" />
          </div>
          <div className="birthday-content">
            <h1 className="wedding-title">Birthday Celebrations</h1>
            <p className="birthday-description">
            Fun, themed, and age-appropriate catering solutions for birthdays – from kids’ parties to milestone celebrations.
            </p>
            {/* <button
              className="enquire-now birthday-enquire"
              onClick={handleEnquireClick}
            >
              Enquire Now
            </button> */}
          </div>
        </div>
      </div>

       {/* Engagement Section */}
       <div id="engagement-section" className="wedding-section">
        <div className="wedding-container">
          <div className="wedding-content">
            <h1 className="wedding-title">Engagement Ceremonies</h1>
            <p className="wedding-description">
            Elegant and tasteful catering services for engagement ceremonies, including welcome drinks, starters, main course, and desserts.
            </p>
            {/* <button
              className="enquire-now wedding-enquire"
              onClick={handleEnquireClick}
            >
              Enquire Now
            </button> */}
          </div>
          <div className="wedding-image">
            <img src="/images/events.jpg" alt="Engagement Celebration" />
          </div>
        </div>
      </div>

       {/* Community Festivals Section */}
       <div id="festival-section" className="wedding-section">
        <div className="wedding-container">
          <div className="wedding-image">
            <img src="/images/supply.jpeg" alt="Festival Celebration" />
          </div>
          <div className="wedding-content">
            <h1 className="wedding-title">Community Festivals</h1>
            <p className="wedding-description">
            Large-scale catering for religious, cultural, and neighborhood festivals with traditional menus and regional specialties.
            </p>
            {/* <button
              className="enquire-now wedding-enquire"
              onClick={handleEnquireClick}
            >
              Enquire Now
            </button> */}
          </div>
        </div>
      </div>

       {/* Bhandaara Section */}
       <div id="bhandaara-section" className="wedding-section">
        <div className="wedding-container">
          <div className="wedding-content">
            <h1 className="wedding-title">Bhandaara Services</h1>
            <p className="wedding-description">
            Mass meal distribution with spiritual essence – catering to religious or charitable gatherings with satvik and hygienic food preparations.
            </p>
            {/* <button
              className="enquire-now wedding-enquire"
              onClick={handleEnquireClick}
            >
              Enquire Now
            </button> */}
          </div>
          <div className="wedding-image">
            <img src="/images/Cafeteria1.jpg" alt="Bhandaara Service" />
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
            title: 'Private Events',
            description: 'We ensure that the event is made memorable with exquisite delicacies prepared according to the theme of the event.',
          },
          {
            imgClass: 'slide_img2',
            title: 'Weddings',
            description: 'We make sure to make your wedding more memorable by serving the best food to you and your guests.',
          },
          {
            imgClass: 'slide_img3',
            title: 'Corporate Events',
            description: 'Make your next event a success. We serve the right kind of delicacies, keeping in mind your guest profile.',
          },
          {
            imgClass: 'slide_img4',
            title: 'Birthday',
            description: 'Our team is committed to making your events run smoothly by providing delicious food.',
          },
          {
            imgClass: 'slide_img5',
            title: 'Specialized Cuisines',
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
                  <h3>Always fresh & high-quality food</h3>
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