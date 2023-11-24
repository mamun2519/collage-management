import React, { useState, useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import AdminModel from "./AdminModel";
import { ThemeContext } from "../../App";
interface User {
  user: any;
  key: string;
}
const UserRow = ({ user }: User) => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState("");
  const makeAdminModal = (id: string): void => {
    setUserId(id);
    openModal();
  };
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const { name, role, _id, email } = user;

  return (
    <>
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
              theme == "light" ? "text-gray-900 " : "text-[#e4e6eb]"
            }`}
          >
            {name}
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
              theme == "light" ? "text-gray-900 " : "text-[#e4e6eb]"
            }`}
          >
            {email}
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
              theme == "light" ? "text-gray-900 " : "text-[#e4e6eb]"
            }`}
          >
            {role}
          </p>
        </td>

        <td
          className={`px-5 py-5 border-b  text-sm ${
            theme == "light"
              ? "border-gray-200 bg-white "
              : "text-[#e4e6eb] border-[#414343]"
          }`}
        >
          <button
            onClick={() => makeAdminModal(_id)}
            className={` font-semibold text-white px-4 rounded-lg py-1 ${
              theme == "light" ? "bg-[#23395b]" : "bg-[#414343]"
            }`}
          >
            Admin Now
          </button>
        </td>
        <td
          className={`px-5 py-5 border-b  text-sm ${
            theme == "light"
              ? "border-gray-200 bg-white "
              : "text-[#e4e6eb] border-[#414343]"
          }`}
        >
          <button className="text-red-500 text-2xl px-4 rounded-lg py-1 font-semibold up">
            <AiFillDelete />
          </button>
        </td>
        {isOpen && (
          <AdminModel
            closeModal={closeModal}
            isOpen={isOpen}
            openModal={openModal}
            id={userId}
          ></AdminModel>
        )}
      </tr>
    </>
  );
};

export default UserRow;
