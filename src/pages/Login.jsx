import React, { useState } from "react";
import BackgroundImage from "../assets/background.png"
import EmailIcon from "../assets/icons/email.png";
import PasswordIcon from "../assets/icons/password.png";
import Logo from "../assets/logo.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div 
        className="bg-scroll h-screen bg-no-repeat bg-cover" // Menengahkan card
        style={{
          backgroundImage: `url(${BackgroundImage})`
        }} 
      >
        <img src={Logo} alt="logo" className="m-10 justify-start"/>

        <div className="flex justify-center items-center">
          <div className="w-[750px] bg-white p-10 rounded-[8px] shadow-[0px_8px_28px_0px_rgba(0,0,0,0.10)]">
            <h1 className="text-center mt-5 mb-10 font-bold text-[24px]">Welcome Back</h1>
            <form className="rounded space-y-9">
              <div className="mb-4 space-y-3">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Email
                </label>
                <div className="flex items-center border border-gray-400 rounded w-full h-[50px]">
                  <img src={EmailIcon} alt="email-icon" className="ml-[20px]" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} />
                  <input className="w-full py-2 px-5  text-gray-700 focus:outline-none" id="username" type="text" placeholder="Enter your email" />
                </div>
              </div>
              <div className="mb-6 space-y-3">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <div className="flex items-center border border-gray-400 rounded w-full h-[50px]">
                  <img src={PasswordIcon} alt="email-icon" className="ml-[20px]" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} />
                  <input className="w-full py-2 px-5  text-gray-700 focus:outline-none" id="username" type="password" placeholder="Enter your password" />
                </div>
                <h1 className="text-[#728969] flex flex-row justify-end">Forgot Password?</h1>
              </div>
              <div className="flex items-center justify-center">
                <button className="bg-[#728969] hover:bg-[#728969] text-white font-bold w-full py-4 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Login
                </button>
              </div>
            </form>
            <div className="flex flex-row space-x-2 my-10 justify-center items-center font-light ">
              <h1 className="text-black text-[20px]">
                Don’t have an account?
              </h1>
              <h1 className="text-[#728969] text-[20px]">
                Sign Up
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
