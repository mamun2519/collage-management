import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../App";
interface Student {
  student: any;
  key: string;
}
const ResultRow = ({ student }: Student) => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const { name, roll, board, session, _id } = student;
  const navigate = useNavigate();
  return (
    <tr>
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
          {name}
        </p>
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
          {name}
        </p>
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
          {roll}
        </p>
      </td>
      <td
        className={`px-5 py-5 border-b  text-sm ${
          theme == "light"
            ? "border-gray-200 bg-white "
            : "text-[#e4e6eb] border-[#414343]"
        }`}
      >
        <p className="text-red-500 whitespace-no-wrap font-semibold">{board}</p>
      </td>
      <td
        className={`px-5 py-5 border-b  text-sm ${
          theme == "light"
            ? "border-gray-200 bg-white "
            : "text-[#e4e6eb] border-[#414343]"
        }`}
      >
        <p className="text-red-500 whitespace-no-wrap font-semibold">
          {session}
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
          onClick={() => navigate(`/dashboard/results/published/${_id}`)}
          className={` font-semibold text-white px-4 rounded-lg py-1 ${
            theme == "light" ? "bg-[#23395b]" : "bg-[#414343]"
          }`}
        >
          Published Now
        </button>
      </td>
    </tr>
  );
};

export default ResultRow;
