/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet
} from 'react-native';

import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux';

import store from "./app/store";
import LoginScreen from './app/screens/Login/LoginScreen.js';
import HomeScreen from './app/screens/Home/HomeScreen.js';

const AppNavigation = StackNavigator({
	Home: {screen: HomeScreen},
	Login: {screen: LoginScreen}
})

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppNavigation />
			</Provider>
		)
	}
}

AppRegistry.registerComponent('reactnativestarter', () => App);
