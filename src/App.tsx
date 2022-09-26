import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navber from './Components/Shared/Navber';
import SideNav from './Components/Shared/SideNav';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';


function App() {
  return (
    <div className="">
     <SideNav/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
     </Routes>
    
    </div>
  );
}

export default App;
