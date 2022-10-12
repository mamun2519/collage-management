import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../App";
interface AdmissionInfo {
  admission: any;
  key: string;
}
const AdmissionLIstRow = ({ admission }: AdmissionInfo) => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);
  const navigate = useNavigate();

  const { name, admissionType, classs, verifay, _id } = admission;

  return (
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
          {admissionType}
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
          {classs}
        </p>
      </td>
      <td
        className={`px-5 py-5 border-b  text-sm ${
          theme == "light"
            ? "border-gray-200 bg-white "
            : "text-[#e4e6eb] border-[#414343]"
        }`}
      >
        <p className="text-red-500 whitespace-no-wrap font-semibold">
          {verifay === false && "No Verified"}
          {verifay === true && "Verified"}
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
          onClick={() =>
            navigate(`/dashboard/admissionList/addmissionDetails/${_id}`)
          }
          className={` font-semibold text-white px-4 rounded-lg py-1 ${
            theme == "light" ? "bg-[#2374e1]" : "bg-[#414343]"
          }`}
        >
          Verified Now
        </button>
      </td>
    </tr>
  );
};

export default AdmissionLIstRow;
