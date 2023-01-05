import React from "react"
import { data } from "../utils/data"

export const Footer = () => {
    
    return (
        <footer className=" relative z-10 w-full flex flex-row justify-center items-center py-[1em] px-[15em] max-[1000px]:px-[2em] max-[500px]:flex-col">
            <p className=" mr-auto max-[500px]:mr-0 max-[500px]:mb-4`} text-white">{`<Design/>`} by <span className="text-purple-800 font-[700]">jaqudev_ 2022</span></p>
            <div className="flex flex-row justify-center items-center gap-4">
                {data.social.map((social, index) => {
                    return (
                        <div key={index} className="flex flex-row justify-center items-center gap-2 capitalize hover:scale-[1.2] z-40 mx-2">
                            <a href={social.source} target="_blank" rel="noreferrer">
                            <img className="w-[30px] h-[30px] " src={social.imgWhite} alt={social.name} />
                            </a>
                        </div>
                    )
                })}
            </div>
        </footer>
    )
}