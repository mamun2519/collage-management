import React from "react";

import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import SocalLogin from "./SocalLogin";

const Login = () => {
  return (
    <div className="flex h-screen justify-center items-center px-4 ">
      <div className="card w-full lg:w-3/4 bg-base-100 shadow border">
        <div className=" grid lg:grid-cols-2  grid-cols-1">
          <div>
            <img src="/assets/picture/Fingerprint-rafiki.svg" alt="" />
          </div>
          <div className="lg:p-10 p-5">
            <div className="text-center mt-5 ">
              <h2 className="text-2xl font-medium ">Welcome!</h2>
              <p className="mt">Sign in to your Account</p>
            </div>
            <div className="mt-5 h-14  relative">
              <input
                className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                placeholder="Enter Your username & email"
                type="email"
              />
              <div className=" px-1 ">
                <HiOutlineMail className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
              </div>
            </div>
            <div className="mt-3 h-14  relative">
              <input
                className="h-12 border w-full rounded-full  focus:outline-emerald-100 px-20"
                placeholder="Enter Your Password"
                type="email"
              />
              <div className="  px-1 ">
                <RiLockPasswordLine className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
              </div>
            </div>
            <p className="text-center my-1 text-blue-500">Forgate Password?</p>
            <div className="mt-5">
              <input
                className="bg-red-500 w-full rounded-full text-white h-12"
                type="submit"
                value="Sing in"
              />
              <SocalLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
