import React from 'react';
import { FaCheckDouble } from 'react-icons/fa';
import { PiDotOutlineFill } from "react-icons/pi";
import '../Styles/about.css';

const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="about-container">
          {/* Left Column with Background Image */}
          <div
            className="about-image"
            style={{
              backgroundImage: `linear-gradient(hsla(0, 100%, 0%, 0.45), hsla(0, 100%, 0%, 0.45)),url(${process.env.PUBLIC_URL}/images/img1.jpg)`
            }}
          ></div>

          {/* Right Column with Content */}
          <div className="about-content">
            <h3>
              Enjoy Your Healthy Delicious Food<strong>.....</strong>
            </h3>

            <ul className="about-list">
              <li className="list-item">
                <div className="icon-wrapper">
                  <PiDotOutlineFill className="icon" />
                </div>
                <span>
                Filling every occasion with exceptional food and service, Amddas stands as a trusted name for delivering exquisite cuisine and dedicated hospitality.
                    </span>
              </li>
              <li className="list-item">
                <div className="icon-wrapper">
                  <PiDotOutlineFill className="icon" />
                </div>
                <span>We provide our customers with the flexibility of selecting either a packaged catering menu or creating a fully customized menu tailored to their preferences.</span>
              </li>
              <li className="list-item">
                <div className="icon-wrapper">
                  <PiDotOutlineFill className="icon" />
                </div>
                <span>
                Offering a world-class dining experience, our menu features a wide variety of delicacies across global cuisines to suit every taste.  </span>
              </li>
              <li className="list-item">
                <div className="icon-wrapper">
                  <PiDotOutlineFill className="icon" />
                </div>
                <span>
                From corporate events, office lunches and dinners, intimate gatherings, or evening dinner parties to family reunions, we cater to all occasions.
                </span>
              </li>
              <li className="list-item">
                <div className="icon-wrapper">
                  <PiDotOutlineFill className="icon" />
                </div>
                <span>
                Amddas Foods Catering Service guarantees the same elite service and exceptional dining experience, regardless of the occasion or guest count.
                </span>
              </li>
            </ul>

            <p>Trusted By 200+ satisfied clients</p>

            <ul className="about-list">
              <li className="list-item">
                <div className="icon-wrapper">
                  <PiDotOutlineFill className="icon" />
                </div>
                <span>Fresh and Fast food Delivery</span>
              </li>
              <li className="list-item">
                <div className="icon-wrapper">
                  <PiDotOutlineFill className="icon" />
                </div>
                <span>Easy Customization Options</span>
              </li>
              <li className="list-item">
                <div className="icon-wrapper">
                  <PiDotOutlineFill className="icon" />
                </div>
                <span>Delicious Deals for Delicious Meals</span>
              </li>
              <li className="list-item">
                <div className="icon-wrapper">
                  <PiDotOutlineFill className="icon" />
                </div>
                <span>24/7 Customer Support</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="why-us" className="why-us">
        <div className="why-us-container">
          <div className="section-title">
            <h2>
              Why choose <span>Amddas</span>
            </h2>
            <p>
              Amddas Foods has been providing excellent service in the F&B industry since 2015. The journey till now
              has been full of learning and experiences with our customers, clientele, and counterparts. Our vision
              is to take Amddas Foods to a recognizable zenith and be the benchmark in quality and service.
            </p>
          </div>

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

