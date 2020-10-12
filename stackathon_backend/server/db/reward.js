const Sequelize = require('sequelize');
const db = require('./db');

const Reward = db.define('reward', {
	title: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false,
	},
	description: {
		type: Sequelize.STRING,
	},
	imageUrl: {
		type: Sequelize.STRING,
		defaultValue:
			'https://cdn.iconscout.com/icon/premium/png-256-thumb/reward-99-1165776.png',
	},
	value: {
		type: Sequelize.INTEGER,
	},
	isActive: {
		type: Sequelize.BOOLEAN,
		defaultValue: false,
	},
});

module.exports = Reward;
