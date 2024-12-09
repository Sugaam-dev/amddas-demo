// Import React and CSS
import React from "react";

import '../Styles/Home.css'
import Hero from "./Hero";
import About from "./About";
import Navbarr from "./Navbar";
import Gallery from "./Gallery";
import Events from "./Events";

// HomePage Component
const Home = () => {
  return (
    <>
    <div className="homepage">
   
      <Hero/>
      <About/>
     <Gallery/>
     <Events/>
    </div>
    
    </>
  );
};

export default Home;
