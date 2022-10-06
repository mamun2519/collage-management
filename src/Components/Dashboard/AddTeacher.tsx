import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { CgNotes, CgProfile } from "react-icons/cg";
import { GiTeacher } from "react-icons/gi";
import { MdAddPhotoAlternate } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import swal from "sweetalert";
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

interface Htmlfor {
  htmlFor: React.LabelHTMLAttributes<HTMLLabelElement>;
}
const AddTeacher = () => {
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
    console.log(data);
    // fetch(`http://localhost:5000/v1/notice`, {
    //   method: "POST",
    //   body: JSON.stringify(routine),
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.success) {
    //       swal({
    //         title: data.message,
    //         text: "Thank You",
    //         icon: "success",
    //         buttons: [false],
    //       });
    //     }
    //     reset();
    //   });
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
    <div className="my-10 lg:w-3/4 w-full   mx-auto">
      <div className="  grid  lg:grid-cols-3 grid-cols-2 gap-10">
        {notice.map((ad: any) => (
          <div
            onClick={() => admissionRequestHendeler(ad.title)}
            key={ad}
            className={`card  flex justify-center items-center   border h-36 lg:w-80 shadow-md px-2 ${
              selected == ad.title ? "bg-red-500" : "bg-base-100"
            } `}
          >
            <div>
              <span
                className={`text-3xl  ${
                  selected == ad.title ? "text-white" : "text-red-500"
                }`}
              >
                <GiTeacher />
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
                (Teacher)
              </p>
            </div>
          </div>
        ))}
      </div>

      {dataDispaly && (
        <div className="card  w-full  bg-base-100 border shadow-md my-20">
          <div className="p-5 h-full">
            <h1 className="font-medium  text-gray-800 uppercase text-lg">
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
                <div className="mt-5">
                  <h1>Teacher Name</h1>
                  <div className="h-14 mt-2  relative">
                    <input
                      {...register("name", {
                        required: {
                          value: true,
                          message: "name is Required",
                        },
                      })}
                      className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
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
                <div className="mt-5">
                  <h1>Email</h1>
                  <div className="h-14 mt-2  relative">
                    <input
                      {...register("email", {
                        required: {
                          value: true,
                          message: "email is Required",
                        },
                      })}
                      className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
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
                  <h1>Number</h1>
                  <div className="h-14 mt-2  relative">
                    <input
                      {...register("number", {
                        required: {
                          value: true,
                          message: "Number is Required",
                        },
                      })}
                      className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
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
                  <h1>Educational Qualification</h1>
                  <div className="h-14 mt-2  relative">
                    <input
                      {...register("educationalQualification", {
                        required: {
                          value: true,
                          message: "Educational Qualification is Required",
                        },
                      })}
                      className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
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
                  <h1>collage Role</h1>
                  <div className="h-14 mt-2  relative">
                    <input
                      {...register("collageRole", {
                        required: {
                          value: true,
                          message: "collageRole is Required",
                        },
                      })}
                      className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
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
                  <h1>Facebook Id (optional)</h1>
                  <div className="h-14 mt-2  relative">
                    <input
                      {...register("facebooId", {})}
                      className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
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
                  <h1>linkedin Id(optional)</h1>
                  <div className="h-14 mt-2  relative">
                    <input
                      {...register("linkedinId", {})}
                      className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
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

export default AddTeacher;
