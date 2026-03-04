import Contato from "./Contato";
import Endereco from "./Endereco";

export default interface Estabelecimento {
    id: string;
    nome: string;
    categoria: string;
    subcategoria: string;
    avaliacao: number;
    qtdAvaliacao?: number;
    contato: Contato;
    endereco: Endereco;
    imagem: string;
}
