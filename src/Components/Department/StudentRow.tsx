import React from "react";
interface StudentInfo {
  student: any;
  key: string;
}
const StudentRow = ({ student }: StudentInfo) => {
  const { name, roll } = student;
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{roll}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">N/A</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex justify-center">
        <button className="bg-[#2374e1] text-white px-4 py-1 rounded-lg">
          View Now
        </button>
      </td>
    </tr>
  );
};

export default StudentRow;
