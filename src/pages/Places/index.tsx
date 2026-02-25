import { useState } from "react";
import "./style.css";
import NavBar from "../../components/Navbar";
import PlaceCard from "../../components/PlaceCard";
import EstabelecimentoInterface from "../../EstabelecimentoInterface";

import Cafeteste from "../../assets/cafeteste.jpeg";
import Academiateste from "../../assets/academiateste.jpg";
import LivrariaTeste from "../../assets/livrariateste.jpg";

export default function Places() {
    const [estabelecimentos, setEstabelecimentos] = useState<
        EstabelecimentoInterface[]
    >([
        {
            id: "uuid-001",
            nome: "Café Coder & Caffeine",
            categoria: "Gastronomia",
            subcategoria: "Cafeteria",
            avaliacao: 4.8,

            qtdAvaliacao: 29,
            contato: {
                telefone: "(11) 98765-4321",
                email: "contato@codercaffeine.com.br",
                website: "https://codercaffeine.com.br",
            },
            endereco: {
                rua: "Alameda dos Bits, 1024",
                bairro: "Vila Mariana",
                referencia: "Centro",
            },
            imagem: Cafeteste,
        },
        {
            id: "uuid-002",
            nome: "Academia Iron Logic",
            categoria: "Saúde",
            subcategoria: "Fitness",
            avaliacao: 4.5,

            qtdAvaliacao: 30,
            contato: {
                telefone: "(21) 3344-5566",
                email: "vendas@ironlogic.com.br",
            },
            endereco: {
                rua: "Av. Professor Algoritmo, 500",
                bairro: "Barra da Tijuca",
                referencia: "Centro",
            },
            imagem: Academiateste,
        },
        {
            id: "uuid-003",
            nome: "Livraria Scriptum",
            categoria: "Cultura",
            subcategoria: "Livraria",
            avaliacao: 4.9,
            qtdAvaliacao: 150,
            contato: {
                telefone: "(31) 2233-4455",
                instagram: "@scriptum_livros",
            },
            endereco: {
                rua: "Praça da Liberdade, S/N",
                bairro: "Savassi",
                referencia: "Centro",
            },
            imagem: LivrariaTeste,
        },
    ]);

    const [categorias, setCategorias] = useState<string[]>([
        "Gastronomia",
        "Comércio",
        "Saúde",
        "Serviços",
        "Beleza e Estética",
        "Educação",
        "Automotivo",
        "Hospedagem",
        "Instituições",
        "Lazer e Entretenimento",
    ]);

    const [categoriaAtiva, setCategoriaAtiva] = useState<string | null>(null);

    const produtosFiltrados = categoriaAtiva
        ? estabelecimentos.filter(
              (estabelecimento) => estabelecimento.categoria === categoriaAtiva,
          )
        : estabelecimentos;

    return (
        <>
            <NavBar />
            <div className="home__header">
                <header className="home__header">
                    <h1>Estabelecimentos de pérola</h1>
                </header>
            </div>

            <div className="filtros">
                <button
                    className="chip active"
                    onClick={() => {
                        setCategoriaAtiva("Cultura");
                    }}
                >
                    Cultura
                </button>

                <button
                    className="chip"
                    onClick={() => {
                        setCategoriaAtiva("Saúde");
                    }}
                >
                    Saúde
                </button>
                <button
                    className="chip"
                    onClick={() => {
                        setCategoriaAtiva("Gastronomia");
                    }}
                >
                    Gastronomia
                </button>
                <button
                    className="btn__ghost"
                    onClick={() => {
                        setCategoriaAtiva(null);
                    }}
                >
                    Limpar filtros
                </button>
            </div>

            <section className="produtos__grid">
                <PlaceCard estabelecimento={produtosFiltrados} />
            </section>
        </>
    );
}
