import React from 'react';
import { useNavigate } from 'react-router-dom';
interface Student {
      student:any
      key:string
}
const ResultRow = ({student}:Student) => {
      const {name , roll , board , session , _id } = student
      const navigate = useNavigate()
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
              {board }
            
              </p>
             
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-red-500 whitespace-no-wrap font-semibold">
              { session }
            
              </p>
             
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
             
              <button onClick={()=>navigate(`/dashboard/results/published/${_id}`)}  className='bg-[#2374e1] font-semibold text-white px-4 rounded-lg py-1'>Published Now</button>
            </td>
          </tr>
      );
};

export default ResultRow;