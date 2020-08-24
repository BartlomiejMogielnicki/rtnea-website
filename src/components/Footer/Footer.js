import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Rock The Night</h2>
      <p className={styles.phone}>
        <i className="fas fa-phone"></i>111-222-333
      </p>
      <div className={styles.socialContainer}>
        <a href="#">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram-square"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter-square"></i>
        </a>
      </div>
      <p className={styles.copyright}>Copyright &copy; 2020</p>
    </div>
  );
};

export default Footer;
