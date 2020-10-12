import React from 'react';
import Axios from 'axios';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Button,
	Image,
	FlatList,
	ScrollView,
} from 'react-native';

class Values extends React.Component {
	constructor() {
		super();
		this.state = {
			values: [],
			input: '',
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	async componentDidMount() {
		let { data } = await Axios.get('http://192.168.0.21:3000/api/users/2/apps');
		this.setState({ values: data.apps });
	}

	async handleSubmit(id) {
		let { data } = await Axios.patch(
			`http://192.168.0.21:3000/api/users/${id}/apps`,
			{
				value: Number(this.state.input),
			}
		);
		this.setState({ ...this.state, values: [...data] });
	}

	onChange(e) {
		this.setState({ input: e });
	}

	render() {
		return (
			<View style={styles.screens}>
				<ScrollView contentContainerStyle={styles.container}>
					{this.state.values ? (
						this.state.values.map((value) => {
							return (
								<View key={value.id} style={styles.container}>
									<Image
										source={{ uri: value.imageUrl }}
										style={styles.tinyLogo}
									/>
									<Text>Value: {value.value}</Text>
									<View style={styles.inputContainer}>
										<TextInput
											onChangeText={this.onChange}
											style={styles.input}
										></TextInput>
										<Button
											onPress={() => this.handleSubmit(value.id)}
											title='SUBMIT'
											color='black'
										/>
									</View>
								</View>
							);
						})
					) : (
						<View></View>
					)}
				</ScrollView>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	screens: {
		padding: 10,
	},
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
	},
	tinyLogo: {
		width: 60,
		height: 60,
	},
	logo: {
		width: 66,
		height: 58,
	},
	inputContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		padding: 10,
		backgroundColor: '#a28089',
		borderRadius: 10,
	},
	input: {
		width: '40%',
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
		marginBottom: 10,
		height: 3,
	},
	header: {
		width: '60%',
		height: '10%',
		backgroundColor: '#034748',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
	},
});

export default Values;
