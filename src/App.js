import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import styles from "./App.module.css";

class App extends Component {
  // state = {
  //   contacts: [
  //     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //   ],
  //   filter: "",
  // };
  render() {
    return (
      <>
        <div className={styles.appConteiner}>
          <h1 className={styles.text}>Phonebook</h1>
          <ContactForm />
          <h2 className={styles.text}>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </>
    );
  }
}

export default App;
