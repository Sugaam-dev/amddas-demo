// Import React and CSS
import React from "react";
import './Home.css';
import Hero from "./Hero";
import Gallery from "./Gallery";
import Mission from "./Mission";
import Vision from "./Vision";
import Testimonial from "./Testimonial";
import WhatsAppFloat from "../SubComponents/WhatsAppFloat";
import Whyus_home from "./Whyus_home";

// HomePage Component
const Home = () => {
  return (
    <>
      <div className="homepage">
        <Hero/>
        <Whyus_home/>
        {/* <AboutAmddas/> */}
        {/* <OurStory/> */}
        <Mission/>
        <Vision/>
        {/* <Sustainability/>
        <Amddassupply/>
        <AmddasEvents/> */}
        {/* <AmddasGallery/> */}
        <Gallery/>
        <Testimonial/>
        {/* <Milestones/> */}
        <WhatsAppFloat/>
      </div>
    </>
  );
};

export default Home;