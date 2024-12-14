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

<div className="banner-section-event">
        <h1 className="banner-title-event">Amddas Foods Events</h1>
      </div>
      <div className="content-section">
      <section>
        <span>Amddas Foods offers personalized menus, premium-quality dishes, and exceptional service for all occasions, ensuring unforgettable culinary experiences through attention to detail, themed delicacies, and a commitment to customer satisfaction.</span>
          <h2 className="section-heading">Uncompromising Quality</h2>
     
          <p>
          We ensure every dish meets our unwavering standards of excellence, crafted with premium ingredients to provide a delightful dining experience that exceeds expectations and celebrates the art of fine cuisine.   </p>
          <h2 className="section-heading">Diverse Event Offerings</h2>
          <p>
          From private events to weddings, birthdays, and corporate gatherings, we specialize in delivering versatile catering solutions tailored to your needs, offering exceptional service to make every occasion truly memorable.   </p>
          <h2 className="section-heading">Attention to Detail</h2>
          <p>
          Every aspect of our service is meticulously planned and executed, including menu customization, presentation, and ambiance, ensuring your event is flawless and perfectly aligned with your vision.
    </p>
          <h2 className="section-heading">Convenience and Reliability    </h2>
          <p>
          Our dedicated team guarantees a hassle-free experience by managing every detail of your event, delivering seamless execution that you can trust for efficiency and dependability.       </p>
          <h2 className="section-heading">Exquisite Themed Delicacies</h2>
          <p>
          We craft extraordinary dishes designed to complement your celebration’s theme, creating a culinary experience that resonates with the occasion and delights your guests. </p>
          <h2 className="section-heading">Customer Satisfaction</h2>
         <p> We prioritize your happiness by delivering exceptional food, impeccable service, and unforgettable experiences, ensuring you and your guests leave with cherished memories.</p>
          <h2 className="section-heading">Trusted Partner for All Occasions</h2>
          <p>Whether it’s a small gathering or a grand event, we are your reliable partner in creating extraordinary experiences that leave a lasting impression.</p>
          <span>Let us transform your celebrations into timeless memories with our expertise, passion, and dedication to excellence.</span>
        </section>
        </div>
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
                <ul >
                  <li>✅ Best Food delivery in your home. Easy. Fast. Reliable.</li>
                  <li>✅ We believe good food offers a great smile.</li>
                  <li>✅ Test our delicious best food that meets your needs.</li>
                </ul>
                <button href="#enquire" className="enquire-now">
                  Enquire Now
                </button>
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
                <button href="#enquire" className="enquire-now">
                  Enquire Now
                </button>
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
                <button href="#enquire" className="enquire-now">
                  Enquire Now
                </button>
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
                <button href="#enquire" className="enquire-now">
                  Enquire Now
                </button>
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
                <button href="#enquire" className="enquire-now">
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
