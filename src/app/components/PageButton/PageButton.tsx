import {ReactNode} from "react";

interface IPageButton {
    value: ReactNode | ReactNode[];
    onClick?: any;
    otherClasses?: string;
}

export const PageButton = ({value, onClick, otherClasses}: IPageButton) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center rounded-s-full rounded-e-full gap-2 bg-[#2D509E] hover:bg-blue-950 font-sans text-white font-semibold shadow shadow-blue-600 px-5 py-1 ${otherClasses}`}>
            {value}
        </button>
    );
}

