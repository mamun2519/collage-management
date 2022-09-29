import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
interface Person {
  data: {
    passingAcademy: number;
    passingYear: string;
    admissionType: string;
    board: string;
    department: string;
    class: string;
    session: string;
    admissionFee: string;
  };
  subject: [{
    title:string
  }]
}

interface Student{

    name:string,
    address:string,
    age:string,
    birthday:string,
    country:string,
    email:string,
    gender:string,
    gerdianName:string,
    number:string,
    village:string,
  
}
const AdmissonPreview = () => {
  const navigate = useNavigate()
  const [previewInfo, setPreview] = useState<Person>();
  const [personalInfo ,setPersonalInfo]=useState<Student>()
  useEffect(() => {
    const data: any = localStorage.getItem("admissionInfo");
    setPreview(JSON.parse(data));
    const studeentInfo: any = localStorage.getItem("studentInfo");
    setPersonalInfo(JSON.parse(studeentInfo));
  }, []);
  console.log(personalInfo);
  return (
    <div className="my-10 max-w-7xl m-auto px-3">
      <div className="card w-full bg-base-100 border  pb-5">
        <div className="bg-red-500 h-16 flex items-center  justify-between px-8">
          <div>
            <span onClick={()=>navigate("/onlineAdmission/personalInfromation")} className="bg-white text-black px-6 py-1  rounded-lg">
              Back
            </span>
          </div>
          <div>
            <input
              className="bg-white text-black px-6 py-1  rounded-lg"
              type="submit"
              value="Payment Now"
            />
          </div>
        </div>
        <div className="w-max mx-auto">
          <div className="border-b-2 rounded-full border-red-500 ">
            <h1 className="text-xl pb-2 text-center mt-10 px-12  font-medium uppercase">
              Admission Preview
            </h1>
          </div>
        </div>

        <div className="mt-5 p-5">
          <div className=" grid lg:grid-cols-2 grid-cols-1 gap-10">
            <div className="card wfull bg-base-100 shadow-sm border">
              <div className="card-boy">
                {/* <!-- component --> */}
                <div className=" w-full">
                  <div className="shadow overflow-hidden rounded  border-gray-200">
                    <table className="min-w-full text-white">
                      <thead className="bg-red-500 text-white">
                        <tr>
                          <th className="w-1/3 text-left py-3 px-6 uppercase font-semibold text-sm">
                            Admisson Info
                          </th>
                          <td className="w-1/3 text-left py-3 px-6 uppercase font-semibold ">
                            Details
                          </td>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                            Admission Type
                          </th>
                          <td className="w-1/3 text-left py-3 px-6">
                            {previewInfo?.data.admissionType}
                          </td>
                        </tr>
                        <tr>
                          <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                            Board
                          </th>
                          <td className="w-1/3 text-left py-3 px-6">
                            {previewInfo?.data?.board}
                          </td>
                        </tr>
                        <tr>
                          <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                            Department
                          </th>
                          <td className="w-1/3 text-left py-3 px-6">
                            {previewInfo?.data?.department}
                          </td>
                        </tr>
                        <tr>
                          <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                            Class
                          </th>
                          <td className="w-1/3 text-left py-3 px-6">
                            {previewInfo?.data?.class}
                          </td>
                        </tr>
                        <tr>
                          <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                            Session
                          </th>
                          <td className="w-1/3 text-left py-3 px-6">
                            {previewInfo?.data?.session}
                          </td>
                        </tr>
                        <tr>
                          <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                            Admission Fee
                          </th>
                          <td className="w-1/3 text-left py-3 px-6">
                            {previewInfo?.data?.admissionFee}
                          </td>
                        </tr>
                        <tr>
                          <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                            Last Passing Year
                          </th>
                          <td className="w-1/3 text-left py-3 px-6">
                            {previewInfo?.data?.passingYear}
                          </td>
                        </tr>
                        <tr>
                          <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                            Last Passing Academy
                          </th>
                          <td className="w-1/3 text-left py-3 px-6">
                            {previewInfo?.data?.passingAcademy}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card wfull bg-base-100 h-full  shadow-sm border">
                <div className="bg-red-500 h-12 flex items-center  px-6 text-white uppercase font-semibold">
                 <h1>First Year    "{previewInfo?.data?.class}" Book List</h1>
                 <div>
                  
                 </div>
                </div>
                <div className="p-5  grid lg:grid-cols-3 grid-cols-2 gap-3">
                {previewInfo?.subject?.map((sub) => 
                    <div className="h-16 flex items-center  shadow-sm justify-center border rounded-lg">{sub?.title}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" p-5">
        <div className="card w-full bg-base-100 shadow-sm border">
              <div className="card-boy">
                <div className=" w-full">
                  <div className="shadow  lg:overflow-hidden overflow-scroll rounded  border-gray-200">
                    <table className="min-w-full text-white">
                      <thead className="bg-red-500 text-white">
                        <tr>
                          <th className="w-1/3 text-left py-3 px-6 uppercase font-semibold text-sm">
                            Personal Info
                          </th>
                          <td className="w-1/3 text-left py-3 px-6 uppercase font-semibold ">
                            Details
                          </td>
                          <th className="w-1/3 text-left py-3 px-6 uppercase font-semibold text-sm">
                            Personal Info
                          </th>
                          <td className="w-1/3 text-left py-3 px-6 uppercase font-semibold ">
                            Details
                          </td>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                            Name
                          </th>
                          <td className="w-1/3 text-left py-3 px-6">
                            {personalInfo?.name}
                          </td>
                          <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                            Gerdian Name
                          </th>
                          <td className="w-1/3 text-left py-3 px-6">
                            {personalInfo?.gerdianName}
                          </td>
                        </tr>
                        <tr>
                          <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                            Email
                          </th>
                          <td className="w-1/3 text-left py-3 px-6">
                            {personalInfo?.email}
                          </td>
                          <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                            Age
                          </th>
                          <td className="w-1/3 text-left py-3 px-6">
                            {personalInfo?.age}
                          </td>
                        </tr>
                        <tr>
                          <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                            Number 
                          </th>
                          <td className="w-1/3 text-left py-3 px-6">
                            {personalInfo?.number}
                          </td>
                          <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                           Address
                          </th>
                          <td className="w-1/3 text-left py-3 px-6">
                            {personalInfo?.number}
                          </td>
                        </tr>
                        <tr>
                          <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                            Gender 
                          </th>
                          <td className="w-1/3 text-left py-3 px-6">
                            {personalInfo?.gender}
                          </td>
                          <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                            Date Of Births
                          </th>
                          <td className="w-1/3 text-left py-3 px-6">
                            {personalInfo?.birthday}
                          </td>
                        </tr>
                        <tr>
                          <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                          Village
                          </th>
                          <td className="w-1/3 text-left py-3 px-6">
                            {personalInfo?.village}
                          </td>
                          <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                          Country
                          </th>
                          <td className="w-1/3 text-left py-3 px-6">
                            {personalInfo?.country}
                          </td>
                        </tr>
                       
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
        </div>

        {/* <div className=" flex justify-center">
          <button className="bg-red-500 text-white px-8 rounded-lg py-2">Payment Now</button>

        </div> */}
      </div>
    </div>
  );
};

export default AdmissonPreview;
