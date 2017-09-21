import { combineReducers } from "redux";
import { SAVE_CONTACT } from "./actions";

const initialState = {
  contacts: []
};

const saveContact = (state = initialState, action) => {
  console.log(action.data);
  switch (action.type) {
    case SAVE_CONTACT: {
      return { ...state, contacts: state.contacts.concat(action.data) };
    }
    default: {
      return initialState;
    }
  }
};

const contacts = combineReducers({
  saveContact
});

export default contacts;
