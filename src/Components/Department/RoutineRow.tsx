import React, { useContext } from "react";
import { ThemeContext } from "../../App";
interface RoutineInfo {
  rotine: any;
  key: string;
}
const RoutineRow = ({ rotine }: RoutineInfo) => {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);

  return (
    <>
      {rotine?.classRoutine?.map((routine: any) => (
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
                {routine?.day}
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
                {routine?.firstPeriode}
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
                {routine?.secendPeriode}
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
                {routine?.thardePeriode}
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
                {routine?.forthPeriode}
              </p>
            </td>
          </tr>
        </>
      ))}
    </>
  );
};

export default RoutineRow;
