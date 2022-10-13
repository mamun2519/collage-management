import React, { useContext } from "react";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { ThemeContext } from "../../App";
const Footer = () => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  return (
    <div className={`${theme == "light" ? "bg-[#18191a]" : "bg-base-100"}`}>
      <footer
        className={`footer p-10  max-w-7xl m-auto px-3 ${
          theme == "light" ? "text-[#e4e6eb]" : "text-[#18191a]"
        }`}
      >
        <div>
          <span
            className={`font-medium pb-3 text-xl  ${
              theme == "light" ? "text-[#e4e6eb]" : "text-[#18191a]"
            }`}
          >
            Useful Links
          </span>
          <a className="link link-hover">প্রধানমন্ত্রীর কার্যালয়</a>
          <a className="link link-hover">শিক্ষা মন্ত্রণালয়</a>
          <a className="link link-hover">মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর</a>
          <a className="link link-hover"> Education Board Bangladesh</a>
          <a className="link link-hover"> এনসিটিবি</a>
        </div>
        <div>
          <span
            className={`font-medium pb-3 text-xl  ${
              theme == "light" ? "text-[#e4e6eb]" : "text-[#18191a]"
            }`}
          >
            Academic Links
          </span>
          <a className="link link-hover"> ব্যানবেইজ</a>
          <a className="link link-hover">নায়েম</a>
          <a className="link link-hover">টেন মিনিট স্কুল</a>
          <a className="link link-hover">খান একাডেমী</a>
          <a className="link link-hover">শিক্ষক বাতায়ন</a>
        </div>
        <div>
          <span
            className={`font-medium pb-3 text-xl  ${
              theme == "light" ? "text-[#e4e6eb]" : "text-[#18191a]"
            }`}
          >
            Important Links
          </span>
          <a className="link link-hover">EMIS Login</a>
          <a className="link link-hover">iBAS++ Login</a>
          <a className="link link-hover">Pay Fixation</a>
          <a className="link link-hover">All Govt. Forms</a>
          <a className="link link-hover">All Cadre PMIS</a>
        </div>
      </footer>
      <footer
        className={`footer  py-4 border-t   border-base-300  max-w-7xl m-auto px-3 ${
          theme == "light"
            ? "bg-[#18191a] text-[#e4e6eb]"
            : "bg-base-100 text-[#18191a]"
        }`}
      >
        <div className="items-center grid-flow-col">
          <p>
            © 2020 Lakhimpur Commerce College. All Rights Reserved. <br />
            Design & Development by Dee Tech Solution
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <span className="text-xl border p-2 rounded-lg text-red-500">
              <BsFacebook />
            </span>
            <span className="text-xl border p-2 rounded-lg text-red-500">
              <AiFillTwitterCircle />
            </span>
            <span className="text-xl border p-2 rounded-lg text-red-500">
              <AiOutlineInstagram />
            </span>
            <span className="text-xl border p-2 rounded-lg text-red-500">
              <AiFillLinkedin />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
