import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navber from './Components/Shared/Navber';
import SideNav from './Components/Shared/SideNav';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Authentication/Login';
import SignUp from './Components/Authentication/SignUp';


function App() {
  return (
    <div className="">
     <SideNav/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
     </Routes>
    
    </div>
  );
}

export default App;
