import React, { createContext, useState, ReactNode, useEffect } from "react";
import { Estabelecimento } from "../types";
interface PlaceContextType {
    estabelecimento: Estabelecimento | null;
    savePlace: (place: Estabelecimento) => void;
}

export const PlaceContext = createContext<PlaceContextType>(
    {} as PlaceContextType,
);

export function PlaceProvider({ children }: { children: ReactNode }) {
    const [estabelecimento, setEstabelecimento] =
        useState<Estabelecimento | null>(null);

    useEffect(() => {}, []);

    async function savePlace(place: Estabelecimento) {
        await setEstabelecimento(place);
    }

    return (
        <PlaceContext.Provider value={{ estabelecimento, savePlace }}>
            {children}
        </PlaceContext.Provider>
    );
}
