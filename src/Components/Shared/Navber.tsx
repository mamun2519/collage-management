import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
const Navber = () => {
  const menus = [
    {
      name: "Admission List",
      link: "/dashboard/admissionList",
      icon: MdOutlineDashboard,
    },
    {
      name: "Student List",
      link: "/dashboard/studentList",
      icon: AiOutlineUser,
    },
    {
      name: "Add Class Routine",
      link: "/dashboard/classRoutine",
      icon: FiMessageSquare,
    },
    {
      name: "Add Exam Routine",
      link: "/dashboard/examRoutine",
      icon: TbReportAnalytics,
      margin: true,
    },

    { name: "Result Published", link: "/dashboard/results", icon: FiFolder },
    { name: "Notices", link: "/dashboard/notice", icon: FiFolder },
    { name: "Add Notice", link: "/dashboard/addNotice", icon: FiFolder },
    {
      name: "Teacher List",
      link: "/dashboard/teacherList",
      icon: FiShoppingCart,
    },
    {
      name: "Add Teacher",
      link: "/dashboard/addTeacher",
      icon: FiShoppingCart,
    },
    {
      name: "Events",
      link: "/dashboard/events",
      icon: AiOutlineHeart,
      margin: true,
    },
    { name: "Add Events", link: "/dashboard/addEvents", icon: AiOutlineHeart },
    // { name: "", link: "/", icon: AiOutlineHeart,  },
    { name: "User List", link: "/dashboard/userList", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  const path = useLocation();

  return (
    <section className="flex ">
      <div
        className={`bg-[#166364]  min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${menu?.margin && "mt-5"} ${
                path.pathname === menu.link && "bg-[#23395b]"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      {/* page content  */}
      <div className="px-5 w-full">
        <Outlet />
      </div>
    </section>
  );
};

export default Navber;
