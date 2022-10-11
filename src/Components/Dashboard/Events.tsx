import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading";
import EventsRow from "./EventsRow";

const Events = () => {
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
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="card lg:w-3/4 w-[280px] mx-auto bg-base-100 border  shadow-md my-20">
          <div className="p-5 ">
            <h1 className="font-medium  text-gray-800 uppercase text-lg">
              All Events
            </h1>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg  overflow-x-auto">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Picure
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider ">
                        title
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Details
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
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
  );
};

export default Events;
