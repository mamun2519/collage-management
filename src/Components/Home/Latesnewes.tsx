import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
import { ThemeContext } from "../../App";
const Latesnewes = () => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  return (
    <div className=" mt-[2px] mb-0 pb-0  ">
      <p className="w-full h-12 relative ">
        <span
          className={`  font-medium rounded-r-md text-white lg:px-10 px-4 py-2  h-full font-mediu ${
            theme == "light" ? "bg-[#2374e1]" : "bg-[#414343]"
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

export default Latesnewes;
