import React, { useState, useEffect } from "react";
import { CgNotes } from "react-icons/cg";
import Loading from "../Shared/Loading";

const Notice = () => {
  const [selected, setSelected] = useState<any>(false);
  const [dataDispaly, SetDataDisplay] = useState(false);
  const [loading, isLoading] = useState(false);
  const [notices, setNotice] = useState<any>([]);

  const notice = [
    { title: "Higer Secondary Admission" },
    { title: "Bachelor of Busniness Studies (BBS)" },
    { title: "Bachelor of Science (BSC)" },
    { title: "Bachelor of Arts (BA)" },
    { title: "Bachelor of Busniness Administraion (BBA)" },
    { title: "Graduate Admission (Master's)" },
  ];
  useEffect(() => {
    isLoading(true);
    if (selected) {
      fetch(`http://localhost:5000/v1/notice/department?department=${selected}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setNotice(data.notice);
            isLoading(false);
          } else {
            isLoading(false);
            setNotice([]);
          }
        });
    }
  }, [selected]);
  const admissionRequestHendeler = (admissionName: string): void => {
    const click = notice.filter((classs) => classs.title === admissionName);
    setSelected(click[0]?.title);
    SetDataDisplay(true);
  };

  console.log(notices);

  return (
    <div className="my-10 lg:w-3/4 w-full  mx-auto">
      <div className="  grid  lg:grid-cols-3 grid-cols-2 gap-10">
        {notice.map((ad: any) => (
          <div
            onClick={() => admissionRequestHendeler(ad.title)}
            key={ad}
            className={`card  flex justify-center items-center   border h-36 lg:w-80 shadow-md px-2 ${
              selected == ad.title ? "bg-red-500" : "bg-base-100"
            } `}
          >
            <div>
              <span
                className={`text-3xl  ${
                  selected == ad.title ? "text-white" : "text-red-500"
                }`}
              >
                <CgNotes />
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
              <p
                className={`font-semibold text-sm mt-1 text-center ${
                  selected == ad.title ? "text-white" : "text-black"
                }`}
              >
                (Notce)
              </p>
            </div>
          </div>
        ))}
      </div>

      {loading ? (
        <Loading />
      ) : (
        dataDispaly && (
          <div className="card  w-full  bg-base-100 border  shadow-md my-20">
            <div className="p-5 ">
              <h1 className="font-medium  text-gray-800 uppercase text-lg">
                {selected} Notice's
              </h1>

              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto mt-2">
                <div className="inline-block min-w-full shadow rounded-lg  overflow-x-auto">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider ">
                          title
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Read More
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {notices.map((notice: any, index: string) => (
                        <tr key={index}>
                          <td className="px-6 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {notice?.date}
                            </p>
                          </td>
                          <td className="px-6  py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {notice?.title}
                            </p>
                          </td>
                          <td className="px-6  py-5 border-b border-gray-200 bg-white text-sm">
                            <button className="bg-red-500 text-white px-6 py-1 rounded-lg">
                              More
                            </button>
                          </td>
                          <td className="px-6  py-5 border-b border-gray-200 bg-white text-sm">
                            <button className="bg-red-500 text-white px-6 py-1 rounded-lg">
                              More
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Notice;
