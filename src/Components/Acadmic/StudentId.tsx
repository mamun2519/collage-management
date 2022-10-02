
import QRCode from 'qrcode'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const StudentId = () => {
  const [user ] = useAuthState(auth)
	const [qr, setQr] = useState('')
  const [studentCard , setStudentCard] = useState<any>("")
  const navigate = useNavigate()
  useEffect(() => {
    console.log("helo")
    if(user?.email){
      fetch(
        `http://localhost:5000/v1/student/chackadmission?email=${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setStudentCard(data?.student);
            QRCode.toDataURL(`StudentName: ${studentCard?.name}, Department: ${studentCard?.classs} , RollNumber: ${studentCard?.roll} , Gender: ${studentCard?.gender}, Session: ${studentCard?.session} Phone: ${studentCard?.phone},  `, {
              
              color: {
                dark: '#335383FF',
                light: '#EEEEEEFF'
              }
            }, (err, url) => {
              if (err) return console.error(err)
        
              console.log(url)
              setQr(url)
            })
           
          }
        });
    }
    
  }, []);
  console.log(studentCard);
	
  return (
    <div className="my-10 max-w-7xl m-auto px-3">
      {studentCard && <><div className=" grid lg:grid-cols-2  col-span-1">
        <div
          className="card lg:w-3/5 w-full  h-[500px] mx-auto bg-base-100 border  shadow-lg
        "
        >
          <div className="bg-red-500 h-[150px] relative rounded-f"></div>
          <div className="avatar absolute top-28 left-32">
            <div className="w-28 rounded-full ">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>

          <div className="flex justify-center text-white">
            <h1 className="text-xl font-medium uppercase  absolute top-10 ">
              Railway Publice Collage
            </h1>
            <p className="absolute top-[70px] font-semibold">
              Chittagong,Bangladesh
            </p>
          </div>

          <div className="absolute top-60  left-24">
            <button className=" uppercase   bg-red-400 text-white px-6 py-1 rounded-lg">
              identity Card
            </button>
          </div>

          <div className="mt-[150px] px-5 pb-3">
            <div className="grid grid-cols-3 gap-20">
              <div>
                <p className="uppercase font-semibold   text-gray-600">Name</p>
                <p className="font-semibold   text-gray-600 mt-1">Department</p>
                <p className="font-semibold   text-gray-600 mt-1">Roll</p>
                <p className="font-semibold   text-gray-600 mt-1">Session</p>
                <p className="font-semibold   text-gray-600 mt-1">Gender</p>
                <p className="font-semibold   text-gray-600 mt-1">Guardian</p>
                <p className="font-semibold   text-gray-600 mt-1">Number</p>
              </div>
              <div className=" col-span-2">
                <p className=" uppercase  font-semibold ">{studentCard?.name}</p>
                <p className="mt-1">{studentCard?.classs}</p>
                <p className="mt-1">{studentCard?.roll}</p>
                <p className="mt-1">{studentCard?.session}</p>
                <p className="mt-1">{studentCard?.gender}</p>
                <p className="mt-1">{studentCard?.gerdianName}</p>
                <p className="mt-1">{studentCard?.number}</p>
               
              </div>
            </div>
          </div>
          <div className="bg-red-400 h-[25px] "></div>
        </div>

        <div className="card lg:w-3/5  w-full h-[500px] mx-auto bg-base-100 border = shadow-lg">
          <div className="bg-red-400 h-[25px] "></div>

        
          <div className=" mt-5">
           <div className="flex justify-center"> 
           <button className=" uppercase    bg-red-400 text-white px-6 py-2 rounded-lg">
              Trems And Conditions
            </button>
           </div>
           <div className="px-5 mt-3">
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, iste.</li>
            <li className=" mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, iste.</li>
           </div>
           <div className=" grid grid-cols-3 mx-auto w-3/6 mt-3">
            <span className="font-semibold   text-gray-600">Phone:</span>
            <span>03709378934</span>
           </div>
           <div className=" grid grid-cols-3 mx-auto w-3/6 ">
            <span className="font-semibold   text-gray-600">Mail:</span>
            <span>Shikka@gmail.com</span>
           </div>
           <div className="grid grid-cols-3 mx-auto w-3/6  ">
            <span className="font-semibold   text-gray-600">Phone:</span>
            <span>03709378934</span>
           </div>
           <div className="text-center mt-2">
            
                  <p className=" block">Mamun</p>
                  <p className=" font-medium text-xl">Principal</p>

                  <div className=" grid grid-cols-2 mx-auto w-3/6 mt-3">
            <span className="font-semibold   text-gray-600">Joined Date:</span>
            <span>04/05/22</span>
           </div>
           <div className=" grid grid-cols-2 mx-auto w-3/6">
            <span className="font-semibold   text-gray-600">Expire Date:</span>
            <span>04/05/25</span>
           </div>
            
           </div>
      
           <div className="bg-red-500 h-full mt-5  grid grid-cols-2 gap-10 px-5">
            <div className=" mt-4 text-white uppercase font-semibold ">
                  <p>Student Qr Code</p>
            </div>
            <div className="py-1  flex justify-end">
                  <img className="h-[70px]" src={qr} alt="" />
            </div>
           </div>
          </div>
        </div>
       
      </div>

      <div className=' flex justify-center mt-5'>
      <a  className='bg-red-500 text-white px-10 rounded-lg py-2' href={qr} download="qrcode.png">Download Qr Code</a>
      </div></>}

      {!studentCard && <>
        <div className="my-10 max-w-7xl m-auto px-3">
      <div className="card lg:w-9/12 w-full mx-auto bg-base-100 border pb-5">
        <div className="flex justify-center ">
          <img
            className="w-[350px]"
            src="/assets/picture/sorry.gif"
            alt=""
          />
        </div>
        <div className="text-center">
          <p className="  font-medium text-xl">Sorry,</p>
          <p className="text-gray-800">
            {" "}
            You Are Not Our Student. Please enroll Our Collage
          </p>
          <p>Thank You.</p>
          <button onClick={()=>navigate("/onlineAdmission")} className="bg-red-500 text-white px-4 py-1 rounded-lg my-2 uppercase font-semibold">enroll Now</button>
        </div>

      
      </div>
    </div>
      
      </>}
      
    </div>
  );
};

export default StudentId;
