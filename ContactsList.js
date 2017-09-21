import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import { connect } from "react-redux";

export const mapStateToProps = (state: Object) => {
  return {
    contacts: state.saveContact.contacts
  };
};

export class ContactsList extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Contacts List",
    headerStyle: { paddingTop: 30 }
  });

  getTextInput = title => {
    return <TextInput style={styles.textStyle} placeholder={title} />;
  };

  keyExtractor = (item, index) => item.first;

  renderItem = ({ item }) => {
    return <Text key={item.first}>{item.first}</Text>;
  };

  render() {
    const { goBack } = this.props.navigation;
    return (
      <FlatList
        data={this.props.contacts}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}

export default connect(mapStateToProps, null)(ContactsList);
