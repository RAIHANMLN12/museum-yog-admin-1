import {React, useState} from 'react';
import MuseumCardCollection from '../../components/MuseumCollectionCard';
import MuseumCollectionData from '../../dataSample/MuseumCollectionData';
import AddInfoCollection from '../../components/AddInfoCollection';


const MuseumCollectionScreen = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="flex-1 overflow-y-auto ml-[260px]">
                <div className='flex flex-col space-y-8'>
                    <div className='flex flex-row justify-between items-center'>
                        <h1 className='font-bold text-black text-[24px]'>
                            Museum Collection
                        </h1>
                        <button 
                            className='bg-[#7F9275] rounded-[8px] text-white px-5 py-3'
                            onClick={handleOpenModal}    
                        >
                            +   Add Museum Collection
                        </button>
                    </div>
                    <MuseumCardCollection data={MuseumCollectionData} onEdit={handleOpenModal}/>
                </div>
                {isModalOpen && (
                    <div className="fixed pl-[260px] pt-[190px] inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-50 overflow-y-auto">
                        <AddInfoCollection onClose={handleCloseModal}/>
                    </div>
                )}
            </div>
        </>
    )
}

export default MuseumCollectionScreen;