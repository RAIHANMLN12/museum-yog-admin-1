import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import Tab from '../../components/TabsTicket';

import Search from '../../assets/icons/search.png';
import Events from '../../assets/icons/events.png';

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
            className="h-16 bg-gray-800 text-white flex items-center px-4" />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <div className="flex-1 p-4 overflow-y-auto ml-[280px] mt-16 pt-10">
              <Tab />
              <h1 className="text-2xl font-bold pl-3 pt-5">Ticket Overview</h1>
              <div className="col-span-3 bg-white p-4 rounded-lg shadow-md mt-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Ticket List</h2>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="text-sm focus:outline-none active:outline-non h-10 w-[200px] border border-gray-300 rounded-sm pl-3 pr-4"
                    />
                    <img src={Search} alt="search" className="text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 w-5 h-5"/>
                  </div>
                  <div className="bg-white rounded-lg p-8 w-1/3 ml-20">
                    <label For="meeting-time"></label>
                    <input className="appearance-none border rounded shadow py-3 px-2 text-gray-500"
                      type="datetime-local"
                      id="meeting-time"
                      name="meeting-time"
                      value="2024-05-12T19:30"
                      min="2000-05-07T00:00"
                      max="2035-05-14T00:00"
                    />
                    {/* <img src={Events} alt="events" className="text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 w-2 h-2"/> */}
                  </div>
                </div>
                <div className="bg-[#C57557] px-4 pt-1 pb-4 rounded-sm border border-gray-200 flex-1">
                  <div className="mt-3">
                  <table className="w-full">
                    <thead className="text-white">
                      <tr>
                        <td>Name</td>
                        <td>Type Ticket</td>
                        <td>Amount</td>
                        <td>Visit Schedule</td>
                        <td>Status</td>
                        <td>Action</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>

                      </tr>
                    </tbody>
                  </table>
                  </div>

                </div>
              </div>
            </div>
            
          </div>

        </div>
    );
    }


    