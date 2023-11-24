import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import { ThemeContext } from "../../App";
const RasultPublished = () => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const { id } = useParams();
  const [student, setStudent] = useState<any>({});
  const [selectedExamType, setSelectedExamType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const routine = {
    subject: "",
    passMark: "33",
    studentMark: "",
    latterGrade: "",
    gradePoint: "",
  };
  const [routines, setRoutine] = useState([routine]);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    fetch(
      `https://collage-management-backend.vercel.app/v1/student/admission/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setStudent(data.student);
      });
  }, []);
  // console.log(student);
  // console.log(routines);
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
      latterGrade: "",
      gradePoint: "",
    });
    setRoutine(values);
  };
  const latterGrade = [
    { grade: "A+" },
    { grade: "A " },
    { grade: "-A" },
    { grade: "B " },
    { grade: "C " },
    { grade: "D " },
    { grade: "F " },
    { grade: "F " },
  ];
  const gradePoint = [
    { point: "5.00" },
    { point: "4.00" },
    { point: "3.50" },
    { point: "3.00" },
    { point: "2.00" },
    { point: "1.00" },
    { point: "0.00" },
    { point: "0.00" },
  ];

  const submitHendeler = (): void => {
    const point = routines?.map((point) => parseInt(point.gradePoint));
    const totalPoint = point.reduce((a: any, b): number => {
      return a + b;
    }, 0);
    const gpa = totalPoint / parseFloat(student?.subject?.length);
    const result = {
      resultType: selectedExamType,
      result: routines,
      Gpa: gpa,
    };
    if (selectedExamType) {
      fetch(
        `https://collage-management-backend.vercel.app/v1/student/admission/result/${id}`,
        {
          method: "POST",
          body: JSON.stringify(result),
          headers: {
            "Content-type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            swal({
              title: data.message,
              text: "Thank You",
              icon: "success",
              buttons: [false],
            });
          }
          setErrorMessage("");
          setEdit(true);
        });
      setErrorMessage("");
    } else {
      setErrorMessage("ExamType  is Required");
    }
    console.log(gpa);
  };
  return (
    <div className="my-20 lg:w-3/4 w-full mx-auto">
      <div
        className={`card  lg:w-full w-[280px]  border  shadow-md my-20 ${
          theme == "light" ? "bg-base-100" : "bg-[#242526]"
        }`}
      >
        <div className="p-5">
          <div
            className={`lg:flex block  justify-between lg:h-14  rounded-lg items-center px-4 border ${
              theme == "light"
                ? "bg-white placeholder-gray-400 text-gray-700 "
                : "bg-[#414343] text-[#e4e6eb]  placeholder-[#e4e6eb]"
            }`}
          >
            <div>
              <span>Student Name : </span>
              <span
                className={` px-2 font-semibold  ${
                  theme == "light" ? "text-gray-900" : "text-[#e4e6eb]"
                }`}
              >
                {student?.name}
              </span>
            </div>
            <div>
              <span>DOP:</span>
              <span
                className={` px-2 font-semibold  ${
                  theme == "light" ? "text-gray-900" : "text-[#e4e6eb]"
                }`}
              >
                {student?.birthday}
              </span>
            </div>
            <div>
              <span>Roll: </span>
              <span
                className={` px-2 font-semibold  ${
                  theme == "light" ? "text-gray-900" : "text-[#e4e6eb]"
                }`}
              >
                {student?.roll}
              </span>
            </div>
          </div>
          {!edit && (
            <div className=" grid lg:grid-cols-3 col-span-2 mt-10">
              <div className="mt-5">
                <h1
                  className={`     ${
                    theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
                  }`}
                >
                  Exam Type
                </h1>
                <div className="h-14 mt-2 ">
                  <select
                    className={`h-12  border w-full rounded-full   focus:outline-emerald-100 px-4 ${
                      theme == "light"
                        ? "bg-white placeholder-gray-400 text-gray-700 "
                        : "bg-[#414343] text-[#e4e6eb]  placeholder-[#e4e6eb]"
                    }`}
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
          )}
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto mt-2">
            <div className="inline-block min-w-full shadow rounded-lg  overflow-x-auto">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                        theme == "light"
                          ? "bg-[#166364] text-white border-gray-200"
                          : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                      }`}
                    >
                      Subject
                    </th>
                    <th
                      className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                        theme == "light"
                          ? "bg-[#166364] text-white border-gray-200"
                          : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                      }`}
                    >
                      Pash Marks
                    </th>
                    <th
                      className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                        theme == "light"
                          ? "bg-[#166364] text-white border-gray-200"
                          : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                      }`}
                    >
                      Student Mark
                    </th>
                    <th
                      className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                        theme == "light"
                          ? "bg-[#166364] text-white border-gray-200"
                          : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                      }`}
                    >
                      Latter Grade
                    </th>
                    <th
                      className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                        theme == "light"
                          ? "bg-[#166364] text-white border-gray-200"
                          : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                      }`}
                    >
                      Grade Point
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {!edit
                    ? routines?.map((routine: any, index: any) => (
                        <tr>
                          <td
                            className={`px-5 py-5 border-b  text-sm ${
                              theme == "light"
                                ? "border-gray-200 bg-white "
                                : "text-[#e4e6eb] border-[#414343]"
                            }`}
                          >
                            <select
                              name="subject"
                              onChange={(event) => changeHendeler(index, event)}
                              // value={routine?.subject}
                              //     type="text"
                              className={`h-12   w-full rounded-lg    focus:outline-emerald-100 px-4 ${
                                theme == "light"
                                  ? "border"
                                  : "text-[#e4e6eb] bg-[#414343] border-[#414343]"
                              } `}
                              placeholder="Enter Your Name"
                            >
                              {student?.subject?.map((subject: any) => (
                                <option
                                  key={subject}
                                  value={subject.title}
                                  selected
                                >
                                  {subject.title}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td
                            className={`px-5 py-5 border-b  text-sm ${
                              theme == "light"
                                ? "border-gray-200 bg-white "
                                : "text-[#e4e6eb] border-[#414343]"
                            }`}
                          >
                            <div className=" flex items-center">
                              <input
                                name="passMark"
                                value={routine.passMark || ""}
                                onChange={(event) =>
                                  changeHendeler(index, event)
                                }
                                type="number"
                                className={`h-12   w-full rounded-lg    focus:outline-emerald-100 px-4 ${
                                  theme == "light"
                                    ? "border"
                                    : "text-[#e4e6eb] bg-[#414343] border-[#414343]"
                                } `}
                                placeholder="Text"
                              />
                            </div>
                          </td>
                          <td
                            className={`px-5 py-5 border-b  text-sm ${
                              theme == "light"
                                ? "border-gray-200 bg-white "
                                : "text-[#e4e6eb] border-[#414343]"
                            }`}
                          >
                            <>
                              <input
                                name="studentMark"
                                value={routine.studentMark || ""}
                                onChange={(event) =>
                                  changeHendeler(index, event)
                                }
                                type="number"
                                className={`h-12   w-full rounded-lg    focus:outline-emerald-100 px-4 ${
                                  theme == "light"
                                    ? "border"
                                    : "text-[#e4e6eb] bg-[#414343] border-[#414343]"
                                } `}
                                placeholder="Text"
                              />
                            </>
                          </td>
                          <td
                            className={`px-5 py-5 border-b  text-sm ${
                              theme == "light"
                                ? "border-gray-200 bg-white "
                                : "text-[#e4e6eb] border-[#414343]"
                            }`}
                          >
                            <>
                              <select
                                name="latterGrade"
                                onChange={(event) =>
                                  changeHendeler(index, event)
                                }
                                // value={routine?.latterGrade}
                                //     type="text"
                                className={`h-12   w-full rounded-lg    focus:outline-emerald-100 px-4 ${
                                  theme == "light"
                                    ? "border"
                                    : "text-[#e4e6eb] bg-[#414343] border-[#414343]"
                                } `}
                                placeholder="Enter Your Name"
                              >
                                {latterGrade?.map((subject: any) => (
                                  <option
                                    key={subject}
                                    value={subject.grade}
                                    selected
                                  >
                                    {subject.grade}
                                  </option>
                                ))}
                              </select>
                            </>
                          </td>
                          <td
                            className={`px-5 py-5 border-b  text-sm ${
                              theme == "light"
                                ? "border-gray-200 bg-white "
                                : "text-[#e4e6eb] border-[#414343]"
                            }`}
                          >
                            <>
                              <select
                                name="gradePoint"
                                onChange={(event) =>
                                  changeHendeler(index, event)
                                }
                                // value={routine?.gradePoin}
                                //     type="text"
                                className={`h-12   w-full rounded-lg    focus:outline-emerald-100 px-4 ${
                                  theme == "light"
                                    ? "border"
                                    : "text-[#e4e6eb] bg-[#414343] border-[#414343]"
                                } `}
                                placeholder="Enter Your Name"
                              >
                                {gradePoint?.map((subject: any) => (
                                  <option
                                    key={subject}
                                    value={subject.point}
                                    selected
                                  >
                                    {subject.point}
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
                          <td
                            className={`px-6 py-5 border-b  text-sm ${
                              theme == "light"
                                ? "border-gray-200 bg-white "
                                : "text-[#e4e6eb] border-[#414343]"
                            }`}
                          >
                            <p
                              className={`whitespace-no-wrap ${
                                theme == "light"
                                  ? "text-gray-900 "
                                  : "text-[#e4e6eb]"
                              }`}
                            >
                              {routine?.subject}
                            </p>
                          </td>
                          <td
                            className={`px-6 py-5 border-b  text-sm ${
                              theme == "light"
                                ? "border-gray-200 bg-white "
                                : "text-[#e4e6eb] border-[#414343]"
                            }`}
                          >
                            <p
                              className={`whitespace-no-wrap ${
                                theme == "light"
                                  ? "text-gray-900 "
                                  : "text-[#e4e6eb]"
                              }`}
                            >
                              {routine?.passMark}
                            </p>
                          </td>
                          <td
                            className={`px-6 py-5 border-b  text-sm ${
                              theme == "light"
                                ? "border-gray-200 bg-white "
                                : "text-[#e4e6eb] border-[#414343]"
                            }`}
                          >
                            <p
                              className={`whitespace-no-wrap ${
                                theme == "light"
                                  ? "text-gray-900 "
                                  : "text-[#e4e6eb]"
                              }`}
                            >
                              {routine.studentMark}
                            </p>
                          </td>
                          <td
                            className={`px-6 py-5 border-b  text-sm ${
                              theme == "light"
                                ? "border-gray-200 bg-white "
                                : "text-[#e4e6eb] border-[#414343]"
                            }`}
                          >
                            <p
                              className={`whitespace-no-wrap ${
                                theme == "light"
                                  ? "text-gray-900 "
                                  : "text-[#e4e6eb]"
                              }`}
                            >
                              {routine.latterGrade}
                            </p>
                          </td>
                          <td
                            className={`px-6 py-5 border-b  text-sm ${
                              theme == "light"
                                ? "border-gray-200 bg-white "
                                : "text-[#e4e6eb] border-[#414343]"
                            }`}
                          >
                            <p
                              className={`whitespace-no-wrap ${
                                theme == "light"
                                  ? "text-gray-900 "
                                  : "text-[#e4e6eb]"
                              }`}
                            >
                              {routine.gradePoint}
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
              className={`font-semibold  px-8 rounded-lg py-2 ${
                theme == "light"
                  ? "bg-[#2374e1] text-white"
                  : "bg-[#414343] text-[#e4e6eb]"
              }`}
            >
              Add More
            </button>
          )}
          {!edit && (
            <div className=" flex gap-5 justify-end mt-20">
              <button
                onClick={() => submitHendeler()}
                className={`font-semibold  px-8 rounded-lg py-2 ${
                  theme == "light"
                    ? "bg-[#2374e1] text-white"
                    : "bg-[#414343] text-[#e4e6eb]"
                }`}
              >
                Save
              </button>
              <button
                onClick={() => cancleHendeler()}
                className="bg-white font-semibold text-[#2374e1] border px-8 rounded-lg py-2 mt-3"
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
