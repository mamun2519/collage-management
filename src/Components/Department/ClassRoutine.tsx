import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import RoutineRow from "./RoutineRow";
import { useNavigate } from "react-router-dom";
interface RoutineInfo {
  routine: any;
}
const ClassRoutine = ({ routine }: RoutineInfo) => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const navigate = useNavigate();
  return (
    <div>
      {routine.length !== 0 ? (
        <div className="my-10">
          <div
            className={`card lg:w-3/4 w-full mx-auto  border  shadow-lg  ${
              theme == "light"
                ? "bg-base-100"
                : "bg-[#242526]  text-[#e4e6eb] border-[#414343]"
            }`}
          >
            <div className="p-5 ">
              <p className="text-2xl font-medium  uppercase text-center">
                Government Public Collage,Chittagong
              </p>
              <p
                className={`text-lg  font-sans  text-center ${
                  theme == "light" ? "text-gray-800 " : "text-[#e4e6eb]"
                }`}
              >
                {" "}
                Education Board
              </p>
              <p
                className={`text-lg  font-sans  text-center backdrop:${
                  theme == "light" ? "text-gray-800 " : "text-[#e4e6eb]"
                }`}
              >
                {routine[0]?.classs}
              </p>
              <div>
                <p
                  className={`text-lg  font-sans  text-center ${
                    theme == "light" ? "text-gray-800 " : "text-[#e4e6eb]"
                  }`}
                >
                  Class Routine
                </p>
              </div>

              <div className=" flex justify-between mt-10 text-lg">
                <div>
                  <span>Session:</span>
                  <span className="px-3">{routine[0]?.session}</span>
                </div>
                <div>
                  <span>Date:</span>
                  <span className="px-3">04/22/2022</span>
                </div>
              </div>

              {/* <p className="mt-2">
              এতদ্বারা সংশ্লিষ্ট সকলের অবগতির জন্য জানানো যাচ্ছে, ২০২০ সালের
              এক্সাম নেম পরীক্ষা নিম্নোক্ত সময়সূচি অনুযায়ী অনুষ্টিত হবে। বিশেষ
              প্রয়োজনে কলেজ কর্তৃপক্ষ এ সময়সূচি পরিবর্তন করতে পারবেন।
            </p> */}

              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg  overflow-x-auto">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th
                          className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                            theme == "light"
                              ? "bg-gray-100 text-gray-600 border-gray-200"
                              : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                          }`}
                        >
                          Day
                        </th>
                        <th
                          className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                            theme == "light"
                              ? "bg-gray-100 text-gray-600 border-gray-200"
                              : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                          }`}
                        >
                          1st Period
                        </th>
                        <th
                          className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                            theme == "light"
                              ? "bg-gray-100 text-gray-600 border-gray-200"
                              : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                          }`}
                        >
                          2nd Period
                        </th>
                        <th
                          className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                            theme == "light"
                              ? "bg-gray-100 text-gray-600 border-gray-200"
                              : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                          }`}
                        >
                          3th Period
                        </th>
                        <th
                          className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                            theme == "light"
                              ? "bg-gray-100 text-gray-600 border-gray-200"
                              : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                          }`}
                        >
                          4th Period
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {routine?.map((rotine: any) => (
                        <RoutineRow key={rotine} rotine={rotine} />
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-between my-5">
                  <div></div>
                  <div className="text-center">
                    <p>প্রফেসর মামুন ইসলাম </p>
                    <p>আহবায়ক </p>
                    <p>আন্তঃ শিক্ষা বোর্ড পরীক্ষা নিয়ন্ত্রণ কমেটি</p>
                    <p>ও পরিক্ষা নিয়ন্ত্রক শিক্ষা বোড</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-red-400 h-[25px] "></div>
          </div>
        </div>
      ) : (
        <div className="card lg:w-9/12 w-full mx-auto bg-base-100 border pb-5 mt-10">
          <div className="flex justify-center ">
            <img
              className="w-[350px] "
              src="/assets/picture/sorry.gif"
              alt=""
            />
          </div>
          <div className="text-center">
            <p className="  font-medium text-xl">Sorry,</p>
            <p className="text-gray-800 mt-1">
              {" "}
              Collage Authority Class Routine Don't Published.
            </p>
            <p>Thank You.</p>
            <button
              onClick={() => navigate("/")}
              className="bg-red-500 text-white px-4 py-1 rounded-lg my-2 uppercase font-semibold"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassRoutine;
