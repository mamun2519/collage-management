import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsStopwatch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

interface UserSubmitForm {
  day: string;
  session: string;
  firstPeriode: string;
  secendPeriode: string;
  thardePeriode: string;
  forthPeriode: string;
}
const AddClassRoutine = () => {
  const [selected, setSelected] = useState<any>(false);
  const [dataDispaly, SetDataDisplay] = useState(false);
  const [edit , setEdit] = useState(false)
  const [selectedSession , SetSelectedSession] = useState("")
  const routine = {
    day: "",
    firstPeriode: "",
    secendPeriode: "",
    thardePeriode: "",
    forthPeriode: "",
  };
  const [routines, setRoutine] = useState([routine]);
  const admission = [
    { title: "Higer Secondary Admission" },
    { title: "Bachelor of Busniness Studies (BBS)" },
    { title: "Bachelor of Science (BSC)" },
    { title: "Bachelor of Arts (BA)" },
    { title: "Bachelor of Busniness Administraion (BBA)" },
    { title: "Graduate Admission (Master's)" },
  ];
  const section = [
    { title: "Select Section" },
    { title: "2017-2018" },
    { title: "2019-2020" },
    { title: "2021-2022" },
    { title: "2023-2024" },
  ];
  const admissionRequestHendeler = (admissionName: string): void => {
    const click = admission.filter((classs) => classs.title === admissionName);
    setSelected(click[0]?.title);
    SetDataDisplay(true);
  };
  const addRoutineFlied = (): void => {
    // setRoutine([...routines , routine ])
    const values = [...routines];
    values.push({
      day: "",
      firstPeriode: "",
      secendPeriode: "",
      thardePeriode: "",
      forthPeriode: "",
    });
    setRoutine(values);
  };
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<UserSubmitForm>();
  const onSubmit = (data: UserSubmitForm) => {};

  const changeHendeler = (index: any, event: any) => {
    let values: any = [...routines];
    const updatedValue: any = event.target.name;
    values[index][updatedValue] = event.target.value;
    setRoutine(values);
  };
  const submitHendeler = ():void => {
     const createRoutine = {
      classs: selected,
      session: selectedSession,
      classRoutine: routines
     }
     setEdit(true)
     console.log(createRoutine)
  }
  return (
    <div className="my-10 lg:w-3/4 w-full mx-auto">
      <div className="  grid  lg:grid-cols-3 grid-cols-2 gap-10">
        {admission.map((ad: any) => (
          <div
            onClick={() => admissionRequestHendeler(ad.title)}
            key={ad}
            className={`card  flex justify-center items-center   border h-28 lg:w-80 shadow-md px-2 ${
              selected == ad.title ? "bg-red-500" : "bg-base-100"
            } `}
          >
            <div>
              <span
                className={`text-3xl  ${
                  selected == ad.title ? "text-white" : "text-red-500"
                }`}
              >
                <BsStopwatch />
              </span>
            </div>
            <div>
              <p
                className={`font-semibold uppercase mt-1 text-center ${
                  selected == ad.title ? "text-white" : "text-black"
                }`}
              >
                {ad.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {dataDispaly && (
        <div className="card  w-full  bg-base-100 border  shadow-md my-20">
          <div className="p-5 ">
            <h1 className="font-medium  text-gray-800 uppercase text-lg">
              Add to {selected} Class Routine
            </h1>

            <div className=" grid grid-cols-3">
            <div className="mt-5">
                        <h1>Session</h1>
                        <div className="h-14 mt-2 ">
                          <select
                            className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-4"
                            placeholder="Enter Your Name"
                            onChange={(e)=>SetSelectedSession(e.target.value)}
                          >
                            {section.map((sec) => (
                              <option value={sec.title}>{sec.title}</option>
                            ))}
                          </select>
                         
                        </div>
                       
                      </div>
              <div></div>

            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg  overflow-x-auto">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Day
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider ">
                        first Periode
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        seacend Periode
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        tharde Periode
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        forth Periode
                      </th>
                    </tr>
                  </thead>
                  <tbody>

                    {!edit ?
                     routines.map((routine, index) => (
                      <tr>
                        <td className="px-2 py-5 border-b border-gray-200 bg-white text-sm">
                          <>
                            <input
                              name="day"
                              value={routine.day || ""}
                              onChange={(event) => changeHendeler(index, event)}
                              className="h-12  border w-full rounded-lg    focus:outline-emerald-100 px-4"
                              placeholder="Enter Your Name"
                            />
                          </>
                        </td>
                        <td className="px-2  py-5 border-b border-gray-200 bg-white text-sm">
                          <>
                            <input
                              name="firstPeriode"
                              value={routine.firstPeriode || ""}
                              onChange={(event) => changeHendeler(index, event)}
                              className="h-12  border w-full rounded-lg    focus:outline-emerald-100 px-4"
                              placeholder="Text"
                            />
                          </>
                        </td>
                        <td className="px-2  py-5 border-b border-gray-200 bg-white text-sm">
                          <>
                            <input
                              name="secendPeriode"
                              value={routine.secendPeriode || ""}
                              onChange={(event) => changeHendeler(index, event)}
                              className="h-12  border w-full rounded-lg    focus:outline-emerald-100 px-4"
                              placeholder="Text"
                            />
                          </>
                        </td>
                        <td className="px-2  py-5 border-b border-gray-200 bg-white text-sm">
                          <>
                            <input
                              name="thardePeriode"
                              value={routine.thardePeriode || ""}
                              onChange={(event) => changeHendeler(index, event)}
                              className="h-12  border w-full rounded-lg    focus:outline-emerald-100 px-4"
                              placeholder="Text"
                            />
                          </>
                        </td>
                        <td className="px-2  py-5 border-b border-gray-200 bg-white text-sm">
                          <>
                            <input
                              name="forthPeriode"
                              value={routine?.forthPeriode || ""}
                              onChange={(event) => changeHendeler(index, event)}
                              className="h-12  border w-full rounded-lg    focus:outline-emerald-100 px-4"
                              placeholder="Text"
                            />
                          </>
                        </td>
                      </tr>
                    ))
                    
                    : 
                    
                    routines.map((routine, index) => (
                      <tr>
                        <td className="px-2 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                  {routine.day}
              </p>
                        </td>
                        <td className="px-2  py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                  {routine.firstPeriode}
              </p>
                        </td>
                        <td className="px-2  py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                  {routine.secendPeriode}
              </p>
                        </td>
                        <td className="px-2  py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                  {routine.thardePeriode}
              </p>
                        </td>
                        <td className="px-2  py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                  {routine.forthPeriode}
              </p>
                        </td>
                      </tr>
                  
                    ))
                    }
                   
                  </tbody>
                </table>
              </div>
            </div>

           

            <button
              onClick={() => addRoutineFlied()}
              className="bg-red-500 text-white px-8 rounded-lg py-2"
            >
              Add More
            </button>

            <div className=" flex gap-5 justify-end mt-20">
              <button
               
                onClick={() => submitHendeler(

                )}
                className="bg-red-500 text-white px-8 rounded-lg py-2 mt-3"
              >
                Save
              </button>
              <button
                onClick={() => addRoutineFlied()}
                className="bg-red-500 text-white px-8 rounded-lg py-2 mt-3"
              >
                Cancle
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddClassRoutine;
