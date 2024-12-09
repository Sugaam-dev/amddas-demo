// App.jsx
import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Otp from './Components/Otp';
import Forget from './Components/Forget';
import Done from './Components/Done';
import Otpforget from './Components/Otp-Forget';
import Cnfpassword from './Components/Cnfpassword';
import Home from './Components/Home';
import PrivateRoute from './Components/PrivateRoute';
import Menu from './Components/Menu';
import Navbarr from './Components/Navbar';
import Error from './Components/Error';
import Demo from './Components/Demo';
import Log from './Components/Log';
import Foot from './Components/Foot';
import PrivacyPolicy from './Components/PrivacyPolicy';
import DeleteAccount from './Components/DeleteAccount';

import About from './Components/About';
import Gallery from './Components/Gallery';
import Events from "./Components/Events";


function App() {
  return (
    <BrowserRouter>
      <Navbarr />
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/' element={<Log />} /> */}
        <Route path='/login' element={<Log />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/getotp' element={<Otp />} />
        <Route path='/forgot-password' element={<Forget />} />
        <Route path='/done' element={<Done />} />
        <Route path='/verify-otp' element={<Otpforget />} />
        <Route path='/confirmpassword' element={<Cnfpassword />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
<Route path='/about' element={<About/>}/>
<Route path='/gallery' element={<Gallery/>}/>
<Route path='/events' element={<Events/>}/>


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
