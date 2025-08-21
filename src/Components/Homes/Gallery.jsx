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
    '/images/amddas6.webp',
    '/images/Amddaspic7.webp',
    '/images/amddas8.webp',
    '/images/amddas9.webp',
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
              spaceBetween={30} // Proper spacing between exactly 2 images
              slidesPerView={1}
              centeredSlides={false}
              watchOverflow={true} // Prevent overflow issues
              pagination={{ 
                clickable: true,
                bulletClass: 'swiper-pagination-bullet custom-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active'
              }}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              autoplay={{ 
                delay: 3000,
                disableOnInteraction: false
              }}
              breakpoints={{
                576: { 
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                768: { 
                  slidesPerView: 2, // Exactly 2 images on tablet and up
                  spaceBetween: 30,
                  slidesOffsetBefore: 0, // Ensure no offset
                  slidesOffsetAfter: 0
                },
                992: { 
                  slidesPerView: 2, // Keep exactly 2 images
                  spaceBetween: 35,
                  slidesOffsetBefore: 0,
                  slidesOffsetAfter: 0
                },
                1200: {
                  slidesPerView: 2, // Exactly 2 images on all larger screens
                  spaceBetween: 40,
                  slidesOffsetBefore: 0,
                  slidesOffsetAfter: 0
                }
              }}
              className="gallery-swiper"
              loop={true} // Enable loop for continuous scrolling
              speed={600} // Smooth transition speed
              allowTouchMove={true}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="image-wrapper">
                    <div className="image-overlay">
                      <div className="overlay-content">
                        {/* Optional overlay content */}
                      </div>
                    </div>
                    <img 
                      src={image} 
                      alt={`Gallery Image ${index + 1}`}
                      loading={index < 3 ? "eager" : "lazy"} // Optimize loading
                      onError={(e) => {
                        e.target.style.display = 'none'; // Hide broken images
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;