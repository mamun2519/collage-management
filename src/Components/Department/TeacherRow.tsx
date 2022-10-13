import React, { useContext } from "react";
import { ThemeContext } from "../../App";
interface TeacherInfo {
  teacher: any;
  key: string;
}
const TeacherRow = ({ teacher }: TeacherInfo) => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const { name, email, educationalQualification } = teacher;
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
        <p className="text-gray-900 whitespace-no-wrap">{name}</p>
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
          {educationalQualification}
        </p>
      </td>
      <td
        className={`px-5 py-5 border-b  text-sm ${
          theme == "light"
            ? "border-gray-200 bg-white "
            : "text-[#e4e6eb] border-[#414343]"
        }`}
      >
        <p className="text-gray-900 whitespace-no-wrap">{email}</p>
      </td>
      <td
        className={`px-5 py-5 border-b  text-sm ${
          theme == "light"
            ? "border-gray-200 bg-white "
            : "text-[#e4e6eb] border-[#414343]"
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

export default TeacherRow;
