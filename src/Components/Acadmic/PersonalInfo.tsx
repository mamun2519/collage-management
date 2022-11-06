import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { CgProfile } from "react-icons/cg";
import { MdAddPhotoAlternate } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { TiDelete } from "react-icons/ti";
import { ThemeContext } from "../../App";
const PersonalInfo = () => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const [images, setImages] = useState("");
  const [picture, setPicture] = useState<any>("");
  const [user] = useAuthState(auth);
  type UserSubmitForm = {
    country: string;
    village: string;
    address: string;
    number: string;
    gerdianName: string;
    gender: string;
    age: string;
    birthday: string;
    firstName: string;
    lastName: string;
    images: string;
  };
  const navigate = useNavigate();

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<UserSubmitForm>();
  const onSubmit = (data: UserSubmitForm) => {
   
    const studentInfo = {
      name: `${data.firstName} ${data.lastName}`,
      country: data.country,
      village: data.village,
      address: data.address,
      number: data.number,
      gerdianName: data.gerdianName,
      gender: data.gender,
      age: data.age,
      birthday: data.birthday,
      // images: picture
    };
    localStorage?.setItem("studentInfo", JSON.stringify(studentInfo));
    navigate("/onlineAdmission/personalInfromation/admissionPreview");
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
  console.log(images);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="my-10 max-w-7xl m-auto px-3">
        <div
          className={`card w-full  border pb-5  ${
            theme == "light" ? "bg-base-100" : "bg-[#242526]  border-[#414343]"
          }`}
        >
          <div className={` h-16 flex items-center  justify-between px-8 ${theme == "light" ? "bg-[#5195ed]": "bg-[#414343]"}`}>
            <div>
              <span
                onClick={() => navigate("/onlineAdmission")}
                className="bg-white text-black px-6 py-1  rounded-lg"
              >
                Back
              </span>
            </div>
            <div>
              <input
                className="bg-white text-black px-6 py-1  rounded-lg"
                type="submit"
                value=" Next"
              />
            </div>
          </div>
          <div className="w-max mx-auto">
            <div
              className={`border-b-[3px] rounded-full ${
                theme == "light"
                  ? "border-[#2374e1] "
                  : "border-[#e4e6eb] text-[#e4e6eb]"
              }`}
            >
              <h1 className="text-xl pb-2 text-center mt-10 lg:px-12 px-5 font-medium uppercase ">
                Student Information
              </h1>
            </div>
          </div>
          <div className="mt-10 px-5">
            <div className="grid  lg:grid-cols-3 gap-10 col-span-1">
              <div>
                <p
                  className={` ${
                    theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
                  }`}
                >
                  First Name
                </p>
                <div className="h-14 mt-2  relative">
                  <input
                    {...register("firstName", {
                      required: {
                        value: true,
                        message: "First Name  is Required",
                      },
                    })}
                    className="h-12  border w-full rounded-full   focus:outline-emerald-100 pl-20 pr-2"
                    placeholder="Enter first Your Name"
                    type="text"
                  />

                  <div className=" px-1 ">
                    <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                  </div>
                </div>
                <label className="">
                  {errors.firstName?.type === "required" && (
                    <span className="text-red-500 ">
                      {errors.firstName.message}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <p
                  className={` ${
                    theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
                  }`}
                >
                  Last Name
                </p>
                <div className="h-14 mt-2  relative">
                  <input
                    {...register("lastName", {
                      required: {
                        value: true,
                        message: "Last Name is Required",
                      },
                    })}
                    className="h-12  border w-full rounded-full   focus:outline-emerald-100 pl-20 pr-2"
                    placeholder="Enter Your Last Name"
                    type="text"
                  />

                  <div className=" px-1 ">
                    <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                  </div>
                </div>
                <label className="">
                  {errors.lastName?.type === "required" && (
                    <span className="text-red-500 ">
                      {errors.lastName.message}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <p
                  className={` ${
                    theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
                  }`}
                >
                  Date Of birth
                </p>
                <div className="h-14 mt-2  relative">
                  <input
                    {...register("birthday", {
                      required: {
                        value: true,
                        message: "Birthday is Required",
                      },
                    })}
                    className="h-12  border w-full rounded-full   focus:outline-emerald-100 pl-20 pr-2"
                    placeholder="Enter Your Name"
                    type="date"
                  />

                  <div className=" px-1 ">
                    <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                  </div>
                </div>
                <label className="">
                  {errors.birthday?.type === "required" && (
                    <span className="text-red-500 ">
                      {errors.birthday.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
          </div>
          <div className="mt-5 px-5">
            <div className="grid  lg:grid-cols-3 gap-10 col-span-1">
              <div>
                <p
                  className={` ${
                    theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
                  }`}
                >
                  Age
                </p>
                <div className="h-14 mt-2  relative">
                  <input
                    {...register("age", {
                      required: {
                        value: true,
                        message: "Age  is Required",
                      },
                    })}
                    className="h-12  border w-full rounded-full   focus:outline-emerald-100 pl-20 pr-2"
                    placeholder="Enter Age"
                    type="number"
                  />

                  <div className=" px-1 ">
                    <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                  </div>
                </div>
                <label className="">
                  {errors.age?.type === "required" && (
                    <span className="text-red-500 ">{errors.age.message}</span>
                  )}
                </label>
              </div>
              <div>
                <p
                  className={` ${
                    theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
                  }`}
                >
                  Gender
                </p>
                <div className="h-14 mt-2  relative">
                  <select
                    {...register("gender", {
                      required: {
                        value: true,
                        message: "Gender is Required",
                      },
                    })}
                    className="h-12  border w-full rounded-full   focus:outline-emerald-100 pl-20 pr-2"
                    placeholder="Enter Your Last Name"
                  >
                    <option>Select One</option>
                    <option value="Male">Male</option>
                    <option value="Female">FeMale</option>
                  </select>

                  <div className=" px-1 ">
                    <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                  </div>
                </div>
                <label className="">
                  {errors.gender?.type === "required" && (
                    <span className="text-red-500 ">
                      {errors.gender.message}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <p
                  className={` ${
                    theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
                  }`}
                >
                  Gerdian Name
                </p>
                <div className="h-14 mt-2  relative">
                  <input
                    {...register("gerdianName", {
                      required: {
                        value: true,
                        message: "Gerdian Name is Required",
                      },
                    })}
                    className="h-12  border w-full rounded-full   focus:outline-emerald-100 pl-20 pr-2"
                    placeholder="Enter Gerdian Name"
                    type="text"
                  />

                  <div className=" px-1 ">
                    <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                  </div>
                </div>
                <label className="">
                  {errors.gerdianName?.type === "required" && (
                    <span className="text-red-500 ">
                      {errors.gerdianName.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
          </div>
          <div className="mt-5 px-5">
            <div className="grid  lg:grid-cols-3 gap-10 col-span-1">
              <div>
                <p
                  className={` ${
                    theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
                  }`}
                >
                  Phone Number
                </p>
                <div className="h-14 mt-2  relative">
                  <input
                    {...register("number", {
                      required: {
                        value: true,
                        message: "Number Required",
                      },
                    })}
                    className="h-12  border w-full rounded-full   focus:outline-emerald-100 pl-20 pr-2"
                    placeholder="Enter Age"
                    type="number"
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
              <div>
              <p
                  className={` mb-2 ${
                    theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
                  }`}
                >
                  Picture
                </p>
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
                </div>
            </div>
          </div>
          <div className="mt-5 px-5">
            <div className="grid  lg:grid-cols-3 gap-10 col-span-1">
              <div>
                <p
                  className={` ${
                    theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
                  }`}
                >
                  Home Address
                </p>
                <div className="h-14 mt-2  relative">
                  <input
                    {...register("address", {
                      required: {
                        value: true,
                        message: "Address is Required",
                      },
                    })}
                    className="h-12  border w-full rounded-full   focus:outline-emerald-100 pl-20 pr-2"
                    placeholder="Enter Age"
                    type="text"
                  />

                  <div className=" px-1 ">
                    <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                  </div>
                </div>
                <label className="">
                  {errors.address?.type === "required" && (
                    <span className="text-red-500 ">
                      {errors.address.message}
                    </span>
                  )}
                </label>
              </div>

              <div>
                <p
                  className={` ${
                    theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
                  }`}
                >
                  Village
                </p>
                <div className="h-14 mt-2  relative">
                  <input
                    {...register("village", {
                      required: {
                        value: true,
                        message: "Village is Required",
                      },
                    })}
                    type="text"
                    className="h-12  border w-full rounded-full   focus:outline-emerald-100 pl-20 pr-2"
                    placeholder="Enter Your Last Name"
                  />

                  <div className=" px-1 ">
                    <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                  </div>
                </div>
                <label className="">
                  {errors.village?.type === "required" && (
                    <span className="text-red-500 ">
                      {errors.village.message}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <p
                  className={` ${
                    theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
                  }`}
                >
                  Country
                </p>
                <div className="h-14 mt-2  relative">
                  <input
                    {...register("country", {
                      required: {
                        value: true,
                        message: "country is Required",
                      },
                    })}
                    type="text"
                    className="h-12  border w-full rounded-full   focus:outline-emerald-100 pl-20 pr-2"
                    placeholder="Enter Your Last Name"
                  />

                  <div className=" px-1 ">
                    <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                  </div>
                </div>
                <label className="">
                  {errors.country?.type === "required" && (
                    <span className="text-red-500 ">
                      {errors.country.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PersonalInfo;
