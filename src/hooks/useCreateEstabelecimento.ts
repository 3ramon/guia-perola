import { useState } from "react";
import { createEstabelecimento } from "../services/estabelecimentoService";
import { Estabelecimento } from "../types";

export function useCreateEstabelecimento() {
    const [loading, setLoading] = useState(false);

    async function create(estabelecimento: Omit<Estabelecimento, "id">) {
        try {
            setLoading(true);
            const result = await createEstabelecimento(estabelecimento);
            return result;
        } finally {
            setLoading(false);
        }
    }

    return { create, loading};
}
