import React from "react";
import BannerPic from "../../assets/newBanner.png";
const Banner = () => {
  return (
    <div
      className="hero h-[700px] "
      // style={{
      //   backgroundImage: `url("https://img.freepik.com/premium-photo/back-school-generative-ai_10221-27982.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais)`,
      // }}
    >
      <div className="w-full o">
        <img src={BannerPic} alt="" className="w-full h-[700px] " />
      </div>

      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className=" mb-1 text-2xl font-medium">Welcome to</h1>
          <p className="mb-4 text-4xl font-medium">Government Public Collage</p>
          <button className="bg-[#2374e1] text-white px-8 py-2 rounded-lg font-medium">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
