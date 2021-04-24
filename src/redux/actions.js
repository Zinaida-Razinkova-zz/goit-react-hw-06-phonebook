import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/addContact", (text) => {
  return {
    payload: { id: shortid.generate(), ...text },
  };
});
const deleteButton = createAction("contacts/deleteButton");
const changeFilter = createAction("contacts/changeFilter");

// eslint-disable-next-line
export default { addContact, deleteButton, changeFilter };
