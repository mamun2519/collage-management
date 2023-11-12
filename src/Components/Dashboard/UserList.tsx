import React, { useState, useEffect, useContext } from "react";
import Loading from "../Shared/Loading";
import AdminRow from "./AdminRow";
import UserRow from "./UserRow";
import { ThemeContext } from "../../App";
import { MdKeyboardArrowRight } from "react-icons/md";
const UserList = () => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const [users, setUser] = useState([]);
  const [loading, isLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const [limit, setLimit] = useState<any>();
  const [admins, setAdmin] = useState([]);
  const [adminpage, setadminPage] = useState(1);
  const [adminsearch, setadminSearch] = useState("");
  const [adminpageCount, setadminPageCount] = useState(1);
  const [adminlimit, setadminLimit] = useState<any>();
  useEffect(() => {
    fetch(
      `http://localhost:5000/v1/user?page=${page}&limit=${limit}&search=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser(data?.user);
          setPageCount(data?.page);
        }
      });
  }, [users]);
  useEffect(() => {
    fetch(
      `http://localhost:5000/v1/user/admin?page=${adminpage}&limit=${adminlimit}&search=${adminsearch}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setAdmin(data?.user);
          setadminPageCount(data?.page);
        }
      });
  }, [admins]);
  const priviesPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const priviesadminPage = () => {
    if (adminpage > 1) {
      setadminPage(adminpage - 1);
    }
  };
  console.log(pageCount);
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

          <span className="text-white  font-medium">User List</span>
        </div>
      </div>

      <div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div
              className={`card  lg:w-3/4 mx-auto w-[280px]  border  shadow-md my-20 ${
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
                  User List List
                </h1>

                <div className="my- flex sm:flex-row flex-col mt-8">
                  <div className="flex flex-row mb-1 sm:mb-0">
                    <div className="relative">
                      <select
                        onChange={(e) => setLimit(e.target.value)}
                        className={`appearance-none h-full rounded-l border block appearance-none w-full  border-gray-400  py-2 px-4 pr-8 leading-tight focus:outline-none  focus:border-gray-500 ${
                          theme == "light"
                            ? "bg-white text-gray-700"
                            : "bg-[#414343] text-[#e4e6eb] outline-none"
                        }`}
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
                      className={`appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full  text-sm   focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none ${
                        theme == "light"
                          ? "bg-white placeholder-gray-400 text-gray-700 "
                          : "bg-[#414343] text-[#e4e6eb]  placeholder-[#e4e6eb]"
                      }`}
                    />
                  </div>
                </div>
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
                            Role
                          </th>
                          <th
                            className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                              theme == "light"
                                ? "bg-gray-100 text-gray-600 border-gray-200"
                                : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                            }`}
                          >
                            Make Admin
                          </th>
                          <th
                            className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                              theme == "light"
                                ? "bg-gray-100 text-gray-600 border-gray-200"
                                : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                            }`}
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {users?.map((user: any) => (
                          <UserRow key={user._id} user={user} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div
                  className={`lg:px-5 py-3 border-t fle text-center ${
                    theme == "light" ? "bg-white " : "border-[#414343]"
                  }`}
                >
                  <div className="inline-f  mt-2 xs:mt-0 flex justify-between  items-center ">
                    <button
                      onClick={() => priviesPage()}
                      className={`text-sm   text-white font-semibold py-2 lg:px-8 px-4 rounded-lg ${
                        theme == "light" ? "bg-[#5195ed]" : "bg-[#414343]"
                      } `}
                    >
                      Prev
                    </button>
                    <span
                      className={`text-xs xs:text-sm  ${
                        theme == "light" ? "text-gray-900" : "text-[#e4e6eb]"
                      }`}
                    >
                      Page No {pageCount}
                    </span>
                    <button
                      onClick={() => setPage(page + 1)}
                      className={`text-sm   text-white font-semibold py-2 lg:px-8 px-4 rounded-lg ${
                        theme == "light" ? "bg-[#5195ed]" : "bg-[#414343]"
                      } `}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`card  lg:w-3/4 mx-auto w-[280px]  border  shadow-md my-20 ${
                theme == "light"
                  ? "bg-base-100"
                  : "bg-[#242526] border-[#414343]"
              }`}
            >
              <div className="p-5 ">
                <h1
                  className={`font-medium   uppercase text-lg ${
                    theme == "light" ? "text-gray-800" : "text-[#e4e6eb] "
                  }`}
                >
                  Admin List
                </h1>

                <div className="my- flex sm:flex-row flex-col mt-8">
                  <div className="flex flex-row mb-1 sm:mb-0">
                    <div className="relative">
                      <select
                        onChange={(e) => setadminLimit(e.target.value)}
                        className={`appearance-none h-full rounded-l border block appearance-none w-full  border-gray-400  py-2 px-4 pr-8 leading-tight focus:outline-none  focus:border-gray-500 ${
                          theme == "light"
                            ? "bg-white text-gray-700"
                            : "bg-[#414343] text-[#e4e6eb] outline-none"
                        }`}
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
                      onChange={(e) => setadminSearch(e.target.value)}
                      placeholder="Search Name"
                      className={`appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full  text-sm   focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none ${
                        theme == "light"
                          ? "bg-white placeholder-gray-400 text-gray-700 "
                          : "bg-[#414343] text-[#e4e6eb]  placeholder-[#e4e6eb]"
                      }`}
                    />
                  </div>
                </div>
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
                            Role
                          </th>
                          <th
                            className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                              theme == "light"
                                ? "bg-gray-100 text-gray-600 border-gray-200"
                                : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                            }`}
                          >
                            Make Admin
                          </th>
                          <th
                            className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                              theme == "light"
                                ? "bg-gray-100 text-gray-600 border-gray-200"
                                : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                            }`}
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {admins?.map((user: any) => (
                          <AdminRow key={user._id} user={user} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div
                  className={`lg:px-5 py-3 border-t fle text-center ${
                    theme == "light" ? "bg-white " : "border-[#414343]"
                  }`}
                >
                  <div className="inline-f  mt-2 xs:mt-0 flex justify-between  items-center ">
                    <button
                      onClick={() => priviesadminPage()}
                      className={`text-sm   text-white font-semibold py-2 lg:px-8 px-4 rounded-lg ${
                        theme == "light" ? "bg-[#5195ed]" : "bg-[#414343]"
                      } `}
                    >
                      Prev
                    </button>
                    <span
                      className={`text-xs xs:text-sm  ${
                        theme == "light" ? "text-gray-900" : "text-[#e4e6eb]"
                      }`}
                    >
                      Page No {adminpageCount}
                    </span>
                    <button
                      onClick={() => setadminPage(page + 1)}
                      className={`text-sm   text-white font-semibold py-2 lg:px-8 px-4 rounded-lg ${
                        theme == "light" ? "bg-[#5195ed]" : "bg-[#414343]"
                      } `}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default UserList;
