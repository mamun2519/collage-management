import React, { useContext } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ThemeContext } from "../../App";
import Gallery from "../Home/Gallery";
const GalleryPage = () => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  return (
    <div>
      <div
        className={`${
          theme === "light"
            ? "bg-[#166364]  border-t border-[#e4e6eb]"
            : "bg-gray-700"
        }`}
      >
        <div className="h-52   max-w-7xl m-auto px-3 grid grid-cols-1 lg:flex justify-between items-center">
          <h1 className="text-4xl  font-medium text-white up">
            Collage Gallery
          </h1>

          <div
            className={`flex py-2 ]  px-8 gap-5 rounded-lg  font-medium ${
              theme == "light"
                ? "bg-[#23395b] text-white"
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
              <span className="px-0">About</span>
              <span className="mt-1 text-xl text-white">
                <MdKeyboardArrowRight />
              </span>
            </div>

            <span className="text-white  font-medium">Collage Gallery</span>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Gallery />
      </div>
    </div>
  );
};

export default GalleryPage;
