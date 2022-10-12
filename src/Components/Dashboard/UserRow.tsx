import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import AdminModel from "./AdminModel";
interface User {
  user: any;
  key: string;
}
const UserRow = ({ user }: User) => {
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
  const { name, role, _id } = user;

  return (
    <>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{name}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap up">{role}</p>
        </td>

        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button
            onClick={() => makeAdminModal(_id)}
            className="bg-[#2374e1] text-white px-4 rounded-lg py-1 font-semibold up"
          >
            Admin Now
          </button>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
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
