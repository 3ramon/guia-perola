import { useEffect, useState } from "react";
import { supabase } from "../config/supabase";

export function useCategorias() {
  const [categorias, setCategorias] = useState<string[]>([]);

  useEffect(() => {
    async function fetchCategorias() {
      const { data } = await supabase
        .from("categorias")
        .select("nome");

      setCategorias(data?.map(c => c.nome) ?? []);
    }

    fetchCategorias();
  }, []);

  return { categorias };
}