import { useState } from "react";
import { createEstabelecimento } from "../services/estabelecimentoService";
import { Estabelecimento } from "../types";

export function useCreateEstabelecimento() {
    const [loading, setLoading] = useState(false);

    async function create(estabelecimento: Omit<Estabelecimento, "id">) {
        setLoading(true);
        const result = await createEstabelecimento(estabelecimento);
        setLoading(false);
        return result;
    }

    return { create, loading };
}
