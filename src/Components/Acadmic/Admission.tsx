import React, { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { ThemeContext } from "../../App";
interface AdmissionStudent {
  student: string;
  verifay: string;
}
const Admission = () => {
  const [user] = useAuthState(auth);
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const navigate = useNavigate();
  const [admission, setAdmission] = useState("");
  const [subjectList, setSubjectList] = useState("");
  const [loading, isLoading] = useState(false);
  const [allReadyAdmissiom, setAllReadyAdmissiom] = useState<
    AdmissionStudent | any
  >();
  type UserSubmitForm = {
    passingAcademy: number;
    passingYear: string;
    admissionType: string;
    board: string;
    department: string;
    classs: string;
    session: string;
    admissionFee: string;
  };

  useEffect(() => {
    isLoading(true);
    if (user?.email) {
      fetch(
        `https://collage-management-backend.vercel.app/v1/student/chackadmission?email=${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setAllReadyAdmissiom(data?.student);
            isLoading(false);
          } else {
            isLoading(false);
          }
        });
    }
  }, []);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<UserSubmitForm>();
  const admissions = [
    { title: "Select Admission Type" },
    { title: "Higer Secondary Admission" },
    { title: "Degree Admission" },
    { title: "Degree Private Admission" },
    { title: "Under graduate Admission (honours)" },
    // { title: "Graduate Admission (Master's)" },
  ];
  const board = [
    { title: "  Select Board" },
    { title: "  Dhaka Board" },
    { title: "  Rajshashi Board" },
    { title: "  Dinajpur Board" },
    { title: " Jossore Board" },
    { title: "  Borishal Board" },
    { title: "  Comilla Board" },
  ];
  const degree = [
    { title: "Select Class" },
    { title: "Bachelor of Busniness Studies (BBS)" },
    { title: "Bachelor of Science (BSC)" },
    { title: "Bachelor of Arts (BA)" },
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

  const bbsSubject = [
    { title: "Accounting" },
    { title: "Management" },
    { title: "Finance & Banking" },
    { title: "Marketing" },
    { title: "Economics" },
  ];
  const bscSubject = [
    { title: "Physics" },
    { title: "Math" },
    { title: "Botany" },
    { title: "Zoology" },
    { title: "Chemistry" },
    { title: "Statistics" },
  ];
  const baSubject = [
    { title: "Economics" },
    { title: "Political Science" },
    { title: "Sociology" },
    { title: "Social Work" },
    { title: "History" },
    { title: "Philosophy" },
    { title: "Psychology" },
  ];
  const hscSubject = [
    { title: "Bangla" },
    { title: "English" },
    { title: "Math" },
    { title: "Scaince" },
    { title: "Islam" },
  ];
  const masterSubject = [{ title: "Accounting" }];

  const backHandeler = (): void => {
    setAdmission("");
  };

  useEffect(() => {
    setSubjectList("");
  }, [admission]);
  const onSubmit = (data: UserSubmitForm) => {
    if (subjectList === "Bachelor of Busniness Studies (BBS)") {
      const admissionInfo = {
        data,
        subject: bbsSubject,
      };
      localStorage.setItem("admissionInfo", JSON.stringify(admissionInfo));
      console.log(admissionInfo);
    }
    if (subjectList === "Bachelor of Science (BSC)") {
      const admissionInfo = {
        data,
        subject: bscSubject,
      };
      localStorage.setItem("admissionInfo", JSON.stringify(admissionInfo));
      console.log(admissionInfo);
    }
    if (subjectList === "Bachelor of Arts (BA)") {
      const admissionInfo = {
        data,
        subject: baSubject,
      };
      console.log(admissionInfo);
      localStorage.setItem("admissionInfo", JSON.stringify(admissionInfo));
    }
    navigate("/onlineAdmission/personalInfromation");
  };
  console.log(allReadyAdmissiom);
  return (
    <>
      {loading ? (
        <Loading />
      ) : allReadyAdmissiom ? (
        <div className="my-10 max-w-7xl m-auto px-3">
          {allReadyAdmissiom?.verifay ? (
            <>
              <div className="card lg:w-9/12 w-full mx-auto bg-base-100 border pb-5">
                <div className="flex justify-center ">
                  <img
                    className="w-[350px]"
                    src="/assets/picture/stoudentId.gif"
                    alt=""
                  />
                </div>
                <div className="text-center px-4">
                  <p className="  font-medium text-xl">Dear Student,</p>
                  <p className="text-gray-900">
                    {" "}
                    Collage Authority Your Roll Number Provide.
                  </p>
                  <p>
                    Now Your Roll Is{" "}
                    <span className=" font-semibold">
                      {allReadyAdmissiom?.roll}
                    </span>
                  </p>

                  <button
                    onClick={() => navigate("/studentId")}
                    className="bg-[#166364] text-white px-4 py-1 rounded-lg my-2 uppercase font-semibold"
                  >
                    Check Student Id
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="card lg:w-9/12 w-full mx-auto bg-base-100 border pb-5">
              <div className="flex justify-center ">
                <img
                  className="w-[350px]"
                  src="/assets/picture/studentwaitw.gif"
                  alt=""
                />
              </div>
              <div className="text-center px-4">
                <p className="  font-medium text-xl">Dear Student,</p>
                <p className="text-gray-800">
                  {" "}
                  You have already admission. Collage authority check your
                  identity and enter your roll number.
                </p>
                <p>Please Wait 72 hours.</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-10 max-w-7xl m-auto px-3">
            <div
              className={`card w-full  border pb-5  ${
                theme == "light"
                  ? "bg-base-100"
                  : "bg-[#242526]  border-[#414343]"
              }`}
            >
              <div
                className={` h-16 flex items-center  justify-between px-8 ${
                  theme == "light" ? "bg-[#166364]" : "bg-[#414343]"
                }`}
              >
                <div>
                  <span
                    onClick={() => backHandeler()}
                    className="bg-[#23395b] text-white px-6 py-1  rounded-lg"
                  >
                    Back
                  </span>
                </div>
                <div>
                  <input
                    className="bg-[#23395b] text-white px-6 py-1  rounded-lg"
                    type="submit"
                    value=" Next"
                  />
                </div>
              </div>

              <div className="p-5">
                <div className={admission ? " hidden" : ""}>
                  <h1
                    className={`text-xl ${
                      theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
                    }`}
                  >
                    Admission Type
                  </h1>
                  <div className="grid  lg:grid-cols-2 gap-10 col-span-1">
                    <div>
                      {" "}
                      <div className="h-14 mt-2  relative">
                        <select
                          {...register("admissionType", {
                            required: {
                              value: true,
                              message: "Admission Type is Required",
                            },
                          })}
                          className="h-12  border w-full rounded-full   focus:outline-emerald-100 pl-20 pr-2"
                          placeholder="Enter Your Name"
                          onChange={(e) => setAdmission(e.target.value)}
                        >
                          {admissions.map((ad) => (
                            <option value={ad.title}>{ad.title}</option>
                          ))}
                        </select>

                        <div className=" px-1 ">
                          <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                        </div>
                      </div>
                      <label className="">
                        {errors.admissionType?.type === "required" && (
                          <span className="text-red-500 ">
                            {errors.admissionType.message}
                          </span>
                        )}
                      </label>
                    </div>
                    <div></div>
                  </div>
                </div>
                {admission ? (
                  <div className="mt-5">
                    <div className="w-max mx-auto">
                      <div
                        className={`border-b-[3px] rounded-full ${
                          theme == "light"
                            ? "border-[#2374e1] "
                            : "border-[#e4e6eb] text-[#e4e6eb]"
                        }`}
                      >
                        <h1 className="lg:text-xl pb-2 text-center mt-10 px-4 lg:px-12  font-medium uppercase">
                          {" "}
                          {admission}
                        </h1>
                      </div>
                    </div>
                    {/* <h1 className=" uppercase">{admission}</h1> */}
                    <div className="grid  lg:grid-cols-2 grid-cols-1 gap-10 mt-5">
                      <div className="mt-5">
                        <h1
                          className={` ${
                            theme == "light"
                              ? "text-gray-800"
                              : "text-[#e4e6eb]"
                          }`}
                        >
                          Board
                        </h1>

                        <div className="h-14 mt-2  relative">
                          <select
                            {...register("board", {
                              required: {
                                value: true,
                                message: "Board is Required",
                              },
                            })}
                            className="h-12  border w-full rounded-full   focus:outline-emerald-100 pl-20 pr-2"
                            placeholder="Enter Your Name"
                          >
                            {board.map((bor) => (
                              <option value={bor.title}>{bor.title}</option>
                            ))}
                          </select>

                          <div className=" px-1 ">
                            <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                          </div>
                        </div>
                        <label className="">
                          {errors.board?.type === "required" && (
                            <span className="text-red-500 ">
                              {errors.board.message}
                            </span>
                          )}
                        </label>
                      </div>
                      <div className="mt-5">
                        <h1
                          className={` ${
                            theme == "light"
                              ? "text-gray-800"
                              : "text-[#e4e6eb]"
                          }`}
                        >
                          Department
                        </h1>
                        <div className="h-14 mt-2  relative">
                          <select
                            {...register("department", {
                              required: {
                                value: true,
                                message: "Department is Required",
                              },
                            })}
                            className="h-12  border w-full rounded-full   focus:outline-emerald-100 pl-20 pr-2"
                            placeholder="Enter Your Name"
                          >
                            {department.map((depart) => (
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
                          {errors.department?.type === "required" && (
                            <span className="text-red-500 ">
                              {errors.department.message}
                            </span>
                          )}
                        </label>
                      </div>
                    </div>
                    <div className="grid  lg:grid-cols-2 grid-cols-1  gap-10">
                      <div className="mt-5">
                        <h1
                          className={` ${
                            theme == "light"
                              ? "text-gray-800"
                              : "text-[#e4e6eb]"
                          }`}
                        >
                          Class
                        </h1>
                        {admission == "Higer Secondary Admission" && (
                          <>
                            {" "}
                            <div className="h-14 mt-2  relative">
                              <select
                                {...register("classs", {
                                  required: {
                                    value: true,
                                    message: "Class is Required",
                                  },
                                })}
                                className="h-12  border w-full rounded-full   focus:outline-emerald-100 pl-20 pr-2"
                                placeholder="Enter Your Name"
                                onChange={(e) => setSubjectList(e.target.value)}
                              >
                                <option value="">Select Class</option>
                                <option value="Higer Secondary Admission(hsc)">
                                  Higer Secondary Admission(HSC)
                                </option>
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
                          </>
                        )}
                        {admission == "Under graduate Admission (honours)" && (
                          <>
                            {" "}
                            <div className="h-14 mt-2  relative">
                              <select
                                {...register("classs", {
                                  required: {
                                    value: true,
                                    message: "Class is Required",
                                  },
                                })}
                                onChange={(e) => setSubjectList(e.target.value)}
                                className="h-12  border w-full rounded-full   focus:outline-emerald-100 pl-20 pr-2"
                                placeholder="Enter Your Name"
                              >
                                <option value="">Select Class</option>
                                <option value="Bachelor of Busniness Administraion(BBA)">
                                  Bachelor of Busniness Administraion(BBA)
                                </option>
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
                          </>
                        )}

                        {admission === "Degree Private Admission" && (
                          <>
                            <div className="h-14 mt-2  relative">
                              <select
                                {...register("classs", {
                                  required: {
                                    value: true,
                                    message: "Class is Required",
                                  },
                                })}
                                onChange={(e) => setSubjectList(e.target.value)}
                                className="h-12  border w-full rounded-full   focus:outline-emerald-100 pl-20 pr-2"
                                placeholder="Enter Your Name"
                              >
                                {degree.map((deg) => (
                                  <option value={deg.title}>{deg.title}</option>
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
                          </>
                        )}

                        {admission === "Degree Admission" && (
                          <>
                            <div className="h-14 mt-2  relative">
                              <select
                                {...register("classs", {
                                  required: {
                                    value: true,
                                    message: "Class is Required",
                                  },
                                })}
                                onChange={(e) => setSubjectList(e.target.value)}
                                className="h-12  border w-full rounded-full   focus:outline-emerald-100 pl-20 pr-2"
                                placeholder="Enter Your Name"
                              >
                                {degree.map((deg) => (
                                  <option value={deg.title}>{deg.title}</option>
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
                          </>
                        )}
                      </div>
                      <div className="mt-5">
                        <h1
                          className={` ${
                            theme == "light"
                              ? "text-gray-800"
                              : "text-[#e4e6eb]"
                          }`}
                        >
                          Session
                        </h1>
                        <div className="h-14 mt-2  relative">
                          <select
                            {...register("session", {
                              required: {
                                value: true,
                                message: "Session is Required",
                              },
                            })}
                            className="h-12  border w-full rounded-full   focus:outline-emerald-100 pl-20 pr-2"
                            placeholder="Enter Your Name"
                          >
                            {section.map((sec) => (
                              <option value={sec.title}>{sec.title}</option>
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
                    <div className="grid  lg:grid-cols-2 grid-cols-1 gap-10">
                      <div className="mt-5">
                        <h1
                          className={` ${
                            theme == "light"
                              ? "text-gray-800"
                              : "text-[#e4e6eb]"
                          }`}
                        >
                          Last Passing Year
                        </h1>
                        <div className="h-14 mt-2  relative">
                          <input
                            {...register("passingYear", {
                              required: {
                                value: true,
                                message: "Passing Year is Required",
                              },
                            })}
                            className="h-12  border w-full rounded-full   focus:outline-emerald-100 pl-20 pr-2"
                            placeholder="Enter Passing Year"
                            type="number"
                          />

                          <div className=" px-1 ">
                            <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                          </div>
                        </div>
                        <label className="">
                          {errors.passingYear?.type === "required" && (
                            <span className="text-red-500 ">
                              {errors.passingYear.message}
                            </span>
                          )}
                        </label>
                      </div>
                      <div className="mt-5">
                        <h1
                          className={` ${
                            theme == "light"
                              ? "text-gray-800"
                              : "text-[#e4e6eb]"
                          }`}
                        >
                          Last Passing Academy Name
                        </h1>
                        <div className="h-14 mt-2  relative">
                          <input
                            {...register("passingAcademy", {
                              required: {
                                value: true,
                                message: "passing Academy Name is Required",
                              },
                            })}
                            className="h-12  border w-full rounded-full   focus:outline-emerald-100 pl-20 pr-2"
                            placeholder="Last Passing Academy Name"
                            type="text"
                          />
                          <div className=" px-1 ">
                            <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                          </div>
                        </div>
                        <label className="">
                          {errors.passingAcademy?.type === "required" && (
                            <span className="text-red-500 ">
                              {errors.passingAcademy.message}
                            </span>
                          )}
                        </label>
                      </div>
                    </div>
                    {/* degree admission fre  */}
                    {admission === "Higer Secondary Admission" && (
                      <div className="mt-5">
                        <h1
                          className={` ${
                            theme == "light"
                              ? "text-gray-800"
                              : "text-[#e4e6eb]"
                          }`}
                        >
                          Admission Fee
                        </h1>

                        <div className="h-14 mt-2  relative">
                          <input
                            {...register("admissionFee", {
                              required: {
                                value: true,
                                message: "Board is Required",
                              },
                            })}
                            value={3100}
                            readOnly
                            className="h-12  border w-full rounded-full   focus:outline-emerald-100 pl-20 pr-2"
                            placeholder="Enter Your Name"
                            type="number"
                          />

                          <div className=" px-1 ">
                            <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                          </div>
                        </div>
                        <label className="">
                          {errors.admissionFee?.type === "required" && (
                            <span className="text-red-500 ">
                              {errors.admissionFee.message}
                            </span>
                          )}
                        </label>
                      </div>
                    )}
                    {admission === "Degree Admission" && (
                      <div className="mt-5">
                        <h1
                          className={` ${
                            theme == "light"
                              ? "text-gray-800"
                              : "text-[#e4e6eb]"
                          }`}
                        >
                          Admission Fee
                        </h1>

                        <div className="h-14 mt-2  relative">
                          <input
                            {...register("admissionFee", {
                              required: {
                                value: true,
                                message: "Board is Required",
                              },
                            })}
                            value={3900}
                            readOnly
                            className="h-12  border w-full rounded-full   focus:outline-emerald-100 pl-20 pr-2"
                            placeholder="Enter Your Name"
                            type="number"
                          />

                          <div className=" px-1 ">
                            <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                          </div>
                        </div>
                        <label className="">
                          {errors.admissionFee?.type === "required" && (
                            <span className="text-red-500 ">
                              {errors.admissionFee.message}
                            </span>
                          )}
                        </label>
                      </div>
                    )}
                    {admission === "Degree Private Admission" && (
                      <div className="mt-5">
                        <h1
                          className={` ${
                            theme == "light"
                              ? "text-gray-800"
                              : "text-[#e4e6eb]"
                          }`}
                        >
                          Admission Fee
                        </h1>

                        <div className="h-14 mt-2  relative">
                          <input
                            {...register("admissionFee", {
                              required: {
                                value: true,
                                message: "Board is Required",
                              },
                            })}
                            value={5700}
                            readOnly
                            className="h-12  border w-full rounded-full   focus:outline-emerald-100 pl-20 pr-2"
                            placeholder="Enter Your Name"
                            type="number"
                          />

                          <div className=" px-1 ">
                            <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                          </div>
                        </div>
                        <label className="">
                          {errors.admissionFee?.type === "required" && (
                            <span className="text-red-500 ">
                              {errors.admissionFee.message}
                            </span>
                          )}
                        </label>
                      </div>
                    )}
                    {admission === "Under graduate Admission (honours)" && (
                      <div className="mt-5">
                        <h1
                          className={` ${
                            theme == "light"
                              ? "text-gray-800"
                              : "text-[#e4e6eb]"
                          }`}
                        >
                          Admission Fee
                        </h1>

                        <div className="h-14 mt-2  relative">
                          <input
                            {...register("admissionFee", {
                              required: {
                                value: true,
                                message: "Board is Required",
                              },
                            })}
                            value={4800}
                            readOnly
                            className="h-12  border w-full rounded-full   focus:outline-emerald-100 pl-20 pr-2"
                            placeholder="Enter Your Name"
                            type="number"
                          />

                          <div className=" px-1 ">
                            <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                          </div>
                        </div>
                        <label className="">
                          {errors.admissionFee?.type === "required" && (
                            <span className="text-red-500 ">
                              {errors.admissionFee.message}
                            </span>
                          )}
                        </label>
                      </div>
                    )}
                    {admission === "Graduate Admission (Master's)" && (
                      <div className="mt-5">
                        <h1
                          className={` ${
                            theme == "light"
                              ? "text-gray-800"
                              : "text-[#e4e6eb]"
                          }`}
                        >
                          Admission Fee
                        </h1>

                        <div className="h-14 mt-2  relative">
                          <input
                            {...register("admissionFee", {
                              required: {
                                value: true,
                                message: "Board is Required",
                              },
                            })}
                            value={8900}
                            readOnly
                            className="h-12  border w-full rounded-full   focus:outline-emerald-100 pl-20 pr-2"
                            placeholder="Enter Your Name"
                            type="number"
                          />

                          <div className=" px-1 ">
                            <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                          </div>
                        </div>
                        <label className="">
                          {errors.admissionFee?.type === "required" && (
                            <span className="text-red-500 ">
                              {errors.admissionFee.message}
                            </span>
                          )}
                        </label>
                      </div>
                    )}

                    <div className="mt-6">
                      {/* degree book list  */}
                      {subjectList ===
                        "Bachelor of Busniness Administraion(BBA)" && (
                        <>
                          <h1>Your First Year Subject List</h1>{" "}
                          <div className="lg:flex grid grid-cols-1 lg:gap-10 gap-3 mt-2">
                            {masterSubject?.map((subject) => (
                              <div className="">
                                <span className="bg-[#166364] px-6 rounded-full text-white outline-none border-none  p-1 flex items-center">
                                  {subject.title}
                                </span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                      {subjectList === "Higer Secondary Admission(hsc)" && (
                        <>
                          <h1>Your First Year Subject List</h1>{" "}
                          <div className="lg:flex grid grid-cols-1 lg:gap-10 gap-3 mt-2">
                            {hscSubject?.map((subject) => (
                              <div className="">
                                <span className="bg-[#166364] px-6 rounded-full text-white outline-none border-none  p-1 flex items-center">
                                  {subject.title}
                                </span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                      {subjectList ===
                        "Bachelor of Busniness Studies (BBS)" && (
                        <>
                          <h1>Your First Year Subject List</h1>{" "}
                          <div className="lg:flex grid grid-cols-1 lg:gap-10 gap-3 mt-2">
                            {bbsSubject.map((subject) => (
                              <div className="">
                                <span className="bg-[#166364] px-6 rounded-full text-white outline-none border-none  p-1 flex items-center">
                                  {subject.title}
                                </span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                      {subjectList === "Bachelor of Science (BSC)" && (
                        <>
                          <h1
                            className={` ${
                              theme == "light"
                                ? "text-gray-800"
                                : "text-[#e4e6eb]"
                            }`}
                          >
                            Your First Year Subject List
                          </h1>{" "}
                          <div className="lg:flex grid grid-cols-1 lg:gap-10 gap-3 mt-2">
                            {bscSubject.map((subject) => (
                              <div className="">
                                <span className="bg-[#166364] px-6 rounded-full text-white outline-none border-none  p-1 flex items-center">
                                  {subject.title}
                                </span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                      {subjectList === "Bachelor of Arts (BA)" && (
                        <>
                          <h1>Your First Year Subject List</h1>{" "}
                          <div className="lg:flex grid grid-cols-1 lg:gap-10 gap-3 mt-2">
                            {baSubject.map((subject) => (
                              <div className="">
                                <span className="bg-[#166364] px-6 rounded-full text-white outline-none border-none  p-1 flex items-center">
                                  {subject.title}
                                </span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default Admission;
