import React, { useState, useEffect } from 'react';
import {
	View,
	TextInput,
	Button,
	StyleSheet,
	Modal,
	Platform,
	Image,
	TouchableOpacity,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

const RewardInput = (props) => {
	const [enteredReward, setEnteredReward] = useState('');
	const [image, setImage] = useState(null);

	useEffect(() => {
		(async () => {
			if (Platform.OS !== 'web') {
				const {
					status,
				} = await ImagePicker.requestCameraRollPermissionsAsync();
				if (status !== 'granted') {
					alert('Sorry, we need camera roll permissions to make this work!');
				}
			}
		})();
	}, []);

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);

		if (!result.cancelled) {
			setImage(result.uri);
			console.log(image);
		}
	};

	const rewardInputHandler = (enteredText) => {
		setEnteredReward(enteredText);
	};

	const clearInput = () => {
		props.addReward(enteredReward, image);
		setEnteredReward('');
		setImage(null);
	};

	return (
		<Modal visible={props.visible} animationType='slide'>
			<View style={styles.inputContainer}>
				<Image
					style={{ width: 100, height: 100 }}
					source={{ uri: image }}
				></Image>
				<TextInput
					onChangeText={rewardInputHandler}
					placeholder='Reward Title'
					style={styles.input}
					value={enteredReward}
				/>
				<View style={styles.buttonContainer}>
					<Button title='Pick an image from camera roll' onPress={pickImage} />
				</View>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button onPress={clearInput} title='ADD A REWARD'></Button>
					</View>
					<View style={styles.button}>
						<Button title='VIEW REWARDS' color='green' onPress={props.onView} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	input: {
		width: '80%',
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
		marginBottom: 10,
	},

	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '100%',
	},
	button: {
		width: '60%',
	},
});

export default RewardInput;
