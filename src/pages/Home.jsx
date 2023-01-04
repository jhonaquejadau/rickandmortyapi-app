import React, {useEffect, useState} from "react";
import { apiconfig } from "../api/apiconfig";
import {Loader} from "../components/Loader"
import { Character } from "../components/Character";


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

    console.log('character')
    console.log(character)

    return (
        <div className={`${loading && 'flex justify-center items-center'} w-full min-h-screen grid grid-cols-6 gap-4 bg-zinc-900`}>
            
            {loading ? <Loader/> : character.results.map((character, index) => (
                <Character data={character} key={character.id}/>
            ))}   
            
        </div>
    )
}