import { Dialog, Transition } from "@headlessui/react";
import React, { useState, useEffect, Fragment } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import swal from "sweetalert";
interface Admin {
  closeModal: any;
  openModal: any;
  isOpen: any;
  id: string;
}
const AdminModel = ({ closeModal, openModal, isOpen, id }: Admin) => {
  const [user, setUser] = useState<any>({});
  const [role, setRole] = useState("");
  useEffect(() => {
    fetch(`https://thawing-temple-32150.herokuapp.com/v1/user/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data?.user));
  }, []);
  const selectUserRole = (e: any) => {
    setRole(e.target.value);
  };
  const makeUserAdminHendeler = (user: any) => {
    fetch(
      `https://thawing-temple-32150.herokuapp.com/v1/user/admin/${user?.email}?roleAction=${role}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          swal({
            title: `${data?.message}`,
            text: "Thank you",
            icon: "success",
            buttons: [false],
          });
          closeModal();
        }
      });
  };

  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="lg:w-96 w-72 py-10 max-w-md transhtmlForm overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium flex justify-center leading-6 text-gray-900"
                  >
                    <div>
                      <div className="relative">
                        <div className="border p-2   w-9 rounded absolute top-[32px] left-1 text-[#EC255A]">
                          <CgProfile />
                        </div>
                        <label
                          htmlFor="username"
                          className="block text-sm text-black"
                        >
                          Name
                        </label>

                        <input
                          type="text"
                          value={user?.name}
                          placeholder="Email address"
                          className="block pl-12 w-full px-4 py-2 mt-2  bg-white border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
                        />
                      </div>

                      <div className="mt-4">
                        <div className="flex items-center justify-between relative">
                          <div className="border p-2   w-9 rounded absolute top-[32px] left-1 text-[#EC255A]">
                            <AiOutlineMail />
                          </div>
                          <label
                            htmlFor="password"
                            className="block text-sm text-black "
                          >
                            Email
                          </label>
                        </div>

                        <input
                          type="email"
                          placeholder="Enter Email"
                          value={user?.email}
                          className="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>

                      <div className="mt-4">
                        <label
                          htmlFor="role"
                          className="block text-sm text-black "
                        >
                          Role
                        </label>
                        <select
                          //     ref={orderStatusRef}
                          onChange={(e) => selectUserRole(e)}
                          className="w-full block  
  px-2 py-2   bg-slate-100 border rounded-md   outline-none  focus:border-blue-400 mt-2 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
                        >
                          <option value={user?.role} selected>
                            {user?.role}
                          </option>
                          <option value="admin">Admin</option>
                        </select>
                      </div>

                      <div className="mt-6">
                        <button
                          onClick={() => makeUserAdminHendeler(user)}
                          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transhtmlForm bg-[#2374e1] rounded-md"
                        >
                          Make Admin
                        </button>
                      </div>
                    </div>
                  </Dialog.Title>

                  {/*       
                        <div className="mt-4 flex justify-center gap-5">
                          <button className=' bg-red-400 text-white rounded px-4 py-1'>
                            No
                          </button>
                          <button className=' bg-red-400 text-white rounded px-4 py-1'>
                            yes
                          </button>
                        </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default AdminModel;
