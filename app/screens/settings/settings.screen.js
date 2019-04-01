import React, { Component } from "react";
import { View, AsyncStorage } from "react-native";
import {
  Button,
  Container,
  Header,
  Left,
  Right,
  Icon,
  Text,
  Content,
  Body,
  Title
} from "native-base";

export default class SettingScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Settings</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>This is settings screen</Text>
          <Button onPress={() => this.props.navigation.navigate("Home")}>
            <Text> Go to home</Text>
          </Button>
        </Content>
      </Container>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };
}
