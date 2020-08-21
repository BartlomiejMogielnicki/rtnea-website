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
          <div className={styles.navListItemDropdown}>
            <a href="#" className={styles.navListItemDropdownLink}>
              Kim jesteśmy?
            </a>
            <a href="#" className={styles.navListItemDropdownLink}>
              Opinie
            </a>
            <a href="#" className={styles.navListItemDropdownLink}>
              Referencje
            </a>
          </div>
        </li>
        <li className={styles.navListItem}>
          <button className={styles.navListItemButton}>Muzyka</button>
          <div className={styles.navListItemDropdown}>
            <a href="#" className={styles.navListItemDropdownLink}>
              Eventy korporacyjne
            </a>
            <a href="#" className={styles.navListItemDropdownLink}>
              Konferencje & szkolenia
            </a>
            <a href="#" className={styles.navListItemDropdownLink}>
              Eventy muzyczne
            </a>
            <a href="#" className={styles.navListItemDropdownLink}>
              Imprezy prywatne
            </a>
            <a href="#" className={styles.navListItemDropdownLink}>
              Przyjęcia weselne
            </a>
          </div>
        </li>
        <li className={styles.navListItem}>
          <button className={styles.navListItemButton}>Foto & Video</button>
          <div className={styles.navListItemDropdown}>
            <a href="#" className={styles.navListItemDropdownLink}>
              Foto relacja z wesel
            </a>
            <a href="#" className={styles.navListItemDropdownLink}>
              Foto relacja eventowa
            </a>
            <a href="#" className={styles.navListItemDropdownLink}>
              Sesja narzeczeńska
            </a>
            <a href="#" className={styles.navListItemDropdownLink}>
              Fotografia okolicznościowa
            </a>
            <a href="#" className={styles.navListItemDropdownLink}>
              Sesje produktowe
            </a>
            <a href="#" className={styles.navListItemDropdownLink}>
              Zdjęcia nieruchomości
            </a>
            <a href="#" className={styles.navListItemDropdownLink}>
              Konferencje i targi
            </a>
            <a href="#" className={styles.navListItemDropdownLink}>
              Foto albumy i foto książki
            </a>
          </div>
        </li>
        <li className={styles.navListItem}>
          <button className={styles.navListItemButton}>Dekoracje</button>
          <div className={styles.navListItemDropdown}>
            <a href="#" className={styles.navListItemDropdownLink}>
              Love Weddingowe
            </a>
            <a href="#" className={styles.navListItemDropdownLink}>
              Efekty świetlne
            </a>
            <a href="#" className={styles.navListItemDropdownLink}>
              Oświetlenie dekoracyjne
            </a>
            <a href="#" className={styles.navListItemDropdownLink}>
              Foto budka
            </a>
            <a href="#" className={styles.navListItemDropdownLink}>
              TV
            </a>
            <a href="#" className={styles.navListItemDropdownLink}>
              Sztuczny dym
            </a>
          </div>
        </li>
        <li className={styles.navListItem}>
          <button className={styles.navListItemButton}>Usługi</button>
          <div className={styles.navListItemDropdown}>
            <a href="#" className={styles.navListItemDropdownLink}>
              Wynajem sprzętu
            </a>
            <a href="#" className={styles.navListItemDropdownLink}>
              Filmowanie dronem
            </a>
            <a href="#" className={styles.navListItemDropdownLink}>
              Barmani
            </a>
          </div>
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
