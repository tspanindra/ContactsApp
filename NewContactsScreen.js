import React, { Component } from "react";
import { Button } from "react-native";

export default class NewContactsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
    headerStyle: { paddingTop: 20 }
  });
  render() {
    const { goBack } = this.props.navigation;
    return <Button title="Go back" onPress={() => goBack()} />;
  }
}
