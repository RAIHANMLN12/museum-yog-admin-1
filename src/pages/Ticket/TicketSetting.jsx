import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteIcon from "../../assets/icons/delete.png";
import PacketTicketData from "../../dataSample/PacketTicketData";
import AddIndividualTicket from "../../components/AddIndividualTicket";
import EditIndividualTicket from "../../components/EditIndividualTicket";
import AddPacketTicket from "../../components/AddPacketTicket";
import EditPacketTicket from "../../components/EditPacketTicket";


const SettingTicket = () => {
    const [isAddIndividual, setIsAddIndividual] = useState(false);
    const [isEditIndividual, setIsEditIndividual] = useState(false);
    const [isAddPacket, setIsAddPacket] = useState(false);
    const [isEditPacket, setIsEditPacket] = useState(false);
    const [individualTickets, setIndividualTickets] = useState([]);
    const [packetTickets, setPacketTickets] = useState([]);
    const [selectedIndividualTicket, setSelectedIndividualTicket] = useState(null);
    const [selectedPacketTicket, setSelectedPacketTicket] = useState(null);

    useEffect(() => {
        fetchIndividualTickets();
        fetchPacketTickets();
    }, []);

    const fetchIndividualTickets = async () => {
        try {
            const response = await axios.get('http://localhost:4000/getTiketIndividual');
            setIndividualTickets(response.data.data);
        } catch (error) {
            console.error("Error fetching individual tickets:", error);
        }
    };

    const fetchPacketTickets = async () => {
        try {
            const response = await axios.get('http://localhost:4000/getTiketPaket');
            setPacketTickets(response.data.data);
        } catch (error) {
            console.error("Error fetching individual tickets:", error);
        }
    };

    const handleAddIndividual = () => {
        setIsAddIndividual(true);
    }

    const handleCloseAddIndividual = () => {
        setIsAddIndividual(false);
        fetchIndividualTickets();
    }

    const handleEditIndividual = (ticket) => {
        setSelectedIndividualTicket(ticket);
        setIsEditIndividual(true);

    }

    const handleCloseEditIndividual = () => {
        setIsEditIndividual(false);
        fetchIndividualTickets();
    }

    const handleAddPacket = () => {
        setIsAddPacket(true);
    }

    const handleCloseAddPacket = () => {
        setIsAddPacket(false)
        fetchPacketTickets()
    }

    const handleEditPacket = (ticket) => {
        selectedPacketTicket(ticket);
        setIsEditPacket(true);
    }

    const handleCloseEditPacket = () => {
        setIsEditPacket(false);
        fetchPacketTickets();
    }

    const handleDeleteIndividual = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/deleteIndividualTicket/${id}`)
        }catch (error) {
            console.error("Error deleting ticket:", error);
        }
        fetchIndividualTickets()
    }

    const handleDeletePacket = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/deletePacketTicket/${id}`)
        }catch (error) {
            console.error("Error deleting ticket:", error);
        }
        fetchPacketTickets()
    }


    return(
        <>
            <div className="flex flex-col ml-[260px] mt-5 mb-10 space-y-10">
                {/* individual ticket */}
                <div className="flex flex-col bg-white shadow-custom-shadow w-full px-8 py-10 rounded-[8px] space-y-5">
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-col space-y-4">
                            <h1 className="font-bold text-[24px] text-black">
                                Individual Ticket Type
                            </h1>
                            <p className="font-light text-[16px] text-black">
                                List of available ticket types
                            </p>
                        </div>
                        <button className="bg-[#7F9275] text-white rounded-[8px] px-4 py-3" onClick={handleAddIndividual}>
                            Add Ticket
                        </button>
                    </div>

                    {individualTickets.length === 0 ? (
                        <p className="text-center text-gray-500 font-light text-[20px]">Tidak ada data tiket individual</p>
                    ) : (
                        <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                            {individualTickets.map((ticket) =>
                                <div key={ticket.id} className="flex flex-row justify-between items-center rounded-[8px] border border-[#728969] bg-white h-[250px] px-8">
                                    <div className="flex flex-col space-y-4">
                                        <h1 className="font-bold text-[20px] text-black">
                                            {ticket.nama_tiket}
                                        </h1>
                                        <p className="font-light text-black text-[16px]">
                                            {ticket.deskripsi_tiket}
                                        </p>
                                        <div className="flex flex-row items-center space-x-3 ">
                                            <h1 className="bg-[#728969] px-5 py-2 rounded-[100px] font-bold text-white text-[16px]">
                                                Weekdays
                                            </h1>
                                            <h1 className="font-normal text-black text-[20px]">
                                                Rp {ticket.harga_weekdays}
                                            </h1>
                                        </div>
                                        <div className="flex flex-row items-center space-x-3 ">
                                            <h1 className="bg-[#C57557] px-5 py-2 rounded-[100px] font-bold text-white text-[16px]">
                                                Weekend
                                            </h1>
                                            <h1 className="font-normal text-black text-[20px]">
                                                Rp {ticket.harga_weekend}
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center space-x-5">
                                        <button className="bg-[#7F9275] text-white rounded-[8px] px-4 py-2" onClick={() => handleEditIndividual(ticket)}>
                                            Edit
                                        </button>
                                        <button className="bg-[#C57557] text-white rounded-[8px] px-4 py-2" onClick={() => handleDeleteIndividual(ticket.id)}>
                                            <img src={DeleteIcon} alt="Delete" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {isAddIndividual && (
                    <div className="fixed ml-[280px] inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-60 overflow-y-auto">
                        <AddIndividualTicket onSave={handleCloseAddIndividual} onClose={handleCloseAddIndividual}/>
                    </div>
                )}

                {isEditIndividual && (
                    <div className="fixed ml-[280px] inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-60 overflow-y-auto">
                        <EditIndividualTicket onSave={handleCloseEditIndividual} data={selectedIndividualTicket}/>
                    </div>
                )}

                {/* packet ticket */}
                <div className="flex flex-col bg-white shadow-custom-shadow w-full px-8 py-10 rounded-[8px] space-y-5">
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-col space-y-4">
                            <h1 className="font-bold text-[24px] text-black">
                                Package Ticket Type
                            </h1>
                            <p className="font-light text-[16px] text-black">
                                List of available ticket types
                            </p>
                        </div>
                        <button className="bg-[#7F9275] text-white rounded-[8px] px-4 py-3" onClick={handleAddPacket}>
                            Add Ticket
                        </button>
                    </div>

                    {packetTickets.length === 0 ? (
                        <p className="text-center text-gray-500 font-light text-[20px]">Tidak ada data tiket individual</p>
                    ) : (
                        <div className="flex flex-col items-start space-y-5">
                            {packetTickets.map((ticket) =>
                                <div key={ticket.id} className="flex flex-col items-start rounded-[8px] border border-[#728969] bg-white max-h-[250px] px-8 py-7 w-full space-y-7">
                                    <div className="flex flex-col space-y-6">
                                        <h1 className="font-bold text-black text-[20px]">
                                            {ticket.nama_tiket}
                                        </h1>
                                        <p className="font-light text-black text-[16px]">
                                            {ticket.deskripsi_tiket}
                                        </p>
                                    </div>
                                    <div className="flex flex-row justify-between items-center w-full">
                                        <p className="font-bold text-[#728969] text-[24px]">
                                            Rp {ticket.harga_tiket}/pack
                                        </p>
                                        <div className="flex flex-row items-center space-x-5">
                                            <button className="bg-[#7F9275] text-white rounded-[8px] px-4 py-2" onClick={() => handleEditPacket(ticket)}>
                                                Edit
                                            </button>
                                            <button className="bg-[#C57557] text-white rounded-[8px] px-4 py-2" onClick={() => handleDeletePacket(ticket.id)}>
                                                <img src={DeleteIcon} alt="" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                </div>

                {isAddPacket && (
                    <div className="fixed ml-[280px] inset-0 pt-[100px] bg-black bg-opacity-50 flex flex-col justify-center items-center z-60 overflow-y-auto">
                        <AddPacketTicket onSave={handleCloseAddPacket} onClose={handleCloseAddPacket}/>
                    </div>
                )}
                {isEditPacket && (
                    <div className="fixed ml-[280px] inset-0 pt-[100px] bg-black bg-opacity-50 flex flex-col justify-center items-center z-60 overflow-y-auto">
                        <EditPacketTicket onSave={handleCloseEditPacket} data={selectedPacketTicket} onClose={handleCloseEditPacket}/>
                    </div>
                )}
            </div>
        </>
    )
}

export default SettingTicket;