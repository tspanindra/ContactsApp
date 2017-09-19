import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    marginTop: 5,
    marginBottom: 5
  }
});

export default class MainScreen extends React.Component {
  static navigationOptions = {
    title: "Contacts",
    headerStyle: { paddingTop: 20 }
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          style={styles.button}
          title="Create New"
          onPress={() => navigate("NewContacts", { name: "Jane" })}
        />
        <Button
          style={styles.button}
          title="Edit Contact"
          onPress={() => navigate("NewContacts", { name: "Jane" })}
        />
        <Button
          style={styles.button}
          title="Delete Contact"
          onPress={() => navigate("NewContacts", { name: "Jane" })}
        />
        <Button
          style={styles.button}
          title="Display Contact"
          onPress={() => navigate("NewContacts", { name: "Jane" })}
        />
        <Button
          style={styles.button}
          title="Finish"
          onPress={() => navigate("NewContacts", { name: "Jane" })}
        />
      </View>
    );
  }
}
