import React from "react";
import MainScreen from "./MainScreen";
import NewContactsScreen from "./NewContactsScreen";
import { StackNavigator } from "react-navigation";

const BasicApp = StackNavigator({
  Main: { screen: MainScreen },
  NewContacts: { screen: NewContactsScreen }
});

export default class App extends React.Component {
  render() {
    return <BasicApp />;
  }
}
