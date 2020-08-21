import React from "react";
import styles from "./HeaderNav.module.scss";

const HeaderNav = () => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <button className={styles.navListItemButton}>Start</button>
        </li>
        <li className={styles.navListItem}>
          <button className={styles.navListItemButton}>O nas</button>
        </li>
        <li className={styles.navListItem}>
          <button className={styles.navListItemButton}>Muzyka</button>
        </li>
        <li className={styles.navListItem}>
          <button className={styles.navListItemButton}>Foto & Video</button>
        </li>
        <li className={styles.navListItem}>
          <button className={styles.navListItemButton}>Dekoracje</button>
        </li>
        <li className={styles.navListItem}>
          <button className={styles.navListItemButton}>Usługi</button>
        </li>
        <li className={styles.navListItem}>
          <button className={styles.navListItemButton}>Realizacje</button>
        </li>
        <li className={styles.navListItem}>
          <button className={styles.navListItemButton}>Kontakt</button>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
