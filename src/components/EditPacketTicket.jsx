import React, { useState } from "react";
import CloseIcon from "../assets/icons/close-icon.png";
import axios from "axios";

const EditPacketTicket = ({data, onSave, onClose}) => {
    const [ticketName, setTicketName] = useState(data?.nama_tiket || "");
    const [ticketDescription, setTicketDescription] = useState(data?.deskripsi_tiket || "");
    const [ticketPrice, setTicketPrice] = useState( data?.harga_tiket || 0);

    const handleClose = () => {
        onClose()
    }

    const handleSubmit = async () => {
        onSave();
    }

    return (
        <>
            <div className='flex flex-col w-[800px] bg-white mb-[50px] px-7 py-8 space-y-5 rounded-[8px] shadow-sm'>
                <div className="flex flex-row justify-end items-center hover:cursor-pointer" onClick={handleClose}>
                    <img src={CloseIcon} alt="" />
                </div>
                <div className="space-y-3">
                    <h1 className="font-bold text-black text-[16px]">Ticket Name</h1>
                    <input
                        type="text"
                        value={ticketName}
                        onChange={(e) => setTicketName(e.target.value)}
                        placeholder="add ticket name"
                        className="w-full h-[60px] border border-[#728969] focus:outline-none rounded-md p-5"
                    />
                </div>
                <div className="space-y-3">
                    <h1 className="font-bold text-black text-[16px]">Ticket Desription</h1>
                    <textarea
                        type="text"
                        value={ticketDescription}
                        onChange={(e) => setTicketDescription(e.target.value)}
                        placeholder="add ticket description"
                        className="w-full h-[150px] border border-[#728969] focus:outline-none rounded-md p-5 resize-none"
                    />
                </div>
                <div className="space-y-3">
                    <h1 className="font-bold text-black text-[16px]">
                        Ticket Price
                    </h1>
                    <input
                        type="number"
                        value={ticketPrice}
                        onChange={(e) => setTicketPrice(e.target.value)}
                        placeholder="add ticket price"
                        className="w-full h-[60px] border border-[#728969] focus:outline-none rounded-md p-5"
                    />
                </div>
                <div className="flex flex-row justify-end items-center">
                    <button className="bg-[#7F9275] text-white rounded-[8px] px-4 py-3" onClick={handleSubmit}>
                        Save Changes
                    </button>
                </div>
            </div>
        </>
    );
}

export default EditPacketTicket;