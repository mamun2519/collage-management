import React from "react";

interface RoutineInfo {
  routine: any;
  key: string;
}
const ExamRoutineRow = ({ routine }: RoutineInfo) => {
  const { date, day, subject, subjectCode, start, end } = routine;
 
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{date}</p>
        <p className="text-gray-900 whitespace-no-wrap">{day}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {start} <span className=" font-semibold px-3">To</span> {end}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{subjectCode}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{subject}</p>
      </td>
    </tr>
  );
};

export default ExamRoutineRow;
