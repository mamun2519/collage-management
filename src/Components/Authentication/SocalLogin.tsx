import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
const SocalLogin = () => {
      return (
            <div className=' mt-5'>
                  <p className='text-sm text-gray-500 uppercase text-center'>Or Login With</p>
                  <div className=' flex gap-7 justify-center mt-5'>
                        <div className='text-4xl border  text-blue-600  w-16 items-center flex justify-center   rounded-full'><BsFacebook
                        /></div>
                        <div className='text-4xl border  items-center  py-3  w-16 flex justify-center   rounded-full'><FcGoogle
                        /></div>
                        <div className='text-4xl border items-center py-3 text-blue-600 w-16 flex justify-center   rounded-full'><FaLinkedinIn
                        /></div>
                  </div>
                  
            </div>
      );
};

export default SocalLogin;