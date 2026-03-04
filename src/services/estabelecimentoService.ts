import { supabase } from "../config/supabase";
import { Estabelecimento, Contato, Endereco } from "../types";

interface EstabelecimentoRow {
    id: string;
    nome: string;
    categoria: string;
    subcategoria: string;
    avaliacao: number;
    qtd_avaliacao: number;
    contato: Contato;
    endereco: Endereco;
    imagem_url: string | null;
    created_at: string;
    updated_at: string;
}

function mapRowToEstabelecimento(row: EstabelecimentoRow): Estabelecimento {
    return {
        id: row.id,
        nome: row.nome,
        categoria: row.categoria,
        subcategoria: row.subcategoria,
        avaliacao: row.avaliacao,
        qtdAvaliacao: row.qtd_avaliacao,
        contato: row.contato,
        endereco: row.endereco,
        imagem: row.imagem_url ?? "",
    };
}

function mapEstabelecimentoToRow(
    est: Omit<Estabelecimento, "id">,
): Omit<EstabelecimentoRow, "id" | "created_at" | "updated_at"> {
    return {
        nome: est.nome,
        categoria: est.categoria,
        subcategoria: est.subcategoria,
        avaliacao: est.avaliacao,
        qtd_avaliacao: est.qtdAvaliacao ?? 0,
        contato: est.contato,
        endereco: est.endereco,
        imagem_url: est.imagem || null,
    };
}

export async function getEstabelecimentos(): Promise<Estabelecimento[]> {
    const { data, error } = await supabase.from("estabelecimentos").select("*");

    if (error) throw error;

    return data.map(mapRowToEstabelecimento);
}

export async function getEstabelecimentosByCategoria(
    categoria: string,
): Promise<Estabelecimento[]> {
    const { data, error } = await supabase
        .from("estabelecimentos")
        .select("*")
        .eq("categoria", categoria);

    if (error) throw error;

    return data.map(mapRowToEstabelecimento);
}

export async function getEstabelecimentoById(
    id: string,
): Promise<Estabelecimento | null> {
    const { data, error } = await supabase
        .from("estabelecimentos")
        .select("*")
        .eq("id", id)
        .single();

    if (error) return null;

    return mapRowToEstabelecimento(data);
}

export async function createEstabelecimento(
    estabelecimento: Omit<Estabelecimento, "id">,
): Promise<Estabelecimento> {
    const row = mapEstabelecimentoToRow(estabelecimento);

    const { data, error } = await supabase
        .from("estabelecimentos")
        .insert(row)
        .select()
        .single();

    if (error) throw error;

    return mapRowToEstabelecimento(data);
}
export {}