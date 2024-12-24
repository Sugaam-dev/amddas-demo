import React from "react";
import "../Styles/OurStory-main.css";

const OurStoryMain = () => {
  return (
    <div className="our-story-main-container">
      {/* Banner Section */}
      <div className="banner-section">
        <h1 className="banner-title">Our Story</h1>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="content-block">
          <h3 className="content-heading">Amddas Foods History</h3>
          <p className="content-text">
            We can trace our roots back more than 75 years.
          </p>
        </div>

        <div className="content-block">
          <h3 className="content-heading">Amddas Foods</h3>
          <p className="content-text">
            From these humble beginnings to become the international business
            we are today, the commitment of our people to our customers, the
            quality of our service, and our spirit of innovation remains a
            constant and ongoing feature of our development.
          </p>
        </div>

        <div className="content-block">
          <h2 className="content-heading">Amddas Foods</h2>
          <p className="content-text">
           Amddas Foods India is a wholly owned subsidiary of Amddas Foods
            PLC and has been servicing the Indian Corporate, Healthcare, and
            Education market needs since 2008, maintaining world-class standards
            of delivery across India. It operates in 450+ client locations
            across India and serves 4lac+ meals a day. Our sector-focused
            businesses give our clients access to unrivalled experience, global
            best practices, and market-leading innovations.
          </p>
          <p className="content-text">
           Amddas Foods India has won awards such as{" "}
            <b>‘Most Admired Food Innovation of the Year Award’</b> for
            workplace food concepts at the India Food Forum Awards across all
            retail & food service categories; and{" "}
            <b>Coca Cola Golden Spoon Award for FoodBook</b>, for engagement and
            food ordering platform. It was also recognized as one of{" "}
            <b>‘The Economic Times Best Brands 2020’</b> on the parameters of
            innovation, trust, and uniqueness. We have been listed amongst{" "}
            <b>Great Places to Work</b> in February 2021.
          </p>
          <p className="content-text">
            We endeavor to continue to innovate and design relevant concepts to
            nourish workplaces and aid the transition to better workplace food
            habits and choices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStoryMain;
