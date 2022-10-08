import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
interface EventInfo {
  event: any;
  key: string;
}
const EventsRow = ({ event }: EventInfo) => {
  const navigate = useNavigate();

  const { title, picture, _id } = event;
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="avatar ">
          <div className="w-12 rounded-full">
            <img src={picture.url} />
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap up">{title}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() =>
            navigate(`/dashboard/admissionList/addmissionDetails/${_id}`)
          }
          className="bg-red-500 text-white px-4 rounded-lg py-1 font-semibold up"
        >
          View More
        </button>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className=" text-2xl text-red-500 px-2">
          <AiFillDelete />
        </span>
      </td>
    </tr>
  );
};

export default EventsRow;
