import React from "react";
import Link from "next/link";

export interface IServiceCardProps {
    id: string;
    title: string;
    description: string;
    link: string;
    icon: React.ReactNode;

}
export const ServiceCard = ({title, description, link, icon}: IServiceCardProps) => {
    return (
        <div className="text-[#0f0f0f] hover:text-white hover:bg-[#2E53A3] bg-white p-1 sm:p-4 pt-6 shadow-lg mx-1 sm:mx-5 embla__slide">
            {icon}
            <h4 className="font-sans text-xl font-semibold text-inherit mt-3">{title}</h4>
            <p className="font-sans text-sm text-inherit mt-3">{description}</p>
            <Link href={link} className="flex gap-1 items-center font-semibold text-inherit text-lg font-sans mt-3">
                Leer más
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-inherit">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                </svg>
            </Link>
        </div>
    );
}
