import React, { createContext, useState, ReactNode, useEffect } from "react";
import { Estabelecimento } from "../types";
import { useEstabelecimentos } from "../hooks/useEstabelecimentos";
import { useCategorias } from "../hooks/useCategorias";

interface PlaceContextType {
    selectedEstabelecimento: Estabelecimento | null;
    savePlace: (place: Estabelecimento) => void;
    estabelecimentosBanco: Estabelecimento[];
    categoriasBanco: string[];
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
    const [categoriasBanco, setCategoriasBanco] = useState<string[] | null>(
        null,
    );
    const { data, loading } = useEstabelecimentos(
        selectedCategoria ?? undefined,
    );
    const { categorias } = useCategorias();
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

    useEffect(() => {
        if (categorias) {
            setCategoriasBanco(categorias);
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
                categoriasBanco: categorias,
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
