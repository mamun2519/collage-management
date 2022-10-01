import axios from "axios";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import swal from "sweetalert";
import auth from "../../firebase.init";

const ConfromMessage = () => {
      const [user] = useAuthState(auth)

      type UserSubmitForm = {
            passingAcademy: number;
            passingYear: string;
            admissionType: string;
            board: string;
            department: string;
            class: string;
            session: string;
            admissionFee: string;
            
          };
  swal({
    title: "Your Payment Successfull",
    text: "Thank you",
    icon: "success",
    buttons: [false],
  });
  useEffect(()=>{
      const admisson:any = localStorage.getItem("admissionInfo")
      const admissionInfo = JSON.parse(admisson)
      const student:any = localStorage.getItem("studentInfo")
      const studentInfo = JSON.parse(student)
      console.log(admissionInfo.data , studentInfo );
      const admission = {
            admissionInfo,studentInfo,
            email: user?.email
      }
      axios.post('http://localhost:5000/v1/student/admission', admission)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
  },[])
  return (
    <div className="my-10 max-w-7xl m-auto px-3">
      <div className="card lg:w-9/12 w-full mx-auto bg-base-100 border pb-5">
        <div className="flex justify-center ">
          <img
            className="w-[350px]"
            src="/assets/picture/studentwaitw.gif"
            alt=""
          />
        </div>
        <div className="text-center">
          <p className="  font-medium text-xl">Dear Student,</p>
          <p className="text-gray-800">
            {" "}
            Please Wait 24 to 72 hours. The collage authority will verifay your
            identity and tell your roll number.
          </p>
          <p>Thank You.</p>
        </div>

      
      </div>
    </div>
  );
};

export default ConfromMessage;
