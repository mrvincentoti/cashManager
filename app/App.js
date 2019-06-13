import React from 'react';
import {ActivityIndicator,Button,StatusBar,StyleSheet,View,} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';


const AppStack = createStackNavigator({ Register: SignupScreen });
//const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: LoginScreen,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
