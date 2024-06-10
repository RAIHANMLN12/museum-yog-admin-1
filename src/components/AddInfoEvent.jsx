import React, { useState } from "react";
import BackIcon from "/src/assets/icons/back-icon.png";
import { Link, useNavigate } from "react-router-dom";
import AddIcon from "/src/assets/icons/add-icon.png";
import ImageIcon from "/src/assets/icons/image-icon.png";
import Ticket from "../../src/assets/icons/tickket.png";
import Calender from "../../src/assets/icons/Calendar.png";
import axios from "axios";

const AddInfoEvent = () => {
    const [EventName, setEventName] = useState("");
    const [EventDesc, setEventDesc] = useState("");
    const [EventStartDate, setEventStartDate] = useState("");
    const [EventEndDate, setEventEndDate] = useState("");
    const [EventPrice, setEventPrice] = useState("");
    const [wordCount, setWordCount] = useState(0);
    const [EventPicture, setEventPicture] = useState(null);
    const navigate = useNavigate();

    const handleEventName = (e) => {
        setEventName(e.target.value);
    };
    
    const handlePictureChange = (e) => {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            setEventPicture(URL.createObjectURL(file));
        } else {
            setEventPicture(null);
        }
    };

    const handleEventDesc = (e) => {
        const words = e.target.value.split(/\s+/).filter((word) => word.length > 0);
        if (words.length <= 150) {
            setEventDesc(e.target.value);
            setWordCount(words.length);
        }
    };

    const handleEventStartDate = (e) => {
        setEventStartDate(e.target.value);
    };

    const handleEventEndDate = (e) => {
        setEventEndDate(e.target.value);
    };

    const handleEventPrice = (e) => {
        setEventPrice(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const event = {
            name: EventName,
            description: EventDesc,
            startDate: EventStartDate,
            endDate: EventEndDate,
            price: EventPrice,
            picture: EventPicture,
        };
        try {
            await axios.post('http://localhost:3000/event', event, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            navigate('/setting_event');
        } catch (error) {
            console.error('An error occurred while adding the event:', error);
        }
    };

    return (
       <>
       <div className="flex-1 p-4 overflow-y-auto ml-[250px] mt-16 pt-10 overflow-x-hidden">
                <div className="mx-10 my-11 space-y-5">
                    <Link to={'/setting_event'}>
                        <div className="flex flex-row items-center">
                            <img src={BackIcon} alt="" className="mr-2"/>
                            <h1 className="text-[#AFAFAF]">Setting Event</h1>
                            <h1 className="mx-[5px] text-[#AFAFAF] ">/</h1>
                            <h1 className="text-[#CF8E72]">Add New Event</h1>
                        </div>
                    </Link>
                            
                    <h1 className="text-[#728969] text-[32px] font-bold">Add Event</h1>

                    <form onSubmit={handleSubmit}>
                        {/* Event name input field */}
                        <div className="flex flex-col justify-start space-y-4">
                            <h1 className="text-[#505050] font-bold text-[24px]">
                                Event Name
                            </h1>
                            <input
                                type="text"
                                placeholder="exp. museum asri azhari"
                                className="w-full h-[60px] border border-[#728969] focus:outline-none rounded-md p-5"
                                value={EventName}
                                onChange={handleEventName}
                            />
                        </div>

                        {/* Event Picture input field */}
                        <div className="flex flex-col justify-start space-y-4 pt-5">
                            <h1 className="text-[#505050] font-bold text-[24px]">
                                Add Event Picture
                            </h1>
                            <input
                                type="file"
                                className="hidden"
                                id="fileInput"
                                accept="image/*"
                                onChange={handlePictureChange}
                            />
                            <label
                                htmlFor="fileInput"
                                className="w-full h-[160px] border-dashed border-2 border-[#728969] rounded-md flex flex-col justify-center items-center cursor-pointer"
                            >
                                {EventPicture ? (
                                    <img
                                        src={EventPicture}
                                        alt="Event"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <>
                                        <img src={ImageIcon} alt="icon" />
                                        <p className="text-[#728969]">Add Picture</p>
                                    </>
                                )}
                            </label>
                        </div>

                        {/* Event Description input field */}
                        <div className="flex flex-col justify-start space-y-4 pt-5">
                            <h1 className="text-[#505050] font-bold text-[24px]">
                                Event Description
                            </h1>
                            <textarea
                                rows={10}
                                className="w-full border border-[#728969] focus:outline-none rounded-md p-5 resize-none"
                                placeholder="exp. Event Description"
                                value={EventDesc}
                                onChange={handleEventDesc}
                            />
                            <p className="text-[#728969]">{wordCount}/150 words</p>
                        </div>

                        {/* Event Start Date input field */}
                        <div className="flex flex-col justify-start space-y-4 pt-5">
                            <h1 className="text-[#505050] font-bold text-[24px]">
                                Event Start Date
                            </h1>
                            <input
                                type="date"
                                className="w-full h-[60px] border border-[#728969] focus:outline-none rounded-md p-5"
                                value={EventStartDate}
                                onChange={handleEventStartDate}
                            />
                        </div>

                        {/* Event End Date input field */}
                        <div className="flex flex-col justify-start space-y-4 pt-5">
                            <h1 className="text-[#505050] font-bold text-[24px]">
                                Event End Date
                            </h1>
                            <input
                                type="date"
                                className="w-full h-[60px] border border-[#728969] focus:outline-none rounded-md p-5"
                                value={EventEndDate}
                                onChange={handleEventEndDate}
                            />
                        </div>

                        {/* Event Price input field */}
                        <div className="flex flex-col justify-start space-y-4 pt-5">
                            <h1 className="text-[#505050] font-bold text-[24px]">
                                Event Price
                            </h1>
                            <input
                                type="number"
                                placeholder="exp. 200000"
                                className="w-full h-[60px] border border-[#728969] focus:outline-none rounded-md p-5"
                                value={EventPrice}
                                onChange={handleEventPrice}
                            />
                        </div>

                        {/* Submit button */}
                        <div className="flex justify-end pt-5">
                            <button
                                type="submit"
                                className="px-10 py-3 bg-[#728969] text-white font-bold rounded-md"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
       </>
    );
}

export default AddInfoEvent;
