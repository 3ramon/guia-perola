import { useContext } from "react";
import NavBar from "../../components/Navbar";
import { PlaceContext } from "../../context/placeContext";

export default function PlaceDetails() {
    const { estabelecimento } = useContext(PlaceContext);

    return (
        <>
            <NavBar />
            <h1>Estamos nos detalhes dos estabelecimentos</h1>
            <ul>
                {estabelecimento && (
                    <>
                        <h1>{estabelecimento.nome}</h1>
                        <p>{estabelecimento.categoria}</p>
                        <p>{estabelecimento.endereco.rua}</p>
                        <img src={estabelecimento.imagem} />
                    </>
                )}
            </ul>
        </>
    );
}
