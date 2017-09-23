import React, { Component } from "react";
import { ScrollView, TouchableHighlight, Text, StyleSheet, Image, TextInput } from "react-native";
import profilePic from "../assets/profile_pic.jpeg";
import { connect } from "react-redux";
import * as appActions from "../state/actions";
import { bindActionCreators } from "redux";
// import Toast from "react-native-simple-toast";

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
    backgroundColor: "gray",
    alignItems: "center"
  },
  saveButton: {
    paddingTop: 10,
    paddingBottom: 10
  },
  textStyle: {
    padding: 10,
    marginLeft: 10,
    marginRight: 10
  }
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      ...appActions
    },
    dispatch
  );

export const mapStateToProps = (state: Object) => {
  return {
    contacts: state.myContacts.contacts
  };
};

export class NewContactsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      first: "",
      last: "",
      company: "",
      phone: "",
      email: "",
      url: "",
      addrress: "",
      birthday: "",
      nickname: "",
      facebookProfileUrl: "",
      twitterProfileUrl: "",
      skype: "",
      youtubeChannel: ""
    };
  }
  static navigationOptions = ({ navigation }) => ({
    title: "Create New Contact",
    headerStyle: { paddingTop: 30 }
  });

  getTextInput = (ref, title) => {
    return <TextInput ref={ref} style={styles.textStyle} placeholder={title} />;
  };

  saveContact = () => {
    /* if (this.state.first === "" || this.state.last === "" || this.state.phone === "") {
      Toast.show("Please enter First name, Last name and phone number.", Toast.LONG);
      return;
    }*/
    const { goBack, state } = this.props.navigation;
    if (state.params.screen == "edit") {
      this.props.updateContact(state.params.first, this.state);
    } else {
      this.props.saveContact(this.state);
    }
    goBack();
  };

  componentWillMount() {
    const { state } = this.props.navigation;

    if (state.params.screen == "edit") {
      const selectedContact = this.props.contacts.filter(contact => {
        return (contact.first = state.params.first);
      });
      this.setState({
        first: selectedContact[0].first,
        last: selectedContact[0].last,
        company: selectedContact[0].company,
        phone: selectedContact[0].phone,
        email: selectedContact[0].email,
        url: selectedContact[0].url,
        addrress: selectedContact[0].addrress,
        birthday: selectedContact[0].birthday,
        nickname: selectedContact[0].nickname,
        facebookProfileUrl: selectedContact[0].facebookProfileUrl,
        twitterProfileUrl: selectedContact[0].twitterProfileUrl,
        skype: selectedContact[0].skype,
        youtubeChannel: selectedContact[0].youtubeChannel
      });
    }
  }

  render() {
    const { goBack } = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={() => goBack()}>
          <Image style={{ width: 200, height: 200 }} source={profilePic} />
        </TouchableHighlight>
        <TextInput
          value={this.state.first}
          style={styles.textStyle}
          onChangeText={first => this.setState({ first })}
          placeholder={"First"}
        />
        <TextInput
          value={this.state.last}
          style={styles.textStyle}
          onChangeText={last => this.setState({ last })}
          placeholder={"Last"}
        />
        <TextInput
          value={this.state.company}
          style={styles.textStyle}
          onChangeText={company => this.setState({ company })}
          placeholder={"Company"}
        />
        <TextInput
          value={this.state.phone}
          style={styles.textStyle}
          onChangeText={phone => this.setState({ phone })}
          placeholder={"Phone"}
        />
        <TextInput
          value={this.state.email}
          style={styles.textStyle}
          onChangeText={email => this.setState({ email })}
          placeholder={"Email"}
        />
        <TextInput
          value={this.state.url}
          style={styles.textStyle}
          onChangeText={url => this.setState({ url })}
          placeholder={"Url"}
        />
        <TextInput
          value={this.state.addrress}
          style={styles.textStyle}
          onChangeText={addrress => this.setState({ addrress })}
          placeholder={"Addrress"}
        />
        <TextInput
          value={this.state.birthday}
          style={styles.textStyle}
          onChangeText={birthday => this.setState({ birthday })}
          placeholder={"Birthday"}
        />
        <TextInput
          value={this.state.nickname}
          style={styles.textStyle}
          onChangeText={nickname => this.setState({ nickname })}
          placeholder={"Nickname"}
        />
        <TextInput
          value={this.state.facebookProfileUrl}
          style={styles.textStyle}
          onChangeText={facebookProfileUrl => this.setState({ facebookProfileUrl })}
          placeholder={"Facebook Profile Url"}
        />
        <TextInput
          value={this.state.twitterProfileUrl}
          style={styles.textStyle}
          onChangeText={twitterProfileUrl => this.setState({ twitterProfileUrl })}
          placeholder={"Twitter Profile Url"}
        />
        <TextInput
          value={this.state.skype}
          style={styles.textStyle}
          onChangeText={skype => this.setState({ skype })}
          placeholder={"Skype"}
        />
        <TextInput
          value={this.state.youtubeChannel}
          style={styles.textStyle}
          onChangeText={youtubeChannel => this.setState({ youtubeChannel })}
          placeholder={"Youtube Channel"}
        />

        <TouchableHighlight style={styles.button} onPress={() => this.saveContact()}>
          <Text style={styles.saveButton}> Save </Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewContactsScreen);
