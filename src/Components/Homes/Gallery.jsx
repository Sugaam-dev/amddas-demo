// // // import React from 'react';
// // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // import 'swiper/css';
// // // import 'swiper/css/pagination';
// // // import 'swiper/css/navigation';
// // // import '../Styles/gallery.css';
// // // import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// // // const Gallery = () => {
// // //   const images = [
// // //     '/images/amd10.jpg',
// // //     '/images/img1.jpg',
// // //     '/images/amd2.jpg',
// // //     '/images/amd4.jpg',
// // //     '/images/amd3.webp',
// // //     '/images/amd11.jpg',
// // //     '/images/amd6.webp',
// // //   ];

// // //   return (
// // //     <>
// // //       <div className="banner-section-gallery">
// // //         <h1 className="banner-title-gallery">
// // //           Our Gallery
// // //         </h1>
// // //       </div>

// // //       <section id="gallery" className="gallery-section">
// // //         {/* <p className="gg">
// // //           Welcome to the visual journey of Amddas Foods! Explore our vibrant gallery showcasing beautifully crafted dishes, stunning event setups, and memorable moments from the celebrations we’ve been a part of. From intricately plated delicacies to themed culinary displays, each image reflects our passion for perfection, creativity, and uncompromising quality.
// // //         </p> */}
// // //         <div className="container">
// // //           <Swiper
// // //             modules={[Pagination, Navigation, Autoplay]}
// // //             spaceBetween={30}
// // //             slidesPerView={1}
// // //             pagination={{ clickable: true }}
// // //             navigation
// // //             autoplay={{ delay: 3000 }}
// // //             breakpoints={{
// // //               640: { slidesPerView: 1 },
// // //               768: { slidesPerView: 2 },
// // //               1024: { slidesPerView: 3 },
// // //             }}
// // //           >
// // //             {images.map((image, index) => (
// // //               <SwiperSlide key={index}>
// // //                 <div className="image-wrapper">
// // //                   <img src={image} alt={`Gallery Image ${index + 1}`} />
// // //                 </div>
// // //               </SwiperSlide>
// // //             ))}
// // //           </Swiper>
// // //         </div>
// // //       </section>
// // //     </>
// // //   );
// // // };

// // // export default Gallery;

// // import React from 'react';
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import 'swiper/css';
// // import 'swiper/css/pagination';
// // import 'swiper/css/navigation';
// // import './gallery.css';
// // import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// // const Gallery = () => {
// //   const images = [
// //     '/images/amd10.jpg',
// //     '/images/img1.jpg',
// //     '/images/amd2.jpg',
// //     '/images/amd4.jpg',
// //     '/images/amd3.webp',
// //     '/images/amd11.jpg',
// //     '/images/amd6.webp',
// //   ];

// //   return (
// //     <>
// //       <div className="banner-section-gallery">
// //         <h1 className="banner-title-gallery">
// //           Our Gallery
// //         </h1>
// //       </div>

// //       <section id="gallery" className="gallery-section">
// //         {/* <p className="gg">
// //           Welcome to the visual journey of Amddas Foods! Explore our vibrant gallery showcasing beautifully crafted dishes, stunning event setups, and memorable moments from the celebrations we've been a part of. From intricately plated delicacies to themed culinary displays, each image reflects our passion for perfection, creativity, and uncompromising quality.
// //         </p> */}
// //         <div className="container">
// //           <Swiper
// //             modules={[Pagination, Navigation, Autoplay]}
// //             spaceBetween={30}
// //             slidesPerView={1}
// //             pagination={{ 
// //               clickable: true,
// //               bulletClass: 'swiper-pagination-bullet custom-bullet',
// //               bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active'
// //             }}
// //             navigation={{
// //               nextEl: '.custom-next',
// //               prevEl: '.custom-prev',
// //             }}
// //             autoplay={{ delay: 3000 }}
// //             breakpoints={{
// //               640: { slidesPerView: 1 },
// //               768: { slidesPerView: 2 },
// //               1024: { slidesPerView: 3 },
// //             }}
// //             className="gallery-swiper"
// //           >
// //             {images.map((image, index) => (
// //               <SwiperSlide key={index}>
// //                 <div className="image-wrapper">
// //                   <img src={image} alt={`Gallery Image ${index + 1}`} />
// //                 </div>
// //               </SwiperSlide>
// //             ))}
// //           </Swiper>
          
// //           {/* Custom Navigation Arrows */}
// //           <div className="custom-prev swiper-button-prev"></div>
// //           <div className="custom-next swiper-button-next"></div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default Gallery;

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import './gallery.css';
// import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// const Gallery = () => {
//   const images = [
//     '/images/amd10.jpg',
//     '/images/img1.jpg',
//     '/images/amd2.jpg',
//     '/images/amd4.jpg',
//     '/images/amd3.webp',
//     '/images/amd11.jpg',
//     '/images/amd6.webp',
//   ];

//   return (
//     <>
//       <div className="banner-section-gallery">
//         <h1 className="banner-title-gallery">
//           Our Gallery
//         </h1>
//       </div>

//       <section id="gallery" className="gallery-section">
//         {/* <p className="gg">
//           Welcome to the visual journey of Amddas Foods! Explore our vibrant gallery showcasing beautifully crafted dishes, stunning event setups, and memorable moments from the celebrations we've been a part of. From intricately plated delicacies to themed culinary displays, each image reflects our passion for perfection, creativity, and uncompromising quality.
//         </p> */}
//         <div className="container">
//           <Swiper
//             modules={[Pagination, Navigation, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             pagination={{ 
//               clickable: true,
//               bulletClass: 'swiper-pagination-bullet custom-bullet',
//               bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active'
//             }}
//             navigation={{
//               nextEl: '.custom-next',
//               prevEl: '.custom-prev',
//             }}
//             autoplay={{ delay: 3000 }}
//             breakpoints={{
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//             className="gallery-swiper"
//           >
//             {images.map((image, index) => (
//               <SwiperSlide key={index}>
//                 <div className="image-wrapper">
//                   <img src={image} alt={`Gallery Image ${index + 1}`} />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
          
//           {/* Custom Navigation Arrows */}
//           <div className="custom-prev swiper-button-prev"></div>
//           <div className="custom-next swiper-button-next"></div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Gallery;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './gallery.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Gallery = () => {
  const images = [
    '/images/Amddaspic1.webp',
    '/images/amddaspic2.webp',
    '/images/amddaspic3.webp',
    '/images/Amddaspic4.webp',
    '/images/Amddaspic5.webp',
    '/images/Amddas6.webp',
    '/images/Amddaspic7.webp',
    '/images/amddas8.webp',
    '/images/Amddas9.webp',
    '/images/amddasgallery110.webp',
  ];

  return (
    <>
      {/* Banner Section with Animation */}
      <div className="banner-section-gallery">
        <h1 className="banner-title-gallery fade-in-up">
          Our Gallery
        </h1>
        <p className="gallery-subtitle fade-in-up stagger-1">
          Discover the visual journey of Amddas Foods through our curated collection
        </p>
      </div>

      {/* Gallery Section with Staggered Animations */}
      <section id="gallery" className="gallery-section">
        <div className="container scale-in">
          
          {/* Animated Swiper Container */}
          <div className="swiper-container-wrapper fade-in-up stagger-2">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ 
                clickable: true,
                bulletClass: 'swiper-pagination-bullet custom-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active'
              }}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                // 1024: { slidesPerView: 3 },
              }}
              className="gallery-swiper"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="image-wrapper">
                    <div className="image-overlay">
                      <div className="overlay-content">
                        {/* <span className="image-number">0{index + 1}</span> */}
                        {/* <span className="image-label">Culinary Excellence</span> */}
                      </div>
                    </div>
                    <img src={image} alt={`Gallery Image ${index + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
          {/* Custom Navigation Arrows with Animation */}
          {/* <div className="custom-prev swiper-button-prev slide-in-left stagger-3"></div>
          <div className="custom-next swiper-button-next slide-in-right stagger-3"></div> */}
          
          {/* Animated Stats Section */}
          {/* <div className="gallery-stats fade-in-up stagger-4">
            <div className="stat-item">
              <span className="stat-number">150+</span>
              <span className="stat-label">Events Captured</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Dishes Showcased</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Gallery;
