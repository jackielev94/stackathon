import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
// import { AnimatedBackgroundColorView } from 'react-native-animated-background-color-view';

export default class Home extends React.Component {
	render() {
		return (
			<View style={styles.screens}>
				<Image
					source={{
						uri:
							'https://e7.pngegg.com/pngimages/328/745/png-clipart-public-domain-umbrella-woman-child-umbrella.png',
					}}
					style={styles.logo}
				/>
				<Text style={styles.headerTitle}>
					Welcome, Laura! Would you like to add some new rewards for Jackie
					today?
				</Text>
				<View style={styles.header}>
					<Button
						title='ADD REWARDS'
						color='white'
						onPress={() => this.props.navigation.navigate('Rewards')}
					/>
				</View>

				<Text style={styles.headerTitle}>
					View Jackie's activity this week!
				</Text>
				<View style={styles.header}>
					<Button
						title='VIEW ACTIVITY'
						color='white'
						onPress={() => this.props.navigation.navigate('TimeStats')}
					/>
				</View>

				<Text style={styles.headerTitle}>
					Review your application value system!
				</Text>
				<View style={styles.header}>
					<Button
						title='REVIEW VALUES'
						color='white'
						onPress={() => this.props.navigation.navigate('Values')}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	screens: {
		height: '100%',
		width: '100%',
		flexDirection: 'column',
		backgroundColor: '#9df9ef',
		alignItems: 'center',
		justifyContent: 'center',
	},
	header: {
		width: '60%',
		height: '10%',
		backgroundColor: '#034748',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 15,
	},
	headerTitle: {
		margin: 20,
		color: 'black',
		fontSize: 14,
		fontFamily: 'Palatino',
		fontWeight: 'bold',
	},
	logo: {
		width: 66,
		height: 58,
		borderRadius: 50,
	},
});
