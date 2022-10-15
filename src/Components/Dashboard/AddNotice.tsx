import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { BsStopwatch } from "react-icons/bs";
import { CgNotes, CgProfile } from "react-icons/cg";
import { ThemeContext } from "../../App";
import swal from "sweetalert";
import { MdKeyboardArrowRight } from "react-icons/md";
interface Notices {
  title: number;
  description: string;
  date: string;
}
const AddNotice = () => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const [selected, setSelected] = useState<any>(false);
  const [dataDispaly, SetDataDisplay] = useState(false);
  const notice = [
    { title: "Higer Secondary Admission" },
    { title: "Bachelor of Busniness Studies (BBS)" },
    { title: "Bachelor of Science (BSC)" },
    { title: "Bachelor of Arts (BA)" },
    { title: "Bachelor of Busniness Administraion (BBA)" },
    { title: "Graduate Admission (Master's)" },
  ];
  const admissionRequestHendeler = (admissionName: string): void => {
    const click = notice.filter((classs) => classs.title === admissionName);
    setSelected(click[0]?.title);
    SetDataDisplay(true);
  };
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<Notices>();

  const onSubmit = (data: Notices) => {
    const routine = {
      classs: selected,
      title: data?.title,
      date: data.date,
      description: data.description,
    };
    fetch(`http://localhost:5000/v1/notice`, {
      method: "POST",
      body: JSON.stringify(routine),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          swal({
            title: data.message,
            text: "Thank You",
            icon: "success",
            buttons: [false],
          });
        }
        reset();
      });
  };
  return (
    <>
    <div className="mt-10  w-full lg:w-3/4 mx-auto  grid grid-cols-1 lg:flex justify-between items-center">
    <h1 className="text-4xl  font-medium text-white up">
    {/* STUDENT ADMISSION LIST */}
    </h1>

    <div
      className={`flex py-2 gap-0 px-1 lg:px-8 lg:gap-5 rounded-lg  font-medium ${
        theme == "light"
          ? "bg-[#2374e1] text-white"
          : "bg-[#242526] text-[#e4e6eb]"
      }`}
    >
      <div className=" flex gap-2">
        {" "}
        <span className="px-0">Home </span>
        <span className="mt-1 text-xl text-white">
          <MdKeyboardArrowRight />
        </span>
      </div>
      <div className="flex gap-2">
        {" "}
        <span className="px-0">Dashboard</span>
        <span className="mt-1 text-xl text-white">
          <MdKeyboardArrowRight />
        </span>
      </div>

      <span className="text-white  font-medium">Add Notices</span>
    </div>
  </div>

    <div className="my-10 lg:w-3/4 w-full   mx-auto">
      <div className="  grid  lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-3">
        {notice.map((ad: any) => (
          <div
            onClick={() => admissionRequestHendeler(ad.title)}
            key={ad}
            className={`card  flex justify-center items-center   border h-40 lg:h-28 lg:w-80 w-full  shadow-md px-2 ${
              theme == "light"
                ? selected == ad.title
                  ? "bg-[#2374e1]"
                  : "bg-base-100"
                : selected == ad.title
                ? "bg-[#414343]"
                : "bg-[#242526] border-[#414343]"
            } `}
          >
            <div>
              <span
                className={`text-3xl  ${
                  theme == "light"
                    ? selected == ad.title
                      ? "text-white"
                      : "text-red-500"
                    : selected == ad.title
                    ? "text-white"
                    : "text-white"
                }`}
              >
                <CgNotes />
              </span>
            </div>
            <div>
              <p
                className={`font-semibold uppercase mt-1 text-center ${
                  theme == "light"
                    ? selected == ad.title
                      ? "text-white"
                      : "text-black"
                    : selected == ad.title
                    ? "text-white"
                    : "text-[#e4e6eb]"
                }`}
              >
                {ad.title}
              </p>
              {/* <p
                className={`font-semibold text-sm mt-1 text-center ${
                  selected == ad.title ? "text-white" : "text-black"
                }`}
              >
                (Notce)
              </p> */}
            </div>
          </div>
        ))}
      </div>

      {dataDispaly && (
        <div
          className={`card  lg:w-full w-[280px]  border  shadow-md my-20 ${
            theme == "light" ? "bg-base-100" : "bg-[#242526] border-[#414343]"
          }`}
        >
          <div className="p-5 h-full">
            <h1
              className={`font-medium   uppercase text-lg ${
                theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
              }`}
            >
              Add to {selected} Notice
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid  lg:grid-cols-2 grid-cols-1 gap-10 mt-10">
                <div className="mt-5">
                  <h1
                    className={` ${
                      theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
                    }`}
                  >
                    Date
                  </h1>
                  <div className="h-14 mt-2  relative">
                    <input
                      {...register("date", {
                        required: {
                          value: true,
                          message: "Date is Required",
                        },
                      })}
                      className={`h-12  border w-full rounded-full   focus:outline-emerald-100 px-20 ${
                        theme == "light"
                          ? "bg-white text-gray-700"
                          : "bg-[#414343] text-[#e4e6eb]"
                      }`}
                      placeholder="Enter Passing Year"
                      type="date"
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
                  <h1
                    className={` ${
                      theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
                    }`}
                  >
                    Title
                  </h1>
                  <div className="h-14 mt-2  relative">
                    <input
                      {...register("title", {
                        required: {
                          value: true,
                          message: "title is Required",
                        },
                      })}
                      className={`h-12  border w-full rounded-full   focus:outline-emerald-100 px-20 ${
                        theme == "light"
                          ? "bg-white text-gray-700"
                          : "bg-[#414343] text-[#e4e6eb]"
                      }`}
                      placeholder="Enter Title"
                      type="text"
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
                <h1
                  className={` ${
                    theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
                  }`}
                >
                  Description
                </h1>
                <div className=" mt-2  relative">
                  <textarea
                    {...register("description", {
                      required: {
                        value: true,
                        message: "description is Required",
                      },
                    })}
                    className={` h-32 pt-2 text-xl border w-full  rounded-lg   focus:outline-emerald-100 px-20 ${
                      theme == "light"
                        ? "bg-white text-gray-700"
                        : "bg-[#414343] text-[#e4e6eb]"
                    }`}
                    placeholder="Enter Description"
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

              <div className=" text-center">
                <input
                  className={` font-semibold text-white px-6 mt-2 rounded-lg py-2 ${
                    theme == "light" ? "bg-[#2374e1]" : "bg-[#414343]"
                  }`}
                  type="submit"
                  value="Notice Post"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default AddNotice;
