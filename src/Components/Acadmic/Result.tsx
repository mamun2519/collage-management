import React, { useState, useRef, useContext } from "react";
import { useForm } from "react-hook-form";
import { CgProfile } from "react-icons/cg";
import Loading from "../Shared/Loading";
import RasultRow from "./RasultRow";
import QRCode from "qrcode";
import { useReactToPrint } from "react-to-print";
import { ThemeContext } from "../../App";
const Result = () => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const [result, setresult] = useState<any>();
  const [disPlay, setDisplay] = useState(false);
  const [loading, isLoading] = useState(false);
  const [studentInfo, setStudentInfo] = useState<any>({});
  const componentRef: any = useRef();
  const [qr, setQr] = useState("");
  type UserSubmitForm = {
    classs: string;
    session: string;
    examName: string;
    roll: string;
  };
  const pdfDowenlodeHendeler: any = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "my-result",
    //  onAfterprint: ()=> alert("downlode")
  });
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<UserSubmitForm>();
  const onSubmit = (data: UserSubmitForm) => {
    isLoading(true);
    fetch(
      `http://localhost:5000/v1/student/result?session=${data?.session}&roll=${data?.roll}&examName=${data?.examName}&classs=${data?.classs}`
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          QRCode?.toDataURL(
            `
            Student Name: ${studentInfo?.name} ,
            Class Roll: ${studentInfo?.roll} ,
            Student Name: ${studentInfo?.name} ,
            class Name: ${studentInfo?.classs} ,
             Result Name: ${result?.resultType},
             Session : ${studentInfo?.session},
             Result : ${result?.Gpa},
            
            `,
            {
              color: {
                dark: "#335383FF",
                light: "#EEEEEEFF",
              },
            },
            (err, url) => {
              if (err) return console.error(err);

              setQr(url);
            }
          );
          setresult(result?.result[0]);
          setStudentInfo(result?.studentInfo);
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
    <>
      <div className="my-10 max-w-7xl m-auto px-3">
        <div className="my-10 max-w-7xl m-auto ">
          {loading ? (
            <Loading />
          ) : !disPlay ? (
            <div
              className={`card w-full mx-auto  border  shadow-lg  ${
                theme == "light"
                  ? "bg-base-100"
                  : "bg-[#242526] border-[#414343]"
              }`}
            >
              <div className="p-5 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className=" ">
                    <div className="pb-5">
                      <div className="w-max mx-auto">
                        <div
                          className={`border-b-[3px] rounded-full ${
                            theme == "light"
                              ? "border-[#2374e1] "
                              : "border-[#e4e6eb] text-[#e4e6eb]"
                          }`}
                        >
                          <h1 className="text-xl pb-2 text-center mt-10 px-12  font-medium uppercase">
                            Search Result
                          </h1>
                        </div>
                      </div>

                      <div className="mt-10 lg:px-5">
                        <div className="grid  lg:grid-cols-2 gap-10 col-span-1">
                          <div>
                            <p
                              className={` ${
                                theme == "light"
                                  ? "text-gray-800"
                                  : "text-[#e4e6eb]"
                              }`}
                            >
                              class Name
                            </p>
                            <div className="h-14 mt-2  relative">
                              <select
                                {...register("classs", {
                                  required: {
                                    value: true,
                                    message: "Gender is Required",
                                  },
                                })}
                                className={`h-12  border w-full rounded-full   focus:outline-emerald-100 px-20 ${
                                  theme == "light"
                                    ? "bg-white text-gray-700"
                                    : "bg-[#414343] text-[#e4e6eb] border-none"
                                }`}
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
                            <p
                              className={` ${
                                theme == "light"
                                  ? "text-gray-800"
                                  : "text-[#e4e6eb]"
                              }`}
                            >
                              Session
                            </p>
                            <div className="h-14 mt-2  relative">
                              <select
                                {...register("session", {
                                  required: {
                                    value: true,
                                    message: "session is Required",
                                  },
                                })}
                                className={`h-12  border w-full rounded-full   focus:outline-emerald-100 px-20 ${
                                  theme == "light"
                                    ? "bg-white text-gray-700"
                                    : "bg-[#414343] text-[#e4e6eb] border-none"
                                }`}
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
                      <div className="mt-8 lg:px-5">
                        <div className="grid  lg:grid-cols-2 gap-10 col-span-1">
                          <div>
                            <p
                              className={` ${
                                theme == "light"
                                  ? "text-gray-800"
                                  : "text-[#e4e6eb]"
                              }`}
                            >
                              Exam Name
                            </p>
                            <div className="h-14 mt-2  relative">
                              <select
                                {...register("examName", {
                                  required: {
                                    value: true,
                                    message: "exam Name is Required",
                                  },
                                })}
                                className={`h-12  border w-full rounded-full   focus:outline-emerald-100 px-20 ${
                                  theme == "light"
                                    ? "bg-white text-gray-700"
                                    : "bg-[#414343] text-[#e4e6eb] border-none"
                                }`}
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
                            <p
                              className={` ${
                                theme == "light"
                                  ? "text-gray-800"
                                  : "text-[#e4e6eb]"
                              }`}
                            >
                              Student Roll
                            </p>
                            <div className="h-14 mt-2  relative">
                              <input
                                {...register("roll", {
                                  required: {
                                    value: true,
                                    message: "Roll Required",
                                  },
                                })}
                                className={`h-12  border w-full rounded-full   focus:outline-emerald-100 px-20 ${
                                  theme == "light"
                                    ? "bg-white text-gray-700"
                                    : "bg-[#414343] text-[#e4e6eb] border-none"
                                }`}
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
                          className={` font-semibold text-white px-6 mt-2 rounded-lg py-2 ${
                            theme == "light" ? "bg-[#2374e1]" : "bg-[#414343]"
                          }`}
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
              {result ? (
                <>
                  <div
                    ref={componentRef}
                    className={`card lg:w-3/4 w-full mx-auto  border  shadow-lg  ${
                      theme == "light"
                        ? "bg-base-100"
                        : "bg-[#242526] text-[#e4e6eb] border-[#414343]"
                    }`}
                  >
                    <div className="p-5 ">
                      <p className="text-2xl font-medium  uppercase text-center">
                        Realwai public Collage,Chittagong
                      </p>
                      <p
                        className={`text-lg  font-sans  text-center ${
                          theme == "light" ? "text-gray-800 " : "text-[#e4e6eb]"
                        }`}
                      >
                        {studentInfo?.classs}
                      </p>
                      <p
                        className={`text-lg  font-sans  text-center ${
                          theme == "light" ? "text-gray-800 " : "text-[#e4e6eb]"
                        }`}
                      >
                        {result?.resultType} Results
                      </p>
                      <div>
                        <p
                          className={`text-lg  font-sans  text-center ${
                            theme == "light"
                              ? "text-gray-800 "
                              : "text-[#e4e6eb]"
                          }`}
                        >
                          Session ({studentInfo?.session})
                        </p>
                      </div>

                      <div className=" w-full lg:w-2/3 mx-auto mt-10 border px-8 py-2 rounded-lg">
                        <div>
                          <div className="flex justify-between">
                            <span>Name:</span>
                            <span
                              className={`text-lg  font-sans  text-center ${
                                theme == "light"
                                  ? "text-gray-800 "
                                  : "text-[#e4e6eb]"
                              }`}
                            >
                              {studentInfo?.name}
                            </span>
                          </div>

                          <div className=" flex justify-between mt-1">
                            <span>Gerdian Name:</span>
                            <span
                              className={`text-lg  font-sans  text-center ${
                                theme == "light"
                                  ? "text-gray-800 "
                                  : "text-[#e4e6eb]"
                              }`}
                            >
                              {studentInfo?.gerdianName}
                            </span>
                          </div>

                          <div className=" flex justify-between mt-1">
                            <span>Date Of Birth:</span>
                            <span
                              className={`text-lg  font-sans  text-center ${
                                theme == "light"
                                  ? "text-gray-800 "
                                  : "text-[#e4e6eb]"
                              }`}
                            >
                              {studentInfo?.birthday}
                            </span>
                          </div>
                          <div className=" flex justify-between mt-1">
                            <span>Class Roll:</span>
                            <span
                              className={`text-lg  font-sans  text-center ${
                                theme == "light"
                                  ? "text-gray-800 "
                                  : "text-[#e4e6eb]"
                              }`}
                            >
                              {studentInfo?.roll}
                            </span>
                          </div>
                          <div className=" flex justify-between mt-1">
                            <span>Result:</span>
                            <span className=" font-semibold text-red-500">
                              {result.Gpa > 1.0 ? "Pass" : "Fail"}
                            </span>
                          </div>
                          <div className=" flex justify-between mt-1">
                            <span>Point (GPA)</span>
                            <span
                              className={`text-lg  font-sans  text-center ${
                                theme == "light"
                                  ? "text-gray-800 "
                                  : "text-[#e4e6eb]"
                              }`}
                            >
                              {result.Gpa}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto mt-5">
                        <div className="inline-block min-w-full shadow rounded-lg  overflow-x-auto">
                          <table className="min-w-full leading-normal">
                            <thead>
                              <tr>
                                <th
                                  className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                                    theme == "light"
                                      ? "bg-gray-100 text-gray-600 border-gray-200"
                                      : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                                  }`}
                                >
                                  Subject
                                </th>
                                <th
                                  className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                                    theme == "light"
                                      ? "bg-gray-100 text-gray-600 border-gray-200"
                                      : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                                  }`}
                                >
                                  Total Number
                                </th>
                                <th
                                  className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                                    theme == "light"
                                      ? "bg-gray-100 text-gray-600 border-gray-200"
                                      : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                                  }`}
                                >
                                  latter Grade
                                </th>
                                <th
                                  className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                                    theme == "light"
                                      ? "bg-gray-100 text-gray-600 border-gray-200"
                                      : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                                  }`}
                                >
                                  Grade Point
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {result?.result?.map((result: any) => (
                                <RasultRow key={result._id} result={result} />
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between my-3 px-8">
                      <div></div>
                      <div className="text-center">
                        <p
                          className={` text-lg mt- font-semibold block px-10  ${
                            theme == "light"
                              ? "text-gray-900 "
                              : "text-[#e4e6eb]"
                          }`}
                        >
                          Principle Signature{" "}
                        </p>
                        <span
                          className={` text-sm mt- font-semibold block px-10  ${
                            theme == "light"
                              ? "text-gray-900 "
                              : "text-[#e4e6eb]"
                          }`}
                        >
                          Mohammad Mamun
                        </span>
                      </div>
                    </div>

                    <div className="my-5 flex justify-between items-center px-8">
                      <div>
                        <img className="h-[90px]" src={qr} alt="" />
                        <span className="text-sm mt-1  font-semibold block">
                          Result QR Code
                        </span>
                        <span
                          className={` text-sm mt- font-semibold block px-10  ${
                            theme == "light"
                              ? "text-gray-900 "
                              : "text-[#e4e6eb]"
                          }`}
                        >
                          Or
                        </span>
                        <button
                          onClick={pdfDowenlodeHendeler}
                          className={` font-semibold text-white px-4 rounded-lg py-1 ${
                            theme == "light" ? "bg-[#2374e1]" : "bg-[#414343]"
                          }`}
                        >
                          Print
                        </button>
                      </div>
                      <div></div>
                    </div>
                    {/* <div className="bg-red-400 h-[25px] "></div> */}
                  </div>
                  {/* <div className="my-10 lg:w-3/4 w-full mx-auto flex justify-center">
            <button onClick={pdfDowenlodeHendeler} className="bg-red-500 text-white px-8 py-1 rounded-lg">Print Now</button>
            </div> */}
                </>
              ) : (
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
                    <p className="text-gray-800"> Class result Not Found</p>
                    <p>Please Valied result information provide.</p>

                    <button
                      onClick={() => setDisplay(false)}
                      className="bg-[#2374e1] font-semibold text-white px-4 py-1 rounded-lg mt-2"
                    >
                      Back
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Result;
