import React, { useContext } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ThemeContext } from "../../App";
const Location = () => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  return (
    <>
      <div
        className={`${
          theme === "light"
            ? "bg-[#166364]  border-t border-[#e4e6eb]"
            : "bg-gray-700"
        }`}
      >
        <div className="h-52   max-w-7xl m-auto p-5 grid grid-cols-1 lg:flex justify-between items-center">
          <h1 className="text-4xl  font-medium text-white up">
            College Location
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

            <span className="text-white font-medium">College Location</span>
          </div>
        </div>
      </div>

      <div className="px-3">
        <div
          className={`card  lg:w-full w-[280px] max-w-7xl mx-auto px-3 border  shadow-md my-20 ${
            theme == "light"
              ? "bg-base-100"
              : "bg-[#242526] text-[#e4e6eb] border-[#414343]"
          }`}
        >
          <p
            className={`mt-5 leading-loose ${
              theme == "light" ? " text-gray-700" : " text-[#e4e6eb] "
            }`}
          >
            The College is located at the heart of North Lakhimpur town. Its
            location is easily identifiable because of its proximity to the
            official residences of the Deputy Commissioner, Lakhimpur, District
            Superintendent of Police, District and Sessions’Judge, Lakhimpur,
            North Lakhimpur Sadar Police Station and institutions like Post
            Graduate Training College, District Library, Gandhi Park etc.
          </p>
          <div className=" mt-20 flex justify-center">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="1080"
                  height="445"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=chittagong&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                ></iframe>
                <a href="https://www.whatismyip-address.com/divi-discount/"></a>
                <br />
                <style>
                  .mapouterposition:relative;text-align:right;height:445px;width:1080px;
                </style>
                <a href="https://www.embedgooglemap.net"></a>
                <style>
                  .gmap_canvas
                  overflow:hidden;background:none!important;height:445px;width:1080px;
                </style>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
