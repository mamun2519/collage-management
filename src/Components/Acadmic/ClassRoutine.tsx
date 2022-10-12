import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { CgProfile } from "react-icons/cg";

import Loading from "../Shared/Loading";
import ClassRotuineRow from "./ClassRotuineRow";
import {useReactToPrint} from 'react-to-print'
const ClassRoutine = () => {
  const componentRef:any = useRef()
  const [routine, setRoutine] = useState<any>();
  const [disPlay, setDisplay] = useState(false);
  const [loading, isLoading] = useState(false);

  type UserSubmitForm = {
    classs: string;
    session: string;
    examName: string;
    roll: string;
    department: string;
    
  };
  const pdfDowenlodeHendeler:any = useReactToPrint({
    content:()=> componentRef.current,
   documentTitle: "class-Routine",
  //  onAfterprint: ()=> alert("downlode")
  })
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<UserSubmitForm>();
  const onSubmit = (data: UserSubmitForm) => {
    isLoading(true);

    fetch(
      `http://localhost:5000/v1/routine/department?classs=${data?.classs}&session=${data.session}`
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setRoutine(result.routine);
          setDisplay(true);
          isLoading(false);
        } else {
          setDisplay(true);
          isLoading(false);
        }
      });
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
  console.log(routine);
  return (
    <div className="my-10 max-w-7xl m-auto  px-3">
      {loading ? (
        <Loading />
      ) : !disPlay ? (
        <div className="card   w-full mx-auto bg-base-100 border  shadow-lg">
          <div className="p-5 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" ">
                <div className="pb-5">
                  <div className="w-max mx-auto">
                    <div className="border-b-[3px] rounded-full border-[#2374e1] ">
                      <h1 className="text-xl pb-2 text-center mt-10 px-6 lg:px-12  font-medium uppercase">
                        Search Class Routine
                      </h1>
                    </div>
                  </div>

                  <div className="mt-10 lg:px-5">
                    <div className="grid  lg:grid-cols-2 gap-10 col-span-1">
                      
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
                              <option value={depart.title}>
                                {depart.title}
                              </option>
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

                  <div className=" flex justify-center mt-5">
                    <input
                      className="bg-[#2374e1] font-medium text-white px-6 py-2 rounded-lg"
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
      ) : (
        <>
          {routine ? <>
            <div ref={componentRef} className="card lg:w-3/4 w-full mx-auto bg-base-100 border  shadow-lg">
              <div className="p-5 ">
                <p className="text-2xl font-medium  uppercase text-center">
                  Realwai public Collage,Chittagong
                </p>
                <p className="text-lg  font-sans text-gray-800 text-center">
                  {" "}
                  Education Board
                </p>
                <p className="text-lg font-sans text-gray-800 text-center">
                  {routine?.classs}
                </p>
                <div>
                  <p className="text-xl font-sans text-gray-800 text-center">
                    Class Routine
                  </p>
                </div>

                <div className=" flex justify-between mt-10 text-lg">
                  <div>
                    <span>Session:</span>
                    <span className="px-3">{routine?.session}</span>
                  </div>
                  <div>
                    <span>Date:</span>
                    <span className="px-3">04/22/2022</span>
                  </div>
                </div>

                {/* <p className="mt-2">
         এতদ্বারা সংশ্লিষ্ট সকলের অবগতির জন্য জানানো যাচ্ছে, ২০২০ সালের
         এক্সাম নেম পরীক্ষা নিম্নোক্ত সময়সূচি অনুযায়ী অনুষ্টিত হবে। বিশেষ
         প্রয়োজনে কলেজ কর্তৃপক্ষ এ সময়সূচি পরিবর্তন করতে পারবেন।
       </p> */}

                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                  <div className="inline-block min-w-full shadow rounded-lg  overflow-x-auto">
                    <table className="min-w-full leading-normal">
                      <thead>
                        <tr>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Day
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider ">
                            1st priode
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            2nd priode
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            3th priode
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            4th priode
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {routine?.classRoutine?.map((routine: any) => (
                          <ClassRotuineRow
                            key={routine._id}
                            routine={routine}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex justify-between my-5">
                    <div></div>
                    <div className="text-center">
                      <p>প্রফেসর মামুন ইসলাম </p>
                      <p>আহবায়ক </p>
                      <p>আন্তঃ শিক্ষা বোর্ড পরীক্ষা নিয়ন্ত্রণ কমেটি</p>
                      <p>ও পরিক্ষা নিয়ন্ত্রক শিক্ষা বোড</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="bg-red-400 h-[25px] "></div> */}
            </div>
            <div className="my-10 lg:w-3/4 w-full mx-auto flex justify-center">
            <button onClick={pdfDowenlodeHendeler} className="bg-[#2374e1] text-white px-8 py-1 rounded-lg font-medium">Print Now</button>
            </div>
           </>: (
            <div className="card lg:w-9/12 w-full mx-auto bg-base-100 border shadow-lg pb-5">
              <div className="flex justify-center ">
                <img
                  className="w-[350px]"
                  src="/assets/picture/notfoun.gif"
                  alt=""
                />
              </div>
              <div className="text-center px-4">
                <p className="  font-medium text-xl">Dear Student,</p>
                <p className="text-gray-800"> Class Routine Not Found</p>
                <p>Please Valied Routine information provide.</p>

                <button
                  onClick={() => setDisplay(false)}
                  className="bg-[#2374e1] font-medium text-white px-4 py-1 rounded-lg mt-2"
                >
                  Back
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ClassRoutine;
