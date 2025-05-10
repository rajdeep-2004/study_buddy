import "../color.css"
import "../components/Button/Button.css"
import "../pages/Dashboard"

import React,{use, useState} from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import {app} from "../Firebase"
import { useNavigate } from "react-router-dom"

const auth = getAuth(app)


const RegistartionForm = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate();

    const createUser = () => {
    createUserWithEmailAndPassword(auth,email,password).then(value=>navigate("/dashboard"))
    }

  return (
    <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
      <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 text-center hidden md:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://www.tailwindtap.com/assets/common/marketing.svg)`,
            }}
          ></div>
        </div>
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className=" flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold color">
                Student Sign up
              </h1>
              <p className="text-[12px] text-gray-500">
                Hey enter your details to create your account
              </p>
            </div>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs flex flex-col gap-4">
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  onChange={e=>setEmail(e.target.value)} value={email} type="email" required
                  placeholder="Enter your email"
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  onChange={e=>setPassword(e.target.value)} value={password} type="password" required
                  placeholder="Password"
                />
                <button onClick={createUser} className=" cta mt-5 tracking-wide font-semibold  text-black-800 w-full py-4 rounded-lg  transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <span className="ml-3 text-black-800">Sign Up</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegistartionForm;
