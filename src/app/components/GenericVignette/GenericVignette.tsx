import React from "react";

interface IGenericVignetteProps {
    onClick?: any;
    borderColor: string;
    bgColor: string;
    dotColor: string;
}

export const GenericVignette = ({onClick, bgColor, borderColor, dotColor}: IGenericVignetteProps) => {
    return (
        <div onClick={onClick} className={`w-4 h-4 rounded-full ${bgColor} border ${borderColor} flex justify-center items-center`} >
            <span className={`w-1 h-1 rounded-full ${dotColor}`}></span>
        </div>
    )
}