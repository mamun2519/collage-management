import React from "react";

interface RoutineInfo {
  rotine: any;
  key: string;
}
const RoutineRow = ({ rotine }: RoutineInfo) => {

  return (
    <>
      {rotine?.classRoutine?.map((routine:any) => (
        <>
          <tr>
            
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            
              <p className="text-gray-900 whitespace-no-wrap">
             
                {routine?.day}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              
              <p className="text-gray-900 whitespace-no-wrap">
              {routine?.firstPeriode}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
             
              <p className="text-gray-900 whitespace-no-wrap">
              {routine?.secendPeriode}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
             
              <p className="text-gray-900 whitespace-no-wrap">
              {routine?.thardePeriode}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
             
              <p className="text-gray-900 whitespace-no-wrap">
              {routine?.forthPeriode}
              </p>
            </td>
          </tr>
       
            
        
          
        </>
      ))}
    </>
  );
};

export default RoutineRow;
