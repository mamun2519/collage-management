import React , { createContext , useState} from "react";
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
import AddExamRoutine from "./Components/Dashboard/AddExamRoutine";
import AddNotice from "./Components/Dashboard/AddNotice";
import Notice from "./Components/Dashboard/Notice";
import AddTeacher from "./Components/Dashboard/AddTeacher";
import TeacherList from "./Components/Dashboard/TeacherList";
import AddEvents from "./Components/Dashboard/AddEvents";
import Events from "./Components/Dashboard/Events";
import Results from "./Components/Dashboard/Result";
import RasultPublished from "./Components/Dashboard/RasultPublished";
export const ThemeContext:any = createContext(null);
function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="" id={theme}>
      <SideNav />
      {/* <button onClick={toggleTheme} >Change</button> */}
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
          <Route path="/dashboard/examRoutine" element={<AddExamRoutine/>} />
          <Route path="/dashboard/addNotice" element={<AddNotice/>} />
          <Route path="/dashboard/notice" element={<Notice/>} />
          <Route path="/dashboard/notice" element={<Notice/>} />
          <Route path="/dashboard/addTeacher" element={<AddTeacher/>} />
          <Route path="/dashboard/teacherList" element={<TeacherList/>} />
          <Route path="/dashboard/addEvents" element={<AddEvents/>} />
          <Route path="/dashboard/events" element={<Events/>} />
          <Route path="/dashboard/results" element={<Results/>} />
          <Route path="/dashboard/results/published/:id" element={<RasultPublished/>} />
        </Route>
      </Routes>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
