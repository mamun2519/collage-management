import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading";
import AdmissionLIstRow from "./AdmissionLIstRow";

const AdmissionList = () => {
  const [admissions , setAdmissions] = useState([])
  const [loading , isLoading] = useState(false)
  useEffect(()=>{
    isLoading(true)
    fetch("http://localhost:5000/v1/student/admission/")
    .then(res => res.json())
    .then(data => {
      if(data.success){
        setAdmissions(data.student)
        isLoading(false)
      }
    })
    
  },[])
 
  return (
    <div>
      {loading ? 
      <Loading/>
    :
    <div className="card lg:w-3/4 w-[280px] mx-auto bg-base-100 border  shadow-md my-20">
        <div className="p-5 ">
            <h1 className="font-medium  text-gray-800 uppercase lg:text-lg">Student Admission List</h1>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg  overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Student Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider ">
                      Admission Type
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Department
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Verifay
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Details
                    </th>
                
                  </tr>
                </thead>
                <tbody>
                  {admissions?.map((admission:any)=> !admission.verifay &&
                  <AdmissionLIstRow key={admission._id} admission={admission} />)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    }
      
    </div>
  );
};

export default AdmissionList;
