import React , {useContext} from "react";
import { AiFillDelete } from "react-icons/ai";
import { ThemeContext } from "../../App";
interface Student {
  student: any;
  key: string;
}
const TeacherRow = ({ student }: Student) => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const { name, email, collageRole } = student;
  console.log(student);
  return (
    <tr>
      <td className={`px-5 py-5 border-b  text-sm ${
          theme == "light"
            ? "border-gray-200 bg-white "
            : "text-[#e4e6eb] border-[#414343]"
        }`}>
        <p className={`whitespace-no-wrap ${
            theme == "light" ? "text-gray-900 " : "text-[#e4e6eb]"
          }`}>{name}</p>
      </td>
      <td className={`px-5 py-5 border-b  text-sm ${
          theme == "light"
            ? "border-gray-200 bg-white "
            : "text-[#e4e6eb] border-[#414343]"
        }`}>
        <p className={`whitespace-no-wrap ${
            theme == "light" ? "text-gray-900 " : "text-[#e4e6eb]"
          }`}>{name}</p>
      </td>
      <td className={`px-5 py-5 border-b  text-sm ${
          theme == "light"
            ? "border-gray-200 bg-white "
            : "text-[#e4e6eb] border-[#414343]"
        }`}>
        <p className={`whitespace-no-wrap ${
            theme == "light" ? "text-gray-900 " : "text-[#e4e6eb]"
          }`}>{collageRole}</p>
      </td>
      <td className={`px-5 py-5 border-b  text-sm ${
          theme == "light"
            ? "border-gray-200 bg-white "
            : "text-[#e4e6eb] border-[#414343]"
        }`}>
        <p className="text-red-500 whitespace-no-wrap font-semibold">{email}</p>
      </td>
      <td className={`px-5 py-5 border-b  text-sm ${
          theme == "light"
            ? "border-gray-200 bg-white "
            : "text-[#e4e6eb] border-[#414343]"
        }`}>
        <button className={` font-semibold text-white px-4 rounded-lg py-1 ${
            theme == "light" ? "bg-[#2374e1]" : "bg-[#414343]"
          }`}>
          View More
        </button>
      </td>
      <td className={`px-5 py-5 border-b  text-sm ${
          theme == "light"
            ? "border-gray-200 bg-white "
            : "text-[#e4e6eb] border-[#414343]"
        }`}>
        <span className="text-2xl text-red-500">
          <AiFillDelete />
        </span>
      </td>
    </tr>
  );
};

export default TeacherRow;
