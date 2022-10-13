import React, { FC, useContext, useState } from "react";
import StudentRow from "./StudentRow";
import { ThemeContext } from "../../App";
interface StudentInfo {
  students: string[];
}
const Student = ({ students }: StudentInfo) => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);

  return (
    <div className="mt-10 mb-20">
      <div
        className={`card lg:w-3/4 w-full mx-auto  border  shadow-lg  ${
          theme == "light" ? "bg-base-100" : "bg-[#242526] border-[#414343]"
        }`}
      >
        <div className="p-5 ">
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
                      Name
                    </th>
                    <th
                      className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                        theme == "light"
                          ? "bg-gray-100 text-gray-600 border-gray-200"
                          : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                      }`}
                    >
                      Roll
                    </th>
                    <th
                      className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                        theme == "light"
                          ? "bg-gray-100 text-gray-600 border-gray-200"
                          : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                      }`}
                    >
                      Reg
                    </th>
                    <th
                      className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                        theme == "light"
                          ? "bg-gray-100 text-gray-600 border-gray-200"
                          : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                      }`}
                    >
                      More Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {students?.map(
                    (student: any) =>
                      student?.verifay && (
                        <StudentRow key={student} student={student} />
                      )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* <div className="bg-red-400 h-[25px] "></div> */}
      </div>
    </div>
  );
};

export default Student;
