"use client";
import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { signIn } from "next-auth/react";
import Loader from "@/app/Login/loader";


const Login = () => {
    const router = useRouter();
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [loading, setLoading] = useState(false);  // State to control loader visibility
    const callback= useSearchParams()
  
    const emptyFields = () => toast.error("All the fields are required");
    const wronUser = () => toast.error("Wrong user email or password");
    const notAuthorized = () => toast.error("Access Denied");
  
    const userLogin = async (e: any) => {
      e.preventDefault();
      if (userEmail.trim().length === 0 || userPassword.trim().length === 0) {
        emptyFields();
      } else {
        setLoading(true);  // Show loader
        // const res =
        await signIn("credentials",{
          email: userEmail,
          password:  userPassword,
          redirect: false,
        }).then(()=>{
          setLoading(false);
          router.push( callback.get("callbackUrl") || "/brefons.console");
        }).catch((error)=>{
          setLoading(false);
          notAuthorized();
        })
  
        // if (res?.error) {
        //   setLoading(false);
        //   notAuthorized();
        // } else {
        //   setLoading(false);
        //   router.push( callback.get("callbackUrl") || "/brefons.console");
        // }
      }
    };
  
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 relative">
        <main className="flex flex-col items-center justify-center w-full flex-1 lg:px-20 text-center">
          <div className="bg-white rounded-2xl shadow-2xl px-10 lg:px-0 flex lg:w-2/3 w-full max-w-4xl border border-gray-300">
            <div className="lg:w-3/5 w-full p-5">
              <div className="text-center font-bold">
                <div className="md:w-[500px] flex flex-row w-auto mb-3 justify-center">
                  <div className=" pr-2 mr-5">
                    <Image src={"/gov.png"} width={100} height={100} alt="Gov" />
                  </div>
                  <div className=" pl-2 ml-5 ">
                    <Image src={"/adb.png"} width={200} height={280} alt="Gov" />
                  </div>
                </div>
              </div>
              <div className="py-5">
                <h2 className="text-green-500 text-3xl font-bold mb-2 ">
                  Log in to MIS
                </h2>
                <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center rounded-full mb-3">
                  <HiOutlineMail className="text-gray-400 m-2" />
                  <input
                    id="username"
                    name="username"
                    placeholder="Email Address"
                    autoComplete="someone@email.com"
                    required
                    className="bg-gray-100 outline-none text-sm text-green-500 flex-1"
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center rounded-full mb-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    required
                    className="bg-gray-100 !ring-0 text-sm !outline-none border-0 text-green-500 flex-1"
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                </div>
                <div className="flex justify-between w-64 mb-5">
                  <label className="flex items-center text-xs text-gray-700">
                    <input
                      type="checkbox"
                      name="remember"
                      className="mr-1 text-green-500"
                    />
                    Remember me
                  </label>
                  <a href="#" className="text-xs text-gray-700">
                    Forgot Password?
                  </a>
                </div>
                <div>
                  <button
                    className="py-2 px-7 border border-green-500 rounded-full shadow-sm text-lg font-semibold text-green-500 bg-white hover:bg-green-500 hover:text-white focus:outline-green-500 focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    onClick={userLogin}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
  
            <div className="w-2/5 bg-green-500 hidden lg:block rounded-tr-2xl rounded-br-2xl py-36 px-12">
              <h2 className="text-3xl text-white font-bold ">Welcome!</h2>
              <div className="border-2 w-10 inline-block mb-2"></div>
              <p className="mb-10 text-white">Log in and let&apos;s get started!</p>
              <a
                href="#"
                className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold text-white hover:bg-white hover:text-green-500 hover:cursor-pointer"
              >
                <FaArrowLeftLong className="inline-block" /> Homepage
              </a>
            </div>
          </div>
        </main>
        {loading && <Loader />}  {/* Show loader as an overlay */}
        <ToastContainer />
      </div>
    );
}

export default Login
