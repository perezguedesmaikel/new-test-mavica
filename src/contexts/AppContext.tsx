"use client"

import React, {useContext, createContext, useState} from 'react';
import {IServiceCardProps} from "@/app/components/ServicesCard";


interface IAppContextProvider {
    children: React.ReactNode;
}

export const AppContext = createContext<any>(null);
export const AppContextProvider = ({children}: IAppContextProvider) => {
    const [services, setServices] = useState<IServiceCardProps[] | null>(null);

    //ComponentDidMouunt
    React.useEffect(() => {

    }, []);

    const values = React.useMemo(() => ({services, setServices}), [services]);   // States que serán visibles en el contexto.

    return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export default function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        console.error('Error deploying App Context!!!');
    }
    return context;
}

