import { combineReducers } from "redux";
import SAVE_CONTACT from "./actions";

const initialState = {
  contacts: [
    {
      First: "",
      Last: "",
      Company: "",
      Phone: "",
      Email: "",
      Url: "",
      Addrress: "",
      Birthday: "",
      Nickname: "",
      FacebookProfileUrl: "",
      TwitterProfileUrl: "",
      Skype: "",
      YoutubeChannel: ""
    }
  ]
};

const saveContact = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CONTACT: {
      return { ...state, contacts: contacts.concat(action.data) };
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
