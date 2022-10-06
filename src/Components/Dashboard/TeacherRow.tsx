import React from "react";
import { AiFillDelete } from "react-icons/ai";
interface Student {
  student: any;
  key: string;
}
const TeacherRow = ({ student }: Student) => {
  const { name, email, collageRole } = student;
  console.log(student);
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap up">{name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{collageRole}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-red-500 whitespace-no-wrap font-semibold">{email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button className="bg-red-500 text-white px-4 rounded-lg py-1">
          View More
        </button>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="text-2xl text-red-500">
          <AiFillDelete />
        </span>
      </td>
    </tr>
  );
};

export default TeacherRow;
