import { useState } from "react";
import "./style.css";
import NavBar from "../../components/Navbar";
import PlaceCard from "../../components/PlaceCard";
import EstabelecimentoInterface from "../../EstabelecimentoInterface";

import Cafeteste from "../../assets/cafeteste.jpeg";
import Academiateste from "../../assets/academiateste.jpg";
import LivrariaTeste from "../../assets/livrariateste.jpg";

export default function Home() {
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

    return (
        <>
            <NavBar />
            <div className="home__header">
                <header className="home__header">
                    <h1>Guia de Pérola</h1>
                </header>
            </div>
            <section className="produtos__grid">
                <PlaceCard estabelecimento={estabelecimentos} />
            </section>
        </>
    );
}
