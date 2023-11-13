import React from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import axios from "axios";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocalLogin from "./SocalLogin";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
interface UserSubmitForm {
  email: string;
  password: string;
}
const Login = () => {
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, users, loading, Logerror] =
    useSignInWithEmailAndPassword(auth);
  const [user, loadings, error] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UserSubmitForm>();
  const navigate = useNavigate();
  const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
  const onSubmit = (data: UserSubmitForm) => {
    signInWithEmailAndPassword(data.email, data.password);
    axios
      .post("http://localhost:5000/v1/user", {
        email: data.email,
      })
      .then((res: any): void => {
        localStorage.setItem("Token", res?.data?.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  let errorMessage;
  if (error || Logerror) {
    errorMessage = (
      <p className="text-red-500">
        {error?.message || Logerror?.message || Gerror?.message}
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
      .catch(function (er: any) {
        console.log(er);
      });
  }
  if (user || Guser) {
    navigate(from, { replace: true });
  }
  return (
    <div className="flex h-screen justify-center items-center px-4 ">
      <div className="card w-full lg:w-3/4 bg-base-100 shadow border">
        <div className=" grid lg:grid-cols-2  grid-cols-1">
          <div>
            <img src="/assets/picture/Fingerprint-rafiki.svg" alt="" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="lg:p-10 p-5">
              <div className="text-center mt-5 ">
                <h2 className="text-2xl font-medium ">Welcome Back!</h2>
                <p className="mt-2 text-gray-700">Sign in to your Account</p>
              </div>
              <div className="mt-5 h-14  relative">
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
                  placeholder="Enter Your username & email"
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
              <p className="text-center my-1 text-blue-500">
                Forgate Password?
              </p>
              <div className="mt-5">
                <input
                  className="bg-red-500 cursor-pointer w-full rounded-full text-white h-12"
                  type="submit"
                  value="Sing in"
                />
                {errorMessage}
                <SocalLogin signInWithGoogle={signInWithGoogle} />
                <p className="text-center text-sm mt-3">
                  Are You new?{" "}
                  <span
                    className="text-blue-500  cursor-pointer"
                    onClick={() => navigate("/signup")}
                  >
                    Please Sing up
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
