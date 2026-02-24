import { useState } from "react";
import "./style.css";
import EstabelecimentoInterface from "../../EstabelecimentoInterface";

import locationIcon from "../../assets/location.png";
import mailIcon from "../../assets/mail.png";
import phoneIcon from "../../assets/phone.png";
import starIcon from "../../assets/star.png";

interface PlaceCardInterface {
    estabelecimento: EstabelecimentoInterface[];
}

export default function PlaceCard({ estabelecimento }: PlaceCardInterface) {
    return (
        <>
            {estabelecimento.map((lugar) => (
                <div className="container__card">
                    <img src={lugar.imagem} alt="" className="card__img" />

                    <button className="btn__card">Ver Detalhes</button>


                    <div className="card__title">{lugar.nome}</div>

                    <div className="card__category">
                        {lugar.categoria} | {lugar.subcategoria}
                    </div>

                    <div className="card__avaliation">
                        <img
                            src={starIcon}
                            alt=""
                            className="card__img__star"
                        />
                        <div>
                            {lugar.avaliacao} ({lugar.qtdAvaliacao})
                        </div>
                    </div>
                    <hr
                        style={{
                            border: "1px solid  rgb(206, 206, 206)",
                            marginLeft: "210px",
                            width: "50%",
                        }}
                    />

                    <div className="card__contato">
                        <b>Contato:</b>
                        <div className="card__telefone">
                            <img
                                src={phoneIcon}
                                alt=""
                                className="card__icons"
                            />
                            {lugar.contato.telefone}
                        </div>
                        <div className="card__email">
                            <img
                                src={mailIcon}
                                alt=""
                                className="card__icons"
                            />
                            {lugar.contato.email}
                        </div>
                    </div>
                    <hr
                        style={{
                            border: "1px solid  rgb(206, 206, 206)",
                            marginLeft: "210px",
                            width: "50%",
                        }}
                    />
                    <div className="card__location">
                        <img
                            src={locationIcon}
                            alt=""
                            className="card__icons"
                        />
                        <div>
                            {lugar.endereco.rua},{lugar.endereco.bairro}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
