import React from 'react';
interface Student {
      student:any
      key:string
}
const StudentListRow = ({student}:Student) => {
      const {name , roll , verifay ,} = student
      return (
            <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                  {name}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap up">
               {name}
              </p>
            
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
              {roll}
              </p>
             
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-red-500 whitespace-no-wrap font-semibold">
              {verifay === false && "No Verified"}
              {verifay === true && "Verified"}
              </p>
             
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
             
              <button  className='bg-red-500 text-white px-4 rounded-lg py-1'>View More</button>
            </td>
          </tr>
      );
};

export default StudentListRow;