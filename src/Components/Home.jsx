// Import React and CSS
import React from "react";
import './Home.css';
import Hero from "./Hero";
// import About from "./Abouts/About";
// import Navbarr from "./Navbar";
import Gallery from "./Gallery";
// import Events from "./Events/Events";
import Mission from "./Mission";
// import AmddasGallery from "./SubComponents/AmddasGallery";
// import AmddasEvents from "./SubComponents/AmddasEvents";
// import AboutAmddas from "./Abouts/AbouAmddas";
// import OurStory from "./SubComponents/OurStory";
// import Amddassupply from "./SubComponents/Supply";
// import Sustainability from "./SubComponents/Sustainability";
import Vision from "./SubComponents/Vision";
import Testimonial from "./SubComponents/Testimonial";
import WhatsAppFloat from "./SubComponents/WhatsAppFloat";
// import Milestones from "./Abouts/Milestones";
import Whyus_home from "./SubComponents/Whyus_home";

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