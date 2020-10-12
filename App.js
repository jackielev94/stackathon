import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// App.js
import Amplify from 'aws-amplify';
import config from './aws-exports';
import { Auth } from 'aws-amplify';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Rewards from './components/Rewards';
import TimeStats from './components/TimeStats';
import Values from './components/Values';

Amplify.configure({
	...config,
	Analytics: {
		disabled: true,
	},
});

const Stack = createStackNavigator();

import { withAuthenticator } from 'aws-amplify-react-native';

class App extends React.Component {
	async componentDidMount() {
		const user = await Auth.currentAuthenticatedUser();
	}

	signOut = () => {
		Auth.signOut()
			.then(() => this.props.onStateChange('signedOut'))
			.catch((err) => console.log('err: ', err));
	};

	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name='Home' component={Home} />
					<Stack.Screen name='Rewards' component={Rewards} />
					<Stack.Screen name='TimeStats' component={TimeStats} />
					<Stack.Screen name='Values' component={Values} />
				</Stack.Navigator>
			</NavigationContainer>
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

export default withAuthenticator(App, {
	includeGreetings: true,
});
