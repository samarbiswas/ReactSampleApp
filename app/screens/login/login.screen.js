import React, { Component } from "react";
import { View, AsyncStorage } from "react-native";
import { Button, Text } from "native-base";

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "Please sign in"
  };

  render() {
    return (
      <View>
        <Button title="Sign in!" onPress={this._signInAsync}>
          <Text>Sign In!</Text>
        </Button>
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("App");
  };
}
