import React, { createContext, useState, ReactNode, useEffect } from "react";
import EstabelecimentoInterface from "../EstabelecimentoInterface";

interface PlaceContextType {
    estabelecimento: EstabelecimentoInterface | null;
    savePlace: (place: EstabelecimentoInterface) => void;
}

export const PlaceContext = createContext<PlaceContextType>(
    {} as PlaceContextType,
);

export function PlaceProvider({ children }: { children: ReactNode }) {
    const [estabelecimento, setEstabelecimento] =
        useState<EstabelecimentoInterface | null>(null);

    useEffect(() => {}, []);

    async function savePlace(place: EstabelecimentoInterface) {
        await setEstabelecimento(place);
    }

    return (
        <PlaceContext.Provider value={{ estabelecimento, savePlace }}>
            {children}
        </PlaceContext.Provider>
    );
}
