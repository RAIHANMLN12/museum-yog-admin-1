import React, { useState, useRef } from "react";

export default function EnterCode() {
  const [code, setCode] = useState(["", "", "", ""]);
  const [email, setEmail] = useState("");
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (!isNaN(value) && value !== "") {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && code[index] === "") {
      const newCode = [...code];
      newCode[index - 1] = "";
      setCode(newCode);

      if (inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus();
      }
    }
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
      <div className="mt-6 p-12 bg-white rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Enter the code
        </h2>
        <p className="text-gray-600 mb-6">We send code to {email}</p>
        <div className="flex justify-center">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              style={{
                width: "60px",
                height: "60px",
                fontSize: "24px",
                textAlign: "center",
                margin: "0 5px",
              }}
              className="bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          ))}
        </div>
        <div className="text-sm text-center mb-8 mt-4">
          Didn't receive the email?{" "}
          <a href="#" className="text-black-500 hover:underline font-semibold">
            Resend the code
          </a>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 focus:outline-none focus:ring-1 focus:ring-green-500"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
