import React from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import UserSampleAccount from "../../dataSample/UserAccount";

const ProfileScreen = () => {
    return (
        <>
            <div className="flex flex-col h-screen">
                <Navbar user={UserSampleAccount[0]} className="h-16 bg-gray-800 text-white flex items-center px-4" />
                <div className="flex">
                    <Sidebar />
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-10 space-y-5 bg-[#F8F8F8] h-screen">
                        <div className="flex flex-row items-center space-x-5 text-start ml-[260px] mt-[120px]">
                            <h1>
                                Profile Screen
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileScreen