import ContatoInterface from "./ContatoInterface";
import EnderecoInterface from "./EnderecoInterfaceo";

export default interface EstabelecimentoInterface {
    id: string;
    nome: string;
    categoria: string;
    subcategoria: string;
    avaliacao: number;
    qtdAvaliacao?: number;
    contato: ContatoInterface;
    endereco: EnderecoInterface;
    imagem: string;
}
