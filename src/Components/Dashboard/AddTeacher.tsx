import axios from "axios";
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { CgNotes, CgProfile } from "react-icons/cg";
import { GiTeacher } from "react-icons/gi";
import { MdAddPhotoAlternate, MdKeyboardArrowRight } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import swal from "sweetalert";
import { ThemeContext } from "../../App";
interface Notices {
  name: string;
  classs: string;
  email: string;
  number: string;
  educationalQualification: string;
  collageRole: string;
  facebooId: string;
  linkedinId: string;
  images: string;
}

const AddTeacher = () => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const [selected, setSelected] = useState<any>(false);
  const [dataDispaly, SetDataDisplay] = useState(false);
  const [picture, setPicture] = useState<any>("");
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

  const onSubmit = async (data: Notices) => {
    const myForm: any = new FormData();
    myForm.append("name", data.name);
    myForm.append("classs", selected);
    myForm.append("email", data.email);
    myForm.append("number", data.number);
    myForm.append("educationalQualification", data.educationalQualification);
    myForm.append("collageRole", data.collageRole);
    myForm.append("facebooId", data.facebooId);
    myForm.append("linkedinId", data.linkedinId);
    myForm.append("images", picture);
    console.log(myForm);
    await axios({
      method: "POST",
      url: "http://localhost:5000/v1/teacher/add",
      data: myForm,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        if (res?.data?.success) {
          swal({
            title: res.data.message,
            text: "Thank You",
            icon: "success",
            buttons: [false],
          });
        }
        reset();
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
  console.log(picture);
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

      <span className="text-white  font-medium">Add Teacher</span>
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
                <GiTeacher />
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
                (Teacher)
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
              Add to {selected} Teacher
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
                    //   class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
              <div className="grid  lg:grid-cols-3 grid-cols-1 gap-10 m">
                <div className="lg:mt-5 mt-0">
                  <h1
                    className={` ${
                      theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
                    }`}
                  >
                    Teacher Name
                  </h1>
                  <div className="h-14 lg:mt-2  relative">
                    <input
                      {...register("name", {
                        required: {
                          value: true,
                          message: "name is Required",
                        },
                      })}
                      className={`h-12  border w-full rounded-full   focus:outline-emerald-100 px-20 ${
                        theme == "light"
                          ? "bg-white text-gray-700"
                          : "bg-[#414343] text-[#e4e6eb]"
                      }`}
                      placeholder="Enter Name"
                      type="text"
                    />
                    <div className=" px-1 ">
                      <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                    </div>
                  </div>
                  <label className="">
                    {errors.name?.type === "required" && (
                      <span className="text-red-500 ">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="lg:mt-5 mt-0">
                  <h1
                    className={` ${
                      theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
                    }`}
                  >
                    Email
                  </h1>
                  <div className="h-14 lg:mt-2  relative">
                    <input
                      {...register("email", {
                        required: {
                          value: true,
                          message: "email is Required",
                        },
                      })}
                      className={`h-12  border w-full rounded-full   focus:outline-emerald-100 px-20 ${
                        theme == "light"
                          ? "bg-white text-gray-700"
                          : "bg-[#414343] text-[#e4e6eb]"
                      }`}
                      placeholder="Enter Email"
                      type="text"
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
                <div className="mt-5">
                  <h1
                    className={` ${
                      theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
                    }`}
                  >
                    Number
                  </h1>
                  <div className="h-14 mt-2  relative">
                    <input
                      {...register("number", {
                        required: {
                          value: true,
                          message: "Number is Required",
                        },
                      })}
                      className={`h-12  border w-full rounded-full   focus:outline-emerald-100 px-20 ${
                        theme == "light"
                          ? "bg-white text-gray-700"
                          : "bg-[#414343] text-[#e4e6eb]"
                      }`}
                      placeholder="Enter Number"
                      type="text"
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
              </div>
              <div className="grid  lg:grid-cols-3 grid-cols-1 gap-10 mt-5">
                <div className="mt-5">
                  <h1
                    className={` ${
                      theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
                    }`}
                  >
                    Educational Qualification
                  </h1>
                  <div className="h-14 mt-2  relative">
                    <input
                      {...register("educationalQualification", {
                        required: {
                          value: true,
                          message: "Educational Qualification is Required",
                        },
                      })}
                      className={`h-12  border w-full rounded-full   focus:outline-emerald-100 px-20 ${
                        theme == "light"
                          ? "bg-white text-gray-700"
                          : "bg-[#414343] text-[#e4e6eb]"
                      }`}
                      placeholder="Enter Name"
                      type="text"
                    />
                    <div className=" px-1 ">
                      <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                    </div>
                  </div>
                  <label className="">
                    {errors.educationalQualification?.type === "required" && (
                      <span className="text-red-500 ">
                        {errors.educationalQualification.message}
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
                    collage Role
                  </h1>
                  <div className="h-14 mt-2  relative">
                    <input
                      {...register("collageRole", {
                        required: {
                          value: true,
                          message: "collageRole is Required",
                        },
                      })}
                      className={`h-12  border w-full rounded-full   focus:outline-emerald-100 px-20 ${
                        theme == "light"
                          ? "bg-white text-gray-700"
                          : "bg-[#414343] text-[#e4e6eb]"
                      }`}
                      placeholder="Enter Collage Role"
                      type="text"
                    />
                    <div className=" px-1 ">
                      <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                    </div>
                  </div>
                  <label className="">
                    {errors.collageRole?.type === "required" && (
                      <span className="text-red-500 ">
                        {errors.collageRole.message}
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
                    Facebook Id (optional)
                  </h1>
                  <div className="h-14 mt-2  relative">
                    <input
                      {...register("facebooId", {})}
                      className={`h-12  border w-full rounded-full   focus:outline-emerald-100 px-20 ${
                        theme == "light"
                          ? "bg-white text-gray-700"
                          : "bg-[#414343] text-[#e4e6eb]"
                      }`}
                      placeholder="Enter Facebook Id Link"
                      type="text"
                    />
                    <div className=" px-1 ">
                      <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid  lg:grid-cols-3 grid-cols-1 gap-10 mt-5">
                <div className="mt-5">
                  <h1
                    className={` ${
                      theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
                    }`}
                  >
                    linkedin Id(optional)
                  </h1>
                  <div className="h-14 mt-2  relative">
                    <input
                      {...register("linkedinId", {})}
                      className={`h-12  border w-full rounded-full   focus:outline-emerald-100 px-20 ${
                        theme == "light"
                          ? "bg-white text-gray-700"
                          : "bg-[#414343] text-[#e4e6eb] outline-none"
                      }`}
                      placeholder="Enter linkedin Id Link"
                      type="text"
                    />
                    <div className=" px-1 ">
                      <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                    </div>
                  </div>
                  {/* <label className="">
                          {errors.collageRole?.type === "required" && (
                            <span className="text-red-500 ">
                              {errors.collageRole.message}
                            </span>
                          )}
                        </label> */}
                </div>
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

export default AddTeacher;
