import { Tab } from "@headlessui/react";
import React from "react";
import AllEvent from "./AllEvent";
import InstiuteEvent from "./InstiuteEvent";
import NationalEvent from "./NationalEvent";

const Event = () => {
  const Tabs = [
    {
      name: "All",
      content: (
        <div data-aos="fade-right" data-aos-duration="1000">
          <AllEvent/>
        </div>
      ),
    },
    {
      name: "National Day",
      content: (
        <div data-aos="fade-right" data-aos-duration="1000">
         <NationalEvent/>
        </div>
      ),
    },
    {
      name: "Institutional Day",
      content: (
        <div data-aos="fade-right" data-aos-duration="1000">
        <InstiuteEvent/>
        </div>
      ),
    },
  ];
  return (
    <div className="my-40  max-w-7xl m-auto px-3">
       <div className="w-max mx-auto">
      
      <div className="border-b-2 rounded-full border-red-500 ">
      <h1 className="text-4xl pb-2 text-center mt-10 px-12  font-medium uppercase"> Events</h1>
      </div>

      </div>

      <div className="mt-10">
        <div className="flex justify-center  lg:px-4">
          <div className="lg:card cards w-full bg-base-100  ">
            <div className="lg:card-body lg:p-4 ">
              <Tab.Group>
                <Tab.List className="lg:flex text-center gap-10   lg:px-[4px] border  rounded-lg  bg-slate-100  lg:mx-auto justify-center">
                  {Tabs.map((item, index) => (
                    <Tab
                      key={index}
                      className={({ selected }) =>
                        //   `w-full relative  px-4 py-2.5 focus:outline-none whitespace-nowrap`,
                        selected
                          ? "transition duration-500 py-[5px] px-6 bg-[#062C30]  text-white rounded-lg "
                          : "  py-[5px] px-6"
                      }
                    >
                      {index < Tabs.length - 1 && (
                        <span className=" absolute right-0 w-[1px] h-6 top-1/2 -translate-y-1/2 bg-gray-100" />
                      )}
                      <span className="text-xl">{item.name}</span>
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels className="pt-5">
                  {Tabs.map((item, index) => (
                    <Tab.Panel>{item.content}</Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
