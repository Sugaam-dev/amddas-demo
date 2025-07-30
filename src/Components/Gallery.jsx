// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import '../Styles/gallery.css';
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
//           Welcome to the visual journey of Amddas Foods! Explore our vibrant gallery showcasing beautifully crafted dishes, stunning event setups, and memorable moments from the celebrations we’ve been a part of. From intricately plated delicacies to themed culinary displays, each image reflects our passion for perfection, creativity, and uncompromising quality.
//         </p> */}
//         <div className="container">
//           <Swiper
//             modules={[Pagination, Navigation, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             pagination={{ clickable: true }}
//             navigation
//             autoplay={{ delay: 3000 }}
//             breakpoints={{
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//           >
//             {images.map((image, index) => (
//               <SwiperSlide key={index}>
//                 <div className="image-wrapper">
//                   <img src={image} alt={`Gallery Image ${index + 1}`} />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
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
import '../Styles/gallery.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Gallery = () => {
  const images = [
    '/images/amd10.jpg',
    '/images/img1.jpg',
    '/images/amd2.jpg',
    '/images/amd4.jpg',
    '/images/amd3.webp',
    '/images/amd11.jpg',
    '/images/amd6.webp',
  ];

  return (
    <>
      <div className="banner-section-gallery">
        <h1 className="banner-title-gallery">
          Our Gallery
        </h1>
      </div>

      <section id="gallery" className="gallery-section">
        {/* <p className="gg">
          Welcome to the visual journey of Amddas Foods! Explore our vibrant gallery showcasing beautifully crafted dishes, stunning event setups, and memorable moments from the celebrations we've been a part of. From intricately plated delicacies to themed culinary displays, each image reflects our passion for perfection, creativity, and uncompromising quality.
        </p> */}
        <div className="container">
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
              1024: { slidesPerView: 3 },
            }}
            className="gallery-swiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="image-wrapper">
                  <img src={image} alt={`Gallery Image ${index + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Arrows */}
          <div className="custom-prev swiper-button-prev"></div>
          <div className="custom-next swiper-button-next"></div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
