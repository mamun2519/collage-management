
import React, { useContext, useState, useEffect } from "react";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../App";
const StudentDetails = () => {
      const { id } = useParams();
      const { theme, toggleTheme } = useContext<any>(ThemeContext);
      const [student, setstudent] = useState<any>({});
      useEffect(() => {
        fetch(`http://localhost:5000/v1/student/admission/${id}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              setstudent(data?.student);
            }
          });
      }, []);
      console.log(student)
      return (
            <div
      className={`card max-w-7xl m-auto h-[600px]    lg:w-full w-[280px]  border  shadow-md my-20 ${
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
                  <img src={student?.studentPhoto?.url} />
                </div>
              </div>
              <div className=" text-center mt-3">
                <p className="text-xl font-medium">{student?.name}</p>
                <div className="">
                  <div className="flex justify-center gap-5 mt-3">
                    <a href={student?.linkedinId || ""} className="text-xl border p-2 w-10 rounded-lg text-red-500">
                      <BsFacebook />
                    </a>
                    <span className="text-xl border p-2 w-10  rounded-lg text-red-500">
                      <AiFillTwitterCircle />
                    </span>
                    <span className="text-xl border p-2 w-10  rounded-lg text-red-500">
                      <AiOutlineInstagram />
                    </span>
                    <a href={student?.linkedinId || ""} className="text-xl border p-2 w-10  rounded-lg text-red-500">
                      <AiFillLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </>
          </div>

          <div className=" col-span-2 mt-10">
            <p className="text-xl font-semibold uppercase">
              Student Short Description:
            </p>
            <div className="mt-5">
              <p className=" font-semibold text-lg">Class</p>
              <p className=" font-semibold text-lg text-red-500">
                {student?.classs}
              </p>
              <p className=" font-semibold text-lg mt-3">
                Roll
              </p>
              <p className=" font-semibold text-lg text-red-500">
                {student?.roll}
              </p>
              <p className=" font-semibold text-lg mt-3">
              Session
              </p>
              <p className=" font-semibold text-lg text-red-500">
                {student?.session}
              </p>
              <p className=" font-semibold text-lg mt-3">
              Board
              </p>
              <p className=" font-semibold text-lg text-red-500">
                {student?.board}
              </p>
              <p className=" font-semibold text-lg mt-3">
              Age
              </p>
              <p className=" font-semibold text-lg text-red-500">
                {student?.age}
              </p>
              <p className=" font-semibold text-lg mt-3">
                Number
              </p>
              <p className=" font-semibold text-lg text-red-500">
                {student?.number}
              </p>
              <p className=" font-semibold text-lg mt-3">
                Address
              </p>
              <p className=" font-semibold text-lg text-red-500">
                {student?.village} ,  {student?.address}, {student?.country}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
      );
};

export default StudentDetails;