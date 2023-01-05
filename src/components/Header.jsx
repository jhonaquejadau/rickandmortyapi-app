import React from "react";
import logo from "../utils/assets/logo.png"

export const Header = () => {
    return (
        <header className="fixed z-30 flex flex-row justify-center items-center w-full bg-transparent text-center px-40">
            <img className="w-24 h-24" src={logo} alt="logo"/>
            <p className='text-cyan-600 stroke font-bold text-[2.5rem]'>R&M</p>
            <p className="capitalize text-xl text-cyan-700 font-bold ml-auto hover:text-cyan-400"><a href="https://github.com/jhonaquejadau" target="_blank " rel="noneref">{`jaqudev_`}</a></p>
            <p className="capitalize text-xl text-cyan-700 font-bold ml-4    hover:text-cyan-400"><a href="https://rickandmortyapi.com/" target="_blank " rel="noneref" >docs API</a></p>
        </header>
    )
}