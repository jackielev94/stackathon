import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Axios from 'axios';
import { VictoryChart, VictoryPie } from 'victory-native';

class TimeStats extends React.Component {
	constructor() {
		super();
		this.state = {
			apps: [],
			data: [],
		};
		this.createPieData = this.createPieData.bind(this);
	}

	async componentDidMount() {
		let { data } = await Axios.get('http://192.168.0.21:3000/api/users/2/apps');
		this.setState({ apps: data.apps });
		this.createPieData();
	}

	createPieData() {
		let total;
		let data = [];
		for (let i = 1; i < this.state.apps.length - 1; i++) {
			total = 0;
			let app = this.state.apps[i];

			total += app.times[0].minutes;
		}
		for (let i = 1; i < this.state.apps.length; i++) {
			let app = this.state.apps[i];
			data.push({ x: app.name, y: app.times[0].minutes / total });
		}
		this.setState({ data: data });
	}

	render() {
		return (
			<View style={styles.container}>
				<VictoryPie
					animate={{ easing: 'exp' }}
					colorScale={[
						'tomato',
						'orange',
						'gold',
						'cyan',
						'navy',
						'hotpink',
						'peachpuff',
					]}
					padding={70}
					width={250}
					height={250}
					style={styles.pie}
					data={this.state.data}
				/>
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
		padding: 20,
	},
	tinyLogo: {
		width: 60,
		height: 60,
	},
	logo: {
		width: 66,
		height: 58,
	},
	pie: {
		width: '45%',
		height: '45%',
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

export default TimeStats;
