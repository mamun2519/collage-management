import React from "react";
interface TeacherInfo {
  teacher: any;
  key: string;
}
const TeacherRow = ({ teacher }: TeacherInfo) => {
  const { name, email, educationalQualification } = teacher;
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {educationalQualification}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex justify-center">
        <button className="bg-[#2374e1] text-white px-4 py-1 rounded-lg">
          View Now
        </button>
      </td>
    </tr>
  );
};

export default TeacherRow;
