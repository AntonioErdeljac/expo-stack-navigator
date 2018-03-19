import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const AppNavigator = StackNavigator({
  HoginScreen: { screen: LoginScreen },
  HomeScreen: { screen: HomeScreen },
});

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
