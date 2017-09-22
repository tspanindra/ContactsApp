import React, { Component } from "react";
import { FlatList, Text, StyleSheet, View, Image } from "react-native";
import { connect } from "react-redux";
import default_pic from "./assets/default_pic.png";

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    flexDirection: "row"
  },
  container: {
    flexDirection: "column"
  },
  nameContainer: {
    flexDirection: "row"
  },
  noContact: {
    paddingTop: 10,
    alignSelf: "center",
    justifyContent: "center"
  },
  textStyle: {
    paddingLeft: 10
  }
});

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
    return (
      <View style={styles.mainContainer}>
        <Image style={{ width: 40, height: 40 }} source={default_pic} />
        <View style={styles.container}>
          <View style={styles.nameContainer}>
            <Text style={styles.textStyle}>{item.first}</Text>
            <Text style={styles.textStyle}>{item.last}</Text>
          </View>
          <Text style={styles.textStyle}>{item.phone}</Text>
        </View>
      </View>
    );
  };

  render() {
    const { goBack } = this.props.navigation;
    if (this.props.contacts.length < 1) {
      return <Text style={styles.noContact}> Sorry you have No contacts! </Text>;
    }
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
