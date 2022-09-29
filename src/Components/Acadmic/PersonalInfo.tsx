import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const PersonalInfo = () => {
  const [user] = useAuthState(auth);
  type UserSubmitForm = {
    country: string;
    images: string;
    village: string;
    address: string;
    email: string;
    number: string;
    gerdianName: string;
    gender: string;
    age: string;
    birthday: string;
    firstName: string;
    lastName: string;
  };
  const navigate = useNavigate();

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<UserSubmitForm>();
  const onSubmit = (data: UserSubmitForm) => {
    console.log(data);
    const studentInfo = {
      name: `${data.firstName} ${data.lastName}`,
      country: data.country,
      village: data.village,
      address: data.address,
      email: data.email,
      number: data.number,
      gerdianName: data.gerdianName,
      gender: data.gender,
      age: data.age,
      birthday: data.birthday,
    };
    localStorage.setItem("studentInfo", JSON.stringify(studentInfo));
    navigate("/onlineAdmission/personalInfromation/admissionPreview");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="my-10 max-w-7xl m-auto px-3">
        <div className="card w-full bg-base-100 border pb-5">
          <div className="bg-red-500 h-16 flex items-center  justify-between px-8">
            <div>
              <span onClick={()=>navigate("/onlineAdmission")}  className="bg-white text-black px-6 py-1  rounded-lg">
                Back
              </span>
            </div>
            <div>
              <input
                className="bg-white text-black px-6 py-1  rounded-lg"
                type="submit"
                value=" Next"
              />
            </div>
          </div>
          <div className="w-max mx-auto">
            <div className="border-b-2 rounded-full border-red-500 ">
              <h1 className="text-xl pb-2 text-center mt-10 px-12  font-medium uppercase">
                Student Information
              </h1>
            </div>
          </div>
          <div className="mt-10 px-5">
            <div className="grid  lg:grid-cols-3 gap-10 col-span-1">
              <div>
                <p>First Name</p>
                <div className="h-14 mt-2  relative">
                  <input
                    {...register("firstName", {
                      required: {
                        value: true,
                        message: "First Name  is Required",
                      },
                    })}
                    className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                    placeholder="Enter first Your Name"
                    type="text"
                  />

                  <div className=" px-1 ">
                    <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                  </div>
                </div>
                <label className="">
                  {errors.firstName?.type === "required" && (
                    <span className="text-red-500 ">
                      {errors.firstName.message}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <p>Last Name</p>
                <div className="h-14 mt-2  relative">
                  <input
                    {...register("lastName", {
                      required: {
                        value: true,
                        message: "Last Name is Required",
                      },
                    })}
                    className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                    placeholder="Enter Your Last Name"
                    type="text"
                  />

                  <div className=" px-1 ">
                    <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                  </div>
                </div>
                <label className="">
                  {errors.lastName?.type === "required" && (
                    <span className="text-red-500 ">
                      {errors.lastName.message}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <p>Date Of birth</p>
                <div className="h-14 mt-2  relative">
                  <input
                    {...register("birthday", {
                      required: {
                        value: true,
                        message: "Birthday is Required",
                      },
                    })}
                    className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                    placeholder="Enter Your Name"
                    type="date"
                  />

                  <div className=" px-1 ">
                    <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                  </div>
                </div>
                <label className="">
                  {errors.birthday?.type === "required" && (
                    <span className="text-red-500 ">
                      {errors.birthday.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
          </div>
          <div className="mt-5 px-5">
            <div className="grid  lg:grid-cols-3 gap-10 col-span-1">
              <div>
                <p>Age</p>
                <div className="h-14 mt-2  relative">
                  <input
                    {...register("age", {
                      required: {
                        value: true,
                        message: "Age  is Required",
                      },
                    })}
                    className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                    placeholder="Enter Age"
                    type="number"
                  />

                  <div className=" px-1 ">
                    <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                  </div>
                </div>
                <label className="">
                  {errors.age?.type === "required" && (
                    <span className="text-red-500 ">{errors.age.message}</span>
                  )}
                </label>
              </div>
              <div>
                <p>Gender</p>
                <div className="h-14 mt-2  relative">
                  <select
                    {...register("gender", {
                      required: {
                        value: true,
                        message: "Gender is Required",
                      },
                    })}
                    className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                    placeholder="Enter Your Last Name"
                  >
                    <option>Select One</option>
                    <option value="Male">Male</option>
                    <option value="Female">FeMale</option>
                  </select>

                  <div className=" px-1 ">
                    <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                  </div>
                </div>
                <label className="">
                  {errors.gender?.type === "required" && (
                    <span className="text-red-500 ">
                      {errors.gender.message}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <p>Gerdian Name</p>
                <div className="h-14 mt-2  relative">
                  <input
                    {...register("gerdianName", {
                      required: {
                        value: true,
                        message: "Gerdian Name is Required",
                      },
                    })}
                    className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                    placeholder="Enter Gerdian Name"
                    type="text"
                  />

                  <div className=" px-1 ">
                    <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                  </div>
                </div>
                <label className="">
                  {errors.gerdianName?.type === "required" && (
                    <span className="text-red-500 ">
                      {errors.gerdianName.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
          </div>
          <div className="mt-5 px-5">
            <div className="grid  lg:grid-cols-3 gap-10 col-span-1">
              <div>
                <p>Phone Number</p>
                <div className="h-14 mt-2  relative">
                  <input
                    {...register("number", {
                      required: {
                        value: true,
                        message: "Number Required",
                      },
                    })}
                    className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                    placeholder="Enter Age"
                    type="number"
                  />

                  <div className=" px-1 ">
                    <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                  </div>
                </div>
                <label className="">
                  {errors.number?.type === "required" && (
                    <span className="text-red-500 ">
                      {errors.number.message}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <p>Email</p>
                <div className="h-14 mt-2  relative">
                  <input
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                    })}
                    //   value={user?.email}
                    className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                    placeholder="Enter Your Last Name"
                  />

                  <div className=" px-1 ">
                    <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                  </div>
                </div>
                <label className="">
                  {errors.email?.type === "required" && (
                    <span className="text-red-500 ">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
          </div>
          <div className="mt-5 px-5">
            <div className="grid  lg:grid-cols-3 gap-10 col-span-1">
              <div>
                <p>Home Address</p>
                <div className="h-14 mt-2  relative">
                  <input
                    {...register("address", {
                      required: {
                        value: true,
                        message: "Address is Required",
                      },
                    })}
                    className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                    placeholder="Enter Age"
                    type="text"
                  />

                  <div className=" px-1 ">
                    <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                  </div>
                </div>
                <label className="">
                  {errors.address?.type === "required" && (
                    <span className="text-red-500 ">
                      {errors.address.message}
                    </span>
                  )}
                </label>
              </div>

              <div>
                <p>Village</p>
                <div className="h-14 mt-2  relative">
                  <input
                    {...register("village", {
                      required: {
                        value: true,
                        message: "Village is Required",
                      },
                    })}
                    type="text"
                    className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                    placeholder="Enter Your Last Name"
                  />

                  <div className=" px-1 ">
                    <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                  </div>
                </div>
                <label className="">
                  {errors.village?.type === "required" && (
                    <span className="text-red-500 ">
                      {errors.village.message}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <p>Country</p>
                <div className="h-14 mt-2  relative">
                  <input
                    {...register("country", {
                      required: {
                        value: true,
                        message: "country is Required",
                      },
                    })}
                    type="text"
                    className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                    placeholder="Enter Your Last Name"
                  />

                  <div className=" px-1 ">
                    <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                  </div>
                </div>
                <label className="">
                  {errors.country?.type === "required" && (
                    <span className="text-red-500 ">
                      {errors.country.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </form>
  );
};

export default PersonalInfo;
