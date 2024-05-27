import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import UserSampleAccount from "../../dataSample/UserAccount";
import EditIcon from "/src/assets/icons/edit-icon.png";
import { Link } from "react-router-dom";

const ProfileScreen = () => {
    const user = UserSampleAccount[0];
    const [password, setPassword] = useState("");

    return (
        <>
            <div className="flex flex-col h-screen">
                <Navbar user={user} className="h-16 bg-gray-800 text-white flex items-center px-4" />
                <div className="flex flex-1">
                    <Sidebar />
                    <div className="flex flex-col flex-1 px-10 space-y-5 bg-[#F8F8F8] h-screen ml-[260px] pb-10">
                        <div className="flex flex-row items-center space-x-5 text-start mt-[120px] mb-5">
                            <img src={user.image} alt={user.name} className="w-40 h-40 rounded-full" />
                        </div>
                        <div className="rounded-[8px] border border-[#728969] bg-white h-[450px] px-8 py-3">
                            <div className="flex flex-row justify-between items-center">
                                <h1 className="text-[#728969] text-[24px] font-bold mt-3">Personal Information</h1>
                                <Link to={'/edit_profile'}>
                                    <div className="flex flex-row items-center space-x-3 border border-[#728969] rounded-[8px] px-3 py-2">
                                        <img src={EditIcon} alt="Edit Icon" />
                                        <h1 className="text-[#728969]">
                                            Edit
                                        </h1>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex justify-between mt-6">
                                <div>
                                    <h1 className="font-reguler text-[18px]">First Name</h1>
                                    <h1 className="font-bold text-[18px] mt-2">John</h1>
                                </div>
                                <div className="mr-64">
                                    <h1 className="font-reguler text-[18px]">Last Name</h1>
                                    <h1 className="font-bold text-[18px] mt-2">Doe</h1>
                                </div>
                            </div>
                            <div className="flex justify-between mt-6">
                                <div>
                                    <h1 className="font-reguler text-[18px]">Email</h1>
                                    <h1 className="font-bold text-[18px] mt-2">johndoe45@gmail.com</h1>
                                </div>
                                <div className="mr-52">
                                    <h1 className="font-reguler text-[18px]">Phone</h1>
                                    <h1 className="font-bold text-[18px] mt-2">081234567890</h1>
                                </div>
                            </div>
                            <div className="justify-between items-center">
                                <h1 className="text-[#728969] text-[24px] font-bold mt-12">Password</h1>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileScreen