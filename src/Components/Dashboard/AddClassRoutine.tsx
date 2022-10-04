import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsStopwatch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

interface UserSubmitForm {
  passingAcademy: number;
  passingYear: string;
  admissionType: string;
  board: string;
  department: string;
  classs: string;
  session: string;
  admissionFee: string;
}
const AddClassRoutine = () => {
  const [selected, setSelected] = useState<any>(false);
  const [dataDispaly, SetDataDisplay] = useState(false);
  const admission = [
    { title: "Higer Secondary Admission" },
    { title: "Bachelor of Busniness Studies (BBS)" },
    { title: "Bachelor of Science (BSC)" },
    { title: "Bachelor of Arts (BA)" },
    { title: "Bachelor of Busniness Administraion (BBA)" },
    { title: "Graduate Admission (Master's)" },
  ];
  const section = [
    { title: "Select Section" },
    { title: "2017-2018" },
    { title: "2019-2020" },
    { title: "2021-2022" },
    { title: "2023-2024" },
  ];
  const admissionRequestHendeler = (admissionName: string): void => {
    const click = admission.filter((classs) => classs.title === admissionName);
    setSelected(click[0]?.title);
    SetDataDisplay(true);
  };
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<UserSubmitForm>();
  const onSubmit = (data: UserSubmitForm) => {};
  return (
    <div className="my-10 lg:w-3/4 w-full mx-auto">
      <div className="  grid  lg:grid-cols-3 grid-cols-2 gap-10">
        {admission.map((ad: any) => (
          <div
            onClick={() => admissionRequestHendeler(ad.title)}
            key={ad}
            className={`card  flex justify-center items-center   border h-28 lg:w-80 shadow-md px-2 ${
              selected == ad.title ? "bg-red-500" : "bg-base-100"
            } `}
          >
            <div>
              <span
                className={`text-3xl  ${
                  selected == ad.title ? "text-white" : "text-red-500"
                }`}
              >
                <BsStopwatch />
              </span>
            </div>
            <div>
              <p
                className={`font-semibold uppercase mt-1 text-center ${
                  selected == ad.title ? "text-white" : "text-black"
                }`}
              >
                {ad.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {dataDispaly && (
        <div className="card  w-full h-[400px] bg-base-100 border  shadow-md my-20">
          <div className="p-5 ">
            <h1 className="font-medium  text-gray-800 uppercase text-lg">
              Add to {selected} Class Routine
            </h1>

            <div className=" mt-10 grid grid-cols-2">
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
              <div></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddClassRoutine;
