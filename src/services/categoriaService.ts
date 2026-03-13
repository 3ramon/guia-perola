import { supabase } from "../config/supabase";

export async function getCategorias(): Promise<string[]> {
    const { data, error } = await supabase
        .from("categorias")
        .select("nome")
        .order("nome", { ascending: true });

    if (error) {
        throw new Error(`Erro ao buscar categorias: ${error.message}`);
    }

    return (data as { nome: string }[]).map((row) => row.nome);
}

// Supabase retorna:  [{ nome: "Automotivo" }, { nome: "Cultura" }, { nome: "Gastronomia" }]
                                        //   ↓ .map
// Funcao retorna:    ["Automotivo", "Cultura", "Gastronomia"]
