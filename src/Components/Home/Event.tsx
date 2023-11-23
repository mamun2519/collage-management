import { Tab } from "@headlessui/react";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AllEvent from "./EventDetails";
import InstiuteEvent from "./InstiuteEvent";
import NationalEvent from "./NoticeDetailss";
import { ThemeContext } from "../../App";
const Event = () => {
  const [event, setEvent] = useState([]);
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/v1/event")
      .then((res) => res.json())
      .then((data) => setEvent(data.events));
  }, []);

  console.log(event);

  return (
    <div className="my-40  max-w-7xl m-auto px-3">
      <div className="w-max mx-auto">
        <div
          className={`border-b-[3px] rounded-full ${
            theme == "light"
              ? "border-[#166364] "
              : "border-[#e4e6eb] text-[#e4e6eb]"
          }`}
        >
          <h1 className="text-4xl pb-2 text-center mt-10 px-12  font-medium uppercase">
            {" "}
            Events
          </h1>
        </div>
      </div>

      <div className="mt-20">
        <div className=" grid lg:grid-cols-3 grid-cols-1 gap-10 mt-10">
          {event?.map((event: any) => (
            <div key={event?._id} className="allEvent">
              <div className="card  glass lg:h-76 h-full relative  border shadow  ">
                <figure>
                  <img
                    className="w-full h-[250px]"
                    src={event?.picture?.url}
                    alt="car!"
                  />
                </figure>
                <div className="p-4  ">
                  <h2
                    className={`card-title ${
                      theme == "light"
                        ? "border-[#2374e1] "
                        : "border-[#e4e6eb] text-[#e4e6eb]"
                    }`}
                  >
                    {event?.title}
                  </h2>
                </div>
                <button
                  onClick={() => navigate(`/eventDetails/${event?._id}`)}
                  className={` font-semibold mt-3  px-6 py-2 border-none rounded-md ${
                    theme == "light"
                      ? "bg-[#23395b] border-green-900 text-white"
                      : "text-[#e4e6eb] bg-[#414343]"
                  }`}
                >
                  Read More
                </button>
              </div>

              {/* <div className="bg-white px-10 py-3 w-44 opacity-0 goEvent absolute top-[199px] left-[120px] text-black  font-medium rounded-lg">
              <p>View Details</p>
            </div>
            <div className="bg-white opacity-0 goEvent  p-3 w-1 absolute top-[232px] left-[197px] translate-x-30  rotate-45"></div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
