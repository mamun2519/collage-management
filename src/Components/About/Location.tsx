import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Location = () => {
  return (
    <>
      <div className="bg-gray-700">
        <div className="h-52   max-w-7xl m-auto px-3 grid grid-cols-1 lg:flex justify-between items-center">
          <h1 className="text-4xl  font-medium text-white up">
            College Location
          </h1>

          <div className="flex py-2 bg-red-500 text-white px-8 gap-5 rounded-lg  font-medium">
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

            <span className="text-gray-900  font-semibold">
              College Location
            </span>
          </div>
        </div>
      </div>

     <div className="px-3">
     <div className="card lg:w-full max-w-7xl mx-auto px-3  w-full  bg-base-100 border  shadow-md my-20 p-4">
        <p className="mt-5 leading-loose text-gray-700 text-lg">
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
