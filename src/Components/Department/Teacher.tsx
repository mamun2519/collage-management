import React from "react";
import TeacherRow from "./TeacherRow";
interface TeacherInfo {
  teachers: string[];
}
const Teacher = ({ teachers }: TeacherInfo) => {
  return (
    <div className="mt-10 mb-20">
      <div className="card lg:w-3/4 w-full mx-auto bg-base-100 border  shadow-lg m">
        <div className="p-5 ">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg  overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Teacher Picture
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider ">
                      educational Qualification
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider flex justify-center">
                      More Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {teachers?.map((teacher) => (
                    <TeacherRow key={teacher} teacher={teacher} />
                  ))}
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

export default Teacher;
