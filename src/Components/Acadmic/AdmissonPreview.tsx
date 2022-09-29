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
const AdmissonPreview = () => {
  const navigate = useNavigate()
  const [previewInfo, setPreview] = useState<Person>();
  useEffect(() => {
    const data: any = localStorage.getItem("admissionInfo");
    setPreview(JSON.parse(data));
  }, []);
  console.log(previewInfo?.data);
  return (
    <div className="my-10 max-w-7xl m-auto px-3">
      <div className="card w-full bg-base-100 border  pb-5">
        <div className="bg-red-500 h-16 flex items-center  justify-between px-8">
          <div>
            <button onClick={()=>navigate("/onlineAdmission/personalInfromation")} className="bg-white text-black px-6 py-1  rounded-lg">
              Back
            </button>
          </div>
          <div>
            <input
              className="bg-white text-black px-6 py-1  rounded-lg"
              type="submit"
              value=" Next"
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

        <div className="mt-10 p-5">
          <p></p>
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
                <div className="p-5  grid grid-cols-3 gap-3">
                {previewInfo?.subject?.map((sub) => 
                    <div className="h-16 flex items-center  shadow-sm justify-center border rounded-lg">{sub?.title}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissonPreview;
