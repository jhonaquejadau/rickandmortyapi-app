import React from "react";
import {AiOutlineClose} from "react-icons/ai"

export const Modal = ({character, setModal}) => {

    const handleCloseModal = () => {
        setModal(false)
    }

    return (
        <div className="w-full h-full border-2 bg-[rgba(0,0,0,0.1)] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10">
            <AiOutlineClose onClick={handleCloseModal} className="absolute top-0 right-0 m-2 w-6 h-6 text-white hover:cursor-pointer hover:text-cyan-600"/>
            <p>MODAL</p>
        </div>
    )
}