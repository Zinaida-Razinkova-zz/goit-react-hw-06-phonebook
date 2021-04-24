import React from "react";
import propTypes from "prop-types";
import styles from "./ContactList.module.css";
import { connect } from "react-redux";
import actions from "../../redux/actions";

const ContactList = ({ contacts, onDeleteButton }) => {
  return (
    <>
      <ul className={styles.listContactList}>
        {contacts.map((contact) => (
          <li className={styles.listStyle} key={contact.id}>
            {contact.name + " : " + contact.number}
            <button
              className={styles.buttonContactList}
              onClick={() => {
                onDeleteButton(contact.id);
              }}
              // onClick={onDeleteButton}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: propTypes.array.isRequired,
  onDeleteButton: propTypes.func.isRequired,
};

const filterContacts = (allContacts, filter) => {
  const string = filter.toLowerCase();
  return allContacts.filter(({ name }) => name.toLowerCase().includes(string));
};

const mapStateToProps = ({ contacts: { contacts, filter } }) => ({
  contacts: filterContacts(contacts, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteButton: (id) => dispatch(actions.deleteButton(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
