

import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; 
import '../Styles/gallery.css'; 

const Gallery = () => {
  
  const images = [
    {
      original: '/images/amd10.jpg',
      thumbnail: '/images/thumbs/amd10.jpg',
      // description: 'Delicious Dish 1',
    },
    {
      original: '/images/img1.jpg',
      thumbnail: '/images/thumbs/img1.jpg',
      // description: 'Delicious Dish 2',
    },
    {
      original: '/images/amd2.jpg',
      thumbnail: '/images/thumbs/amd2.jpg',
      // description: 'Delicious Dish 3',
    },
    {
      original: '/images/amd4.jpg',
      thumbnail: '/images/thumbs/amd4.jpg',
      // description: 'Delicious Dish 4',
    },
    {
      original: '/images/amd3.webp',
      thumbnail: '/images/thumbs/amd3.webp',
      // description: 'Delicious Dish 5',
    },
    {
      original: '/images/amd11.jpg',
      thumbnail: '/images/thumbs/amd11.jpg',
      // description: 'Delicious Dish 6',
    },
    {
      original: '/images/amd6.webp',
      thumbnail: '/images/thumbs/amd6.webp',
      // description: 'Delicious Dish 7',
    },
  ];

  return (
    <>
    <div className="banner-section-gallery">
        <h1 className="banner-title-gellery" style={{color:"white"}}>Amddas Foods Gallery</h1>
      </div>

  
    <section id="gallery" className="gallery-section">
      <p className='gg'>Welcome to the visual journey of Amddas Foods! Explore our vibrant gallery showcasing beautifully crafted dishes, stunning event setups, and memorable moments from the celebrations we’ve been a part of. From intricately plated delicacies to themed culinary displays, each image reflects our passion for perfection, creativity, and uncompromising quality.

Witness how Amddas Foods transforms every occasion into a feast for the senses, leaving lasting impressions through exceptional presentation and unparalleled flavors. Dive in and let our gallery inspire your next celebration with us!</p>
      <div className="container">
        <div className="section-title">
          {/* <h2>
            Some photos from <span className="highlight">Amddas Food</span>
          </h2>
          <p>Your favourite food delivered hot & fresh</p> */}
        </div>

        <div className="image-gallery-wrapper">
          <ImageGallery
            items={images}
            showNav={false} 
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
            showBullets={true}
            lazyLoad={true}
            autoPlay={true}
            slideInterval={3000}
            additionalClass="custom-image-gallery"
            style={{ maxHeight: '200px' }}
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default Gallery;
