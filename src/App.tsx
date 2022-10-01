import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navber from './Components/Shared/Navber';
import SideNav from './Components/Shared/SideNav';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Authentication/Login';
import SignUp from './Components/Authentication/SignUp';
import Admission from './Components/Acadmic/Admission';
import RequreAuth from './Components/Authentication/RequreAuth';
import PersonalInfo from './Components/Acadmic/PersonalInfo';
import AdmissonPreview from './Components/Acadmic/AdmissonPreview';
import Payment from './Components/Acadmic/Payment';
import ConfromMessage from './Components/Acadmic/ConfromMessage';


function App() {
  return (
    <div className="">
     <SideNav/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/onlineAdmission' element={<RequreAuth><Admission/></RequreAuth>}></Route>
      <Route path='/onlineAdmission/personalInfromation' element={<RequreAuth><PersonalInfo/></RequreAuth>}></Route>
      <Route path='/onlineAdmission/personalInfromation/admissionPreview' element={<RequreAuth><AdmissonPreview/></RequreAuth>}></Route>
      <Route path='/onlineAdmission/personalInfromation/admissionPreview/payment' element={<RequreAuth><Payment/></RequreAuth>}></Route>
      <Route path='/onlineAdmission/personalInfromation/admissionPreview/payment/paymentConfrom' element={<RequreAuth><ConfromMessage/></RequreAuth>}></Route>
     </Routes>
    
    </div>
  );
}

export default App;
