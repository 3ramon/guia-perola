import "./style.css";

import { useState } from "react";
import { useNavigation } from "../../hooks/useNavigation";
import logo from "../../assets/logo.png";
interface NavbarProps {
    isShop: boolean;
}

export default function NavBar() {
    const [showCart, setShowCart] = useState(false);
    const { handleNavigation } = useNavigation();

    return (
        <nav className="navbar">
            <img
                className="nav__logo"
                src={logo}
                alt="logo"
                onClick={() => {
                    handleNavigation("");
                }}
            />

            <div className="navbar__center">
                <button
                    className="cart__btn__secundary"
                    name="Estabelecimentos"
                    onClick={() => handleNavigation("Places")}
                >
                    Estabelecimentos
                </button>
                <button
                    className="cart__btn__secundary"
                    name="Mapa"
                    onClick={() => handleNavigation("MapCity")}
                >
                    Mapa
                </button>
                <button
                    className="cart__btn__secundary"
                    name="Sobre"
                    onClick={() => handleNavigation("About")}
                >
                    Sobre o criador
                </button>
            </div>

            <div className="navbar__right">
                <button
                    className="cart__btn"
                    onClick={() => handleNavigation("Register")}
                >
                    Cadastrar
                </button>
            </div>
        </nav>
    );
}
