import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Rock The Night</h2>
      <p>
        <i class="fas fa-phone"></i>111-222-333
      </p>
      <div>
        <a href="#">
          <i class="fab fa-facebook-square"></i>
        </a>
        <a href="#">
          <i class="fab fa-instagram-square"></i>
        </a>
        <a href="#">
          <i class="fab fa-twitter-square"></i>
        </a>
      </div>
      <p>Copyrigth &copy; 2020</p>
    </div>
  );
};

export default Footer;
