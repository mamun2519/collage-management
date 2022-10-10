import { Tab } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AllEvent from "./EventDetails";
import InstiuteEvent from "./InstiuteEvent";
import NationalEvent from "./NoticeDetailss";

const Event = () => {
  const [event, setEvent] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/v1/event")
      .then((res) => res.json())
      .then((data) => setEvent(data.events));
  }, []);

  return (
    <div className="my-40  max-w-7xl m-auto px-3">
      <div className="w-max mx-auto">
        <div className="border-b-2 rounded-full border-red-500 ">
          <h1 className="text-4xl pb-2 text-center mt-10 px-12  font-medium uppercase">
            {" "}
            Events
          </h1>
        </div>
      </div>

      <div className="mt-10">
        <div className=" grid lg:grid-cols-3 grid-cols-1 gap-10 mt-10">
          {event?.map((event: any) => (
            <div key={event?._id} className="allEvent">
              <div className="card  glass lg:h-76 h-full relative">
                <figure>
                  <img
                    className="w-full h-[250px]"
                    src={event?.picture?.url}
                    alt="car!"
                  />
                </figure>
                <div className="p-4  ">
                  <h2 className="card-title">{event?.title}</h2>
                </div>
                <button
                  onClick={() => navigate(`/eventDetails/${event?._id}`)}
                  className="bg-red-500 mt-3 text-white px-6 py-2 border-none rounded-md"
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
