import React, { useState } from "react";
import Tab from '../../components/Tabs';

export default function SettingEvent () {
    const [event, setEvent] = useState({
        name: "",
        deskname: "",
        description: "",
        date: "",
        status: "",
        category: "",
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent({
        ...event,
        [name]: value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(event);
    };
    
    return (
        <div className="container mx-auto">
        <Tab />
        <div className="mt-8">
            <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                    Event Name
                </label>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="name"
                    type="text"
                    name="name"
                    value={event.name}
                    onChange={handleChange}
                />
                </div>
                <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="deskname">
                    Deskripsi Event
                </label>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    id="deskname"
                    type="text"
                    name="deskname"
                    value={event.deskname}
                    onChange={handleChange}
                />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                    Deskripsi Event
                </label>
                <textarea
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="description"
                    name="description"
                    value={event.description}
                    onChange={handleChange}
                />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="date">
                    Date
                </label>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="date"
                    type="date"
                    name="date"
                    value={event.date}
                    onChange={handleChange}
                />
                </div>
                <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="status">
                    Status
                </label>
                <select
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    id="status"
                    name="status"
                    value={event.status}
                    onChange={handleChange}
                >
                    <option value="On Going">On Going</option>
                    <option value="Done">Done</option>
                    <option value="Draft">Draft</option>
                </select>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="category">
                    Category
                </label>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="category"
                    type="text"
                    name="category"
                    value={event.category}
                    onChange={handleChange}
                />
                </div>
            </div>
            <div className="flex items-center">
                <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                >
                Save
                </button>
            </div>
            </form>
        </div>
        </div>
    );
}
