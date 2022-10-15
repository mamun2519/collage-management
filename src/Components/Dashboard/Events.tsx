import React, { useEffect, useState, useContext } from "react";
import Loading from "../Shared/Loading";
import EventsRow from "./EventsRow";
import { ThemeContext } from "../../App";
import { MdKeyboardArrowRight } from "react-icons/md";
const Events = () => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const [events, setEvents] = useState([]);
  const [loading, isLoading] = useState(false);
  useEffect(() => {
    isLoading(true);
    fetch("http://localhost:5000/v1/event")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setEvents(data.events);
          isLoading(false);
        }
      });
  }, []);
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

      <span className="text-white  font-medium">Events</span>
    </div>
  </div>
    
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div
          className={`card  lg:w-3/4 w-[280px] mx-auto border  shadow-md my-20 ${
            theme == "light" ? "bg-base-100" : "bg-[#242526] border-[#414343]"
          }`}
        >
          <div className="p-5 ">
            <h1
              className={`font-medium   uppercase text-lg ${
                theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
              }`}
            >
              All Events
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
                        Picure
                      </th>
                      <th
                        className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                          theme == "light"
                            ? "bg-gray-100 text-gray-600 border-gray-200"
                            : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                        }`}
                      >
                        title
                      </th>
                      <th
                        className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                          theme == "light"
                            ? "bg-gray-100 text-gray-600 border-gray-200"
                            : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                        }`}
                      >
                        Details
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
                    {events?.map((event: any) => (
                      <EventsRow key={event._id} event={event} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Events;
