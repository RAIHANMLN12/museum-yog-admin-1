import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Bahasa from "../assets/icons/bahasa.png";

export default function Navbar({ user }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-white border-b border-gray-200">
      <div className="flex items-center pl-5">
        <img src="src/assets/logo.png" alt="Logo" className="h-10" />
      </div>
      <div className="flex items-center">
        <div className="mr-4 flex items-center">
          <select className="p-2 bg-white border border-gray-300 rounded font-bold">
            <img src={Bahasa} alt="bahasa" className="w-14 h-14 mx-auto"/>
            <option value="en">ENG</option>
            <option value="id">IND</option>
            {/* Add more languages as needed */}
          </select>
        </div>
        <div className="flex items-center pr-5">
          {/* Add Link to profile */}
          <Link to="/profile">
            <img src={user.image} alt="User" className="h-10 w-10 rounded-full mr-2" />
          </Link>
          <div className="flex flex-col">
            {/* Add Link to profile */}
            <Link to="/profile">
              <span className="font-bold">{user.name}</span>
            </Link>
            <span className="text-sm text-gray-600">{user.email}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
