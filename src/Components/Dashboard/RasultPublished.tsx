import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RasultPublished = () => {
  const { id } = useParams();
  const [student, setStudent] = useState<any>({});
  const [selectedExamType, setSelectedExamType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const routine = {
    subject: "",
    passMark: "33",
    studentMark: "",
    grade: "",
  };
  const [routines, setRoutine] = useState([routine]);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/v1/student/admission/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStudent(data.student);
      });
  }, []);
  console.log(student);
  console.log(routines);
  const examType = [
    { title: "Select examType" },
    { title: "Incourse Exam" },
    { title: "Test Exam" },
    { title: "Final Exam" },
  ];

  const changeHendeler = (index: any, event: any) => {
    let values: any = [...routines];
    const updatedValue: any = event.target.name;
    values[index][updatedValue] = event.target.value;
    setRoutine(values);
  };

  const submitHendeler = (): void => {};
  const cancleHendeler = (): void => {
    // SetDataDisplay(false);
    setRoutine([routine]);
    // SetSelectedSession("");
  };
  const addRoutineFlied = (): void => {
    const values = [...routines];
    values.push({
      subject: "",
      passMark: "33",
      studentMark: "",
      grade: "",
    });
    setRoutine(values);
  };
  const latterGrade = [
    { grade: "A+", point: "5.00" },
    { grade: "A ", point: "4.00" },
    { grade: "-A", point: "3.50" },
    { grade: "B ", point: "3.00" },
    { grade: "C ", point: "2.00" },
    { grade: "D ", point: "1.00" },
    { grade: "F ", point: "0.00" },
    { grade: "F ", point: "0.00" },
  ];

  return (
    <div className="my-20 lg:w-3/4 w-full mx-auto">
      <div className="card  w-full  bg-base-100 border  shadow-md m">
        <div className="p-5">
          <div className="flex justify-between h-14 rounded-lg items-center px-4 border">
            <div>
              <span>Student Name : </span>
              <span className=" px-2 font-semibold text-gray-900">
                {student?.name}
              </span>
            </div>
            <div>
              <span>DOP:</span>
              <span className=" px-2 font-semibold text-gray-900">
                {student?.birthday}
              </span>
            </div>
            <div>
              <span>Roll: </span>
              <span className=" px-2 font-semibold text-gray-900">
                {student?.roll}
              </span>
            </div>
          </div>
          <div className=" grid lg:grid-cols-3 col-span-2 mt-10">
            <div className="mt-5">
              <h1>Exam Type</h1>
              <div className="h-14 mt-2 ">
                <select
                  className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-4"
                  placeholder="Enter Your Name"
                  onChange={(e) => setSelectedExamType(e.target.value)}
                >
                  {examType.map((sec) => (
                    <option value={sec.title}>{sec.title}</option>
                  ))}
                </select>
                <p className="px-4 text-red-500 ">{errorMessage}</p>
              </div>
            </div>
            <div></div>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto mt-2">
            <div className="inline-block min-w-full shadow rounded-lg  overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Subject
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider ">
                      Pash Marks
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Student Mark
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Grade
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {!edit
                    ? routines?.map((routine: any, index: any) => (
                        <tr>
                          <td className="px-2 py-5 border-b border-gray-200 bg-white text-sm">
                            <select
                              name="subject"
                              onChange={(event) => changeHendeler(index, event)}
                              value={routine?.subject}
                              //     type="text"
                              className="h-12  border w-full rounded-lg    focus:outline-emerald-100 px-4"
                              placeholder="Enter Your Name"
                            >
                              {student?.subject?.map((subject: any) => (
                                <option key={subject} value={subject.title}>
                                  {subject.title}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td className="px-2  py-5 border-b border-gray-200 bg-white text-sm">
                            <div className=" flex items-center">
                              <input
                                name="passMark"
                                value={routine.passMark || ""}
                                onChange={(event) =>
                                  changeHendeler(index, event)
                                }
                                type="number"
                                className="h-12  border w-full rounded-lg    focus:outline-emerald-100  px-4"
                                placeholder="Text"
                              />
                            </div>
                          </td>
                          <td className="px-2  py-5 border-b border-gray-200 bg-white text-sm">
                            <>
                              <input
                                name="studentMark"
                                value={routine.studentMark || ""}
                                onChange={(event) =>
                                  changeHendeler(index, event)
                                }
                                type="number"
                                className="h-12  border w-full rounded-lg    focus:outline-emerald-100 px-4"
                                placeholder="Text"
                              />
                            </>
                          </td>
                          <td className="px-2  py-5 border-b border-gray-200 bg-white text-sm">
                            <>
                              <select
                                name="grade"
                                onChange={(event) =>
                                  changeHendeler(index, event)
                                }
                                value={routine?.subject}
                                //     type="text"
                                className="h-12  border w-full rounded-lg    focus:outline-emerald-100 px-4"
                                placeholder="Enter Your Name"
                              >
                                {latterGrade?.map((subject: any) => (
                                  <option
                                    key={subject}
                                    value={`${subject.grade} ${subject.point}`}
                                  >
                                    {`${subject.grade} (${subject.point})`}
                                  </option>
                                ))}
                              </select>
                            </>
                          </td>

                          {/* <td className="px-6   border-b py-5    border-gray-200 bg-white text-sm">
                              <span
                                onClick={() => removeFromFlied(index)}
                                className=" text-2xl text-red-500 px-2"
                              >
                                <AiFillDelete />
                              </span>
                            </td> */}
                        </tr>
                      ))
                    : routines.map((routine, index) => (
                        <tr>
                          <td className="px-6 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {routine?.subject}
                            </p>
                          </td>
                          <td className="px-6  py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {routine?.passMark}
                            </p>
                          </td>
                          <td className="px-6  py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {routine.studentMark}
                            </p>
                          </td>
                          <td className="px-6  py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {routine.grade}
                            </p>
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </div>
          {!edit && (
            <button
              onClick={() => addRoutineFlied()}
              className="bg-red-500 text-white px-8 rounded-lg py-2"
            >
              Add More
            </button>
          )}
          {!edit && (
            <div className=" flex gap-5 justify-end mt-20">
              <button
                onClick={() => submitHendeler()}
                className="bg-red-500 text-white px-8 rounded-lg py-2 mt-3"
              >
                Save
              </button>
              <button
                onClick={() => cancleHendeler()}
                className="bg-red-500 text-white px-8 rounded-lg py-2 mt-3"
              >
                Cancle
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RasultPublished;
