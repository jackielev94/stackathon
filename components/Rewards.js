import { StatusBar } from 'expo-status-bar';
//import Sidebar from 'react-native-sidebar';
//import SideMenu from 'react-native-side-menu';
import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	ScrollView,
	FlatList,
	Modal,
} from 'react-native';
import Axios from 'axios';

import RewardListItem from './RewardListItem';
import RewardInput from './RewardInput';

export default function Home() {
	const [rewards, setRewards] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);

	const onAdd = (rewardInput, image) => {
		setRewards((currentRewards) => [
			...currentRewards,
			{ id: Math.random().toString(), value: rewardInput, uri: image },
		]);
		setIsAddMode('false');
	};

	const onView = () => {
		//closes modal
		setIsAddMode(false);
	};

	const removeReward = (rewardId) => {
		setRewards((currentRewards) => {
			return currentRewards.filter((reward) => {
				return reward.id !== rewardId;
			});
		});
	};

	return (
		<View style={styles.screens}>
			<Button
				title='Add New Reward'
				onPress={() => setIsAddMode(true)}
			></Button>

			<RewardInput visible={isAddMode} addReward={onAdd} onView={onView} />
			{rewards ? (
				<FlatList
					keyExtractor={(item, index) => item.id}
					data={rewards}
					renderItem={(itemData) => (
						<RewardListItem
							title={itemData.item.value}
							remove={removeReward}
							id={itemData.item.id}
							uri={itemData.item.uri}
						/>
					)}
				/>
			) : (
				<View style={styles.screens}>
					<Text>No Rewards Yet!</Text>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	screens: {
		padding: 50,
	},
});
