import "./style.css";

import { useState, useContext, use, useEffect } from "react";
import perfilImg from "../../assets/perfil.png";

interface NavbarProps {
    isShop: boolean;
}

export default function NavBar() {
    const [showCart, setShowCart] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav__text">Cidade Pérola</div>

            <div className="navbar__center">
                <button className="cart__btn__secundary" name="Home" onClick={() => {}} >Estabelecimentos</button>
                <button className="cart__btn__secundary" name="To Do" onClick={() => {}} >Mapa</button>
                <button className="cart__btn__secundary" name="Formulário" onClick={() => {}} >Sobre o criador</button>
            </div>

            <div className="navbar__right">
                <button
                    className="cart__btn"
                    onClick={() => setShowCart((prev: any) => !prev)}
                >
                    Cadastrar
                </button>
            </div>
        </nav>
    );
}
