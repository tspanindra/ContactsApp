import React, { Component } from "react";
import { ScrollView, TouchableHighlight, Text, StyleSheet, Image, TextInput } from "react-native";
import profilePic from "./assets/profile_pic.jpeg";

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
    alignItems: "center"
  },
  textStyle: {
    padding: 10,
    marginLeft: 10,
    marginRight: 10
  }
});

export default class NewContactsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
    headerStyle: { paddingTop: 30 }
  });

  getTextInput = title => {
    return <TextInput style={styles.textStyle} placeholder={title} />;
  };

  render() {
    const { goBack } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={() => goBack()}>
          <Image style={{ width: 250, height: 250 }} source={profilePic} />
        </TouchableHighlight>
        {this.getTextInput("First")}
        {this.getTextInput("Last")}
        {this.getTextInput("Company")}
        {this.getTextInput("Phone")}
        {this.getTextInput("Email")}
        {this.getTextInput("Url")}
        {this.getTextInput("Addrress")}
        {this.getTextInput("Birthday")}
        {this.getTextInput("Nickname")}
        {this.getTextInput("Facebook Profile Url")}
        {this.getTextInput("Twitter Profile Url")}
        {this.getTextInput("Skype")}
        {this.getTextInput("Youtube Channel")}
      </ScrollView>
    );
  }
}
