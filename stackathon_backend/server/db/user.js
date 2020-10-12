const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('user', {
	firstName: {
		type: Sequelize.STRING,
	},
	lastName: {
		type: Sequelize.STRING,
	},
	email: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false,
	},
	password: {
		type: Sequelize.STRING,
	},
	type: {
		type: Sequelize.ENUM,
		defaultValue: 'CHILD',
		values: ['CHILD', 'PARENT'],
	},
	points: {
		type: Sequelize.INTEGER,
		defaulValue: 100,
	},
});

module.exports = User;
