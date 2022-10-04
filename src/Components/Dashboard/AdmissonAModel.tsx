import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CgProfile } from "react-icons/cg";
interface Modal {
      isOpen: boolean, 
      closeModal:any
      id?: string 
}
const AdmissonAModel = ({ isOpen, closeModal , id }: Modal) => {
      type UserSubmitForm = {
            name: string;
            roll: string;
          };
      console.log(id)
      const [student , setStudent] = useState<any>({})
      useEffect(()=>{
            fetch(`http://localhost:5000/v1/student/admission/${id}`)
      .then((res) => res.json())
      .then((data) => setStudent(data.student))
      },[])
      
          const {
            register,
            reset,
            formState: { errors },
            handleSubmit,
          } = useForm<UserSubmitForm>({
            defaultValues: {
              name: student.name,
            },
          });
          const onSubmit = (data: UserSubmitForm) => {
            console.log(data);
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                  
                  </Dialog.Title>
                  <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mt-2">
                  <div>
                      <p>Name</p>
                      <div className="h-14 mt-2  relative">
                        <input
                          {...register("name", {
                            required: {
                              value: true,
                              message: "Name is Required",
                            },
                          })}
                          className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                          placeholder="Enter Age"
                          type="text"
                        />

                        <div className=" px-1 ">
                          <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                        </div>
                      </div>
                      <label className="">
                        {errors.name?.type === "required" && (
                          <span className="text-red-500 ">
                            {errors.name.message}
                          </span>
                        )}
                      </label>
                    </div>
                  <div className="mt-3">
                      <p>Student Roll</p>
                      <div className="h-14 mt-2  relative">
                        <input
                          {...register("roll", {
                            required: {
                              value: true,
                              message: "Roll is Required",
                            },
                          })}
                          className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                          placeholder="Enter Roll"
                          type="text"
                        />

                        <div className=" px-1 ">
                          <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                        </div>
                      </div>
                      <label className="">
                        {errors.roll?.type === "required" && (
                          <span className="text-red-500 ">
                            {errors.roll.message}
                          </span>
                        )}
                      </label>
                    </div>
                    <div className="  mt-5">
                  <input
                    className="bg-red-500 w-full text-white px-6 py-2 rounded-lg"
                    type="submit"
                    value="Submit Roll"
                  />
                </div>
                  </div>
                  </form>
                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default AdmissonAModel;
