import React, { useState, useEffect } from "react";
import { GiOpenBook } from "react-icons/gi";
import Loading from "../Shared/Loading";
import StudentListRow from "./StudentListRow";

const StudentLIst = () => {
  const [studentList, setStudentList] = useState([]);
  const [loading, isLoading] = useState(false);
  const [selected, setSelected] = useState<any>(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState<any>();
  const [pageCount, setPageCount] = useState(1);
  const [admissionName, setAd] = useState("");

  const admission = [
    { title: "Higer Secondary Admission" },
    { title: "Bachelor of Busniness Studies (BBS)" },
    { title: "Bachelor of Science (BSC)" },
    { title: "Bachelor of Arts (BA)" },
    { title: "Bachelor of Busniness Administraion (BBA)" },
    { title: "Graduate Admission (Master's)" },
  ];
  useEffect(() => {
    isLoading(true);
    fetch(
      `http://localhost:5000/v1/student/deparment/student?department=${admissionName}&page=${page}&limit=${limit}&search=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStudentList(data.student);
          setPageCount(data.page);
          // setLimit(data.limit)
          console.log(data);
          isLoading(false);
        } else {
          setStudentList([]);
          isLoading(false);
        }
      });
  }, [admissionName, limit, page, selected]);
  console.log(admissionName);
  const admissionRequestHendeler = (admissionName: string): void => {
    const click = admission.filter((classs) => classs.title === admissionName);

    setSelected(click[0]?.title);
    setAd(admissionName);
  };
  const priviesPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="my-10 lg:w-3/4 w-full mx-auto">
      <div className="  grid  lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-3">
        {admission.map((ad: any) => (
          <div
            onClick={() => admissionRequestHendeler(ad.title)}
            key={ad}
            className={`card  flex justify-center items-center   border h-40 lg:h-28 lg:w-80 w-full  shadow-md px-2 ${
              selected == ad.title ? "bg-red-500" : "bg-base-100"
            } `}
          >
            <div className="px-6 py-4 lg:px-0 lg:py-0">
              <span
                className={`text-3xl  ${
                  selected == ad.title ? "text-white" : "text-red-500"
                }`}
              >
                <GiOpenBook />
              </span>
            </div>
            <div>
              <p
                className={`font-semibold uppercase mt-1 text-center ${
                  selected == ad.title ? "text-white" : "text-black"
                }`}
              >
                {ad.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {loading ? (
        <Loading></Loading>
      ) : (
        studentList.length !== 0 && (
          <div className="card  lg:w-full w-[280px]  bg-base-100 border  shadow-md my-20">
            <div className="p-5 ">
              <h1 className="font-medium  text-gray-800 uppercase text-lg">
                Student at {selected} List
              </h1>
              <div className="my- flex sm:flex-row flex-col mt-8">
                <div className="flex flex-row mb-1 sm:mb-0">
                  <div className="relative">
                    <select
                      onChange={(e) => setLimit(e.target.value)}
                      className="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                      <option value="5" selected>
                        5
                      </option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="block relative">
                  <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-current text-gray-500"
                    >
                      <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                    </svg>
                  </span>
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Name"
                    className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  />
                </div>
              </div>

              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg  overflow-x-auto">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Student Piture
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider ">
                          Name
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Roll
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Student Verified
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentList?.map(
                        (student: any) =>
                          student.verifay && (
                            <StudentListRow
                              key={student._id}
                              student={student}
                            />
                          )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="lg:px-5 py-3 bg-white border-t fle text-center">
                <div className="inline-f  mt-2 xs:mt-0 flex justify-between  items-center ">
                  <button
                    onClick={() => priviesPage()}
                    className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 lg:px-8 px-4 rounded-lg"
                  >
                    Prev
                  </button>
                  <span className="text-xs xs:text-sm text-gray-900">
                    Page No
                    {pageCount}
                  </span>
                  <button
                    onClick={() => setPage(page + 1)}
                    className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 lg:px-8 px-4 rounded-lg"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default StudentLIst;
