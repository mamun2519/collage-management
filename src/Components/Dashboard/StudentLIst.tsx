import React, { useState } from "react";

const StudentLIst = () => {
      const [studentList , setStudentList] = useState([])
      const [loading , isLoading] = useState(false)
  const admission = [
    { title: "Higer Secondary Admission" },
    { title: "Bachelor of Busniness Studies (BBS)" },
    { title: "Bachelor of Science (BSC)" },
    { title: "Bachelor of Arts (BA)" },
    { title: "Bachelor of Busniness Administraion (BBA)" },
    { title: "Graduate Admission (Master's)" },
  ];
  const admissionRequestHendeler = (admissionName:string):void =>{
      console.log(admissionName);
      isLoading(true)
      fetch(``)
      .then(res => res.json())
      .then(data => console.log(data))

  }
  return (
    <div className="my-10 lg:w-3/4 w-full mx-auto">
      <div className="  grid  lg:grid-cols-3 grid-cols-2 gap-10">
        {admission.map((ad: any) => (
          <div
          onClick={()=>admissionRequestHendeler(ad.title)}
            key={ad}
            className="card  flex justify-center items-center  bg-base-100 border h-28 lg:w-80 shadow-md px-2"
          > 
          <div>lkh</div>
          <div>
            <p>{ad.title}</p>
          </div>
            
          </div>
        ))}
      </div>

     {studentList.length !== 0 && <div className="card  w-full  bg-base-100 border  shadow-md my-20">
        <div className="p-5 ">
            <h1 className="font-medium  text-gray-800 uppercase text-lg">Student Admission List</h1>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg  overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Student Piture
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider ">
                      Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Roll
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
                  {/* {admissions?.map((admission:any)=> <AdmissionLIstRow key={admission._id} admission={admission} />)} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>} 
    </div>
  );
};

export default StudentLIst;
