import { supabase } from "../config/supabase";

const BUCKET_NAME = "estabelecimentos-imagens";

export async function uploadImagem(file: File): Promise<string> {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;

    const { error } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(fileName, file);

    if (error) {
        throw new Error(`Erro ao fazer upload da imagem: ${error.message}`);
    }

    const { data: urlData } = supabase.storage
        .from(BUCKET_NAME)
        .getPublicUrl(fileName);

    return urlData.publicUrl;
}


// Template literal que gera um nome unico. Parte por parte:

// Date.now() — milissegundos desde 1 Jan 1970


// → 1709571234567
// Math.random() — numero aleatorio entre 0 e 1


// → 0.8374729103847
// .toString(36) — converte pra base 36 (0-9 + a-z), ficando mais curto


// → "0.k7f2m9xab3"
// .substring(2) — remove o "0." do inicio


// → "k7f2m9xab3"
// Resultado final com template literal:


// ${1709571234567}-${k7f2m9xab3}.${jpeg}
// → "1709571234567-k7f2m9xab3.jpeg"