import { useState } from "react";
import { useNavigation } from "../../hooks/useNavigation";
import logo from "../../assets/logo.png";
import { useLocation, Link } from "react-router-dom";
import { Menu, X, HouseHeart } from "lucide-react";
import styles from "./Navbar.module.css";

interface NavbarProps {
    isShop: boolean;
}

const NAV_ITEMS = [
    { label: "Inicio", path: "/" },
    { label: "Cadastro", path: "/Register" },
    { label: "MapCity", path: "#", disabled: true },
    { label: "Marketplace", path: "#", disabled: true },
    { label: "Novidades", path: "#", disabled: true },
    { label: "Eventos", path: "#", disabled: true },
    { label: "Sobre", path: "/About" },
];

export default function NavBar() {
    const [showCart, setShowCart] = useState(false);
    const { handleNavigation } = useNavigation();

    const [open, setOpen] = useState(false);
    const location = useLocation();

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    <HouseHeart />
                    <span>Cidade Perola</span>
                </Link>

                <nav className={styles.desktopNav}>
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            className={`${styles.navLink} ${
                                item.disabled
                                    ? styles.navLinkDisabled
                                    : location.pathname === item.path
                                      ? styles.navLinkActive
                                      : ""
                            }`}
                        >
                            {item.label}
                            {item.disabled && (
                                <span className={styles.soonBadge}>Soon</span>
                            )}
                        </Link>
                    ))}
                </nav>

                <button
                    className={styles.menuButton}
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {open && (
                <nav className={styles.mobileNav}>
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            onClick={() => setOpen(false)}
                            className={`${styles.mobileNavLink} ${
                                item.disabled
                                    ? styles.navLinkDisabled
                                    : location.pathname === item.path
                                      ? styles.navLinkActive
                                      : ""
                            }`}
                        >
                            {item.label}
                            {item.disabled && (
                                <span className={styles.soonBadge}>Soon</span>
                            )}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}
