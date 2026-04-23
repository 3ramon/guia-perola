import { Search } from "lucide-react";
import styles from "./SearchBar.module.css";

interface Props {
    value: string;
    onChange: (v: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
    return (
        <div className={styles.wrap}>
            <Search className={styles.icon} />
            <input
                className={styles.input}
                placeholder="Search establishments..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
