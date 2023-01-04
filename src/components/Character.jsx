import React from "react";

export const Character = ({data}) => {
    return (
        <img src={data.image} alt={data.name} />
    )
}