import React, { useState } from "react";
import { AiOutlineMail, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function NewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password:", password, "Confirm Password:", confirmPassword);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
      style={{
        backgroundImage: `url('src/assets/background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header className="absolute top-5 left-0 right-0 px-12 py-6 flex items-center justify-between w-full">
        <div>
          <img
            src="src/assets/logo.png"
            alt="Logo"
            className="h-10 vw-20 mr-5"
          />
        </div>
      </header>
      <div className="mt-6 p-12 bg-white rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Set New Password
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Must be at least 8 characters
        </p>
        <form className="flex flex-col w-full" onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <label
              className="block text-gray-700 font-semibold"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <AiOutlineMail className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                className="pl-10 mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                maxLength={8} // Max length set to 8 characters
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiFillEyeInvisible className="h-5 w-5 text-gray-400" />
                ) : (
                  <AiFillEye className="h-5 w-5 text-gray-400" />
                )}
              </span>
            </div>
          </div>
          <div className="mb-4 relative">
            <label
              className="block text-gray-700 font-semibold"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <AiOutlineMail className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="pl-10 mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                maxLength={8} // Max length set to 8 characters
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <AiFillEyeInvisible className="h-5 w-5 text-gray-400" />
                ) : (
                  <AiFillEye className="h-5 w-5 text-gray-400" />
                )}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-600"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
