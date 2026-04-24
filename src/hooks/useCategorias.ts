import { useEffect, useState } from "react";
import { getCategorias } from "../services";

export function useCategorias() {
    const [categorias, setCategorias] = useState<string[]>([]);

    useEffect(() => {
        async function fetchCategorias() {
            const result = await getCategorias();

            setCategorias(result);
        }

        fetchCategorias();
    }, [categorias]);

    return { categorias };
}
