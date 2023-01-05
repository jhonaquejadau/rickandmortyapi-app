import React, {useEffect, useState} from "react";

import {Loader} from "../components/Loader"
import { Character } from "../components/Character";
import {BiArrowFromRight, BiArrowFromLeft} from "react-icons/bi"

import { apiconfig } from "../api/apiconfig";
import wallpaper from "../utils/assets/wallpaper_two.jpg"


export const Home = () => {

    const [character, setCharacter] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const res = await fetch(apiconfig.fetchdata('character'));
            const data = await res.json();
            setCharacter(data)
            setLoading(false);
        })();
    }, [])

    return (
        <div className=" w-full h-full">
            <img className="fixed z-0 w-full h-[100vh]" src={wallpaper}  alt="wallpaper"/>

            <div className="z-10 relative w-[85%] mx-auto pt-[8em] text-white">

                <p className="text-[2rem] font-[300] text-center lg:text-[3rem]">{`< Welcome`} to <span className="text-cyan-600 strokeletter font-bold">RickAndMortyApi</span> {`Page />`}</p>
                <p className="text-center text-2xl mb-4">Looks for characters, locations and episodes</p>
                
                <div className="w-full grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {loading ? <Loader/> : character.results.map((character, index) => (
                        <Character data={character} key={character.id}/>
                    ))}   
                </div>

                <div className="flex flex-row justify-center items-center w-full h-[100px] border-2">
                    <div className="flex flex-row justify-center items-center mr-auto px-2 lg:px-4 hover:bg-cyan-700 hover:cursor-pointer">
                        <BiArrowFromRight className="w-6 h-6 sm:w-16 sm:h-16 lg:w-20 lg:h-20"/>
                        <p className="capitalize">previous <span className="max-[600px]:hidden">characters</span></p>
                    </div>
                    <div className="flex flex-row justify-center items-center px-2 lg:px-4 hover:bg-cyan-700 hover:cursor-pointer">
                        <p className="capitalize">next <span className="max-[600px]:hidden">characters</span></p>
                        <BiArrowFromLeft className="w-6 h-6 sm:w-16 sm:h-16 lg:w-20 lg:h-20"/>
                    </div>
                </div>
            </div>

        </div>
    )
}