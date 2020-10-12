import React, { useState } from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	Button,
	Image,
} from 'react-native';

const RewardListItem = (props) => {
	return (
		<TouchableOpacity onPress={props.remove.bind(this, props.id)}>
			<View style={styles.listStyle}>
				<Text>{props.title}</Text>
				<Image
					style={{ width: 100, height: 100 }}
					source={{ uri: props.uri }}
				></Image>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	listStyle: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: '#ccc',
		borderColor: 'black',
		borderWidth: 1,
	},
});

export default RewardListItem;
