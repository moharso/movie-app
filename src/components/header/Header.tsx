import { useTheme } from "../../hooks/useTheme";
import Navigation from "./navigation/Navigation";
import styles from "./Header.module.scss";
import SwitchButton from "../common/SwitchButton";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles["header"]}>
      <div className={styles["logo-button_container"]}>
        <div className={styles["logo"]}>REIZ</div>
        <div className={styles["theme-toggle"]}>
          <SwitchButton
            isDarkMode={theme === "dark"}
            toggleDarkMode={toggleTheme}
          />
        </div>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
