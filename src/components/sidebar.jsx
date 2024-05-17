import React from 'react';
import { MdOutlineLocationOn } from "react-icons/md";
import Building from "../assets/building.png";
import Dashboard from "../assets/icons/dashboard.png";
import Ticket from "../assets/icons/ticket.png";
import Events from "../assets/icons/events.png";
import CMS from "../assets/icons/cms.png";
import Review from "../assets/icons/review.png";

const sidebar = () => {
    return (
        <><div className='w-[280px] bg-[#5B6D54] fixed h-full px-4 py-2'>
            <div className='text-white w-full my-2 mb-4 bg-[#5B6D54]'>
                <div className="items-center w-full">
                    <img src={Building} alt="building" className="w-14 h-14 justify-center item-center"/>
                    <h1 className='text-[24px] font-bold text-center'>Museum</h1>
                    <h1 className='text-[24px] font-bold mb-4 text-center'>Keraton Yogyakarta</h1>
                </div>    
                <div className='flex -ml-2 -mr-2'>
                    <MdOutlineLocationOn className='w-8 h-8 -mt-2'/>
                    <h1 className='text-[12px] px-2'>Jl. Rotowijayan, Kadipaten, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55132</h1>
                </div>
            </div>
        </div><div className='w-[280px] mt-60 bg-[#7F9275] fixed h-full -mr-2 px-4 py-4'>
                <ul className='text-white font-bold'>
                    <li className='mb-2 rounded hover:shadow hover:bg-[#5B6D54] mt-2'>
                        <a href="" className='flex'>
                            <img src={Dashboard} alt="dashboard" className="w-6 h-6 ml-3 mt-3"/>
                            <h1 className='text-[16px] font-medium ml-6 mb-4 mt-3'>Dashboard</h1>
                        </a>
                    </li>
                    <li className='mb-2 rounded hover:shadow hover:bg-[#5B6D54] mt-2'>
                        <a href="" className='flex'>
                            <img src={Ticket} alt="ticket" className="w-6 h-6 ml-3 mt-4"/>
                            <h1 className='text-[16px] font-medium ml-6 mb-4 mt-3'>Ticket</h1>
                        </a>
                    </li>
                    <li className='mb-2 rounded hover:shadow hover:bg-[#5B6D54] mt-2'>
                        <a href="" className='flex'>
                            <img src={Events} alt="events" className="w-6 h-6 ml-3 mt-3"/>
                            <h1 className='text-[16px] font-medium ml-6 mb-4 mt-3'>Events</h1>
                        </a>
                    </li>
                    <li className='mb-2 rounded hover:shadow hover:bg-[#5B6D54] mt-2'>
                        <a href="" className='flex'>
                            <img src={CMS} alt="cms" className="w-6 h-6 ml-3 mt-3"/>
                            <h1 className='text-[16px] font-medium ml-6 mb-4 mt-3'>CMS</h1>
                        </a>
                    </li>
                    <li className='mb-2 rounded hover:shadow hover:bg-[#5B6D54] mt-2'>
                        <a href="" className='flex'>
                            <img src={Review} alt="review" className="w-6 h-6 ml-3 mt-3"/>
                            <h1 className='text-[16px] font-medium ml-6 mb-4 mt-3'>Review</h1>
                        </a>
                    </li>
                </ul>
            </div></>
        
    )
}

export default sidebar
