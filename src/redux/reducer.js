import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const contacts = createReducer([], {
  [actions.addContact]: (state, action) => [...state, action.payload],
  [actions.deleteButton]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  contacts,
  filter,
});
