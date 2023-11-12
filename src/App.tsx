import React, { createContext, useState } from "react";
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
import UserList from "./Components/Dashboard/UserList";
import EventDetails from "./Components/Home/EventDetails";
import NoticeDetailss from "./Components/Home/NoticeDetailss";
import Teachers from "./Components/About/Teachers";
import History from "./Components/About/History";
import About from "./Components/About/About";
import Mission from "./Components/About/Mission";
import Location from "./Components/About/Location";
import Contact from "./Components/About/Contact";
import RequreAdmin from "./Components/Authentication/RequreAdmin";
import HomeNotice from "./Components/Home/HomeNotice";
import TeacherDetails from "./Components/Department/TeacherDetails";
import StudentDetails from "./Components/Department/StudentDetails";
import GalleryPage from "./Components/About/Galery";
export const ThemeContext: any = createContext(null);
function App() {
  const [theme, setTheme] = useState("light");
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
          <Route path="/notice" element={<HomeNotice />}></Route>
          <Route
            path="/teacherDetails/:id"
            element={<TeacherDetails />}
          ></Route>
          <Route
            path="/studentDetails/:id"
            element={<StudentDetails />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/about/teachers" element={<Teachers />}></Route>
          <Route path="/about/history" element={<History />}></Route>
          <Route path="/about/collage" element={<About />}></Route>
          <Route path="/about/gallery" element={<GalleryPage />}></Route>
          <Route path="/about/mission&Vission" element={<Mission />}></Route>
          <Route path="/about/collageLocation" element={<Location />}></Route>
          <Route path="/about/contact" element={<Contact />}></Route>
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
          <Route path="/deparmentOf/:department" element={<BBS />}></Route>
          <Route path="/result" element={<Result />}></Route>
          <Route path="/eventDetails/:id" element={<EventDetails />}></Route>
          <Route path="/noticeDetails/:id" element={<NoticeDetailss />}></Route>
          <Route path="/routine" element={<ClassRoutine />}></Route>
          <Route
            path="/dashboard"
            element={
              <RequreAuth>
                <RequreAdmin>
                  <Dashboard />
                </RequreAdmin>
              </RequreAuth>
            }
          >
            <Route
              path="/dashboard/admissionList"
              element={
                <RequreAuth>
                  <RequreAdmin>
                    <AdmissionList />
                  </RequreAdmin>
                </RequreAuth>
              }
            />
            <Route
              path="/dashboard/admissionList/addmissionDetails/:id"
              element={
                <RequreAuth>
                  <RequreAdmin>
                    <AdmissionDetails />
                  </RequreAdmin>
                </RequreAuth>
              }
            />
            <Route
              path="/dashboard/studentList"
              element={
                <RequreAuth>
                  <RequreAdmin>
                    <StudentLIst />
                  </RequreAdmin>
                </RequreAuth>
              }
            />
            <Route
              path="/dashboard/classRoutine"
              element={
                <RequreAuth>
                  <RequreAdmin>
                    <AddClassRoutine />
                  </RequreAdmin>
                </RequreAuth>
              }
            />
            <Route
              path="/dashboard/examRoutine"
              element={
                <RequreAuth>
                  <RequreAdmin>
                    <AddExamRoutine />
                  </RequreAdmin>
                </RequreAuth>
              }
            />
            <Route
              path="/dashboard/addNotice"
              element={
                <RequreAuth>
                  <RequreAdmin>
                    <AddNotice />
                  </RequreAdmin>
                </RequreAuth>
              }
            />
            <Route
              path="/dashboard/notice"
              element={
                <RequreAuth>
                  <RequreAdmin>
                    <Notice />
                  </RequreAdmin>
                </RequreAuth>
              }
            />
            <Route
              path="/dashboard/notice"
              element={
                <RequreAuth>
                  <RequreAdmin>
                    <Notice />
                  </RequreAdmin>
                </RequreAuth>
              }
            />
            <Route
              path="/dashboard/addTeacher"
              element={
                <RequreAuth>
                  <RequreAdmin>
                    <AddTeacher />
                  </RequreAdmin>
                </RequreAuth>
              }
            />
            <Route
              path="/dashboard/teacherList"
              element={
                <RequreAuth>
                  <RequreAdmin>
                    <TeacherList />
                  </RequreAdmin>
                </RequreAuth>
              }
            />
            <Route
              path="/dashboard/addEvents"
              element={
                <RequreAuth>
                  <RequreAdmin>
                    <AddEvents />
                  </RequreAdmin>
                </RequreAuth>
              }
            />
            <Route
              path="/dashboard/events"
              element={
                <RequreAuth>
                  <RequreAdmin>
                    <Events />
                  </RequreAdmin>
                </RequreAuth>
              }
            />
            <Route
              path="/dashboard/results"
              element={
                <RequreAuth>
                  <RequreAdmin>
                    <Results />
                  </RequreAdmin>
                </RequreAuth>
              }
            />
            <Route
              path="/dashboard/userList"
              element={
                <RequreAuth>
                  <RequreAdmin>
                    <UserList />
                  </RequreAdmin>
                </RequreAuth>
              }
            />
            <Route
              path="/dashboard/results/published/:id"
              element={<RasultPublished />}
            />
          </Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
