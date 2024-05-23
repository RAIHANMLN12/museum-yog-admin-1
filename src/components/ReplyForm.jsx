import React, { useState } from "react";
import CloseIcon from "/src/assets/icons/close-icon.png";

const ReplyForm = ({onSave, onCancle}) => {
    const [reply, setReply] = useState('');
    
    return (
        <>
            <div className="flex flex-col bg-white rounded-[8px]">
                <div className="flex flex-row justify-end">
                    <img src={CloseIcon} alt="" />
                </div>
                <div className="flex flex-col border border-black rounded-[8px]">
                    <h1>Content</h1>
                    <textarea value={reply} onChange={(e) => setReply(e.target.value)}/>

                </div>
            </div>
        </>
    );
}