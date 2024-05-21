import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

const users = [
    {
      name: "John Doe",
      email: "jhon123@gmail.com",
      image:
        "https://th.bing.com/th/id/OIP.w6Cs6qz234c71XloeqKdwgHaHa?rs=1&pid=ImgDetMain",
    },
    {
      name: "Jane Doe",
      email: "jane123@gmail.com",
      image:
        "https://th.bing.com/th/id/OIP.w6Cs6qz234c71XloeqKdwgHaHa?rs=1&pid=ImgDetMain",
    },
  ];

const currentUser = users[1];

export default function Ticket() {
    return (
        <div className="h-screen flex flex-col">
        <Navbar
            user={currentUser}
            className="h-16 bg-gray-800 text-white flex items-center px-4"
        />
        <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <div className="flex-1 p-4 overflow-y-auto ml-[280px] mt-16 pt-10">
            <h1 className="text-2xl font-bold">Ticket</h1>
            </div>
        </div>
        </div>
    );
    }


    