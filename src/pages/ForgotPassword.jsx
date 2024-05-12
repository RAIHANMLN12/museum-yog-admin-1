import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";

// send kode ke email
export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
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
      <header className="absolute top-5 left-0 right-0 px-12 py-6 flex items-center justify-between">
        <div>
          <img
            src="src/assets/logo.png"
            alt="Logo"
            className="h-10 vw-20 mr-5"
          />
        </div>
      </header>
      <div className="mt-6 p-12 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Forgot Password
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your email and wait fot the code to be sent
        </p>
        <form
          className="flex flex-col w-full max-w-2xl"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <AiOutlineMail className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="pl-10 mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-600"
          >
            Send Code
          </button>
        </form>
      </div>
    </div>
  );
}
