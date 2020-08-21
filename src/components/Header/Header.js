import React from "react";
import styles from "./Header.module.scss";
import HeaderNav from "./HeaderNav/HeaderNav";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <HeaderNav />
    </header>
  );
};

export default Header;
