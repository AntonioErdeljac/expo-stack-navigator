import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

// const AppNavigator = StackNavigator({
//   LoginScreen: { screen: LoginScreen },
//   HomeScreen: { screen: HomeScreen },
// });

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}

const AppDrawerNavigator = DrawerNavigator({
  LoginScreen: { screen: LoginScreen },
  HomeScreen: { screen: HomeScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
