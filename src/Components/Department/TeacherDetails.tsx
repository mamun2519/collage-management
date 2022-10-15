import React, { useContext, useState, useEffect } from "react";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../App";
const TeacherDetails = () => {
  const { id } = useParams();
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const [teacher, setTeacher] = useState<any>({});
  useEffect(() => {
    fetch(`http://localhost:5000/v1/teacher/department/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setTeacher(data?.teacher);
        }
      });
  }, []);


  return (
    <div
      className={`card max-w-7xl m-auto h-[500px]    lg:w-full w-[280px]  border  shadow-md my-20 ${
        theme == "light" ? "bg-base-100" : "bg-[#242526] text-[#e4e6eb] border-[#414343]"
      }`}
    >
      {" "}
      <div>
        <div className=" grid h-[400px] lg:grid-cols-3 grid-cols-1">
          <div className=" b-[#242526]  ">
            <>
              <div className="avatar  mt-20 flex items-center justify-center">
                <div className="w-44 rounded-full">
                  <img src={teacher?.picture?.url} />
                </div>
              </div>
              <div className=" text-center mt-3">
                <p className="text-xl font-medium">{teacher?.name}</p>
                <div className="">
                  <div className="flex justify-center gap-5 mt-3">
                    <a href={teacher?.linkedinId || ""} className="text-xl border p-2 w-10 rounded-lg text-red-500">
                      <BsFacebook />
                    </a>
                    <span className="text-xl border p-2 w-10  rounded-lg text-red-500">
                      <AiFillTwitterCircle />
                    </span>
                    <span className="text-xl border p-2 w-10  rounded-lg text-red-500">
                      <AiOutlineInstagram />
                    </span>
                    <a href={teacher?.linkedinId || ""} className="text-xl border p-2 w-10  rounded-lg text-red-500">
                      <AiFillLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </>
          </div>

          <div className=" col-span-2 mt-10">
            <p className="text-xl font-semibold uppercase">
              Teacher Short Description:
            </p>
            <div className="mt-5">
              <p className=" font-semibold text-lg">Department Teacher</p>
              <p className=" font-semibold text-lg text-red-500">
                {teacher?.classs}
              </p>
              <p className=" font-semibold text-lg mt-3">
                Educational Qualification
              </p>
              <p className=" font-semibold text-lg text-red-500">
                {teacher?.educationalQualification}
              </p>
              <p className=" font-semibold text-lg mt-3">
                Collage Role
              </p>
              <p className=" font-semibold text-lg text-red-500">
                {teacher?.collageRole}
              </p>
              <p className=" font-semibold text-lg mt-3">
                Teacher Email (personal)
              </p>
              <p className=" font-semibold text-lg text-red-500">
                {teacher?.email}
              </p>
              <p className=" font-semibold text-lg mt-3">
                Join Date
              </p>
              <p className=" font-semibold text-lg text-red-500">
                {teacher?.joinDate}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TeacherDetails;
