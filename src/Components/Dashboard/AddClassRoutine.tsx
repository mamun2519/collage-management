import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../App";
import { AiFillDelete } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import swal from "sweetalert";
import Loading from "../Shared/Loading";

const AddClassRoutine = () => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const [selected, setSelected] = useState<any>(false);
  const [dataDispaly, SetDataDisplay] = useState(false);
  const [edit, setEdit] = useState(false);
  const [selectedSession, SetSelectedSession] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [allReadyCreateR, setAllReadyCreateR] = useState(true);
  const [updateButton, setUpdateButton] = useState(false);
  const [updateRoutineId, setUpdateRoutineId] = useState("");
  const [loading, isLoading] = useState(false);
  const routine = {
    day: "",
    firstPeriode: "",
    secendPeriode: "",
    thardePeriode: "",
    forthPeriode: "",
  };

  console.log(selected);
  const [routines, setRoutine] = useState([routine]);
  useEffect(() => {
    isLoading(true);
    if (selected) {
      fetch(`http://localhost:5000/v1/routine/chackRoutine?classs=${selected}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setRoutine(data.routine.classRoutine);
            setUpdateRoutineId(data.routine._id);
            setAllReadyCreateR(false);
            isLoading(false);
          } else {
            isLoading(false);
          }
        });
    }
  }, [selected]);
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

  const days = [
    { title: "Select Day" },
    { title: "Saturday" },
    { title: "Sunday" },
    { title: "Monday" },
    { title: "Tuesday" },
    { title: "Wednesday" },
    { title: "Thursday" },
  ];
  const changeHendeler = (index: any, event: any) => {
    let values: any = [...routines];
    const updatedValue: any = event.target.name;
    values[index][updatedValue] = event.target.value;
    setRoutine(values);
  };
  const submitHendeler = (): void => {
    const createRoutine = {
      classs: selected,
      session: selectedSession,
      classRoutine: routines,
    };
    console.log(createRoutine);
    if (selectedSession) {
      fetch("http://localhost:5000/v1/routine/classRoutine", {
        method: "POST",
        body: JSON.stringify(createRoutine),
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
    } else {
      setErrorMessage("Session  is Required");
    }
  };

  const removeFromFlied = (index: any): void => {
    let newFormValues = [...routines];
    newFormValues.splice(index, 1);
    setRoutine(newFormValues);
  };
  const cancleHendeler = (): void => {
    SetDataDisplay(false);
    setRoutine([routine]);
    SetSelectedSession("");
    setAllReadyCreateR(false);
  };
  const updateButtonHendler = (): void => {
    setAllReadyCreateR(true);
    setEdit(false);
    setUpdateButton(true);
  };

  const updateRequestHendeler = (): void => {
    // request to update database
    // setAllReadyCreateR(false);
    const createRoutine = {
      classs: selected,
      session: selectedSession,
      classRoutine: routines,
    };

    if (selectedSession && updateRoutineId) {
      fetch(`http://localhost:5000/v1/routine/department/${updateRoutineId}`, {
        method: "PUT",
        body: JSON.stringify(createRoutine),
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
    } else {
      setErrorMessage("Session  is Required");
    }
  };
  return (
    <div className="my-10 lg:w-3/4 w-full mx-auto">
      <div className="  grid  lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-3">
        {admission.map((ad: any) => (
          <div
            onClick={() => admissionRequestHendeler(ad.title)}
            key={ad}
            className={`card  flex justify-center items-center   border h-40 lg:h-28 lg:w-80 w-full  shadow-md px-2 ${
              theme == "light"
                ? selected == ad.title
                  ? "bg-[#2374e1]"
                  : "bg-base-100"
                : selected == ad.title
                ? "bg-[#414343]"
                : "bg-[#242526]"
            } `}
          >
            <div>
              <span
                className={`text-3xl  ${
                  theme == "light"
                    ? selected == ad.title
                      ? "text-white"
                      : "text-red-500"
                    : selected == ad.title
                    ? "text-white"
                    : "text-white"
                }`}
              >
                <BsStopwatch />
              </span>
            </div>
            <div>
              <p
                className={`font-semibold uppercase mt-1 text-center ${
                  theme == "light"
                    ? selected == ad.title
                      ? "text-white"
                      : "text-black"
                    : selected == ad.title
                    ? "text-white"
                    : "text-[#e4e6eb]"
                }`}
              >
                {ad.title}
              </p>
            </div>
          </div>
        ))}
      </div>

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
                Add to {selected} Class Routine
              </h1>

              {!edit && allReadyCreateR && (
                <div className=" grid lg:grid-cols-3 col-span-2">
                  <div className="mt-5">
                    <h1>Session</h1>
                    <div className="h-14 mt-2 ">
                      <select
                        className={`h-12  border w-full rounded-full   focus:outline-emerald-100 px-4 ${
                          theme == "light"
                            ? "bg-white text-gray-700"
                            : "bg-[#414343] text-[#e4e6eb] outline-none"
                        }`}
                        placeholder="Enter Your Name"
                        onChange={(e) => SetSelectedSession(e.target.value)}
                      >
                        {section.map((sec) => (
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
                          Day
                        </th>
                        <th
                          className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                            theme == "light"
                              ? "bg-gray-100 text-gray-600 border-gray-200"
                              : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                          }`}
                        >
                          first Periode
                        </th>
                        <th
                          className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                            theme == "light"
                              ? "bg-gray-100 text-gray-600 border-gray-200"
                              : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                          }`}
                        >
                          seacend Periode
                        </th>
                        <th
                          className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                            theme == "light"
                              ? "bg-gray-100 text-gray-600 border-gray-200"
                              : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                          }`}
                        >
                          tharde Periode
                        </th>
                        <th
                          className={`px-5 py-3 border-b-2  text-left text-xs font-semibold  uppercase tracking-wider ${
                            theme == "light"
                              ? "bg-gray-100 text-gray-600 border-gray-200"
                              : "bg-[#414343] text-[#e4e6eb] border-[#414343]"
                          }`}
                        >
                          forth Periode
                        </th>
                        {!edit && allReadyCreateR && (
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
                      {!edit && allReadyCreateR
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
                                  <select
                                    name="day"
                                    onChange={(event) =>
                                      changeHendeler(index, event)
                                    }
                                    className={`h-12   w-full rounded-lg    focus:outline-emerald-100 px-4 ${
                                      theme == "light"
                                        ? "border"
                                        : "text-[#e4e6eb] bg-[#414343] border-[#414343]"
                                    } `}
                                    placeholder="Enter Your Name"
                                  >
                                    {days.map((sec) => (
                                      <option value={sec.title || ""}>
                                        {sec.title}
                                      </option>
                                    ))}
                                  </select>
                                </>
                              </td>
                              <td
                                className={`px-5 py-5 border-b  text-sm ${
                                  theme == "light"
                                    ? "border-gray-200 bg-white "
                                    : "text-[#e4e6eb]  border-[#414343]"
                                }`}
                              >
                                <>
                                  <input
                                    name="firstPeriode"
                                    value={routine.firstPeriode || ""}
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
                                    : "text-[#e4e6eb]  border-[#414343]"
                                }`}
                              >
                                <>
                                  <input
                                    name="secendPeriode"
                                    value={routine.secendPeriode || ""}
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
                                    name="thardePeriode"
                                    value={routine.thardePeriode || ""}
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
                                    name="forthPeriode"
                                    value={routine?.forthPeriode || ""}
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
                                className={`px-5 py-5 border-b  text-sm ${
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
                                  {routine.day}
                                </p>
                              </td>
                              <td
                                className={`px-5 py-5 border-b  text-sm ${
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
                                  {routine.firstPeriode}
                                </p>
                              </td>
                              <td
                                className={`px-5 py-5 border-b  text-sm ${
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
                                  {routine.secendPeriode}
                                </p>
                              </td>
                              <td
                                className={`px-5 py-5 border-b  text-sm ${
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
                                  {routine.thardePeriode}
                                </p>
                              </td>
                              <td
                                className={`px-5 py-5 border-b  text-sm ${
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
                                  {routine.forthPeriode}
                                </p>
                              </td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {!edit && allReadyCreateR && (
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
              {!edit && allReadyCreateR && !updateButton && (
                <div className=" flex gap-5 justify-end mt-20">
                  <button
                    onClick={() => submitHendeler()}
                    className={`font-semibold  px-8 rounded-lg py-2 mt-3 ${
                      theme == "light"
                        ? "bg-[#2374e1] text-white"
                        : "bg-[#414343] text-[#e4e6eb]"
                    } `}
                  >
                    Save
                  </button>
                  <button
                    onClick={() => cancleHendeler()}
                    className="bg-white font-semibold text-[#2374e1] border  px-8 rounded-lg py-2 mt-3"
                  >
                    Cancle
                  </button>
                </div>
              )}
              {!allReadyCreateR && (
                <div className=" flex gap-5 justify-end mt-20">
                  <button
                    onClick={() => updateButtonHendler()}
                    className={`font-semibold  px-8 rounded-lg py-2 mt-3 ${
                      theme == "light"
                        ? "bg-[#2374e1] text-white"
                        : "bg-[#414343] text-[#e4e6eb]"
                    } `}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => cancleHendeler()}
                    className="bg-white font-semibold text-[#2374e1] border text-white px-8 rounded-lg py-2 mt-3"
                  >
                    cancle
                  </button>
                </div>
              )}
              {!edit && allReadyCreateR && updateButton && (
                <div className=" flex gap-5 justify-end mt-20">
                  <button
                    onClick={() => updateRequestHendeler()}
                    className={`font-semibold  px-8 rounded-lg py-2 mt-3 ${
                      theme == "light"
                        ? "bg-[#2374e1] text-white"
                        : "bg-[#414343] text-[#e4e6eb]"
                    } `}
                  >
                    Confrom Update
                  </button>
                  <button
                    onClick={() => cancleHendeler()}
                    className="bg-white font-semibold text-[#2374e1] border px-8 rounded-lg py-2 mt-3"
                  >
                    cancle
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

export default AddClassRoutine;
