import React from "react";
import { Link } from "react-router-dom";


const MuseumCardCollection = ({data}) => {
    return (
        <div className="flex flex-col w-full bg-white mb-[50px] p-10 rounded-[8px] shadow-[0px_8px_28px_0px_rgba(0,0,0,0.10)]">
            <div className="flex flex-row w-full px-5">
                <img src={data.image} alt="" className="w-[200px] h-[150px]"/>
                <div className="flex flex-col justify-start">
                    <h1>
                        {data.titleCollection}
                    </h1>
                    <p>
                        {data.descCollection}
                    </p>
                </div>
            </div>
            <div className="flex flex-row justify-end items-center">
            </div>
        </div>
    )
}