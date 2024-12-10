// src/components/Hero.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import '../Styles/hero.css';
import { Carousel, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state

const Hero = () => {
  const navigate = useNavigate();
  const jwtToken = useSelector((state) => state.auth.token); // Access the JWT token from Redux

  // State to manage the visibility of the login prompt modal
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  // Function to handle closing the modal
  const handleClose = () => setShowLoginPrompt(false);

  // Function to handle showing the modal
  const handleShow = () => setShowLoginPrompt(true);

  // Updated book function
  const book = () => {
    if (jwtToken) {
      // If user is logged in, navigate to the booking page
      navigate('/booking');
    } else {
      // If user is not logged in, show the login prompt modal
      handleShow();
    }
  };

  // Function to navigate to the login page from the modal
  const navigateToLogin = () => {
    handleClose(); // Close the modal
    navigate('/login'); // Navigate to the login page
  };

  return (
    <section id="hero">
      <div className="hero-container">
        <Carousel fade interval={5000} controls={false} indicators>
          {/* Slide 1 */}
          <Carousel.Item
            className="carousel-item"
            style={{
            //   backgroundImage: `url(${process.env.PUBLIC_URL}/image/img1.jpg)`, 
              height: '100vh',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="carousel-container d-flex align-items-center justify-content-center h-100">
              <div className="carousel-content text-center text-white">
                <h2
                  className="animate__animated animate__fadeInDown"
                style={{fontFamily: "junction"}}
                >
                  <span></span>Delicious Food
                </h2>
                <p className="animate__animated animate__fadeInUp">
                  AMDDAS Foods Catering Service offers the same elite service and quality dining experience for any occasion and for any number of Guests.
                </p>
                <div>
                  <Button
                    href="#menu"
                    className="btn-menu animate__animated animate__fadeInUp"
                    style={{ fontFamily: 'Rakkas, serif', fontSize: 'large' }}
                    variant="primary"
                    onClick={book} 
                  >
                    Our Menu
                  </Button>{' '}
                  <Button
                    className="btn-book animate__animated animate__fadeInUp"
                    style={{ fontFamily: 'Rakkas, serif', fontSize: 'large' }}
                    variant="secondary"
                    onClick={book} 
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </Carousel.Item>

          {/* Slide 2 */}
          <Carousel.Item
            className="carousel-item"
            style={{
            //   backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/slide2.jpg)`,
              height: '100vh',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="carousel-container d-flex align-items-center justify-content-center h-100">
              <div className="carousel-content text-center text-white">
                <p className="animate__animated animate__fadeInUp">
                  Over three years of culinary experience in Food Catering to add delicious tastes of India to any special event – big or small. We offer quality hygienic dishes that are not only authentic to the Indian subcontinent, but are also made with the fresh ingredients to bring out the true texture and flavor of Indian cuisine.
                </p>
                <div>
                  <Button
                    href="#menu"
                    className="btn-menu animate__animated animate__fadeInUp"
                    style={{ fontFamily: 'Rakkas, serif', fontSize: 'large' }}
                    variant="primary"
                    onClick={() => navigate('#menu')}
                  >
                    Our Menu
                  </Button>{' '}
                  <Button
                    className="btn-book animate__animated animate__fadeInUp"
                    style={{ fontFamily: 'Rakkas, serif', fontSize: 'large' }}
                    variant="secondary"
                    onClick={book}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </Carousel.Item>

          {/* Slide 3 */}
          <Carousel.Item
            className="carousel-item"
            style={{
            //   backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/slide3.webp)`,
              height: '100vh',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="carousel-container d-flex align-items-center justify-content-center h-100">
              <div className="carousel-content text-center text-white">
                <h2
                  className="animate__animated animate__fadeInDown"
                  style={{ fontFamily: 'Rakkas, serif' }}
                >
                  Feed your dreams…
                </h2>
                <p className="animate__animated animate__fadeInUp">
                  Name it a corporate event, office daily lunch & dinner, small lunch or get-together, evening dinner party, an office party or family reunions
                </p>
                <div>
                  <Button
                 
                    className="btn-menu animate__animated animate__fadeInUp"
                    style={{ fontFamily: 'Rakkas, serif', fontSize: 'large' }}
                    variant="primary"
                    onClick={book}
                  >
                    Our Menu
                  </Button>{' '}
                  <Button
                    className="btn-book animate__animated animate__fadeInUp"
                    style={{ fontFamily: 'Rakkas, serif', fontSize: 'large' }}
                    variant="secondary"
                    onClick={book}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        {/* Removed Carousel Controls */}
        {/*
        <a
          className="carousel-control-prev"
          href="#heroCarousel"
          role="button"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>

        <a
          className="carousel-control-next"
          href="#heroCarousel"
          role="button"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
        */}

        {/* Modal for Login Prompt */}
        <Modal show={showLoginPrompt} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Login Required</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>You need to be logged in to view menu or order food. Please log in to continue.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={navigateToLogin}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  );
};

export default Hero;
