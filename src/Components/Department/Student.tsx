import React, { FC } from "react";
import StudentRow from "./StudentRow";
interface StudentInfo{
  students: string[]
}
const Student = ({students}:StudentInfo) => {
  console.log(students);
  return (
    <div className="my-10">
      <div className="card  w-full mx-auto bg-base-100 border  shadow-lg">
        <div className="p-5 ">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg  overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider ">
                      Roll
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Reg
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider flex justify-center">
                      More Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {students?.map((student) =>  <StudentRow key={student} student={student} />)}
                 
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* <div className="bg-red-400 h-[25px] "></div> */}
      </div>
    </div>
  );
};

export default Student;
