import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../App";
interface EventInfo {
  event: any;
  key: string;
}
const EventsRow = ({ event }: EventInfo) => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const navigate = useNavigate();

  const { title, picture, _id } = event;
  return (
    <tr>
      <td
        className={`px-5 py-5 border-b  text-sm ${
          theme == "light"
            ? "border-gray-200 bg-white "
            : "text-[#e4e6eb] border-[#414343]"
        }`}
      >
        <div className="avatar ">
          <div className="w-12 rounded-full">
            <img src={picture.url} />
          </div>
        </div>
      </td>
      <td
        className={`px-5 py-5 border-b  text-sm ${
          theme == "light"
            ? "border-gray-200 bg-white "
            : "text-[#e4e6eb] border-[#414343]"
        }`}
      >
        <p
          className={`whitespace-no-wrap ${
            theme == "light" ? "text-gray-900 " : "text-[#e4e6eb]"
          }`}
        >
          {title}
        </p>
      </td>
      <td
        className={`px-5 py-5 border-b  text-sm ${
          theme == "light"
            ? "border-gray-200 bg-white "
            : "text-[#e4e6eb] border-[#414343]"
        }`}
      >
        <button
          onClick={() =>
            navigate(`/dashboard/admissionList/addmissionDetails/${_id}`)
          }
          className={` font-semibold text-white px-4 rounded-lg py-1 ${
            theme == "light" ? "bg-[#23395b]" : "bg-[#414343]"
          }`}
        >
          View More
        </button>
      </td>
      <td
        className={`px-5 py-5 border-b  text-sm ${
          theme == "light"
            ? "border-gray-200 bg-white "
            : "text-[#e4e6eb] border-[#414343]"
        }`}
      >
        <button className="text-red-500 text-2xl px-4 rounded-lg py-1 font-semibold up">
          <AiFillDelete />
        </button>
      </td>
    </tr>
  );
};

export default EventsRow;
