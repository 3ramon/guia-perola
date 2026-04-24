import { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import cityBackground from "../../assets/Perola.jpeg";
import styles from "./Home.module.css";
import { PlaceContext } from "../../context/placeContext";
import { useCategorias } from "../../hooks/useCategorias";
import CategoryFilter from "../../components/CategoryFilter";
import SearchBar from "../../components/SearchBar";
import EstablishmentCard from "../../components/EstablishmentCard";

export default function Home() {
    const { estabelecimentosBanco, filterPlaces, isLoading } =
        useContext(PlaceContext);
    const [categoriaAtiva, setCategoriaAtiva] = useState<string | null>(null);

    const [search, setSearch] = useState("");

    

    const filtered = useMemo(() => {
        const q = search.toLowerCase();
        return estabelecimentosBanco.filter((e) => {
            const matchCat =
                categoriaAtiva === null || e.categoria === categoriaAtiva;

            const matchSearch =
                !q ||
                e.nome.toLowerCase().includes(q) ||
                e.categoria?.toLowerCase().includes(q);

            return matchCat && matchSearch;
        });
    }, [categoriaAtiva, search, estabelecimentosBanco]);

    return (
        <>
            <main>
                <section className={styles.heroSection}>
                    <img
                        src={cityBackground}
                        alt="Aerial view of the city"
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay} />
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>
                            Sua cidade, Conectada
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Descubra empresas locais, serviços e recursos
                            comunitários tudo em um só lugar.
                        </p>
                        <Link to="/Register" className={styles.heroButton}>
                            <Plus size={20} /> Cadastre um Estabelecimento
                        </Link>
                    </div>
                </section>

                <section className={styles.listings}>
                    <div className={styles.toolbar}>
                        <SearchBar value={search} onChange={setSearch} />
                        <p className={styles.count}>
                            {filtered.length} Estabelecimentos
                        </p>
                    </div>

                    <CategoryFilter
                        selected={categoriaAtiva}
                        onChange={setCategoriaAtiva}
                    />

                    {filtered.length === 0 ? (
                        <div className={styles.empty}>
                            <p className={styles.emptyTitle}>
                                Nenhum estabelecimento encontrado.
                            </p>
                            <p className={styles.emptyHint}>
                                Tente ajustar o seu filtro ou seu campo de
                                busca!
                            </p>
                        </div>
                    ) : (
                        <div className={styles.grid}>
                            <EstablishmentCard
                                estabelecimento={filtered}
                            />
                        </div>
                    )}
                </section>
            </main>
        </>
    );
}
