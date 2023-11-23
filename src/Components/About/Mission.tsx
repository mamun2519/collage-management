import React, { useContext } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ThemeContext } from "../../App";
const Mission = () => {
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
            Mission & Vision
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

            <span className=" text-white font-medium">Mission & Vision</span>
          </div>
        </div>
      </div>

      <div className="px-3">
        <div
          className={`card  lg:w-full w-[280px] max-w-7xl mx-auto p-5 border  shadow-md my-20 ${
            theme == "light"
              ? "bg-base-100"
              : "bg-[#242526] text-[#e4e6eb] border-[#414343]"
          }`}
        >
          <p className="text-2xl font-medium text-center mt-5">VISION</p>
          <p
            className={`mt-5 leading-loose ${
              theme == "light" ? " text-gray-700" : " text-[#e4e6eb] "
            }`}
          >
            The vision of the college is to contribute directly to transforming
            India into an equitable and vibrant knowledge society through high
            quality education to all section of the society. The college strives
            to achieve global status in the area of education and leadership by
            developing knowledge, skills and values of the students. The college
            develops a deep sense of respect among the students towards
            fundamental duties and constitutional values of India. The endeavor
            of the college is to produce true global students to make them
            compatible in the nation as well as globally. The college imparts
            education with assured employable quality.
          </p>
          <p className="text-2xl font-medium text-center mt-5">MISSION</p>
          <p
            className={`mt-5 leading-loose ${
              theme == "light" ? " text-gray-700" : " text-[#e4e6eb] "
            }`}
          >
            The college is committed to: The college will impart skill based and
            vocational education to develop self-reliant youth and assure
            employment guarantee. Ensure inclusive and equitable quality
            education as per Sustainable Development Goal-4 (SDG-4) set up by
            the government of India. Promote lifelong learning opportunities for
            all sections of students irrespective of caste, creed, sex, religion
            and socio-economic status. Achieve global status in the area of
            education and leadership by imparting and leading the students.
            Produce high quality and skilled students who are globally
            employable in the competitive market. Use and develop rich talents
            and resources of the nation for the benefit of the society, country
            and world. Enable students to have knowledge on fundamental rights,
            democratic modes, human values and rights, secular ideals and
            develop in them the qualities of leadership to cope up in the global
            environment. Produce good, efficient, responsible, self-dependent,
            forward-looking and patriotic youth force/citizens with scientific
            temper who will contribute to the knowledge economy.
          </p>
        </div>
      </div>
    </>
  );
};

export default Mission;
