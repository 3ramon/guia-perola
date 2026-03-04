import { useContext, useEffect, useState } from "react";
import "./style.css";
import NavBar from "../../components/Navbar";
import PlaceCard from "../../components/PlaceCard";
import { PlaceContext } from "../../context/placeContext";

export default function Places() {
    const { estabelecimentosBanco, filterPlaces, isLoading } =
        useContext(PlaceContext);

    const [categoriaAtiva, setCategoriaAtiva] = useState<string | null>(null);

    useEffect(() => {
        filterPlaces(categoriaAtiva);
    }, [categoriaAtiva]);

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
                {isLoading ? (
                    <p>Carregando...</p>
                ) : (
                    <PlaceCard estabelecimento={estabelecimentosBanco} />
                )}
            </section>
        </>
    );
}
