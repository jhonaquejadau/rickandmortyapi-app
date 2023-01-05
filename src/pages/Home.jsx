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

                <p className="text-[3rem] font-[300] text-center">{`< Welcome`} to <span className="text-cyan-600 strokeletter font-bold">RickAndMortyApi</span> {`Page />`}</p>
                <p className="text-center text-2xl mb-4">Looks for characters, locations and episodes</p>
                <div className="w-full grid grid-cols-2 gap-4">
                    {loading ? <Loader/> : character.results.map((character, index) => (
                        <Character data={character} key={character.id}/>
                    ))}   
                </div>

                <div className="flex flex-row justify-center items-center w-full h-[100px] px-[4em]">
                    <div className="flex flex-row justify-center items-center mr-auto px-4 hover:bg-cyan-700 hover:cursor-pointer">
                        <BiArrowFromRight className="w-20 h-20"/>
                        <p className="capitalize">previous characters</p>
                    </div>
                    <div className="flex flex-row justify-center items-center px-4 hover:bg-cyan-700 hover:cursor-pointer">
                        <p className="capitalize">next characters</p>
                        <BiArrowFromLeft className="w-20 h-20"/>
                    </div>
                </div>
            </div>

        </div>
    )
}