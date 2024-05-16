import React from 'react';
import { RxDashboard } from "react-icons/rx";
import { HiOutlineTicket } from "react-icons/hi";
import { MdOutlineEventNote, MdOutlineStickyNote2, MdOutlineLocationOn } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";

const sidebar = () => {
    return (
        <div className='w-64 bg-[#5B6D54] fixed h-full px-4 py-2'>
            <div className='text-white w-full my-2 mb-4 bg-[#5B6D54]'>
                <h1 className='text-[24px] font-bold'>Museum</h1>
                <h1 className='text-[24px] font-bold mb-4'>Keraton Yogyakarta</h1>
                <MdOutlineLocationOn className='inline-block mr-2 -mt-2'></MdOutlineLocationOn>
                Jl. Rotowijayan, Kadipaten, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55132
            </div>
            <div className='w-60 mt-4 bg-[#7F9275] fixed h-full px-4 py-4'>
                <ul className='mt-3 text-white font-bold'>
                    <li className='mb-2 rounded hover:shadow hover:bg-[#5B6D54] py-2'>
                        <a href="" className='px-3'>
                            <RxDashboard className='inline-block w-6 h-6 mr-2 -mt-2'></RxDashboard>
                            Dashboard
                        </a>
                    </li>
                    <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                        <a href="" className='px-3'>
                            <HiOutlineTicket className='inline-block w-6 h-6 mr-2 -mt-2'></HiOutlineTicket>
                            Ticket
                        </a>
                    </li>
                    <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                        <a href="" className='px-3'>
                            <MdOutlineEventNote className='inline-block w-6 h-6 mr-2 -mt-2'></MdOutlineEventNote>
                            Events
                        </a>
                    </li>
                    <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                        <a href="" className='px-3'>
                            <MdOutlineStickyNote2 className='inline-block w-6 h-6 mr-2 -mt-2'></MdOutlineStickyNote2>
                            CMS
                        </a>
                    </li>
                    <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                        <a href="" className='px-3'>
                            <FaRegCommentDots className='inline-block w-6 h-6 mr-2 -mt-2'></FaRegCommentDots>
                            Review
                        </a>
                    </li>
                    <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                        <a href="" className='px-3'>
                            <BsPerson className='inline-block w-6 h-6 mr-2 -mt-2'></BsPerson>
                            Profile
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default sidebar
