import { useEffect, useState } from "react";
import { Estabelecimento } from "../types";
import {
    getEstabelecimentosByCategoria,
    getEstabelecimentos,
} from "../services";

export function useEstabelecimentos(categoria?: string) {
    const [data, setData] = useState<Estabelecimento[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);

            const result = categoria
                ? await getEstabelecimentosByCategoria(categoria)
                : await getEstabelecimentos();

            setData(result);
            setLoading(false);
        }

        fetchData();
    }, [categoria]);

    return { data, loading };
}
