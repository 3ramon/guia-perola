import { useState } from "react";
import { createEstabelecimento } from "../services/estabelecimentoService";
import { Estabelecimento } from "../types";
import { uploadImagem } from "../services";

interface UseCreateEstabelecimentoResult {
    create: (data: Omit<Estabelecimento, "id" | "imagem">,
        imagemFile?: File
    ) => Promise<Estabelecimento | null>;
    isLoading: boolean;
    error: string | null;
    success: boolean;
}

export function useCreateEstabelecimento(): UseCreateEstabelecimentoResult {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    async function create(
        data: Omit<Estabelecimento, "id" | "imagem">, 
        imagemFile?: File): Promise<Estabelecimento | null> {
        setIsLoading(true);
        setError(null);
        setSuccess(false);

        try {
            let imagemUrl = ""  

            if(imagemFile){
                imagemUrl = await uploadImagem(imagemFile);
            }
            const result = await createEstabelecimento({ ...data, imagem: imagemUrl });

            setSuccess(true);
            return result;
        } catch (err) {
            const message =
                err instanceof Error ? err.message : "Erro ao cadastrar estabelecimento";
            setError(message);
            return null;
        }finally {
            setIsLoading(false);
        }
    }

    return { create, isLoading, error, success };
}
