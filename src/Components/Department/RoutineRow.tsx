import React from "react";

interface RoutineInfo {
  rotine: any;
  key: string;
}
const RoutineRow = ({ rotine }: RoutineInfo) => {
  return (
    <>
      {rotine.classRoutine.map((routine: string) => (
        <>
          <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">Starday</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap up">
                Subject: {rotine.classRoutine[0]?.saturday?.firstPirod?.subject}
              </p>
              <p className="text-gray-900 whitespace-no-wrap">
                Teacher Name:{" "}
                {rotine.classRoutine[0]?.saturday?.firstPirod?.teacher}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                Subject:{" "}
                {rotine.classRoutine[0]?.saturday?.secendPirod?.subject}
              </p>
              <p className="text-gray-900 whitespace-no-wrap">
                Teacher Name:{" "}
                {rotine.classRoutine[0]?.saturday?.secendPirod?.teacher}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                Subject:{" "}
                {rotine.classRoutine[0]?.saturday?.thwartPirod?.subject}
              </p>
              <p className="text-gray-900 whitespace-no-wrap">
                Teacher Name:{" "}
                {rotine.classRoutine[0]?.saturday?.thwartPirod?.teacher}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                Subject:{" "}
                {rotine.classRoutine[0]?.saturday?.fourthPirod?.subject}
              </p>
              <p className="text-gray-900 whitespace-no-wrap">
                Teacher Name:{" "}
                {rotine.classRoutine[0]?.saturday?.fourthPirod?.teacher}
              </p>
            </td>
          </tr>
          <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">Sunday</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap up">
                Subject: {rotine.classRoutine[0]?.sunday?.firstPirod?.subject}
              </p>
              <p className="text-gray-900 whitespace-no-wrap">
                Teacher Name:{" "}
                {rotine.classRoutine[0]?.sunday.firstPirod?.teacher}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                Subject: {rotine.classRoutine[0]?.sunday?.secendPirod?.subject}
              </p>
              <p className="text-gray-900 whitespace-no-wrap">
                Teacher Name:{" "}
                {rotine.classRoutine[0]?.sunday?.secendPirod?.teacher}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                Subject: {rotine.classRoutine[0]?.sunday?.thwartPirod?.subject}
              </p>
              <p className="text-gray-900 whitespace-no-wrap">
                Teacher Name:{" "}
                {rotine.classRoutine[0]?.sunday?.thwartPirod?.teacher}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                Subject: {rotine.classRoutine[0]?.sunday?.fourthPirod?.subject}
              </p>
              <p className="text-gray-900 whitespace-no-wrap">
                Teacher Name:{" "}
                {rotine.classRoutine[0]?.sunday?.fourthPirod?.teacher}
              </p>
            </td>
          </tr>
          <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">Monday</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap up">
                Subject: {rotine.classRoutine[0]?.monday?.firstPirod?.subject}
              </p>
              <p className="text-gray-900 whitespace-no-wrap">
                Teacher Name:{" "}
                {rotine.classRoutine[0]?.monday.firstPirod?.teacher}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                Subject: {rotine.classRoutine[0]?.monday?.secendPirod?.subject}
              </p>
              <p className="text-gray-900 whitespace-no-wrap">
                Teacher Name:{" "}
                {rotine.classRoutine[0]?.monday?.secendPirod?.teacher}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                Subject: {rotine.classRoutine[0]?.monday.thwartPirod?.subject}
              </p>
              <p className="text-gray-900 whitespace-no-wrap">
                Teacher Name:{" "}
                {rotine.classRoutine[0]?.monday?.thwartPirod?.teacher}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                Subject: {rotine.classRoutine[0]?.monday?.fourthPirod?.subject}
              </p>
              <p className="text-gray-900 whitespace-no-wrap">
                Teacher Name:{" "}
                {rotine.classRoutine[0]?.monday?.fourthPirod?.teacher}
              </p>
            </td>
          </tr>
          <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">Tuesday</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap up">
                Subject: {rotine.classRoutine[0]?.tuesday?.firstPirod?.subject}
              </p>
              <p className="text-gray-900 whitespace-no-wrap">
                Teacher Name:{" "}
                {rotine.classRoutine[0]?.tuesday.firstPirod?.teacher}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                Subject: {rotine.classRoutine[0]?.tuesday?.secendPirod?.subject}
              </p>
              <p className="text-gray-900 whitespace-no-wrap">
                Teacher Name:{" "}
                {rotine.classRoutine[0]?.tuesday.secendPirod?.teacher}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                Subject: {rotine.classRoutine[0]?.tuesday.thwartPirod?.subject}
              </p>
              <p className="text-gray-900 whitespace-no-wrap">
                Teacher Name:{" "}
                {rotine.classRoutine[0]?.tuesday.thwartPirod?.teacher}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                Subject: {rotine.classRoutine[0]?.tuesday?.fourthPirod?.subject}
              </p>
              <p className="text-gray-900 whitespace-no-wrap">
                Teacher Name:{" "}
                {rotine.classRoutine[0]?.tuesday?.fourthPirod?.teacher}
              </p>
            </td>
          </tr>
          <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap"> wednesday</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap up">
                Subject:{" "}
                {rotine.classRoutine[0]?.wednesday?.firstPirod?.subject}
              </p>
              <p className="text-gray-900 whitespace-no-wrap">
                Teacher Name:{" "}
                {rotine.classRoutine[0]?.wednesday.firstPirod?.teacher}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                Subject:{" "}
                {rotine.classRoutine[0]?.wednesday?.secendPirod?.subject}
              </p>
              <p className="text-gray-900 whitespace-no-wrap">
                Teacher Name:{" "}
                {rotine.classRoutine[0]?.wednesday.secendPirod?.teacher}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                Subject:{" "}
                {rotine.classRoutine[0]?.wednesday.thwartPirod?.subject}
              </p>
              <p className="text-gray-900 whitespace-no-wrap">
                Teacher Name:{" "}
                {rotine.classRoutine[0]?.wednesday.thwartPirod?.teacher}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                Subject:{" "}
                {rotine.classRoutine[0]?.wednesday?.fourthPirod?.subject}
              </p>
              <p className="text-gray-900 whitespace-no-wrap">
                Teacher Name:{" "}
                {rotine.classRoutine[0]?.wednesday?.fourthPirod?.teacher}
              </p>
            </td>
          </tr>
          <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">Thursday</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap up">
                Subject: {rotine.classRoutine[0]?.thursday?.firstPirod?.subject}
              </p>
              <p className="text-gray-900 whitespace-no-wrap">
                Teacher Name:{" "}
                {rotine.classRoutine[0]?.thursday.firstPirod?.teacher}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                Subject:{" "}
                {rotine.classRoutine[0]?.thursday?.secendPirod?.subject}
              </p>
              <p className="text-gray-900 whitespace-no-wrap">
                Teacher Name:{" "}
                {rotine.classRoutine[0]?.thursday.secendPirod?.teacher}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                Subject: {rotine.classRoutine[0]?.thursday.thwartPirod?.subject}
              </p>
              <p className="text-gray-900 whitespace-no-wrap">
                Teacher Name:{" "}
                {rotine.classRoutine[0]?.thursday.thwartPirod?.teacher}
              </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                Subject:{" "}
                {rotine.classRoutine[0]?.thursday?.fourthPirod?.subject}
              </p>
              <p className="text-gray-900 whitespace-no-wrap">
                Teacher Name:{" "}
                {rotine.classRoutine[0]?.thursday?.fourthPirod?.teacher}
              </p>
            </td>
          </tr>
        </>
      ))}
    </>
  );
};

export default RoutineRow;
