import React from "react";

const Banner = () => {
  return (
    <div
      className="hero h-[600px]"
      style={{ backgroundImage: `url("https://i0.wp.com/schosity.com/wp-content/uploads/2018/02/Govt.-College-Of-Commerce.jpg?fit=1200%2C675&ssl=1")` }}
    >

      
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className=" mb-1 text-2xl font-medium">Wellcome to</h1>
          <p className="mb-4 text-4xl font-medium">
          Railway Goverment Public Collage
          </p>
          <button className="bg-red-500 text-white px-8 py-2 rounded-lg font-medium">Get Started Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
