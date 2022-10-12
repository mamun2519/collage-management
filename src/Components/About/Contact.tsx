import React from "react";
import { useForm } from "react-hook-form";
import { CgProfile } from "react-icons/cg";
import { MdKeyboardArrowRight } from "react-icons/md";
interface Notices {
      title: number;
      description: string;
      date: string;
    }
const Contact = () => {
      const {
            register,
            reset,
            formState: { errors },
            handleSubmit,
          } = useForm<Notices>();
        
          const onSubmit = (data: Notices) => {}
  return (
    <>
      <div className="bg-gray-700">
        <div className="h-52   max-w-7xl m-auto px-3 grid grid-cols-1 lg:flex justify-between items-center">
          <h1 className="text-4xl  font-medium text-white up">Contact Us</h1>

          <div className="flex py-2 bg-[#2374e1] text-white px-8 gap-5 rounded-lg  font-medium">
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

            <span className="text-white  font-medium">Contact</span>
          </div>
        </div>
      </div>

      <div className="px-3">
      <div className="card lg:w-full max-w-7xl mx-auto px-3  w-full  bg-base-100 border  shadow-md my-20 p-4 grid lg:grid-cols-3  grid-cols-1 ">
        <div className=" col-span-2 p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid  lg:grid-cols-2 grid-cols-1 gap-10">
                <div className="mt-5">
                  <h1>Name</h1>
                  <div className="h-14 mt-2  relative">
                    <input
                      {...register("date", {
                        required: {
                          value: true,
                          message: "Name is Required",
                        },
                      })}
                      className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                      placeholder="Enter Name"
                      type="text"
                    />

                    <div className=" px-1 ">
                      <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                    </div>
                  </div>
                  <label className="">
                    {errors.date?.type === "required" && (
                      <span className="text-red-500 ">
                        {errors.date.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="mt-5">
                  <h1>Email</h1>
                  <div className="h-14 mt-2  relative">
                    <input
                      {...register("title", {
                        required: {
                          value: true,
                          message: "email is Required",
                        },
                      })}
                      className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                      placeholder="Enter Email"
                      type="email"
                    />
                    <div className=" px-1 ">
                      <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                    </div>
                  </div>
                  <label className="">
                    {errors.title?.type === "required" && (
                      <span className="text-red-500 ">
                        {errors.title.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
              <div className="grid  lg:grid-cols-2 grid-cols-1 gap-10 mt-10">
                <div className="mt-5">
                  <h1>Subject</h1>
                  <div className="h-14 mt-2  relative">
                    <input
                      {...register("date", {
                        required: {
                          value: true,
                          message: "Dubject is Required",
                        },
                      })}
                      className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                      placeholder="Enter Subject"
                      type="text"
                    />

                    <div className=" px-1 ">
                      <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                    </div>
                  </div>
                  <label className="">
                    {errors.date?.type === "required" && (
                      <span className="text-red-500 ">
                        {errors.date.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="mt-5">
                  <h1>Phone</h1>
                  <div className="h-14 mt-2  relative">
                    <input
                      {...register("title", {
                        required: {
                          value: true,
                          message: "phone is Required",
                        },
                      })}
                      className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                      placeholder="Enter Phone"
                      type="number"
                    />
                    <div className=" px-1 ">
                      <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                    </div>
                  </div>
                  <label className="">
                    {errors.title?.type === "required" && (
                      <span className="text-red-500 ">
                        {errors.title.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>

              <div className="mt-5">
                <h1>Message</h1>
                <div className=" mt-2  relative">
                  <textarea
                    {...register("description", {
                      required: {
                        value: true,
                        message: "Message is Required",
                      },
                    })}
                    className=" h-32 pt-2 text-xl border w-full  rounded-lg   focus:outline-emerald-100 px-20"
                    placeholder="Enter Message"
                  />

                  <div className=" px-1 ">
                    <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                  </div>
                </div>
                <label className="">
                  {errors.description?.type === "required" && (
                    <span className="text-red-500 ">
                      {errors.description.message}
                    </span>
                  )}
                </label>
              </div>

              <div className=" text-center mt-5">
                <input
                  className="text-white bg-red-500 px-8 py-2 rounded-lg"
                  type="submit"
                  value="Send Your Message"
                />
              </div>
            </form>
        </div>
        <div className="p-5">
            <div className=" flex justify-center items-center h-32 bg-red-500  rounded-lg">
                  <div>
                        <p className="text-xl  font-medium text-white">OUR CONTACT NUMBER</p>
                        <p className="text-lg text-white mt-1">031-636051</p>
                  </div>

            </div>
            <div className=" flex justify-center items-center h-32 bg-red-500  rounded-lg mt-5">
                  <div>
                        <p className="text-xl  font-medium text-white">OUR OFFICE LOCATION</p>
                        <p className="text-lg text-white mt-1">Government City College, Chattogram</p>
                  </div>

            </div>
            <div className=" flex justify-center items-center h-32 bg-red-500  rounded-lg mt-5">
                  <div>
                        <p className="text-xl  font-medium text-white">OUR CONTACT E-MAIL</p>
                        <p className="text-lg text-white mt-1">info@gccc.edu.bd</p>
                  </div>

            </div>
            
        </div>
      </div>
      </div>
    </>
  );
};

export default Contact;