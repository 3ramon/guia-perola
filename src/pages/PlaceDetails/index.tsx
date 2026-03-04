import { useContext } from "react";
import NavBar from "../../components/Navbar";
import { PlaceContext } from "../../context/placeContext";

export default function PlaceDetails() {
    const { selectedEstabelecimento } = useContext(PlaceContext);

    return (
        <>
            <NavBar />
            <h1>Estamos nos detalhes dos estabelecimentos</h1>
            <ul>
                {selectedEstabelecimento && (
                    <>
                        <h1>{selectedEstabelecimento.nome}</h1>
                        <p>{selectedEstabelecimento.categoria}</p>
                        <p>{selectedEstabelecimento.endereco.rua}</p>
                        <img src={selectedEstabelecimento.imagem} />
                    </>
                )}
            </ul>
        </>
    );
}
