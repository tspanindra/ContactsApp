import React from "react";
import MainScreen from "./screens/MainScreen";
import NewContactsScreen from "./screens/NewContactsScreen";
import { StackNavigator } from "react-navigation";
import ContactsList from "./screens/ContactsList";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import contacts from "./state/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const BasicApp = StackNavigator({
  Main: { screen: MainScreen },
  NewContacts: { screen: NewContactsScreen },
  ContactsList: { screen: ContactsList }
});

let store = createStore(contacts, applyMiddleware(thunk, logger));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BasicApp />
      </Provider>
    );
  }
}
