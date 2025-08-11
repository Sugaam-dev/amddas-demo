// App.jsx
import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SignUp from './Components/SignUp';
import Otp from './Components/Otp';
import Forget from './Components/Forget';
import Done from './Components/Done';
import Otpforget from './Components/Otp-Forget';
import Cnfpassword from './Components/Cnfpassword';
import Home from './Components/Homes/Home';
import PrivateRoute from './Components/PrivateRoute';
import Menu from './Components/Menu';
import Navbarr from './Components/Navbar';
import Error from './Components/Error';
import Demo from './Components/Demo';
import Log from './Components/Log';
import Foot from './Components/Footers/Foot';
import PrivacyPolicy from './Components/PrivacyPolicy';
import DeleteAccount from './Components/DeleteAccount';

import About from './Components/Abouts/About';
import Gallery from './Components/Homes/Gallery';
import Events from "./Components/Events/Events";
import OurStoryMain from './Components/OurStory-main';
import MissionVisionValues from './Components/MissionVisionValues';
import Navbar from './Components/Nav';
import WhatWeDo from './Components/Services/WhatWeDo';
import CorporateMain from './Components/Corporate-main';
import OffsiteMain from './Components/SubComponents/OffsiteMain';
import MyMealMain from './Components/SubComponents/MyMealMain';
import TechnologyPage from './Components/SubComponents/TechnologyPage';
import CorporateExperience from './Components/SubComponents/CorporateExperience';
import SupplyChain from './Components/SubComponents/SupplyChain';
import Sustain from './Components/SubComponents/Sustain';
import Contact from './Components/Contacts/Contact';
import Nav from './Components/Nav';
import Why_Us from './Components/WhyUs/Why_Us';
import Festivals from './Components/Festivals/Festivals';

// ScrollToTop Component - This will handle automatic scrolling to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top instantly when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'smooth' if you want animated scrolling
    });
  }, [pathname]);

  return null; // This component doesn't render anything
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Add ScrollToTop component here - it must be inside BrowserRouter */}
      <Navbarr />
      {/* <Nav/> */}

      <Routes>
        <Route path='/' element={<Home/>}/>
      
        <Route path='/login' element={<Log />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/getotp' element={<Otp />} />
        <Route path='/forgot-password' element={<Forget />} />
        <Route path='/done' element={<Done />} />
        <Route path='/verify-otp' element={<Otpforget />} />
        <Route path='/confirmpassword' element={<Cnfpassword />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/amddas-gallery' element={<Gallery/>}/>
        <Route path='/amddas-events' element={<Events/>}/>
        <Route path='/what-we-do' element={<WhatWeDo/>}/>

        <Route path='/ourstory' element={<OurStoryMain/>}/>
        <Route path='/our-mission' element={<MissionVisionValues/>}/>
        <Route path='/corporate' element={<CorporateMain/>}/>
        <Route path='/corporate-offsite' element={<OffsiteMain/>}/>
        <Route path='/meal' element={<MyMealMain/>}/>
        <Route path='/technology' element={<TechnologyPage/>}/>
        <Route path='/corporate-experience' element={<CorporateExperience/>}/>
        <Route path='/supply-chain' element={<SupplyChain/>}/>
        <Route path='/sustainability' element={<Sustain/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/why-us" element={<Why_Us />} />
        <Route path="/festivals" element={<Festivals />} />

        {/* Protected Routes */}
        <Route
          path="/booking"
          element={
            <PrivateRoute>
              {/* <Home /> */}
              <Menu />
            </PrivateRoute>
          }
        />

        <Route
          path="/menu"
          element={
            <PrivateRoute>
              <Demo />
            </PrivateRoute>
          }
        />

        <Route
          path="/delete-Account"
          element={
            <PrivateRoute>
              <DeleteAccount />
            </PrivateRoute>
          }
        />

        {/* Catch-all Route for Undefined Paths */}
        <Route path='/*' element={<Error />} />
      </Routes>
      <Foot />
    </BrowserRouter>
  );
}

export default App;