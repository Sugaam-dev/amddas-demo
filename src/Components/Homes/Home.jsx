// Import React and CSS
import './Home.css';
import Hero from "./Hero";
import Gallery from "./Gallery";
// import Mission from "./Mission";
// import Vision from "./Vision";
import Testimonial from "./Testimonial";
import WhatsAppFloat from "../SubComponents/WhatsAppFloat";
import Whyus_home from "./Whyus_home";
import JourneyValues from "./Journeyvalues";
import EveSection1 from "./Eve-Section1";
import EveSection2 from './Eve-Section2';
import EveSection3 from './Eve-Section3';
import EveSection4 from './Eve-Section4';
import EveSection6 from './Eve-Section6';
import EveSection5 from './Eve-Section5';

// HomePage Component
const Home = () => {
  return (
    <>
      <div className="homepage">
        <Hero/>
        <Whyus_home/>
        <JourneyValues/>
        {/* <AboutAmddas/> */}
        {/* <OurStory/> */}
        <EveSection1/>
        <EveSection2/>
        <EveSection3/>
        <EveSection4/>
        <EveSection5/>
        <EveSection6/>
        {/* <Mission/>
        <Vision/> */}
        {/* <Sustainability/>
        <Amddassupply/>
        <AmddasEvents/> */}
        {/* <AmddasGallery/> */}
        <Gallery/>
        <Testimonial/>
        {/* <Milestones/> */}
        {/* <WhatsAppFloat/> */}
      </div>
    </>
  );
};

export default Home;