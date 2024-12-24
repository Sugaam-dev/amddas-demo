


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
    return () => window.removeEventListener('resize', handleResize);
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
      </div>
      <div className="content-section">
        <section>
          <span>
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
            We craft extraordinary dishes designed to complement your celebration’s theme, creating a culinary experience
            that resonates with the occasion and delights your guests.
          </p>
          <h2 className="section-heading">Customer Satisfaction</h2>
          <p>
            We prioritize your happiness by delivering exceptional food, impeccable service, and unforgettable
            experiences, ensuring you and your guests leave with cherished memories.
          </p>
          <h2 className="section-heading">Trusted Partner for All Occasions</h2>
          <p>
            Whether it’s a small gathering or a grand event, we are your reliable partner in creating extraordinary
            experiences that leave a lasting impression.
          </p>
          <span>
            Let us transform your celebrations into timeless memories with our expertise, passion, and dedication to
            excellence.
          </span>
        </section>
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

