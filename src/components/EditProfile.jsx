import React from 'react';
import BackIcon from "/src/assets/icons/back-icon.png";
import { Link } from "react-router-dom";

const EditProfile = () => {
    const [firstname, setFirstName] = useState("");
    const [lasttname, setLasttName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <div className="flex-1 p-4 overflow-y-auto ml-[250px] mt-16 pt-10 overflow-x-hidden bg-[#F8F8F8]">
            <div className="mx-10 my-11 space-y-5">
                <Link to={'/profile'}>
                    <div className="flex flex-row items-center">
                        <img src={BackIcon} alt="" className="mr-2"/>
                        <h1 className="text-[#AFAFAF]">Museum Information</h1>
                        <h1 className="mx-[5px] text-[#AFAFAF] ">/</h1>
                        <h1 className="text-[#CF8E72]">Edit Information</h1>
                    </div>
                    </Link>
                            
                    <h1 className="text-[#728969] text-[32px] font-bold">Edit Information</h1>
            </div>
        </div>
    );
}

export default EditProfile;
