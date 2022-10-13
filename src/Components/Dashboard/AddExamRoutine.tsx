import React, { useState, useEffect, useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import swal from "sweetalert";
import Loading from "../Shared/Loading";
import { ThemeContext } from "../../App";
const AddExamRoutine = () => {
  const [classRotuine, setClassRoutine] = useState([]);
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const [routineId, setRoutineId] = useState("");
  const [selected, setSelected] = useState<any>(false);
  const [loading, isLoading] = useState(false);
  const [dataDispaly, SetDataDisplay] = useState(false);
  const [edit, setEdit] = useState(false);
  const [selectedExamType, setSelectedExamType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    isLoading(true);
    fetch("http://localhost:5000/v1/routine/classRoutine")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setClassRoutine(data.routine);
          isLoading(false);
        } else {
          isLoading(false);
        }
      });
  }, []);
  const routine = {
    date: "",
    start: "",
    end: "",
    subjectCode: "",
    subject: "",
  };
  const examType = [
    { title: "Select examType" },
    { title: "Incourse Exam" },
    { title: "Test Exam" },
    { title: "Final Exam" },
  ];
  const [routines, setRoutine] = useState([routine]);
  const admissionRequestHendeler = (className: string, id: string): void => {
    setSelected(className);
    setRoutineId(id);
    SetDataDisplay(true);
  };
  const addRoutineFlied = (): void => {
    const values = [...routines];
    values.push({
      date: "",
      start: "",
      end: "",
      subjectCode: "",
      subject: "",
    });
    setRoutine(values);
  };

  const changeHendeler = (index: any, event: any) => {
    let values: any = [...routines];
    const updatedValue: any = event.target.name;
    values[index][updatedValue] = event.target.value;
    setRoutine(values);
  };
  const submitHendeler = (): void => {
    if (selectedExamType) {
      const examRoutine = {
        examName: selectedExamType,
        routines,
      };
      fetch(`http://localhost:5000/v1/routine/examRoutine/${routineId}`, {
        method: "POST",
        body: JSON.stringify(examRoutine),
        headers: {
          "Content-type": "application/json",
        },
      })
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

    //   setEdit(true);
    console.log(routines);
  };
  const removeFromFlied = (index: any): void => {
    let newFormValues = [...routines];
    newFormValues.splice(index, 1);
    setRoutine(newFormValues);
  };
  const cancleHendeler = (): void => {
    SetDataDisplay(false);
    setRoutine([routine]);
    // SetSelectedSession("");
  };
  console.log(selectedExamType);
  return (
    <div className="my-10 lg:w-3/4 w-full mx-auto">
      {loading ? (
        <Loading />
      ) : (
        <div className="  grid  lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-3">
          {classRotuine?.map((ad: any) => (
            <div
              onClick={() => admissionRequestHendeler(ad.classs, ad._id)}
              key={ad}
              className={`card  flex justify-center items-center   border h-44 lg:h-36 lg:w-80 shadow-md px-2 ${
                selected == ad.classs ? "bg-[#2374e1]" : "bg-base-100"
              } `}
            >
              <div>
                <span
                  className={`text-3xl  ${
                    selected == ad.classs ? "text-white" : "text-red-500"
                  }`}
                >
                  <GiNotebook />
                </span>
              </div>
              <div>
                <p
                  className={`font-semibold uppercase mt-1 text-center ${
                    selected == ad.classs ? "text-white" : "text-black"
                  }`}
                >
                  {ad.classs}
                </p>
                <p
                  className={`font-semibold uppercase mt-1 text-center ${
                    selected == ad.classs ? "text-white" : "text-black"
                  }`}
                >
                  {ad.session} (session)
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {loading ? (
        <Loading />
      ) : (
        dataDispaly && (
          <div
            className={`card  lg:w-full w-[280px]  border  shadow-md my-20 ${
              theme == "light" ? "bg-base-100" : "bg-[#242526]"
            }`}
          >
            <div className="p-5 ">
              <h1
                className={`font-medium   uppercase text-lg ${
                  theme == "light" ? "text-gray-800" : "text-[#e4e6eb]"
                }`}
              >
                Add to {selected} Exam Routine
              </h1>

              {!edit && (
                <div className=" grid lg:grid-cols-3 col-span-2">
                  <div className="mt-5">
                    <h1>Exam Type</h1>
                    <div className="h-14 mt-2 ">
                      <select
                        className={`h-12  border w-full rounded-full   focus:outline-emerald-100 px-4 ${
                          theme == "light"
                            ? "bg-white text-gray-700"
                            : "bg-[#414343] text-[#e4e6eb] outline-none"
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
                              ? "bg-gray-100 text-gray-600 border-gray-200"
                              : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                          }`}
                        >
                          Date
                        </th>
                        <th
                          className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                            theme == "light"
                              ? "bg-gray-100 text-gray-600 border-gray-200"
                              : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                          }`}
                        >
                          Time (Start & end)
                        </th>
                        <th
                          className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                            theme == "light"
                              ? "bg-gray-100 text-gray-600 border-gray-200"
                              : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                          }`}
                        >
                          Subjcet Code
                        </th>
                        <th
                          className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                            theme == "light"
                              ? "bg-gray-100 text-gray-600 border-gray-200"
                              : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                          }`}
                        >
                          Subject
                        </th>
                        {!edit && (
                          <th
                            className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                              theme == "light"
                                ? "bg-gray-100 text-gray-600 border-gray-200"
                                : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                            }`}
                          >
                            action
                          </th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {!edit
                        ? routines.map((routine, index) => (
                            <tr>
                              <td
                                className={`px-5 py-5 border-b  text-sm ${
                                  theme == "light"
                                    ? "border-gray-200 bg-white "
                                    : "text-[#e4e6eb] border-[#414343]"
                                }`}
                              >
                                <>
                                  <input
                                    name="date"
                                    onChange={(event) =>
                                      changeHendeler(index, event)
                                    }
                                    type="date"
                                    className={`h-12   w-full rounded-lg    focus:outline-emerald-100 px-4 ${
                                      theme == "light"
                                        ? "border"
                                        : "text-[#e4e6eb] bg-[#414343] border-[#414343]"
                                    } `}
                                    placeholder="Enter Your Name"
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
                                <div className=" flex items-center">
                                  <input
                                    name="start"
                                    value={routine.start || ""}
                                    onChange={(event) =>
                                      changeHendeler(index, event)
                                    }
                                    type="time"
                                    className={`h-12   w-full rounded-lg    focus:outline-emerald-100 px-4 ${
                                      theme == "light"
                                        ? "border"
                                        : "text-[#e4e6eb] bg-[#414343] border-[#414343]"
                                    } `}
                                    placeholder="Text"
                                  />
                                  <span className="text-l font-semibold  text-gray-700 px-2">
                                    To
                                  </span>
                                  <input
                                    name="end"
                                    value={routine.end || ""}
                                    onChange={(event) =>
                                      changeHendeler(index, event)
                                    }
                                    type="time"
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
                                    name="subjectCode"
                                    value={routine.subjectCode || ""}
                                    onChange={(event) =>
                                      changeHendeler(index, event)
                                    }
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
                                  <input
                                    name="subject"
                                    value={routine.subject || ""}
                                    onChange={(event) =>
                                      changeHendeler(index, event)
                                    }
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
                                <span
                                  onClick={() => removeFromFlied(index)}
                                  className=" text-2xl text-red-500 px-2"
                                >
                                  <AiFillDelete />
                                </span>
                              </td>
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
                                  {routine.date}
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
                                  {routine.start} To {routine.end}
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
                                  {routine.subjectCode}
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
                                  {routine.subject}
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
        )
      )}
    </div>
  );
};

export default AddExamRoutine;
