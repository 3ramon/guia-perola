import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import styles from "./NotFound.module.css";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className={styles.page}>
      <div>
        <h1 className={styles.title}>404</h1>
        <p className={styles.text}>Oops! Essa Pagina não foi encontrada!!</p>
        <a href="/" className={styles.link}>Volte para o inicio</a>
      </div>
    </div>
  );
};

export default NotFound;