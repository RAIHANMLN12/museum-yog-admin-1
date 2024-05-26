import React from "react";

const SettingTicket = () => {
    return(
        <>
            <div className="flex flex-col ml-[260px] mt-5 mb-10 ">
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
                        <button className="bg-[#7F9275] text-white rounded-[8px] px-4 py-3">
                            Add Ticket
                        </button>
                    </div>

                    <div className="grid grid-cols-2">
                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default SettingTicket;