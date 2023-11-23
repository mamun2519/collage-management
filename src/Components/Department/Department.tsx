import { Tab } from "@headlessui/react";
import React, { useEffect, useState, useContext } from "react";
import Marquee from "react-fast-marquee";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import ClassRoutine from "./ClassRoutine";
import ExamRoutine from "./ExamRoutine";
import Overview from "./Overview";
import Student from "./Student";
import Teacher from "./Teacher";
import { ThemeContext } from "../../App";
import { MdKeyboardArrowRight } from "react-icons/md";
const BBS = () => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const { department } = useParams();
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [routine, setRoutine] = useState([]);
  console.log(routine);
  const [loading, isLoading] = useState(false);
  useEffect(() => {
    isLoading(true);
    fetch(
      `http://localhost:5000/v1/student/deparment/student?department=${department}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setStudents(data.student);
        }
      });
    fetch(
      `http://localhost:5000/v1/teacher/department?department=${department}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setTeachers(data.student);
        }
      });
    fetch(
      `http://localhost:5000/v1/routine/departments?department=${department}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setRoutine(data.student);
          isLoading(false);
        } else {
          isLoading(false);
          setRoutine([]);
        }
      });
  }, [department]);
  // console.log(routine);
  const Tabs = [
    {
      name: "Overview",
      content: (
        <div data-aos="fade-right" data-aos-duration="1000">
          <Overview />
        </div>
      ),
    },

    {
      name: "Department Of Student",
      content: (
        <div data-aos="fade-right" data-aos-duration="1000">
          <Student students={students} />
        </div>
      ),
    },
    {
      name: "Department Of Teacher ",
      content: (
        <div data-aos="fade-right" data-aos-duration="1000">
          <Teacher teachers={teachers} />
        </div>
      ),
    },
    {
      name: "Class Routine",
      content: (
        <div data-aos="fade-right" data-aos-duration="1000">
          <ClassRoutine routine={routine} />
        </div>
      ),
    },
    {
      name: "Exam Routine",
      content: (
        <div data-aos="fade-right" data-aos-duration="1000">
          <ExamRoutine routine={routine} />
        </div>
      ),
    },
  ];

  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          {/* <div className="h-[450px] relative">
            <img
              className="lg:h-[450px] h-[250px] w-full "
              src="https://upload.wikimedia.org/wikipedia/commons/6/68/Rajshahi_College_Campus_01.jpg"
              alt="Shoes"
            />
          </div> */}
          <div
            className={`${
              theme === "light"
                ? "bg-[#166364]  border-t border-[#e4e6eb]"
                : "bg-gray-700"
            }`}
          >
            <div className="h-60   max-w-7xl m-auto px-3 grid grid-cols-1 lg:flex justify-center items-center">
              <h1 className="text-4xl  font-medium text-white up uppercase ">
                department Of {department}
              </h1>

              {/* <div
                className={`flex py-2 ]  px-8 gap-5 rounded-lg  font-medium ${
                  theme == "light"
                    ? "bg-[#2374e1] text-white"
                    : "bg-[#242526] text-[#e4e6eb]"
                }`}
              >
                <div className=" flex gap-2">
                  {" "}
                  <span className="px-0">Home </span>
                  <span className="mt-1 text-xl text-white">
                    <MdKeyboardArrowRight />
                  </span>
                </div>
                <div className="flex gap-2">
                  {" "}
                  <span className="px-0">About</span>
                  <span className="mt-1 text-xl text-white">
                    <MdKeyboardArrowRight />
                  </span>
                </div>

                <span className="text-white  font-medium">About Collage</span>
              </div> */}
            </div>
          </div>

          <div className="my-5 max-w-7xl m-auto px-3 mt-10">
            <Tab.Group>
              <Tab.List className=" rounded-lg  lg:flex justify-center">
                {Tabs.map((item, index) => (
                  <Tab
                    key={index}
                    className={({ selected }) =>
                      selected
                        ? `transition  uppercase duration-500 border-b-[3px]  px-6 ${
                            theme == "light"
                              ? "border-[#166364] text-black"
                              : "border-[#e4e6eb] text-[#e4e6eb]"
                          }   rounded-lg  pb-1 text-center `
                        : ` py-[5px] px-6 uppercase  ${
                            theme == "light" ? "text-black" : "text-[#e4e6eb]"
                          } `
                    }
                  >
                    {index < Tabs.length - 1 && (
                      <span className="  h-6  -translate-y-1/2 bg-gray-100" />
                    )}
                    <span className=" font-semibold text-[17px] ">
                      {item.name}
                    </span>
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="pt-2">
                {Tabs.map((item, index) => (
                  <Tab.Panel>{item.content}</Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </>
      )}
    </div>
  );
};

export default BBS;
