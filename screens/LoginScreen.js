import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>LoginScreen</Text>
        <Button title="Go to the home screen" onPress={() => this.props.navigation.navigate('HomeScreen')} />
      </View>
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
