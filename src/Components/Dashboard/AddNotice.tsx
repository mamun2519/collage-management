import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { BsStopwatch } from "react-icons/bs";
import { CgNotes, CgProfile } from "react-icons/cg";
import swal from "sweetalert";
interface Notices {
  title: number;
  description: string;
  date: string;
}
const AddNotice = () => {
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
    <div className="my-10 lg:w-3/4 w-full   mx-auto">
      <div className="  grid  lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-3">
        {notice.map((ad: any) => (
          <div
            onClick={() => admissionRequestHendeler(ad.title)}
            key={ad}
            className={`card  flex justify-center items-center   border h-44 lg:h-36 lg:w-80 shadow-md px-2 ${
              selected == ad.title ? "bg-red-500" : "bg-base-100"
            } `}
          >
            <div>
              <span
                className={`text-3xl  ${
                  selected == ad.title ? "text-white" : "text-red-500"
                }`}
              >
                <CgNotes />
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
              <p
                className={`font-semibold text-sm mt-1 text-center ${
                  selected == ad.title ? "text-white" : "text-black"
                }`}
              >
                (Notce)
              </p>
            </div>
          </div>
        ))}
      </div>

      {dataDispaly && (
        <div className="card  w-full  bg-base-100 border shadow-md my-20">
          <div className="p-5 h-full">
            <h1 className="font-medium  text-gray-800 uppercase text-lg">
              Add to {selected} Notice
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid  lg:grid-cols-2 grid-cols-1 gap-10 mt-10">
                <div className="mt-5">
                  <h1>Date</h1>
                  <div className="h-14 mt-2  relative">
                    <input
                      {...register("date", {
                        required: {
                          value: true,
                          message: "Date is Required",
                        },
                      })}
                      className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
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
                  <h1>Title</h1>
                  <div className="h-14 mt-2  relative">
                    <input
                      {...register("title", {
                        required: {
                          value: true,
                          message: "title is Required",
                        },
                      })}
                      className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
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
                <h1>Description</h1>
                <div className=" mt-2  relative">
                  <textarea
                    {...register("description", {
                      required: {
                        value: true,
                        message: "description is Required",
                      },
                    })}
                    className=" h-32 pt-2 text-xl border w-full  rounded-lg   focus:outline-emerald-100 px-20"
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
                  className="text-white bg-red-500 px-8 py-2 rounded-lg"
                  type="submit"
                  value="Notice Post"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNotice;
