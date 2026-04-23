import { useCategorias } from "../../hooks/useCategorias";
import styles from "./CategoryFilter.module.css";

interface Props {
    selected: string | null;
    onChange: (cat: string | null) => void;
}

export default function CategoryFilter({ selected, onChange }: Props) {
    const { categorias } = useCategorias();

    return (
        <div className={styles.wrap}>
            {categorias.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onChange(cat)}
                    className={`${styles.chip} ${selected === cat ? styles.chipActive : ""}`}
                >
                    {cat}
                </button>
            ))}
            <button
                key={99}
                onClick={() => onChange(null)}
                className={`${styles.chip} ${selected === null ? styles.chipActive : ""}`}
            >
                Limpar filtros
            </button>
        </div>
    );
}
