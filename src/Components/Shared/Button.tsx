import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsSun } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { ThemeContext } from "../../App";
import { MdDarkMode } from "react-icons/md";
const Button = () => {
  const [user, loadings, error] = useAuthState(auth);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext<any>(ThemeContext);

  return (
    <div className=" flex">
      {theme === "light" ? (
        <>
          {/* <span className='px-4 border rounded-lg py-1 mt-1'>Light</span> */}
          <span
            onClick={() => toggleTheme()}
            className="text-2xl px-3 mt-2 cursor-pointer"
          >
            <BsSun />
          </span>
        </>
      ) : (
        <>
          {/* <span className='px-4 border rounded-lg py-1 mt-1'>Dark</span> */}
          <span
            onClick={() => toggleTheme()}
            className="text-2xl px-3 mt-2  cursor-pointer"
          >
            <MdDarkMode />
          </span>
        </>
      )}

      {!user ? (
        <button
          onClick={() => navigate("/login")}
          className={`font-semibold text-white px-6 rounded-full py-2 ${
            theme == "light" ? "bg-[#23395b]" : "bg-[#414343]"
          }`}
        >
          Get Started
        </button>
      ) : (
        <button
          className={`font-semibold text-white px-6 rounded-full py-2 ${
            theme == "light" ? "bg-[#23395b] border-gray-50" : "bg-[#414343]"
          }`}
          onClick={() => signOut(auth)}
        >
          SignOut
        </button>
      )}
    </div>
  );
};

export default Button;
