import { useEffect, useState } from "react";
import { supabase } from "../config/supabase";
import { getCategorias } from "../services";

export function useCategorias() {
    const [categorias, setCategorias] = useState<string[]>([]);

    useEffect(() => {
        async function fetchCategorias() {
            const result = await getCategorias();

            setCategorias(result?.map((c) => c) ?? []);
        }

        fetchCategorias();
    }, []);

    return { categorias };
}
