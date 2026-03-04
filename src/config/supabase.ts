import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL; // O endereço do seu "restaurante"
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY; // Sua chave de acesso

if (!supabaseUrl || !supabaseKey) {
    throw new Error(
        "Variaveis de ambiente do supabase não encontradas. Configure REACT_APP_SUPABASE_URL e REACT_APP_SUPABASE_ANON_KEY",
    );
}

export const supabase = createClient(supabaseUrl, supabaseKey);
