import React, { Component } from 'react';
import { View } from 'react-native';
import { Button,Container,Header,Left,Right,Icon,Text } from 'native-base';

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style={{ marginTop:100,marginLeft:100}}>
                <Button onPress={() => this.props.navigation.goBack()} >
                    <Text>Go back home</Text>
                </Button>
            </View>
        );
    }
}
 