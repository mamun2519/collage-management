import axios from "axios";
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { CgProfile } from "react-icons/cg";
import { MdAddPhotoAlternate } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { ThemeContext } from "../../App";
import swal from "sweetalert";
interface Events {
  evenType: string;
  title: string;
  description: string;
  images: string;
}
const AddEvents = () => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const [picture, setPicture] = useState<any>("");

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<Events>();

  const onSubmit = async (data: Events) => {
    const myForm: any = new FormData();

    myForm.append("evenType", data.evenType);
    myForm.append("title", data.title);
    myForm.append("description", data.description);
    myForm.append("images", picture);
    console.log(myForm);
    await axios({
      method: "POST",
      url: "http://localhost:5000/v1/event",
      data: myForm,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        if (res?.data?.success) {
          swal({
            title: res.data.message,
            text: "Thank You",
            icon: "success",
            //   buttons: [false],
          });
        }
        reset();
        setPicture("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const teacherPictureHendeler = (e: any): void => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPicture(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <div
      className={`card  lg:w-3/4 mx-auto w-[280px]  border  shadow-md my-20 ${
        theme == "light" ? "bg-base-100" : "bg-[#242526] border-[#414343]"
      }`}
    >
      <div className="p-5 h-full">
        <h1
          className={`font-medium   uppercase text-lg ${
            theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
          }`}
        >
          Add Collage Event
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" mt-20 flex justify-center">
            <>
              <input
                {...register("images", {
                  required: {
                    value: true,
                    message: "images is Required",
                  },
                })}
                onChange={(e) => teacherPictureHendeler(e)}
                type="file"
                name="image-uplode"
                id="product-img"
                hidden
                placeholder="Enter seller name"
              />
              <label htmlFor={"product-img"} className=" ">
                <div>
                  {!picture && (
                    <div className="h-32 lg:w-44 w-52 border rounded-lg flex justify-center  items-center">
                      <div className=" ">
                        <span className="text-6xl text-[#EC255A]">
                          <MdAddPhotoAlternate />
                        </span>
                      </div>
                    </div>
                  )}
                  {picture && (
                    <div className="h-32 w-44 border rounded-md flex justify-center  items-center">
                      <div className="h-32 w-44 relative">
                        <img
                          className="h-32 w-44 p-1 rounded-lg"
                          src={picture}
                          alt="productPicure"
                        />
                        <span
                          onClick={() => setPicture("")}
                          className=" absolute text-2xl top-[5px] text-red-500 right-[5px] cursor-pointer"
                        >
                          <TiDelete />
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <label className="label">
                  {errors.images?.type === "required" && (
                    <span className="text-red-500">
                      {errors.images.message}
                    </span>
                  )}
                </label>
              </label>
            </>
          </div>
          <div className="grid  lg:grid-cols-2 grid-cols-1 gap-10 m">
            <div className="mt-5">
              <h1
                className={` ${
                  theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
                }`}
              >
                Event Type
              </h1>
              <div className="h-14 mt-2  relative">
                <select
                  {...register("evenType", {
                    required: {
                      value: true,
                      message: "name is Required",
                    },
                  })}
                  className={`h-12  border w-full rounded-full   focus:outline-emerald-100 px-20 ${
                    theme == "light"
                      ? "bg-white text-gray-700"
                      : "bg-[#414343] text-[#e4e6eb] outline-none"
                  }`}
                  placeholder="Enter Event Type"
                >
                  <option value="Select Event Type">Select Event Type</option>
                  <option value="National Day">National Day</option>
                  <option value="Instutional Day">Instutional Day</option>
                </select>
                <div className=" px-1 ">
                  <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                </div>
              </div>
              <label className="">
                {errors.evenType?.type === "required" && (
                  <span className="text-red-500 ">
                    {errors.evenType.message}
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
                      message: "Title is Required",
                    },
                  })}
                  className={`h-12  border w-full rounded-full   focus:outline-emerald-100 px-20 ${
                    theme == "light"
                      ? "bg-white text-gray-700"
                      : "bg-[#414343] text-[#e4e6eb] outline-none"
                  }`}
                  placeholder="Enter title"
                  type="text"
                />
                <div className=" px-1 ">
                  <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                </div>
              </div>
              <label className="">
                {errors.title?.type === "required" && (
                  <span className="text-red-500 ">{errors.title.message}</span>
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
              value="Events Post"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvents;
