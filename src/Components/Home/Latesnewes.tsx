import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
import { ThemeContext } from "../../App";
const LatesNews = () => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  return (
    <div className="  mb-0 pb-0  container mx-auto  mt-5">
      <p className="w-full h-18 relative ">
        <span
          className={`  font-medium rounded-r-md text-white lg:px-10 px-4 py-3  h-18 h-full font-mediu ${
            theme == "light" ? "bg-[#166364]  text-white" : "bg-[#414343]"
          }`}
        >
          LATEST NEWS{" "}
        </span>
        <span
          className={`absolute top-[-5px] mt-1 ${
            theme == "light" ? "" : "text-[#e4e6eb]"
          } `}
        >
          <Marquee
            className=" font-medium"
            speed={50}
            gradient={false}
            gradientWidth={400}
          >
            ২০২১ সালের অনার্স ২য় বর্ষ পরীক্ষার নিয়মিত, অনিয়মিত ও গ্রেড উন্নয়ন
            পরীক্ষার্থিদের ফরম পূরণ সংক্রান্ত বিজ্ঞপ্তি
          </Marquee>
        </span>
      </p>
      <div className=""></div>
    </div>
  );
};

export default LatesNews;
