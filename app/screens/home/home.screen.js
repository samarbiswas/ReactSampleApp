import React, { Component } from 'react';
import { View } from 'react-native';
import { Button,Container,Header,Left,Right,Icon,Text } from 'native-base';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left style={{ flexDirection: 'row'}}>
                    <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{ color: 'white', marginRight: 15 }} />
                    </Left>
                    <Right>
                    <Icon name="md-cart" style={{ color: 'white' }} />
                    </Right>
                </Header>
                <View style={{ marginTop:100,marginLeft:100}}>
                    <Button onPress={() => this.props.navigation.navigate('Notifications')} >
                        <Text>Go to notifications</Text>
                    </Button>
                </View>
            </Container>
        );
    }
}
