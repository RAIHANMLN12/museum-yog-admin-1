import React from "react";
import LocationIcon from "/src/assets/icons/location-icon.png";
import Image from "/src/assets/image-test.png";
import TrainIcon from "/src/assets/icons/train-icon.png";
import MosqueIcon from "/src/assets/icons/mosque-icon.png";
import ToiletIcon from "/src/assets/icons/toilet-icon.png";
import TimeIcon from "/src/assets/icons/time-icon.png";
import EditIcon from "/src/assets/icons/edit-icon.png";
import { Link } from "react-router-dom";

const MuseumInformation = () => {
    const SampleData = {
        namaMuseum: 'Museum Keraton Ngayogyakarta Hadiningrat',
        gambarMuseum: [Image, Image, Image, Image],
        alamatMuseum: {
            icon: LocationIcon,
            alamat: 'Jl. Rotowijayan, Kadipaten, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55132',
        },
        operasionalMuseum: {
            waktu: 'Buka setiap hari: 08.00 - 13.30 WIB',
            khususJumat: 'Khusus hari jumat: 08.00 - 13.00 WIB',
            libur: 'Libur pada upacara kebesaran Keraton',
        },
        fasilitasMuseum: [
            { icon: ToiletIcon, fasilitas: "Toilet duduk dan jongkok" },
            { icon: MosqueIcon, fasilitas: "Mushola" },
        ],
        transportMuseum: [
            { transport: "Stasiun Yogyakarta", jarak: "200m" },
            { transport: "Stasiun Lempuyangan", jarak: "300m" },
        ],
    };

    return (
        <>
            <div className="flex-1 p-4 overflow-y-auto ml-[250px] mt-16 pt-10">
                <div className="flex flex-col mx-10 my-9 space-y-5">
                    <div className="flex flex-row justify-between items-center">
                        <h1 className="text-black font-[700] text-[30px]">Museum Information</h1>
                        <div className="flex flex-row justify-center items-center space-x-3 border border-[#728969] rounded-md p-2 w-[100px]">
                            <img src={EditIcon} alt="Edit Icon" />
                            <Link to={'/edit_information'}>
                                <button className="text-[#728969]">Edit</button>
                            </Link>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-black font-[500] text-[26px]">Nama Museum</h1>
                        <p className="text-[#5B6D54] font-[400] text-[16px]">{SampleData.namaMuseum}</p>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-black font-[500] text-[26px]">Gambar Museum</h1>
                        <div className="flex flex-row space-x-4">
                            {SampleData.gambarMuseum.map((gambar, index) => (
                                <img key={index} src={gambar} alt={`Museum ${index + 1}`} className="w-1/4" />
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-black font-[500] text-[26px]">Alamat Museum</h1>
                        <div className="flex items-center space-x-4">
                            <img src={SampleData.alamatMuseum.icon} alt="Location Icon" />
                            <p className="text-[#5B6D54] font-[400] text-[16px]">{SampleData.alamatMuseum.alamat}</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-black font-[500] text-[26px]">Operasional Museum</h1>
                        <div className="flex flex-row items-start space-x-4">
                            <img src={TimeIcon} alt="" />
                            <p className="text-[#5B6D54] font-[400] text-[16px]">{SampleData.operasionalMuseum.waktu} <br /> {SampleData.operasionalMuseum.khususJumat} <br /> {SampleData.operasionalMuseum.libur}</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-black font-[500] text-[26px]">Fasilitas Museum</h1>
                        <div className="space-y-4">
                            {SampleData.fasilitasMuseum.map((fasilitas, index) => (
                                <div key={index} className="flex flex-row items-center space-x-4">
                                    <img src={fasilitas.icon} alt="" />
                                    <p className="text-[#5B6D54] font-[400] text-[16px] ml-2">{fasilitas.fasilitas}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-black font-[500] text-[26px]">Transport Museum</h1>
                        <div className="space-y-4">
                            {SampleData.transportMuseum.map((transport, index) => (
                                <div key={index} className="flex flex-row items-center space-x-4">
                                    <img src={TrainIcon} alt="" />
                                    <p className="text-[#5B6D54] font-[400] text-[16px] ml-2">{transport.transport}</p>
                                    <p className="text-[#5B6D54] font-[400] text-[16px] ml-2">{transport.jarak}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MuseumInformation;
