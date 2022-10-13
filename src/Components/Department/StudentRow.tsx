import React, { useContext } from "react";
import { ThemeContext } from "../../App";
interface StudentInfo {
  student: any;
  key: string;
}
const StudentRow = ({ student }: StudentInfo) => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const { name, roll } = student;
  return (
    <tr>
      <td
        className={`px-5 py-5 border-b  text-sm ${
          theme == "light"
            ? "border-gray-200 bg-white "
            : "text-[#e4e6eb] bg-[#242526] border-[#414343]"
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
            : "text-[#e4e6eb] bg-[#242526] border-[#414343]"
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
            : "text-[#e4e6eb] bg-[#242526] border-[#414343]"
        }`}
      >
        <p
          className={`whitespace-no-wrap ${
            theme == "light" ? "text-gray-900 " : "text-[#e4e6eb]"
          }`}
        >
          N/A
        </p>
      </td>
      <td
        className={`px-5 py-5 border-b border-gray-200 bg-white text-sm flex justify-center ${
          theme == "light"
            ? "border-gray-200 bg-white "
            : "text-[#e4e6eb] bg-[#242526] border-[#414343]"
        }`}
      >
        <button
          className={` font-semibold text-white px-4 rounded-lg py-1 ${
            theme == "light" ? "bg-[#2374e1]" : "bg-[#414343]"
          }`}
        >
          View Now
        </button>
      </td>
    </tr>
  );
};

export default StudentRow;
