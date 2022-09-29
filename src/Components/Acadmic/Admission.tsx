import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Admission = () => {
  const navigate = useNavigate();
  const [admission, setAdmission] = useState("");
  const [subjectList, setSubjectList] = useState("");
  type UserSubmitForm = {
    passingAcademy: number;
    passingYear: string;
    admissionType: string;
    board: string;
    department: string;
    class: string;
    session: string;
    admissionFee: string;
    
  };
  console.log(admission );

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
    { title: "Graduate Admission (Master's)" },
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
  const backHandeler = (): void => {
    setAdmission("");
  };

  useEffect(() => {
    setSubjectList("");
  }, [admission]);
  const onSubmit = (data: UserSubmitForm) => {
    if(subjectList === "Bachelor of Busniness Studies (BBS)"){
      const admissionInfo = {
        data, subject:bbsSubject
      }
      localStorage.setItem("admissionInfo" , JSON.stringify(admissionInfo))
      console.log(admissionInfo)
    }
    if(subjectList === "Bachelor of Science (BSC)"){
      const admissionInfo = {
        data, subject:bscSubject
      }
      localStorage.setItem("admissionInfo" , JSON.stringify(admissionInfo))
      console.log(admissionInfo)
    }
    if(subjectList === "Bachelor of Arts (BA)"){
      const admissionInfo = {
        data, subject:baSubject
      }
      console.log(admissionInfo)
      localStorage.setItem("admissionInfo" , JSON.stringify(admissionInfo))
    }
    navigate("/onlineAdmission/personalInfromation")
    
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="my-10 max-w-7xl m-auto px-3">
      <div className="card w-full bg-base-100 border pb-5">
        <div className="bg-red-500 h-16 flex items-center  justify-between px-8">
          <div>
            <span
              onClick={() => backHandeler()}
              className="bg-white text-black px-6 py-1  rounded-lg"
            >
              Back
            </span>
          </div>
          <div>
      
            <input className="bg-white text-black px-6 py-1  rounded-lg" type="submit" value=" Next" />
          </div>
        </div>

        <div className="p-5">
          <div className={admission ? " hidden" : ""}>
            <h1 className="text-xl">Admission Type</h1>
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
                    className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
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
                <div className="border-b-2 rounded-full border-red-500 ">
                  <h1 className="text-xl pb-2 text-center mt-10 px-12  font-medium uppercase">
                    {" "}
                    {admission}
                  </h1>
                </div>
              </div>
              {/* <h1 className=" uppercase">{admission}</h1> */}
              <div className="grid  lg:grid-cols-2 grid-cols-1 gap-10 mt-5">
                <div className="mt-5">
                  <h1>Board</h1>

                  <div className="h-14 mt-2  relative">
                    <select
                      {...register("board", {
                        required: {
                          value: true,
                          message: "Board is Required",
                        },
                      })}
                      className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
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
                  <h1>Department</h1>
                  <div className="h-14 mt-2  relative">
                    <select
                      {...register("department", {
                        required: {
                          value: true,
                          message: "Department is Required",
                        },
                      })}
                      className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
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
                  <h1>Class</h1>
                  {admission == "Higer Secondary Admission" && (
                    <>
                      {" "}
                      <div className="h-14 mt-2  relative">
                        <select
                          {...register("class", {
                            required: {
                              value: true,
                              message: "Class is Required",
                            },
                          })}
                          className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
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
                        {errors.class?.type === "required" && (
                          <span className="text-red-500 ">
                            {errors.class.message}
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
                          {...register("class", {
                            required: {
                              value: true,
                              message: "Class is Required",
                            },
                          })}
                          onChange={(e) => setSubjectList(e.target.value)}
                          className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
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
                        {errors.class?.type === "required" && (
                          <span className="text-red-500 ">
                            {errors.class.message}
                          </span>
                        )}
                      </label>
                    </>
                  )}

                  {admission === "Degree Private Admission" && (
                    <>
                      <div className="h-14 mt-2  relative">
                        <select
                          {...register("class", {
                            required: {
                              value: true,
                              message: "Class is Required",
                            },
                          })}
                          onChange={(e) => setSubjectList(e.target.value)}
                          className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
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
                        {errors.class?.type === "required" && (
                          <span className="text-red-500 ">
                            {errors.class.message}
                          </span>
                        )}
                      </label>
                    </>
                  )}

                  {admission === "Degree Admission" && (
                    <>
                      <div className="h-14 mt-2  relative">
                        <select
                          {...register("class", {
                            required: {
                              value: true,
                              message: "Class is Required",
                            },
                          })}
                          onChange={(e) => setSubjectList(e.target.value)}
                          className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
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
                        {errors.class?.type === "required" && (
                          <span className="text-red-500 ">
                            {errors.class.message}
                          </span>
                        )}
                      </label>
                    </>
                  )}
                </div>
                <div className="mt-5">
                  <h1>Session</h1>
                  <div className="h-14 mt-2  relative">
                    <select
                      {...register("session", {
                        required: {
                          value: true,
                          message: "Session is Required",
                        },
                      })}
                      className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
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
                  <h1>Last Passing Year</h1>
                  <div className="h-14 mt-2  relative">
                    <input
                      {...register("passingYear", {
                        required: {
                          value: true,
                          message: "Passing Year is Required",
                        },
                      })}
                      className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
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
                  <h1>Last Passing Academy Name</h1>
                  <div className="h-14 mt-2  relative">
                    <input
                      {...register("passingAcademy", {
                        required: {
                          value: true,
                          message: "passing Academy Name is Required",
                        },
                      })}
                      className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
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
              {admission === "Higer Secondary Admission" && <div className="mt-5">
                  <h1>Admission Fee</h1>

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
                      className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                      placeholder="Enter Your Name"
                      type='number'
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
                </div>}
              {admission === "Degree Admission" && <div className="mt-5">
                  <h1>Admission Fee</h1>

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
                      className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                      placeholder="Enter Your Name"
                      type='number'
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
                </div>}
              {admission === "Degree Private Admission" && <div className="mt-5">
                  <h1>Admission Fee</h1>

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
                      className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                      placeholder="Enter Your Name"
                      type='number'
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
                </div>}
              {admission === "Under graduate Admission (honours)" && <div className="mt-5">
                  <h1>Admission Fee</h1>

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
                      className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                      placeholder="Enter Your Name"
                      type='number'
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
                </div>}
              {admission === "Graduate Admission (Master's)" && <div className="mt-5">
                  <h1>Admission Fee</h1>

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
                      className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                      placeholder="Enter Your Name"
                      type='number'
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
                </div>}
              

              <div className="mt-6">
                {/* degree book list  */}
                {subjectList === "Bachelor of Busniness Studies (BBS)" && (
                  <>
                    <h1>Your First Year Subject List</h1>{" "}
                    <div className="flex gap-10 mt-2">
                      {bbsSubject.map((subject) => (
                        <div className="">
                          <span className="bg-red-400 px-6 rounded-full text-white outline-none border-none  p-1 flex items-center">
                            {subject.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {subjectList === "Bachelor of Science (BSC)" && (
                  <>
                    <h1>Your First Year Subject List</h1>{" "}
                    <div className="flex gap-10 mt-2">
                      {bscSubject.map((subject) => (
                        <div className="">
                          <span className="bg-red-400 px-6 rounded-full text-white outline-none border-none  p-1 flex items-center">
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
                    <div className="flex gap-10 mt-2">
                      {baSubject.map((subject) => (
                        <div className="">
                          <span className="bg-red-400 px-6 rounded-full text-white outline-none border-none  p-1 flex items-center">
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
  );
};

export default Admission;
