import React, { Component } from "react";
import { View, AsyncStorage } from "react-native";
import {
  Button,
  Container,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Text,
  Body,
  Title
} from "native-base";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>This is home screen</Text>
          <Button onPress={this._signOutAsync}>
            <Text>Actually, sign me out :)</Text>
          </Button>
          <Button onPress={() => this.props.navigation.navigate("Setings")}>
            <Text>Go to settings</Text>
          </Button>
          <Button onPress={() => this.props.navigation.navigate("MoviesList")}>
            <Text>Users List</Text>
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
