import React, { useContext, useState } from "react";
import { MdBorderColor } from "react-icons/md";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsNewspaper,
  BsTextareaResize,
} from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import { AiFillWindows } from "react-icons/ai";
import { FcBusinessman, FcDepartment } from "react-icons/fc";
import { GiTeacher } from "react-icons/gi";
import { ThemeContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
const Banner = () => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const slides = [
    {
      url: "https://www.rangamaticollege.gov.bd/midea/slider/photo2023-05-06-07-15-00_6455fe74a5ddf.jpg",
      title: "Title 1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quae dicta esse illo qui voluptates quam, minus a eveniet nostrum, est saepe ea dolorum accusantium deleniti consequuntur molestias doloremque iusto similique magni amet necessitatibus pariatur odit soluta! Laborum, sed voluptatem?",
    },
    {
      url: "https://www.sub.ac.bd/uploads/slider/566d37e310616d6d0ed6.jpg",
      title: "Title 2",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quae dicta esse illo qui voluptates quam, minus a eveniet nostrum, est saepe ea dolorum accusantium deleniti consequuntur molestias doloremque iusto similique magni amet necessitatibus pariatur odit soluta! Laborum, sed voluptatem?",
    },
    {
      url: "https://lcls-south.com/wp-content/uploads/2021/10/lclshp.jpg",
      title: "Title 3",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quae dicta esse illo qui voluptates quam, minus a eveniet nostrum, est saepe ea dolorum accusantium deleniti consequuntur molestias doloremque iusto similique magni amet necessitatibus pariatur odit soluta! Laborum, sed voluptatem?",
    },
    {
      url: "https://dscsc.mil.bd/wp-content/uploads/2019/04/ice-breaking.jpg",
      title: "Title 4",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quae dicta esse illo qui voluptates quam, minus a eveniet nostrum, est saepe ea dolorum accusantium deleniti consequuntur molestias doloremque iusto similique magni amet necessitatibus pariatur odit soluta! Laborum, sed voluptatem?",
    },
    {
      url: "https://api.diu.ac//images/diuac/slider/1624433411_4cxmNEmYqW.jpg",
      title: "Title 5",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quae dicta esse illo qui voluptates quam, minus a eveniet nostrum, est saepe ea dolorum accusantium deleniti consequuntur molestias doloremque iusto similique magni amet necessitatibus pariatur odit soluta! Laborum, sed voluptatem?",
    },
    {
      url: "https://d2v9ipibika81v.cloudfront.net/uploads/sites/70/GMM2023-750x450.jpg",
      title: "Title 6",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quae dicta esse illo qui voluptates quam, minus a eveniet nostrum, est saepe ea dolorum accusantium deleniti consequuntur molestias doloremque iusto similique magni amet necessitatibus pariatur odit soluta! Laborum, sed voluptatem?",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(2);

  const prevSlide = () => {
    const isLastSlide = currentIndex === 0;
    const newIndex = isLastSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div
      className={`${
        theme === "light" ? "  " : "bg-[#242526]  border-[#414343]"
      }lg:h-[430px]  container mx-auto rounded pt-10`}
    >
      <div className=" p-5 grid lg:grid-cols-2 gap-5 grid-cols-1">
        <div className="h-[300px] md:h-[500] lg:h-[380px] w-full m-auto px-4 relative group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-[-50%] right-14 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-10 justify-center py-2 gap-3">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="cursor-pointer"
              >
                {/* <div className="h-[2px] rounded-md bg-green-600 w-8 md:w-24 lg:w-20 " /> */}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className=" grid  grid-cols-3  lg:gap-5 gap-3 lg:mt-">
            <Link
              to="/Notice"
              className={`${
                theme === "light"
                  ? "bg-white border text-[#262582]"
                  : "bg-[#414343] text-white"
              } lg:w-full xl:w-full sm:w-[105px] md:w-60  h-28 rounded-lg 
              flex justify-center items-center shadow hover:bg-[#23395b] hover:text-white `}
            >
              <div>
                <span className=" text-2xl  flex justify-center mb-2 ">
                  <MdBorderColor />
                </span>
                <h3 className=" uppercase ">Notice</h3>
              </div>
            </Link>
            <Link
              to="/result"
              className={`${
                theme === "light"
                  ? "bg-white border text-[#262582]"
                  : "bg-[#414343] text-white"
              } lg:w-full xl:w-full sm:w-[105px] md:w-60  h-28 rounded-lg 
              flex justify-center items-center shadow hover:bg-[#23395b] hover:text-white`}
            >
              <div className=" ">
                <span className=" text-2xl  flex justify-center mb-2 ">
                  <BsTextareaResize />
                </span>
                <h3 className=" uppercase">RESULT</h3>
              </div>
            </Link>
            <Link
              to="/studentId"
              className={`${
                theme === "light"
                  ? "bg-white border text-[#262582]"
                  : "bg-[#414343] text-white"
              } lg:w-full xl:w-full sm:w-[105px] md:w-60  h-28 rounded-lg 
              flex justify-center items-center shadow hover:bg-[#23395b] hover:text-white`}
            >
              <div className=" ">
                <span className=" text-2xl  flex justify-center mb-2 ">
                  <BsNewspaper />
                </span>
                <h3 className=" uppercase">Student Id Card</h3>
              </div>
            </Link>
          </div>
          <div className=" grid  grid-cols-3  lg:gap-5 gap-3 mt-5">
            <Link
              to="routine"
              className={`${
                theme === "light"
                  ? "bg-white border text-[#262582]"
                  : "bg-[#414343] text-white"
              } lg:w-full xl:w-full sm:w-[105px] md:w-60  h-28 rounded-lg 
              flex justify-center items-center shadow hover:bg-[#23395b] hover:text-white`}
            >
              <div className=" ">
                <span className=" text-2xl  flex justify-center mb-2 ">
                  <GrUserAdmin />
                </span>
                <h3 className=" uppercase text-center">EXAM ROUTINE</h3>
              </div>
            </Link>
            <Link
              to="/onlineAdmission"
              className={`${
                theme === "light"
                  ? "bg-white border text-[#262582]"
                  : "bg-[#414343] text-white"
              } lg:w-full xl:w-full sm:w-[105px] md:w-60  h-28 rounded-lg 
              flex justify-center items-center shadow hover:bg-[#23395b] hover:text-white`}
            >
              <div className=" ">
                <span className=" text-2xl  flex justify-center mb-2 ">
                  <GrUserAdmin />
                </span>
                <h3 className=" uppercase">ADMISSION</h3>
              </div>
            </Link>
            <Link
              to="/routine"
              className={`${
                theme === "light"
                  ? "bg-white border text-[#262582]"
                  : "bg-[#414343] text-white"
              } lg:w-full xl:w-full sm:w-[105px] md:w-60  h-28 rounded-lg 
              flex justify-center items-center shadow hover:bg-[#23395b] hover:text-white`}
            >
              <div className=" ">
                <span className=" text-2xl  flex justify-center mb-2 ">
                  <AiFillWindows />
                </span>
                <h3 className=" uppercase text-center">CLASS ROUTINE</h3>
              </div>
            </Link>
          </div>
          <Link
            to="/about/collageLocation"
            className=" grid  grid-cols-3 lg:gap-5 gap-3 mt-5"
          >
            <div
              className={`${
                theme === "light"
                  ? "bg-white border text-[#262582]"
                  : "bg-[#414343] text-white"
              } lg:w-full xl:w-full sm:w-[105px] md:w-60  h-28 rounded-lg 
              flex justify-center items-center shadow hover:bg-[#23395b] hover:text-white`}
            >
              <div className=" ">
                <span className=" text-2xl  flex justify-center mb-2 ">
                  <FcDepartment />
                </span>
                <h3 className=" uppercase lg:text-[17px] text-[14px]">
                  Collage Location
                </h3>
              </div>
            </div>
            <Link
              to="/about/teachers"
              className={`${
                theme === "light"
                  ? "bg-white border "
                  : "bg-[#414343] text-white"
              } lg:w-full xl:w-full sm:w-[105px] md:w-60  h-28 rounded-lg 
              flex justify-center items-center shadow hover:bg-[#23395b] hover:text-white`}
            >
              <div className=" ">
                <span className=" text-2xl  flex justify-center mb-2 ">
                  <GiTeacher />
                </span>
                <h3 className=" uppercase">TEACHERS</h3>
              </div>
            </Link>
            <div
              className={`${
                theme === "light"
                  ? "bg-white border text-[#262582]"
                  : "bg-[#414343] text-white"
              } lg:w-full xl:w-full sm:w-[105px] md:w-60  h-28 rounded-lg 
              flex justify-center items-center shadow hover:bg-[#23395b] hover:text-white`}
            >
              <div className=" ">
                <span className=" text-2xl  flex justify-center mb-2 ">
                  <FcBusinessman />
                </span>
                <h3 className=" uppercase">STUDENTS</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
