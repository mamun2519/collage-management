import React from "react";

const AdmissonPreview = () => {
  return (
    <div className="my-10 max-w-7xl m-auto px-3">
      <div className="card w-full bg-base-100 border h-[600px] pb-5">
        <div className="bg-red-500 h-16 flex items-center  justify-between px-8">
          <div>
            <button className="bg-white text-black px-6 py-1  rounded-lg">
              Back
            </button>
          </div>
          <div>
            <input
              className="bg-white text-black px-6 py-1  rounded-lg"
              type="submit"
              value=" Next"
            />
          </div>
        </div>
        <div className="w-max mx-auto">
          <div className="border-b-2 rounded-full border-red-500 ">
            <h1 className="text-xl pb-2 text-center mt-10 px-12  font-medium uppercase">
              Admission Preview
            </h1>
          </div>
        </div>

        <div className="mt-10 p-5">
          <p></p>
          <div className=" grid grid-cols-2 gap-10">
            <div className="card wfull bg-base-100 shadow-sm border">
              <div className="card-boy">
                {/* <!-- component --> */}
                <div className=" w-full">
                  <div className="shadow overflow-hidden rounded border-b border-gray-200">
                    <table className="min-w-full text-white">
                      <thead className="bg-red-500 text-white">
                        <tr>
                          <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                          Admisson Info
                          </th>
                          <td className="w-1/3 text-left py-3 px-4 uppercase">Details</td>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          
                        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                            Name
                          </th>
                          <td className="w-1/3 text-left py-3 px-4">Lian</td>
                         
                        </tr>
                       
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card wfull bg-base-100 shadow-sm border">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissonPreview;
