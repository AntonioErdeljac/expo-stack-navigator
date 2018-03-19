import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

const NotificationsScreen = () => (
  <View>
    <Text>NotificationsScreen</Text>
  </View>
);

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>HomeScreen</Text>
      </View>
    );
  }
}

const HomeScreenTabNavigator = TabNavigator({
  HomeScreen: { screen: HomeScreen },
  NotificationsScreen: { screen: NotificationsScreen },
}, {
  animationEnabled: true,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreenTabNavigator;