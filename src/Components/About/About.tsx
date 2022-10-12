import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const About = () => {
      return (
            <>
            <div className="bg-gray-700">
              <div className="h-52   max-w-7xl m-auto px-3 grid grid-cols-1 lg:flex justify-between items-center">
                <h1 className="text-4xl  font-medium text-white up">
                 About The Collage
                </h1>
      
                <div className="flex py-2 bg-[#2374e1] text-white px-8 gap-5 rounded-lg  font-medium">
                  <div className=" flex gap-2">
                    {" "}
                    <span className="px-0">Home </span>
                    <span className="mt-1 text-xl text-white">
                      <MdKeyboardArrowRight />
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {" "}
                    <span className="px-0">About</span>
                    <span className="mt-1 text-xl text-white">
                      <MdKeyboardArrowRight />
                    </span>
                  </div>
      
                  <span className="text-white  font-medium">About Collage</span>
                </div>
              </div>
            </div>
      
            <div className="px-3">
            <div className="card lg:w-full max-w-7xl mx-auto px-3  w-full  bg-base-100 border  shadow-md my-20 p-4">
              <p className="text-2xl font-medium text-center mt-5">
              About The College
              </p>
              <p className="mt-5 leading-loose text-gray-700 text-lg">
              Lakhimpur Commerce College was established on 4th September, 1972 with the objective of imparting value education to provide universal access to quality education. The college is the precursor in imparting commerce education in the District of Lakhimpur, Assam and the Arts Stream was introduced in the year 1993. The college is permanently affiliated to Dibrugarh University, Assam. The college has two campuses - the main campus located in the heart of town and the second campus at Chukulibhoria with an area of approximately 25 bighas. The college provides various certificates, diploma, degree and post graduate courses through various distance modes like The Directorate of Distance and Open Learning, Indira Gandhi National Open University and Krishna Kanta Handique Sate Open University.  
              </p>
            </div>
            </div>
          </>
      );
};

export default About;