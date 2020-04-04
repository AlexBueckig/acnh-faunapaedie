import React from "react";
import logo from "../../images/Logo.svg";
import styles from "./Header.module.scss";
interface Props {}

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles["logo"]}>
          <img
            className={styles["logo__image"]}
            src={logo}
            alt="Logo with Butterfly and fish"
          />
          <h1 className={styles["logo__text"]}>Faunapädie - AC:NH</h1>
        </div>
        <ul className={styles["nav__list"]}>
          <li className={styles["nav__list-item"]}>
            <a href="/fish" className={styles["nav__list-link"]}>
              Fische
            </a>
          </li>
          <li className={styles["nav__list-item"]}>
            <a href="/insects" className={styles["nav__list-link"]}>
              Insekten
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
