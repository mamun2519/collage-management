import React from 'react';
import { useNavigate } from 'react-router-dom';
interface AdmissionInfo {
      admission:any
      key:string
}
const AdmissionLIstRow = ({admission}:AdmissionInfo) => {
      const navigate = useNavigate()
  
      const {name , admissionType , classs , verifay , _id} = admission
      
      return (
            <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                  {name}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap up">
               {admissionType}
              </p>
            
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
              {classs}
              </p>
             
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
              {verifay === false && "No verifay"}
              {verifay === true && "Verified"}
              </p>
             
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
             
              <button onClick={()=>navigate(`/dashboard/admissionList/addmissionDetails/${_id}`)} className='bg-red-500 text-white px-4 rounded-lg py-1'>View More</button>
            </td>
          </tr>
      );
};

export default AdmissionLIstRow;