import { useContext, useEffect, useState } from "react";
import { useNavigation } from "../../hooks/useNavigation";
import { PlaceContext } from "../../context/placeContext";
import { Estabelecimento } from "../../types";
import styles from "./EstablishmentCard.module.css";
import { HouseHeart, Mail, MapPin, Phone } from "lucide-react";

interface PlaceCardInterface {
    estabelecimento: Estabelecimento[];
}

export default function EstablishmentCard({
    estabelecimento,
}: PlaceCardInterface) {
    return (
        <>
            {estabelecimento.map((e) => (
                <article className={styles.card}>
                    <div className={styles.imageWrap}>
                        {e.imagem ? (
                            <img
                                src={e.imagem}
                                alt={e.nome}
                                className={styles.image}
                            />
                        ) : (
                            <div className={styles.placeholder}>
                                <HouseHeart size={48} />
                            </div>
                        )}
                        <span
                            className={styles.badge}
                            data-category={e.categoria}
                        >
                            {e.categoria}
                        </span>
                    </div>

                    <div className={styles.body}>
                        <h3 className={styles.name}>{e.nome}</h3>
                        <p className={styles.description}>
                            TALVEZ UMA DESCRICAO AQUI
                        </p>

                        <div className={styles.info}>
                            <div className={styles.infoRow}>
                                <MapPin />
                                <span>
                                    {e.endereco.rua},{e.endereco.bairro}
                                </span>
                            </div>
                            <div className={styles.infoRow}>
                                <Phone />
                                <span>{e.contato.telefone}</span>
                            </div>
                            {e.contato.email && (
                                <div className={styles.infoRow}>
                                    <Mail />
                                    <span>{e.contato.email}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </article>
            ))}
        </>
    );
}
