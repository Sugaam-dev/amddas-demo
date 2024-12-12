import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// Import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import '../Styles/events.css'; // Ensure this path matches your CSS file

export default function Carousel() {
  return (
    <div className="containerr">
      <Swiper
        cssMode={true}
        navigation={false}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 3000, // Time in milliseconds before the next slide
          disableOnInteraction: false, // Keep autoplay running after user interaction
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h1 className="heading"  >Our Social & Professional Events</h1>
          <div className="slide">
            <div className="slide_img1 slide1"></div>
            <div className="text">
              <h2 className="specialized-cuisines">Private Events</h2>
              <div className="events-description">
                <h3>Always fresh & high-quality food</h3>
                <p>
                  We ensure that the event is made memorable with exquisite delicacies prepared according to the theme
                  of the event.
                </p>
                <ul>
                  <li>✅ Best Food delivery in your home. Easy. Fast. Reliable.</li>
                  <li>✅ We believe good food offers a great smile.</li>
                  <li>✅ Test our delicious best food that meets your needs.</li>
                </ul>
                <a href="#enquire" className="enquire-now">
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <h1 className="heading">Our Social & Professional Events</h1>
          <div className="slide">
            <div className="slide_img2 slide1"></div>
            <div className="text">
              <h2 className="specialized-cuisines">Weddings</h2>
              <div className="events-description">
                <h3>Always fresh & high-quality food</h3>
                <p>
                  We make sure to make your wedding more memorable by serving the best food to you and your guests.
                </p>
                <a href="#enquire" className="enquire-now">
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <h1 className="heading">Our Social & Professional Events</h1>
          <div className="slide">
            <div className="slide_img3 slide1"></div>
            <div className="text">
              <h2 className="specialized-cuisines">Corporate Events</h2>
              <div className="events-description">
                <h3>Always fresh & high-quality food</h3>
                <p>
                  Make your next event a success. We serve the right kind of delicacies, keeping in mind your guest
                  profile.
                </p>
                <ul>
                  <li>✅ Best Food delivery in your home. Easy. Fast. Reliable.</li>
                  <li>✅ We believe good food offers a great smile.</li>
                  <li>✅ Test our delicious best food that meets your needs.</li>
                </ul>
                <a href="#enquire" className="enquire-now">
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <h1 className="heading">Our Social & Professional Events</h1>
          <div className="slide">
            <div className="slide_img4 slide1"></div>
            <div className="text">
              <h2 className="specialized-cuisines">Birthday</h2>
              <div className="events-description">
                <h3>Always fresh & high-quality food</h3>
                <p>
                  Our team is committed to making your events run smoothly by providing delicious food.
                </p>
                <a href="#enquire" className="enquire-now">
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <h1 className="heading">Our Social & Professional Events</h1>
          <div className="slide">
            <div className="slide_img5 slide1"></div>
            <div className="text">
              <h2 className="specialized-cuisines">Specialized Cuisines</h2>
              <div className="events-description">
                <h3>Always fresh & high-quality food</h3>
                <p>
                  We ensure that the event is made memorable with exquisite delicacies prepared according to the theme
                  of the event.
                </p>
                <a href="#enquire" className="enquire-now">
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
