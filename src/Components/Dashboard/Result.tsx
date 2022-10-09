import React , { useState} from 'react';
import { GiOpenBook } from 'react-icons/gi';
import Loading from '../Shared/Loading';
import ResultRow from './ResultRow';

const Result = () => {
      const [studentList, setStudentList] = useState([]);
      const [loading, isLoading] = useState(false);
      const [selected, setSelected] = useState<any>(false);
    
      const admission = [
        { title: "Higer Secondary Admission" },
        { title: "Bachelor of Busniness Studies (BBS)" },
        { title: "Bachelor of Science (BSC)" },
        { title: "Bachelor of Arts (BA)" },
        { title: "Bachelor of Busniness Administraion (BBA)" },
        { title: "Graduate Admission (Master's)" },
      ];
      const admissionRequestHendeler = (admissionName: string): void => {
        const click = admission.filter((classs) => classs.title === admissionName);
    
        setSelected(click[0]?.title);
        isLoading(true);
        fetch(
          `http://localhost:5000/v1/student/deparment/student?department=${admissionName}`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              setStudentList(data.student);
              isLoading(false);
            } else {
              setStudentList([]);
              // isLoading(false)
            }
          });
      };
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
                      <GiOpenBook />
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
      
            {loading ? (
              <Loading/>
            ) : (
              studentList.length !== 0 && (
                <div className="card  w-full  bg-base-100 border  shadow-md my-20">
                  <div className="p-5 ">
                    <h1 className="font-medium  text-gray-800 uppercase text-lg">
                      Result Published at {selected}
                    </h1>
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
                               Board
                              </th>
                              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              session
                              </th>
                              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                               Result Published
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {studentList?.map(
                              (student: any) =>
                                student.verifay && (
                                  <ResultRow
                                    key={student._id}
                                    student={student}
                                  />
                                )
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
      );
};

export default Result;