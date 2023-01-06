import React from "react";

export const Character = ({data, setModal}) => {

    const status = {
        Alive: 'bg-green-500',
        Dead: 'bg-red-500',
        unknown: 'bg-slate-400'
    }

    const handleModal = () => {
        setModal(true)
    }

    return (
        <div key={data.id} className="w-full h-full flex flex-row rounded-xl text-sm text-white bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:scale-[1.02]">
            <div className="w-[300px] h-full sm:w-[500px] sm:h-[250px]">
                <img className="w-full h-full rounded-l-xl" src={data.image} alt={data.name} />
            </div>
            <div className="w-full h-full px-2 py-4">
                <p className="text-[1.5rem] font-bold text-white">{data.name}</p>
                <div className="flex flex-row items-center text-xl mb-4">
                    <span className={`${status[data.status]} w-[10px] h-[10px] rounded-full`}/>
                    <p className="ml-2">{data.status} -</p>
                    <p> - {data.species}</p>
                </div>
                <p className="text-slate-500 font-bold">Last known location:</p>
                <p onClick={handleModal} className="text-lg font-[200] hover:cursor-pointer hover:text-cyan-600 hover:font-bold">{data.location.name}</p>
                <p className="text-slate-500 font-bold">Origin:</p>
                <p className="text-lg font-[200]">{data.origin.name}</p>
            </div>
        </div>
    )
}