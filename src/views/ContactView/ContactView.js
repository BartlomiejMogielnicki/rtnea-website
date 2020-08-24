import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./ContactView.module.scss";

class ContactView extends React.Component {
  state = {
    name: "",
    email: "",
    text: "",
    nameErrorMessage: "",
    emailErrorMessage: "",
    textErrorMessage: "",
  };

  validateForm = () => {
    let name = false;
    let email = false;
    let text = false;
    let nameErrorMessage = "";
    let emailErrorMessage = "";
    let textErrorMessage = "";

    // Name input verification
    if (this.state.name === "") {
      nameErrorMessage = "Proszę wpisać imię i nazwisko";
    } else {
      name = true;
    }

    // E-mail input verification
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.state.email === "") {
      emailErrorMessage = "Proszę wpisać adres e-mail";
    } else if (!re.test(String(this.state.email).toLowerCase())) {
      emailErrorMessage = "Adres e-mail jest nieprawidłowy";
    } else {
      email = true;
    }

    // Text message input verification
    if (this.state.text === "") {
      textErrorMessage = "Proszę wpisać treść wiadomości";
    } else {
      text = true;
    }

    this.setState({
      nameErrorMessage,
      emailErrorMessage,
      textErrorMessage,
    });

    // Submit form
    if (name && email && text) {
      return true;
    } else {
      return false;
    }
  };

  handleFormSubmit = (e) => {
    if (!this.validateForm()) {
      e.preventDefault();
    }
  };

  handleChange = (e) => {
    const inputName = e.target.name;
    this.setState({
      [inputName]: e.target.value,
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <ContactForm
          submitted={this.handleFormSubmit}
          changed={this.handleChange}
          state={this.state}
        />
      </div>
    );
  }
}

export default ContactView;
