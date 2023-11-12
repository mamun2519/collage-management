import React, { useState, useContext } from "react";
import { GiOpenBook } from "react-icons/gi";
import Loading from "../Shared/Loading";
import ResultRow from "./ResultRow";
import { ThemeContext } from "../../App";
import { MdKeyboardArrowRight } from "react-icons/md";

const Result = () => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const [studentList, setStudentList] = useState([]);
  const [loading, isLoading] = useState(false);
  const [selected, setSelected] = useState<any>(false);

  const admission = [
    { title: "Higer Secondary Admission" },
    { title: "Bachelor of Busniness Studies (BBS)" },
    { title: "Bachelor of Science (BSC)" },
    { title: "Bachelor of Arts (BA)" },
    { title: "Bachelor of Busniness Administraion (BBA)" },
    { title: "Graduate Admission (Master's)" },
  ];
  const admissionRequestHendeler = (admissionName: string): void => {
    const click = admission.filter((classs) => classs.title === admissionName);

    setSelected(click[0]?.title);
    isLoading(true);
    fetch(
      `http://localhost:5000/v1/student/deparment/student?department=${admissionName}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStudentList(data.student);
          isLoading(false);
        } else {
          setStudentList([]);
          // isLoading(false)
        }
      });
  };
  return (
    <>
      <div className="mt-10  w-full lg:w-3/4 mx-auto  grid grid-cols-1 lg:flex justify-between items-center">
        <h1 className="text-4xl  font-medium text-white up">
          {/* STUDENT ADMISSION LIST */}
        </h1>

        <div
          className={`flex py-2 gap-0 px-1 lg:px-8 lg:gap-5 rounded-lg  font-medium ${
            theme == "light"
              ? "bg-[#2374e1] text-white"
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
            <span className="px-0">Dashboard</span>
            <span className="mt-1 text-xl text-white">
              <MdKeyboardArrowRight />
            </span>
          </div>

          <span className="text-white  font-medium">Results</span>
        </div>
      </div>
      <div className="my-10 lg:w-3/4 w-full mx-auto">
        <div className="  grid  lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-3">
          {admission.map((ad: any) => (
            <div
              onClick={() => admissionRequestHendeler(ad.title)}
              key={ad}
              className={`card  flex justify-center items-center   border h-40 lg:h-28 lg:w-80 w-full  shadow-md px-2 ${
                theme == "light"
                  ? selected == ad.title
                    ? "bg-[#2374e1]"
                    : "bg-base-100"
                  : selected == ad.title
                  ? "bg-[#414343]"
                  : "bg-[#242526] border-[#414343]"
              } `}
            >
              <div>
                <span
                  className={`text-3xl  ${
                    theme == "light"
                      ? selected == ad.title
                        ? "text-white"
                        : "text-red-500"
                      : selected == ad.title
                      ? "text-white"
                      : "text-white"
                  }`}
                >
                  <GiOpenBook />
                </span>
              </div>
              <div>
                <p
                  className={`font-semibold uppercase mt-1 text-center ${
                    theme == "light"
                      ? selected == ad.title
                        ? "text-white"
                        : "text-black"
                      : selected == ad.title
                      ? "text-white"
                      : "text-[#e4e6eb]"
                  }`}
                >
                  {ad.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {loading ? (
          <Loading />
        ) : (
          studentList.length !== 0 && (
            <div
              className={`card  lg:w-full w-[280px]  border  shadow-md my-20 ${
                theme == "light"
                  ? "bg-base-100"
                  : "bg-[#242526] border-[#414343]"
              }`}
            >
              <div className="p-5 ">
                <h1
                  className={`font-medium   uppercase text-lg ${
                    theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
                  }`}
                >
                  Result Published at {selected}
                </h1>
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
                            Student Piture
                          </th>
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
                            Board
                          </th>
                          <th
                            className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                              theme == "light"
                                ? "bg-gray-100 text-gray-600 border-gray-200"
                                : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                            }`}
                          >
                            session
                          </th>
                          <th
                            className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                              theme == "light"
                                ? "bg-gray-100 text-gray-600 border-gray-200"
                                : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                            }`}
                          >
                            Result Published
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {studentList?.map(
                          (student: any) =>
                            student.verifay && (
                              <ResultRow key={student._id} student={student} />
                            )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Result;
