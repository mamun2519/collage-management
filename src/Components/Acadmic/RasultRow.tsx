import React from 'react';
interface Routine {
      result: any
}
const RasultRow = ({result}:Routine) => {
      const {subject , studentMark , latterGrade , gradePoint } = result
     
      return (
            <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">{subject }</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">{studentMark}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">{latterGrade}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">{gradePoint}</p>
            </td>
          
          </tr>
      );
};

export default RasultRow;