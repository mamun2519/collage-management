import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import AdmissonAModel from "./AdmissonAModel";

const AdmissionDetails = () => {
  const [student, setStudent] = useState<any>({});
  const [loading, isLoading] = useState(false);
  const [again, setAgain] = useState(false);
  const { id } = useParams();
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  useEffect(() => {
    isLoading(true);
    fetch(
      `https://collage-management-backend.vercel.app/v1/student/admission/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStudent(data.student);
          isLoading(false);
        }
      });
  }, [again]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="card lg:w-3/4 w-full  mx-auto bg-base-100  my-10">
          <div className=" grid lg:grid-cols-3 grid-cols-1 lg:gap-0 gap-5">
            <div className="card lg:w-full w-[280px]  h-[500px] mx-auto bg-base-100 border shadow-md  ">
              <div className="bg-[#2374e1] h-[150px] relative rounded-f"></div>
              <div className="avatar absolute lg:top-24 top-20 lg:left-32 left-20">
                <div className="w-28 rounded-full ">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>

              <div className="flex justify-center text-white">
                <h1 className="lg:text-xl  font-medium uppercase  absolute lg:top-[20px] top-[10px]">
                  Railway Publice Collage
                </h1>
                <p className="absolute lg:top-[50px] top-[40px] font-semibold">
                  Chittagong,Bangladesh
                </p>
              </div>

              <div className="absolute lg:top-[220px] top-[200px] left-16 lg:left-24">
                <button className=" uppercase   bg-[#2374e1] text-white px-2 lg:px-6 py-1 rounded-lg">
                  Student Profile
                </button>
              </div>

              <div className="mt-[150px] px-5 pb-3">
                <div className="grid grid-cols-3 gap-20">
                  <div>
                    <p className="uppercase font-semibold   text-gray-600">
                      Name
                    </p>
                    <p className="font-semibold   text-gray-600 mt-1">
                      Department
                    </p>
                    <p className="font-semibold   text-gray-600 mt-1">Roll</p>
                    <p className="font-semibold   text-gray-600 mt-1">
                      Session
                    </p>
                    <p className="font-semibold   text-gray-600 mt-1">Gender</p>
                    <p className="font-semibold   text-gray-600 mt-1">
                      Guardian
                    </p>
                    <p className="font-semibold   text-gray-600 mt-1">Number</p>
                  </div>
                  <div className=" col-span-2">
                    <p className=" uppercase  font-semibold ">
                      {student?.name}
                    </p>
                    <p className="mt-1">{student?.classs}</p>
                    <p className="mt-1">{student?.roll}</p>
                    <p className="mt-1">{student?.session}</p>
                    <p className="mt-1">{student?.gender}</p>
                    <p className="mt-1">{student?.gerdianName}</p>
                    <p className="mt-1">{student?.number}</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#2374e1] h-[25px] "></div>
            </div>

            <div className=" col-span-2 lg:pl-8 ">
              <div className=" w-full">
                <div className=" shadow-md overflow-hidden border rounded-lg h-[500px]  ">
                  <table className="min-w-full text-white">
                    <thead className="bg-[#2374e1] text-white">
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
                          {student.admissionType}
                        </td>
                      </tr>
                      <tr>
                        <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                          Board
                        </th>
                        <td className="w-1/3 text-left py-3 px-6">
                          {student?.board}
                        </td>
                      </tr>
                      <tr>
                        <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                          Department
                        </th>
                        <td className="w-1/3 text-left py-3 px-6">
                          {student?.department}
                        </td>
                      </tr>
                      <tr>
                        <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                          Class
                        </th>
                        <td className="w-1/3 text-left py-3 px-6">
                          {student?.classs}
                        </td>
                      </tr>
                      <tr>
                        <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                          Session
                        </th>
                        <td className="w-1/3 text-left py-3 px-6">
                          {student?.session}
                        </td>
                      </tr>
                      <tr>
                        <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                          Admission Fee
                        </th>
                        <td className="w-1/3 text-left py-3 px-6">
                          {student?.admissionFee}
                        </td>
                      </tr>
                      <tr>
                        <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                          Last Passing Year
                        </th>
                        <td className="w-1/3 text-left py-3 px-6">
                          {student?.passingYear}
                        </td>
                      </tr>
                      <tr>
                        <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                          Last Passing Academy
                        </th>
                        <td className="w-1/3 text-left py-3 px-6">
                          {student?.passingAcademy}
                        </td>
                      </tr>
                      <tr>
                        <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                          Admision Date
                        </th>
                        <td className="w-1/3 text-left  px-6">
                          {student?.joinDate}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="bg-[#2374e1] h-[25px] "></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="card lg:w-full w-[280px] bg-base-100  shadow-lg border">
              <div className="card-boy">
                <div className=" w-full">
                  <div className=" lg:overflow-hidden overflow-scroll rounded  border-gray-200">
                    <table className="min-w-full text-white">
                      <thead className="bg-[#2374e1] text-white">
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
                            {student?.name}
                          </td>
                          <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                            Gerdian Name
                          </th>
                          <td className="w-1/3 text-left py-3 px-6">
                            {student?.gerdianName}
                          </td>
                        </tr>
                        <tr>
                          <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                            Email
                          </th>
                          <td className="w-1/3 text-left py-3 px-6">
                            {/* {user?.email} */}
                          </td>
                          <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                            Age
                          </th>
                          <td className="w-1/3 text-left py-3 px-6">
                            {student?.age}
                          </td>
                        </tr>
                        <tr>
                          <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                            Number
                          </th>
                          <td className="w-1/3 text-left py-3 px-6">
                            {student?.number}
                          </td>
                          <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                            Address
                          </th>
                          <td className="w-1/3 text-left py-3 px-6">
                            {student?.number}
                          </td>
                        </tr>
                        <tr>
                          <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                            Gender
                          </th>
                          <td className="w-1/3 text-left py-3 px-6">
                            {student?.gender}
                          </td>
                          <th className="text-left py-3 px-6 font-semibold text-sm">
                            Date Of Births
                          </th>
                          <td className=" text-left py-3 px-6">
                            {student?.birthday}
                          </td>
                        </tr>
                        <tr>
                          <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                            Village
                          </th>
                          <td className="w-1/3 text-left py-3 px-6">
                            {student?.village}
                          </td>
                          <th className="w-1/3 text-left py-3 px-6 font-semibold text-sm">
                            Country
                          </th>
                          <td className="w-1/3 text-left py-3 px-6">
                            {student?.country}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex justify-center mt-10">
            <button
              onClick={() => openModal()}
              className="bg-[#2374e1] font-semibold text-white px-8 rounded-lg py-2"
            >
              Admission Accpect Now
            </button>
          </div>
          {isOpen && (
            <AdmissonAModel
              setAgain={setAgain}
              id={id}
              isOpen={isOpen}
              closeModal={closeModal}
            />
          )}
        </div>
      )}
    </>
  );
};

export default AdmissionDetails;
