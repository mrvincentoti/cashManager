import React from 'react';
import {
  ActivityIndicator, Button, StatusBar, StyleSheet, View, Text,
  Image, TouchableWithoutFeedback,TextInput,
  SafeAreaView, Keyboard, TouchableOpacity,KeyboardAvoidingView
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


class SignupScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>Sign Up</View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}
export default SignupScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(32, 53, 70)',
    flexDirection: 'column',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18
  },

  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

  logo: {
    width: 300,
    height: 150
  },

  title: {
    color: '#f7c744',
    fontSize: 18,
    textAlign: 'center',
  },

  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding: 20,
  },

  input: {
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#FFF',
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  buttonContainer: {
    backgroundColor: '#f7c744',
    paddingVertical: 15,
  },

  buttonText: {
    textAlign: 'center',
    color: 'rgb(32, 53, 70)'
  }
});
