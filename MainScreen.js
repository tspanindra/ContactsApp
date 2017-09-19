import React, { Component } from "react";
import { Button } from "react-native";

export default class MainScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Create New Contact"
        onPress={() => navigate("NewContacts", { name: "Jane" })}
      />
    );
  }
}
