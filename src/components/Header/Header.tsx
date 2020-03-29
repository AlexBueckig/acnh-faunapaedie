import React from "react";
import styles from "./Header.module.scss";

interface Props {}

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles["nav__list"]}>
          <li className={styles["nav__list-item"]}>
            <a href="/fish">Fische</a>
          </li>
          <li>
            <a href="/insects">Insekten</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
