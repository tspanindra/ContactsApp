import React, { Component } from "react";
import { View, Button, StyleSheet, TouchableHighlight, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  button: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    marginBottom: 10,
    backgroundColor: "#D3D3D3",
    alignItems: "center"
  },
  textStyle: {
    padding: 10,
    marginLeft: 10,
    marginRight: 10
  }
});

export default class MainScreen extends React.Component {
  static navigationOptions = {
    title: "Contacts",
    headerStyle: { paddingTop: 20 }
  };

  createButton = (title, navigateScreen) => {
    const { navigate } = this.props.navigation;
    return (
      <TouchableHighlight style={styles.button} onPress={() => navigate(navigateScreen)}>
        <Text style={styles.textStyle}> {title} </Text>
      </TouchableHighlight>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.createButton("Create Contact", "NewContacts")}
        {this.createButton("Edit Contact", "ContactsList")}
        {this.createButton("Delete Contact", "ContactsList")}
        {this.createButton("Display Contact", "ContactsList")}
        {this.createButton("Finish")}
      </View>
    );
  }
}
