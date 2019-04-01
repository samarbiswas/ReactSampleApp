import React, { Component } from "react";
import { Container } from "native-base";
import { createAppContainer } from "react-navigation";
import AppNavigation from "./app/navigation/AppNavigation";

const Nav = createAppContainer(AppNavigation);
export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Nav />
      </Container>
    );
  }
}
