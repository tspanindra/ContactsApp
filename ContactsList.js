import React, { Component } from "react";
import { FlatList, Text } from "react-native";

export default class NewContactsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Contacts List",
    headerStyle: { paddingTop: 30 }
  });

  getTextInput = title => {
    return <TextInput style={styles.textStyle} placeholder={title} />;
  };

  render() {
    const { goBack } = this.props.navigation;
    return (
      <FlatList
        data={[{ key: "a" }, { key: "b" }]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
    );
  }
}
