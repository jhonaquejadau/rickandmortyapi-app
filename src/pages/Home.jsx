import React, {useEffect, useState} from "react";

import {Loader} from "../components/Loader"
import { Character } from "../components/Character";

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
            
            <div className="z-10 relative w-[80%] grid grid-cols-2 gap-4 mx-auto pt-[10em]">
                {loading ? <Loader/> : character.results.map((character, index) => (
                    <Character data={character} key={character.id}/>
                ))}   
            </div>

        </div>
    )
}