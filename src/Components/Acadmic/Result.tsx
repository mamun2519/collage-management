import React from "react";
import { useForm } from "react-hook-form";
import { CgProfile } from "react-icons/cg";

const Result = () => {
  type UserSubmitForm = {
    classs: string;
    session: string;
    examName: string;
    roll: string;
    department: string;
  };
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<UserSubmitForm>();
  const onSubmit = (data: UserSubmitForm) => {
    console.log(data);
  };
  const clases = [
    { title: "Select Class" },
    { title: "Higer Secondary Admission" },
    { title: "Bachelor of Busniness Studies (BBS)" },
    { title: "Bachelor of Science (BSC)" },
    { title: "Bachelor of Arts (BA)" },
    { title: "Bachelor of Busniness Administraion(BBA)" },
    { title: "Graduate Admission (Master's)" },
  ];

  const department = [
    { title: "Select Department" },
    { title: "Seience" },
    { title: "Commarce" },
    { title: "Arts" },
  ];
  const section = [
    { title: "Select Section" },
    { title: "2017-2018" },
    { title: "2019-2020" },
    { title: "2021-2022" },
    { title: "2023-2024" },
  ];
  const exam = [
    { title: "Select Section" },
    { title: "Incourse Exam" },
    { title: "Test Exam" },
    { title: "Final Exam" },
  ];
  return (
    <div className="my-10 max-w-7xl m-auto ">
      <div className="card   w-full mx-auto bg-base-100 border  shadow-lg">
        <div className="p-5 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" ">
              <div className="pb-5">
                <div className="w-max mx-auto">
                  <div className="border-b-2 rounded-full border-red-500 ">
                    <h1 className="text-xl pb-2 text-center mt-10 px-12  font-medium uppercase">
                      Search Result
                    </h1>
                  </div>
                </div>

                <div className="mt-10 px-5">
                  <div className="grid  lg:grid-cols-3 gap-10 col-span-1">
                    <div>
                      <p>Department</p>
                      <div className="h-14 mt-2  relative">
                        <select
                          {...register("department", {
                            required: {
                              value: true,
                              message: "Department  is Required",
                            },
                          })}
                          className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                          placeholder="Enter Age"
                        >
                          {department.map((depart) => (
                            <option value={depart.title}>{depart.title}</option>
                          ))}
                        </select>

                        <div className=" px-1 ">
                          <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                        </div>
                      </div>
                      <label className="">
                        {errors.department?.type === "required" && (
                          <span className="text-red-500 ">
                            {errors.department.message}
                          </span>
                        )}
                      </label>
                    </div>
                    <div>
                      <p>class Name</p>
                      <div className="h-14 mt-2  relative">
                        <select
                          {...register("classs", {
                            required: {
                              value: true,
                              message: "Gender is Required",
                            },
                          })}
                          className="h-12  border w-full rounded-full   focus:outline-emerald-100 pl-20"
                          placeholder="Enter Your Last Name"
                        >
                          {clases.map((depart) => (
                            <option value={depart.title} selected>
                              {depart.title}
                            </option>
                          ))}
                        </select>

                        <div className=" px-1 ">
                          <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                        </div>
                      </div>
                      <label className="">
                        {errors.classs?.type === "required" && (
                          <span className="text-red-500 ">
                            {errors.classs.message}
                          </span>
                        )}
                      </label>
                    </div>
                    <div>
                      <p>Session</p>
                      <div className="h-14 mt-2  relative">
                        <select
                          {...register("session", {
                            required: {
                              value: true,
                              message: "session is Required",
                            },
                          })}
                          className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                          placeholder="Enter Your Last Name"
                        >
                          {section.map((depart) => (
                            <option value={depart.title}>{depart.title}</option>
                          ))}
                        </select>

                        <div className=" px-1 ">
                          <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                        </div>
                      </div>
                      <label className="">
                        {errors.session?.type === "required" && (
                          <span className="text-red-500 ">
                            {errors.session.message}
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mt-5 px-5">
                  <div className="grid  lg:grid-cols-3 gap-10 col-span-1">
                    <div>
                      <p>Exam Name</p>
                      <div className="h-14 mt-2  relative">
                        <select
                          {...register("examName", {
                            required: {
                              value: true,
                              message: "exam Name is Required",
                            },
                          })}
                          className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                          placeholder="Enter Your Last Name"
                        >
                          {exam.map((depart) => (
                            <option value={depart.title} selected>
                              {depart.title}
                            </option>
                          ))}
                        </select>

                        <div className=" px-1 ">
                          <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                        </div>
                      </div>
                      <label className="">
                        {errors.examName?.type === "required" && (
                          <span className="text-red-500 ">
                            {errors.examName.message}
                          </span>
                        )}
                      </label>
                    </div>
                    <div>
                      <p>Student Roll</p>
                      <div className="h-14 mt-2  relative">
                        <input
                          {...register("roll", {
                            required: {
                              value: true,
                              message: "Roll Required",
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
                        {errors.roll?.type === "required" && (
                          <span className="text-red-500 ">
                            {errors.roll.message}
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                </div>

                <div className=" flex justify-center mt-5">
                  <input
                    className="bg-red-500 text-white px-6 py-2 rounded-lg"
                    type="submit"
                    value="Submit Result"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* <div className="bg-red-400 h-[25px] "></div> */}
      </div>
    </div>
  );
};

export default Result;
