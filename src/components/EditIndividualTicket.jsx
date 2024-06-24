import React, { useState } from "react";
import CloseIcon from "../assets/icons/close-icon.png";
import axios from "axios";


const EditIndividualTicket = ({data, onSave, onClose}) => {
    const [ticketName, setTicketName] = useState(data?.nama_tiket || "");
    const [ticketDescription, setTicketDescription] = useState( data?.deskripsi_tiket || "");
    const [ticketPriceWeekdays, setTicketPriceWeekdays] = useState(data?.harga_weekdays || 0);
    const [ticketPriceWeekend, setTicketPriceWeekend] = useState(data?.harga_weekend || 0);
    const [samePrice, setSamePrice] = useState(false);


    const handleSubmit = async () => {
        try {
            const updatedTicket = {
                nama_tiket: ticketName,
                deskripsi_tiket: ticketDescription,
                harga_weekdays: ticketPriceWeekdays,
                harga_weekend: ticketPriceWeekend
            };
            const response = await axios.put(`http://localhost:4000/tiket/updateIndividualTiket/${data.id}`, updatedTicket);
            onSave();
        } catch (error) {
            console.error("Error updating ticket:", error);
        }
    };

    const handleSamePriceChange = () => {
        setSamePrice(!samePrice);
        if (!samePrice) {
            setTicketPriceWeekend(ticketPriceWeekdays);
        }
    };

    return (
        <>
            <div className='flex flex-col w-[600px] bg-white mb-[50px] px-7 py-8 space-y-5 rounded-[8px] shadow-sm'>
                <div className="flex flex-row justify-end items-center hover:cursor-pointer" onClick={onClose}>
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
                    <input
                        type="text"
                        value={ticketDescription}
                        onChange={(e) => setTicketDescription(e.target.value)}
                        placeholder="add ticket description"
                        className="w-full h-[60px] border border-[#728969] focus:outline-none rounded-md p-5"
                    />
                </div>
                <div className="space-y-3">
                    <div className="flex flex-row items-center space-x-3 ">
                        <h1 className="bg-[#728969] px-5 py-2 rounded-[100px] font-bold text-white text-[16px]">
                            Weekdays
                        </h1>
                        <h1 className="font-bold text-black text-[16px]">
                            Ticket Price
                        </h1>
                    </div>
                    <input
                        type="number"
                        value={ticketPriceWeekdays}
                        onChange={(e) => setTicketPriceWeekdays(e.target.value)}
                        placeholder="add ticket price"
                        className="w-full h-[60px] border border-[#728969] focus:outline-none rounded-md p-5"
                    />
                </div>
                <div className="space-y-3">
                    <div className="flex flex-row items-center space-x-3 ">
                        <h1 className="bg-[#C57557] px-5 py-2 rounded-[100px] font-bold text-white text-[16px]">
                            Weekend
                        </h1>
                        <h1 className="font-bold text-black text-[16px]">
                            Ticket Price
                        </h1>
                    </div>
                    <div className="flex flex-row items-center space-x-3">
                        <input
                            type="number"
                            value={samePrice ? ticketPriceWeekdays : ticketPriceWeekend}
                            onChange={(e) => setTicketPriceWeekend(e.target.value)}
                            placeholder="add ticket price"
                            className="w-full h-[60px] border border-[#728969] focus:outline-none rounded-md p-5"
                            disabled={samePrice}
                        />
                        <input
                            type="checkbox"
                            className="w-[24px] h-[24px]"
                            checked={samePrice}
                            onChange={handleSamePriceChange}
                        />
                        <span className="text-black text-[16px]">Set as the same price as weekdays</span>
                    </div>
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

export default EditIndividualTicket;