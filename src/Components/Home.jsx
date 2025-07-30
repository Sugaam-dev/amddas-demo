// Import React and CSS
import React from "react";
import '../Styles/Home.css';
import Hero from "./Hero";
import About from "./About";
import Navbarr from "./Navbar";
import Gallery from "./Gallery";
import Events from "./Events";
import Mission from "./SubComponents/Mission";
import AmddasGallery from "./SubComponents/AmddasGallery";
import AmddasEvents from "./SubComponents/AmddasEvents";
import AboutAmddas from "./SubComponents/AbouAmddas";
import OurStory from "./SubComponents/OurStory";
import Amddassupply from "./SubComponents/Supply";
import Sustainability from "./SubComponents/Sustainability";
import Vision from "./SubComponents/Vision";
import Testimonial from "./SubComponents/Testimonial";
import WhatsAppFloat from "./SubComponents/WhatsAppFloat";
import Milestones from "./SubComponents/Milestones";

// HomePage Component
const Home = () => {
  return (
    <>
      <div className="homepage">
        <Hero/>
        <AboutAmddas/>
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