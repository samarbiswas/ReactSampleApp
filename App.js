// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  * @lint-ignore-every XPLATJSCOPYRIGHT1
//  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });


// import {createStackNavigator, createAppContainer} from 'react-navigation';
// import {HomeScreen} from './app/screens/home/home.js';

// const MainNavigator = createStackNavigator({
//   Home: {screen: HomeScreen}
// });

// const App = createAppContainer(MainNavigator);

// export default App;

import React, { Component } from 'react';
import { View } from 'react-native';
import { createDrawerNavigator,createAppContainer } from 'react-navigation'
import { Button,Container,Header,Left,Right,Icon,Text } from 'native-base';

class MyHomeScreen extends React.Component {
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
 }// End of MyHomeScreen class

class MyNotificationsScreen extends React.Component {
   render() {
     return (
       <View style={{ marginTop:100,marginLeft:100}}>
         <Button onPress={() => this.props.navigation.goBack()} >
           <Text>Go back home</Text>
         </Button>
       </View>
     );
    }
}//End of MyNotificationsScreen class

const MyDrawerNavigator = createDrawerNavigator({
   Home:{ 
      screen: MyHomeScreen,
   },
   Notifications: {
      screen: MyNotificationsScreen,
   },
 });
 
const MyApp = createAppContainer(MyDrawerNavigator);

class App extends React.Component{
    render(){
      return(
        <Container>
          <MyApp >
            </MyApp >
        </Container>
      );
    }
}//End of App class

export default App;