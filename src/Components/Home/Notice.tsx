import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Notice = () => {
  const [nocties, setNotice] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState<any>(5);

  useEffect(() => {
    fetch(
      `http://localhost:5000/v1/notice?page=${page}&limit=${limit}&search=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setNotice(data.notice);
        }
      });
  }, [page, limit, search]);
  console.log(nocties);
  const priviesPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const navigate = useNavigate();
  return (
    <div className="my-40 max-w-7xl m-auto ">
      <div className="w-max mx-auto">
        <div className="border-b-2 rounded-full border-red-500 ">
          <h1 className="text-4xl pb-2 text-center mt-10 px-12  font-medium uppercase">
            Notice
          </h1>
        </div>
      </div>
      <div>
        {/* <!-- component --> */}
        <body className="antialiased font-sans ">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
              <div className="my-2 flex sm:flex-row flex-col">
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
                    placeholder="Search"
                    className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  />
                </div>
              </div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider flex justify-center">
                          Title
                        </th>
                        {/* <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          PDF
                        </th> */}
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {nocties?.notice?.map((notice: any) => (
                        <tr key={notice?._id}>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="">
                              <div className=" ">{notice?.date}</div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {notice?.title}
                            </p>
                          </td>
                          {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <button className="bg-red-500 text-white px-6 py-1 rounded-lg">
                            Dowenlode PDF
                          </button>
                        </td> */}
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <button
                              onClick={() =>
                                navigate(`/noticeDetails/${notice?._id}`)
                              }
                              className="bg-red-500 text-sm text-white px-4 py-1 rounded-lg"
                            >
                              Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="px-5 py-3 bg-white border-t fle text-center        ">
                    <div className="inline-f  mt-2 xs:mt-0 flex justify-between  items-center ">
                      <button
                        onClick={() => priviesPage()}
                        className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-8 rounded-lg"
                      >
                        Prev
                      </button>
                      <span className="text-xs xs:text-sm text-gray-900">
                        Page No {nocties?.page}
                      </span>
                      <button
                        onClick={() => setPage(page + 1)}
                        className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-8 rounded-lg"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    </div>
  );
};

export default Notice;
