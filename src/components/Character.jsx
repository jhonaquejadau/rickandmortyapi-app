import React from "react";

export const Character = ({data}) => {

    const status = {
        Alive: 'bg-green-500',
        Dead: 'bg-red-500',
        unknown: 'bg-slate-400'
    }

    return (
        <div key={data.id} className="w-full h-full rounded-sm text-white text-sm hover:scale-[1.02] border-2">
            <img src={data.image} alt={data.name} />
            <div className="w-full h-full px-2">
                <p className="text-lg font-bold text-white">{data.name}</p>
                <div className="flex flex-row items-center">
                    <span className={`${status[data.status]} w-[10px] h-[10px] rounded-full`}/>
                    <p className="ml-2">{data.status} -</p>
                    <p> - {data.species}</p>
                </div>
                <p className="text-slate-500">Last known location:</p>
                <p>{data.location.name}</p>
                <p className="text-slate-500">Origin:</p>
                <p>{data.origin.name}</p>
            </div>
        </div>
    )
}