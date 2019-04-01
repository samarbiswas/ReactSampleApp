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
  Title,
  ListItem,
  List
} from "native-base";

export default class MoviesListScreen extends React.Component {
  state = {
    movies: []
  };

  componentDidMount = () => {
    this.fetchUserList();
  };

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
            <Title>Movies</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          {/* <Text>{this.state.response}</Text> */}
          <List>
            {this.state.movies.map((value, index) => {
              return (
                <ListItem key={index}>
                  <Text>{value.title}</Text>
                </ListItem>
              );
            })}
          </List>
        </Content>
      </Container>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  fetchUserList = async () => {
    try {
      const reqURL = "https://facebook.github.io/react-native/movies.json";
      const reqMethod = "GET";
      let responseData = await fetch(reqURL, {
        method: reqMethod
      });
      let responseJson = await responseData.json();
      this.setState({
        movies: responseJson.movies
      });
    } catch (error) {
      console.error(error);
    }
  };
}
