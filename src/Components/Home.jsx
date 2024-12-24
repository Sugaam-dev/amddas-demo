// Import React and CSS
import React from "react";

import '../Styles/Home.css'
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


// HomePage Component
const Home = () => {
  return (
    <>
    <div className="homepage">
   
      <Hero/>
      <AboutAmddas/>
  <OurStory/>
 
  <Mission/>
  <Sustainability/>
<Amddassupply/>

  <AmddasEvents/>
  <AmddasGallery/>
    
    </div>
    
    </>
  );
};

export default Home;
