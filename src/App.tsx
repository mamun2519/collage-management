import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navber from "./Components/Shared/Navber";
import SideNav from "./Components/Shared/SideNav";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Authentication/Login";
import SignUp from "./Components/Authentication/SignUp";
import Admission from "./Components/Acadmic/Admission";
import RequreAuth from "./Components/Authentication/RequreAuth";
import PersonalInfo from "./Components/Acadmic/PersonalInfo";
import AdmissonPreview from "./Components/Acadmic/AdmissonPreview";
import Payment from "./Components/Acadmic/Payment";
import ConfromMessage from "./Components/Acadmic/ConfromMessage";
import StudentId from "./Components/Acadmic/StudentId";
import BBS from "./Components/Department/Department";
import Result from "./Components/Acadmic/Result";
import ClassRoutine from "./Components/Acadmic/ClassRoutine";
import Dashboard from "./Components/Dashboard/Dashboard";
import AdmissionList from "./Components/Dashboard/AdmissionList";
import AdmissionDetails from "./Components/Dashboard/AdmissionDetails";
import StudentLIst from "./Components/Dashboard/StudentLIst";
import AddClassRoutine from "./Components/Dashboard/AddClassRoutine";

function App() {
  return (
    <div className="">
      <SideNav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route
          path="/onlineAdmission"
          element={
            <RequreAuth>
              <Admission />
            </RequreAuth>
          }
        ></Route>
        <Route
          path="/onlineAdmission/personalInfromation"
          element={
            <RequreAuth>
              <PersonalInfo />
            </RequreAuth>
          }
        ></Route>
        <Route
          path="/onlineAdmission/personalInfromation/admissionPreview"
          element={
            <RequreAuth>
              <AdmissonPreview />
            </RequreAuth>
          }
        ></Route>
        <Route
          path="/onlineAdmission/personalInfromation/admissionPreview/payment"
          element={
            <RequreAuth>
              <Payment />
            </RequreAuth>
          }
        ></Route>
        <Route
          path="/onlineAdmission/personalInfromation/admissionPreview/payment/paymentConfrom"
          element={
            <RequreAuth>
              <ConfromMessage />
            </RequreAuth>
          }
        ></Route>
        <Route
          path="/studentId"
          element={
            <RequreAuth>
              <StudentId />
            </RequreAuth>
          }
        ></Route>
        <Route
          path="/deparmentOf/:department"
          element={<BBS />}
        ></Route>
        <Route
          path="/result"
          element={<Result />}
        ></Route>
        <Route
          path="/routine"
          element={<ClassRoutine />}
        ></Route>
        <Route
          path="/dashboard"
          element={<Dashboard />}
        >
          <Route path="/dashboard/admissionList" element={<AdmissionList/>} />
          <Route path="/dashboard/admissionList/addmissionDetails/:id" element={<AdmissionDetails/>} />
          <Route path="/dashboard/studentList" element={<StudentLIst/>} />
          <Route path="/dashboard/classRoutine" element={<AddClassRoutine/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
