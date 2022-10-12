import React from "react";
import { useParams } from "react-router-dom";

const Overview = () => {
  // lg:w-9/12
  const { department } = useParams();
  return (
    <div className="card lg:w-3/4  w-full  mx-auto bg-base-100 border shadow-md py-8 my-10">
      <div className="bg-[#5195ed] h-[25px] "></div>
      <h1 className="text-2xl pb-2  font-medium uppercase px-8">
        Department Profile
      </h1>

      <div className="">
        <p className=" leading-relaxed text-xl mt-3 text-gray-600 px-8">
          On 4th September 1972, the Lakhimpur Commerce College was established
          with the object of imparting Commerce education in the North Bank
          corner of river Brahmaputra. Initially the pre-university (Now called
          Higher Secondary) courses in Commerce were started from the same day.
          Later, from 1975 the college started the Degree Courses in
          Accountancy, Management and Banking under Dibrugrah University. Thus,
          the Department of Accountancy in the college came into being and
          offered Accountancy as a Honours course to the B.Com students.
          Initially, the Department was started under the Headship of Prof.
          Sarbeswar Phukan. Later on, joined Prof. Zamal Hussain and Prof.
          Bhupen Sarmah in 1979. After that, Prof. Nityanada Upadhaya joined the
          department in 1990 against the post of Prof. Zamal Hussain who left
          the college by resigning the post. Later on, in the same year Prof.
          Gopal Kumar Chetry joined as a Lecturer in 1990. In the year 2001,
          Prof. Nityananda Upadhaya resigned his post and left the college and
          Prof. Dipul Boruah joined against his post as a permenent lecturer. In
          the year 2006, Sri. Diganta Kumar Das joined as Lecturer in the
          Department of Accountancy after the retirement of Prof. Sarbeswar
          Phukan. In course of time Dr. Bhupen Sarmah retired from his post and
          Dr. (Mrs.) Rinti Dutta joined in the Department as Assistant
          Professor. At present the Department is running by Prof. Gopal Kr.
          Chetry as Head and three others Assistant Professors namely Prof.
          Dipul Boruah, Dr. Diganta Kr. Das and Dr. (Mrs.) Rinti Dutta. The
          Department is having very good result from the students by securing
          positions in Higher Secondary and Degrees courses with Accountancy
          Hons./Major in different years. Most of our students have been able to
          secure good employement evenues in different government and private
          sector departments. A few are also well settled as self-employed.
        </p>

        <div className="bg-[#5195ed] h-[25px] mt-8"></div>
        <h1 className="text-2xl pb-2  font-medium uppercase px-8">OBJECTIVE</h1>
        <p className="leading-relaxed text-xl  text-gray-600 px-8">
          a. The main objective of the department is to provide an opportunity
          to the student community to study Accountancy as a discipline in
          Major/Honours at degree level under Dibrugarh University syllabus.
        </p>
        <p className="leading-relaxed text-xl mt-1 text-gray-600 px-8">
          b. To prepare the students with handling of practical problems and
          solutions of financial matters.
        </p>
        <p className="leading-relaxed text-xl mt-1 text-gray-600 px-8">
          c. To motivate and generate social consciousness among the students of
          the college in general and of the department in particulars.
        </p>

        <p className="leading-relaxed text-xl mt-1 text-gray-600 px-8">
          d. To motivate the students for self employment.
        </p>
        <div className="bg-[#5195ed] h-[25px] mt-8"></div>
        <h1 className="text-2xl pb-2  font-medium uppercase px-8">MISSION</h1>
        <p className="leading-relaxed text-xl  text-gray-600 px-8">
          We are dedicated to secure and deliver knowledge through teaching,
          research and extension; and to seek continuous improvement in the
          quality of education to remain globally competitive. The Department is
          committed to integrate all facets of commerce and management to
          educate and train innovative and competent human resource globally
          suitable for industry, business and service sector and to equip and
          encourage them to start their own ventures in urban or rural areas.
        </p>
        <div className="bg-[#5195ed] h-[25px] mt-8"></div>
        <h1 className="text-2xl pb-2  font-medium uppercase px-8">
          devartpemt Overview
        </h1>
        <p className="leading-relaxed text-xl  text-gray-600 px-8">
          Depatment Of Student 250 People
        </p>
        <p className="leading-relaxed text-xl  text-gray-600 px-8">
          Depatment Of Teacher 250 People
        </p>
      </div>
    </div>
  );
};

export default Overview;
