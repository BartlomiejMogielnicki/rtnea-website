import React from "react";
import styles from "./ContactForm.module.scss";

const ContactForm = (props) => {
  return (
    <form
      name="contact"
      className={styles.contactForm}
      onSubmit={props.submitted}
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className={styles.contactFormSection}>
        <label className={styles.contactFormSectionLabel} htmlFor="name">
          Imię i nazwisko
        </label>
        <input
          className={styles.contactFormSectionInput}
          type="text"
          name="name"
          id="name"
          placeholder="Imię i nazwisko..."
          maxLength="50"
          onChange={props.changed}
          value={props.state.name}
        />
        <small className={styles.contactFormSectionError} id="name-error">
          {props.state.nameErrorMessage}
        </small>
      </div>
      <div className={styles.contactFormSection}>
        <label className={styles.contactFormSectionLabel} htmlFor="email">
          E-mail
        </label>
        <input
          className={styles.contactFormSectionInput}
          type="text"
          name="email"
          id="email"
          placeholder="Adres e-mail..."
          onChange={props.changed}
          value={props.state.email}
        />
        <small className={styles.contactFormSectionError} id="email-error">
          {props.state.emailErrorMessage}
        </small>
      </div>
      <div className={styles.contactFormSection}>
        <label className={styles.contactFormSectionLabel} htmlFor="text">
          Wiadomość
        </label>
        <textarea
          className={styles.contactFormSectionText}
          name="text"
          id="text"
          placeholder="Treść wiadomości..."
          onChange={props.changed}
          value={props.state.text}
        ></textarea>
        <small className={styles.contactFormSectionError} id="text-error">
          {props.state.textErrorMessage}
        </small>
      </div>
      <button className={styles.contactFormSubmitBtn} type="submit">
        Wyślij
      </button>
    </form>
  );
};

export default ContactForm;
