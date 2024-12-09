import React from 'react';
import '../Styles/gallery.css';

const images = [
  'images/amd10.jpg',
  'images/img1.jpg',
  'images/amd2.jpg',
  'images/amd4.jpg',
'images/amd3.webp',
  'images/amd11.jpg',
 'images/amd6.webp',

];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-title">
          <h2>
            Some photos from <span className="highlight">Amddas Food</span>
          </h2>
          <p>Your favourite food delivered hot & fresh</p>
        </div>

        <div className="gallery-grid">
          {images.map((imgSrc, index) => (
            <div key={index} className="gallery-item">
              <div className="image-wrapper">
                <img src={imgSrc} alt={`Gallery image ${index + 1}`} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
