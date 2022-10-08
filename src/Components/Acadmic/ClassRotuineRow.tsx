import React from 'react';
interface Routine {
      routine: any
}

const ClassRotuineRow = ({routine}:Routine) => {
     
      const {day , firstPeriode , forthPeriode , secendPeriode , thardePeriode} = routine
     
      return (
            <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">{day}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">{firstPeriode}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">{secendPeriode}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">{thardePeriode}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">{forthPeriode}</p>
            </td>
          </tr>
      );
};

export default ClassRotuineRow;