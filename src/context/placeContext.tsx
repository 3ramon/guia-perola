import React, { createContext, useState, ReactNode, useEffect } from "react";
import { Estabelecimento } from "../types";
import { useEstabelecimentos } from "../hooks/useEstabelecimentos";

interface PlaceContextType {
    selectedEstabelecimento: Estabelecimento | null;
    savePlace: (place: Estabelecimento) => void;
    estabelecimentosBanco: Estabelecimento[];
    isLoading: boolean;
    filterPlaces: (categoria: string | null) => void;
    selectedCategoria: string | null;
}

export const PlaceContext = createContext<PlaceContextType>(
    {} as PlaceContextType,
);

export function PlaceProvider({ children }: { children: ReactNode }) {
    const [selectedCategoria, setSelectedCategoria] = useState<string | null>(
        null,
    );
    const { data, loading } = useEstabelecimentos(
        selectedCategoria ?? undefined,
    );
    const [selectedEstabelecimento, setSelectedEstabelecimento] =
        useState<Estabelecimento | null>(null);
    const [estabelecimentosBanco, setEstabelecimentosBanco] = useState<
        Estabelecimento[]
    >([]);

    useEffect(() => {
        if (data) {
            setEstabelecimentosBanco(data);
        }
    }, [data]);

    async function savePlace(place: Estabelecimento) {
        await setSelectedEstabelecimento(place);
    }

    function filterPlaces(categoria: string | null) {
        setSelectedCategoria(categoria);
    }

    return (
        <PlaceContext.Provider
            value={{
                isLoading: loading,
                estabelecimentosBanco: data,
                selectedEstabelecimento,
                selectedCategoria,
                filterPlaces,
                savePlace,
            }}
        >
            {children}
        </PlaceContext.Provider>
    );
}
