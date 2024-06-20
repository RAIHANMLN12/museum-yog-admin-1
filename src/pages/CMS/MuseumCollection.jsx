import {React, useState} from 'react';
import PlusIcon from "/src/assets/icons/Plus.png";
import MuseumCardCollection from '../../components/MuseumCollectionCard';
import MuseumCollectionData from '../../dataSample/MuseumCollectionData';
import AddInfoCollection from '../../components/AddInfoCollection';
import EditInfoCollection from '../../components/EditInfoCollection';


const MuseumCollectionScreen = () => {
    const [isHaveData, setIsHaveData] = useState(false)
    const [isAddData, setIsAddData] = useState(false);
    const [isEditData, setIsEditData] = useState(false);

    const handleAddData = () => {
        setIsAddData(true)
    };

    const handleCloseAddData = () => {
        setIsAddData(false);
    };

    const handleEditData = () => {
        setIsEditData(true);
    }

    const handleCloseEditData = () => {
        setIsEditData(false);
    }

    return (
        <>
            <div className="flex-1 overflow-y-auto ml-[260px] mt-5 bg-[#F8F8F8] h-screen">
                <div className='flex flex-col space-y-8'>
                    <div className='flex flex-row justify-between items-center'>
                        <h1 className='font-bold text-black text-[24px]'>
                            Museum Collection
                        </h1>
                        <button
                            className='bg-[#7F9275] rounded-[8px] text-white px-5 py-3'
                            onClick={handleAddData}
                        >
                            +   Add Museum Collection
                        </button>
                    </div>
                    {!isHaveData ? (
                        <div className=" bg-white mb-[50px] p-10 rounded-[8px] shadow-[0px_8px_28px_0px_rgba(0,0,0,0.10)] flex flex-col justify-center items-center space-y-10">
                            <h1 className="text-black font-bold text-[20px]">
                                You don’t have any data about the museum collection
                            </h1>
                            <div className="flex flex-row justify-center items-center space-x-5" onClick={handleAddData}>
                                <img src={PlusIcon} alt="" className="w-[24px] h-[24px]" />
                                <button>
                                    Add Museum Collection
                                </button>
                            </div>
                        </div>
                    ) : (
                        <MuseumCardCollection data={MuseumCollectionData} onEdit={handleEditData}/>
                    )}
                </div>
                {isAddData && (
                    <div className="fixed ml-[280px] pt-[120px] inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-60 overflow-y-auto">
                        <AddInfoCollection onClose={handleCloseAddData}/>
                    </div>
                )}
                {isEditData && (
                    <div className="fixed ml-[280px] pt-[120px] inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-60 overflow-y-auto">
                        <EditInfoCollection onClose={handleCloseEditData}/>
                    </div>
                )}
            </div>
        </>
    )
}

export default MuseumCollectionScreen;