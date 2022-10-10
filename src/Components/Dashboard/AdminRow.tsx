import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import AdminRemoveModel from "./AdminRemoveModel";
interface User {
  user: any;
  key: string;
}
const AdminRow = ({ user }: User) => {
  const { name, role, _id } = user;
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState("");
  const removeAdminModal = (id: string): void => {
    setUserId(id);
    openModal();
  };
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
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
            onClick={() => removeAdminModal(_id)}
            className="bg-red-500 text-white px-4 rounded-lg py-1 font-semibold up"
          >
            Remove Admin
          </button>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button className="text-red-500 text-2xl px-4 rounded-lg py-1 font-semibold up">
            <AiFillDelete />
          </button>
        </td>
      </tr>
      {isOpen && (
        <AdminRemoveModel
          closeModal={closeModal}
          isOpen={isOpen}
          openModal={openModal}
          id={userId}
        ></AdminRemoveModel>
      )}
    </>
  );
};

export default AdminRow;
