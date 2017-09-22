import { combineReducers } from "redux";
import { SAVE_CONTACT, DELETE_CONTACT } from "./actions";

const initialState = {
  contacts: []
};

const myContacts = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CONTACT: {
      return { ...state, contacts: state.contacts.concat(action.data) };
    }
    case DELETE_CONTACT: {
      const reducedContacts = state.contacts.filter(contact => {
        return contact.first != action.first;
      });
      return { ...state, contacts: reducedContacts };
    }
    default: {
      return initialState;
    }
  }
};

const contacts = combineReducers({
  myContacts
});

export default contacts;
