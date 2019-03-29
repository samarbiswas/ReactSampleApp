import React from 'react'
import {
    Text
} from 'react-native'
import {
    StackNavigator,
    DrawerNavigator
} from 'react-navigation'

import HomeScreen from '../screens/home'
import LoginScreen from '../screens/login'

// drawer stack
const DrawerStack = DrawerNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
})

const DrawerNavigation = StackNavigator({
    DrawerStack: {
        screen: DrawerStack
    }
}, {
    headerMode: 'float',
    navigationOptions: ({
        navigation
    }) => ({
        headerStyle: {
            backgroundColor: 'green'
        },
        title: 'Logged In to your app!',
        headerLeft: 
        <Text onPress = {() => navigation.navigate('DrawerOpen')}> Menu </Text>
    })
})

// login stack
const LoginStack = StackNavigator({
      loginScreen: { screen: LoginScreen },
    //   signupScreen: { screen: SignupScreen },
    //   forgottenPasswordScreen: { screen: ForgottenPasswordScreen, navigationOptions: { title: 'Forgot Password' } }
}, {
    headerMode: 'float',
    navigationOptions: {
        headerStyle: {
            backgroundColor: 'red'
        },
        title: 'You are not logged in'
    }
})

// Manifest of possible screens
export default PrimaryNav = StackNavigator({
    loginStack: {
        screen: LoginStack
    },
    drawerStack: {
        screen: DrawerNavigation
    }
}, {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'loginStack'
})