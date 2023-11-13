import React, { FormEventHandler } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import SocalLogin from "./SocalLogin";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";
import axios from "axios";
const SignUp: React.FC = () => {
  const [user, loadings, error] = useAuthState(auth);

  const navigate = useNavigate();
  type UserSubmitForm = {
    name: string;
    email: string;
    password: string;
  };

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<UserSubmitForm>();
  // create user hook
  const [createUserWithEmailAndPassword, Cuser, loading, Cerror] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, Uerror] = useUpdateProfile(auth);
  const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
  const onSubmit = async (data: UserSubmitForm) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    axios
      .post("http://localhost:5000/v1/user", {
        name: data.name,
        email: data.email,
      })
      .then((res: any): void => {
        console.log(res);
        localStorage.setItem("Token", res?.data?.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  let errorMessage;
  if (Cerror || Uerror) {
    errorMessage = (
      <p className="text-red-500">
        {Cerror?.message || Uerror?.message || Gerror?.message}
      </p>
    );
  }
  if (loading || loadings || Gloading) {
    return <Loading />;
  }
  if (Guser) {
    axios
      .post("http://localhost:5000/v1/user", {
        name: user?.displayName,
        email: user?.email,
      })
      .then((res: any): void => {
        console.log(res);
        localStorage.setItem("Token", res?.data?.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  if (user || Guser) {
    navigate("/");
  }
  return (
    <div className="flex h-screen justify-center items-center px-4 ">
      <div className="card w-full lg:w-3/4 bg-base-100 shadow border">
        <div className=" grid lg:grid-cols-2  grid-cols-1 gap-10">
          <div className="flex items-center">
            <img src="/assets/picture/Reset password-pana.svg" alt="" />
          </div>
          <div className="lg:p-10 p-5">
            <div className="text-center mt-5 ">
              <h2 className="text-2xl font-medium ">Sign Up!</h2>
              <p className="mt-2 text-gray-700">
                Please fill in the from an Account!
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-5 h-14  relative">
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                  className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                  placeholder="Enter Your Name"
                  type="text"
                />

                <div className=" px-1 ">
                  <CgProfile className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                </div>
              </div>
              <label className="">
                {errors.name?.type === "required" && (
                  <span className="text-red-500 ">{errors.name.message}</span>
                )}
              </label>
              <div className="mt-3 h-14  relative">
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                  className="h-12  border w-full rounded-full   focus:outline-emerald-100 px-20"
                  placeholder="Enter Your Email"
                  type="email"
                />
                <div className=" px-1 ">
                  <HiOutlineMail className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                </div>
              </div>
              <label>
                {errors.email?.type === "required" && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </label>
              <div className="mt-3 h-14  relative">
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                  className="h-12 border w-full rounded-full  focus:outline-emerald-100 px-20"
                  placeholder="Enter Your Password"
                  type="password"
                />
                <div className="  px-1 ">
                  <RiLockPasswordLine className=" px-4 border absolute top-[4px]  w-16 flex justify-center h-10 text-gray-500 rounded-full  " />
                </div>
              </div>
              <label>
                {errors.password?.type === "required" && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>

              <div className="mt-5">
                <input
                  className="bg-red-500 w-full rounded-full text-white h-12"
                  type="submit"
                  value="Sing in"
                />
                {errorMessage}
                <SocalLogin signInWithGoogle={signInWithGoogle} />
                <p className="text-center text-sm mt-3">
                  All Ready Sing up?{" "}
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={() => navigate("/login")}
                  >
                    Please Sing in
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
