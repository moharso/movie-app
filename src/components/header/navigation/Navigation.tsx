import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss"

const Navigation = () => {
    return (
        <nav className={styles["nav-links"]}>
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
        </nav>
    );
};

export default Navigation;