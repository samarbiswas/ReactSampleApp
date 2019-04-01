import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";
import HomeScreen from "../screens/home/home.screen";
import LoginScreen from "../screens/login/login.screen";
import AuthLoadingScreen from "../screens/auth-loading/auth-loading";
import AppDrawerContent from "./AppDrawerContent";
import SettingScreen from "../screens/settings/settings.screen";
import MoviesListScreen from "../screens/movies-list/MoviesList.screen";

// const AppStack = createStackNavigator({ Home: HomeScreen });
const AppStack = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Setings: {
      screen: SettingScreen
    },
    MoviesList: {
      screen: MoviesListScreen
    }
  },
  {
    contentComponent: AppDrawerContent
  }
);
const AuthStack = createStackNavigator({ SignIn: LoginScreen });

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);
