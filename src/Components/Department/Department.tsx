import { Tab } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import ClassRoutine from "./ClassRoutine";
import ExamRoutine from "./ExamRoutine";
import Overview from "./Overview";
import Student from "./Student";
import Teacher from "./Teacher";

const BBS = () => {
  const { department } = useParams();
  const [students, setStudents] = useState([]);
  const [teacher, setTeachers] = useState([]);
  const [routine, setRoutine] = useState([]);
  const [loading , isLoading] = useState(false)
  useEffect(() => {
    isLoading(true)
    fetch(
      `http://localhost:5000/v1/student/deparment/student?department=${department}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStudents(data.student);
          fetch(
            `http://localhost:5000/v1/teacher/department?department=${department}`
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.success) {
                setTeachers(data.student);
                fetch(
                  `http://localhost:5000/v1/routine/departments?department=${department}`
                )
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data)
                    if (data.success) {
                      setRoutine(data.student);
                      isLoading(false)
                    }
                  });
              }
            });
        }
      });
  }, [department]);
  console.log(students);
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
      name: "Student infromatio",
      content: (
        <div data-aos="fade-right" data-aos-duration="1000">
          <Student students={students} />
        </div>
      ),
    },
    {
      name: "Teacher infromation ",
      content: (
        <div data-aos="fade-right" data-aos-duration="1000">
          <Teacher />
        </div>
      ),
    },
    {
      name: "Class Routine",
      content: (
        <div data-aos="fade-right" data-aos-duration="1000">
          <ClassRoutine />
        </div>
      ),
    },
    {
      name: "Exam Routine",
      content: (
        <div data-aos="fade-right" data-aos-duration="1000">
          <ExamRoutine />
        </div>
      ),
    },
  ];

  return (
    <div>
      {
        loading ? <Loading></Loading> : <>
      <div className="h-[450px] relative">
        <img
          className="lg:h-[450px] h-[250px] w-full "
          src="https://upload.wikimedia.org/wikipedia/commons/6/68/Rajshahi_College_Campus_01.jpg"
          alt="Shoes"
        />
      </div>
      <div className="absolute lg:top-[270px] lg:left-[150px] top-[170px] left-[60px]">
        {/* <p className="lg:text-5xl text-3xl uppercase font-medium  text-black">
          Department of {department}
        </p> */}
      </div>
       
        <div className="my-5 max-w-7xl m-auto ">
        <Tab.Group>
          <Tab.List className=" rounded-lg  lg:flex justify-center">
            {Tabs.map((item, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  selected
                    ? "transition  uppercase duration-500 border-b-2  px-6 border-red-500   text-black rounded-lg  pb-1 text-center     "
                    : " py-[5px] px-6 uppercase "
                }
              >
                {index < Tabs.length - 1 && (
                  <span className="  h-6  -translate-y-1/2 bg-gray-100" />
                )}
                <span className=" font-semibold text-[17px] ">{item.name}</span>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="pt-5">
            {Tabs.map((item, index) => (
              <Tab.Panel>{item.content}</Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>

       
      </>}
      {/* <div className="my-20 max-w-7xl m-auto">
                  <Marquee gradient={false} speed={30}>
                  <div className=' grid grid-cols-4 gap-10 px-4 py-4'>
                        <div className='w-[350px] border p-2 rounded-lg shadow-md'>
                              <img className='h-[300px] rounded-md' src="/assets/picture/gallery2.png" alt="" />
                        </div>
                        <div className='w-[350px] p-2 rounded-lg shadow-md'>
                        <img className='h-[300px] rounded-md'  src="/assets/picture/gallery3.png" alt="" />
                        </div>
                        <div className='w-[350px] p-2 rounded-lg shadow-md'>
                        <img className='h-[300px] rounded-md' src="/assets/picture/gallery4.png" alt="" />
                        </div>
                        <div className='w-[350px] p-2 rounded-lg shadow-md'>
                        <img className='h-[300px] rounded-md' src="/assets/picture/gallery5.png" alt="" />
                        </div>
                  </div>
                  <div className=' grid grid-cols-4 gap-10 px-4 py-4'>
                        <div className='w-[350px] border p-2 rounded-lg shadow-md'>
                              <img className='h-[300px] rounded-md' src="/assets/picture/gallery2.png" alt="" />
                        </div>
                        <div className='w-[350px] p-2 rounded-lg shadow-md'>
                        <img className='h-[300px] rounded-md'  src="/assets/picture/gallery3.png" alt="" />
                        </div>
                        <div className='w-[350px] p-2 rounded-lg shadow-md'>
                        <img className='h-[300px] rounded-md' src="/assets/picture/gallery4.png" alt="" />
                        </div>
                        <div className='w-[350px] p-2 rounded-lg shadow-md'>
                        <img className='h-[300px] rounded-md' src="/assets/picture/gallery5.png" alt="" />
                        </div>
                  </div>
                  
                  </Marquee>

                  </div> */}
    </div>
  );
};

export default BBS;
