import React from 'react';

import '../Styles/about.css';


const About = () => {
  return (
    <>
   
   <div className="banner-section-about">
        <h1 className="banner-title-about" style={{color:"white"}}> About Amddas Foods</h1>
      </div>
      <div className="about-section">
        <div className="about-block">
          <h2 className="about-heading">Enjoy Your Healthy Delicious Food.....</h2>
        
        </div>

        <div className="about-block">
          
          <p className="about-text">
          Filling every occasion with exceptional food and service, Amddas stands as a trusted name for delivering exquisite cuisine and dedicated hospitality. <br />
          We provide our customers with the flexibility of selecting either a packaged catering menu or creating a fully customized menu tailored to their preferences. <br />
          Offering a world-class dining experience, our menu features a wide variety of delicacies across global cuisines to suit every taste. <br />
          From corporate events, office lunches and dinners, intimate gatherings, or evening dinner parties to family reunions, we cater to all occasions. <br />
          Amddas Foods Catering Service guarantees the same elite service and exceptional dining experience, regardless of the occasion or guest count.
          </p>
        </div>

        <div className="about-block">
          <h2 className="about-heading">Trusted By 200+ satisfied clients</h2>
          <p className="about-text">
          Fresh and Fast food Delivery <br />
          Easy Customization Options <br />
          Delicious Deals for Delicious Meals <br />  
          24/7 Customer Support
          </p>
         
        </div>

        <div className="about-block">
          <h2 className="about-heading">Why choose Amddas</h2>
          <p className="about-text">
          Amddas Foods has been providing excellent service in the F&B industry since 2015. The journey till now has been full of learning and experiences with our customers, clientele, and counterparts. Our vision is to take Amddas Foods to a recognizable zenith and be the benchmark in quality and service.
          </p>
         
        </div>
      </div>
      <section id="why-us" className="why-us">
        <div className="why-us-container">
          {/* <div className="section-title">
            <h2>
              Why choose <span>Amddas</span>
            </h2>
            <p>
              Amddas Foods has been providing excellent service in the F&B industry since 2015. The journey till now
              has been full of learning and experiences with our customers, clientele, and counterparts. Our vision
              is to take Amddas Foods to a recognizable zenith and be the benchmark in quality and service.
            </p>
          </div> */}

          <div className="why-us-boxes">
            <div className="box">
              <span>01</span>
              <h4>Risk Management Standards</h4>
              <p>
                Public Liability Policy is issued per site where our food is being supplied/consumed.
                <br />
                Strictly GST compliant with updated ledger and bank records. Regular on-time tax return filing done.
              </p>
            </div>

            <div className="box">
              <span>02</span>
              <h4>Employee Standards</h4>
              <p>
                All employees undergo quarterly medical fitness test clearance while in service at Amddas Foods.
                <br />
                All staff have segregated dress codes based on their job roles.
                <br />
                Company-provided staff quarters adjacent to the manufacturing unit to ensure hassle-free operation.
              </p>
            </div>

            <div className="box">
              <span>03</span>
              <h4>Manufacturing Unit Standards</h4>
              <p>
                HACCP (Hazard Analysis and Critical Control Points) standards met.
                <br />
                Segregated veg and non-veg cooking & storage sections.
                <br />
                Gas bank located outside the kitchen. Fire extinguishers installed at all strategic locations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

