import React, { useState, useEffect, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import Loading from "../Shared/Loading";
import { ThemeContext } from "../../App";
const NoticeDetailss = () => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const [notice, setNotice] = useState<any>({});
  const [loading, isLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    isLoading(true);
    fetch(`http://localhost:5000/v1/notice/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setNotice(data.notice);
          isLoading(false);
        } else {
          isLoading(false);
        }
      });
  }, []);
  const componentRef: any = useRef();
  const pdfDowenlodeHendeler: any = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Notice",
    //  onAfterprint: ()=> alert("downlode")
  });
  return (
    <div className="my-10 max-w-7xl  m-auto px-4">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div ref={componentRef} className="my-10 max-w-7xl m-auto px-4">
            <>
              <div
                className={`card  lg:w-3/4 mx-auto w-[280px]  border  shadow-md my-20 ${
                  theme == "light"
                    ? "bg-base-100"
                    : "bg-[#242526] border-[#414343] text-[#e4e6eb]"
                }`}
              >
                <div className="p-5 ">
                  <p className="text-2xl font-medium  uppercase text-center">
                    Realwai public Collage,Chittagong
                  </p>
                  <p className="text-lg  font-sans text-gray-800 text-center mt-1">
                    {notice?.classs}
                  </p>
                  <p className="text-xl font-sans text-gray-800 text-center mt-">
                    Notice
                  </p>
                  <div></div>

                  <div className="mt-10">
                    <p>
                      {" "}
                      <span className="text-lg font-semibold pr-8">
                        Date:
                      </span>{" "}
                      <span>{notice?.date}</span>{" "}
                    </p>
                    <p className="mt-1">
                      {" "}
                      <span className="text-lg font-semibold pr-6">
                        Title:
                      </span>{" "}
                      <span>{notice?.title}</span>
                    </p>
                    <p className="mt-1">
                      {" "}
                      <span className="text-lg font-semibold pr-6">
                        Description:
                      </span>{" "}
                      <span>{notice?.description}</span>
                    </p>
                  </div>
                </div>
                {/* <div className="bg-red-400 h-[25px] "></div> */}
              </div>
            </>
          </div>

          <div className=" my-20 w-3/4 mx-auto">
            <button
              onClick={() => pdfDowenlodeHendeler()}
              className={` font-semibold text-white px-6 py-1 rounded-lg ${
                theme == "light" ? "bg-[#2374e1]" : "bg-[#414343]"
              }`}
            >
              Dowenlode PDF
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default NoticeDetailss;
