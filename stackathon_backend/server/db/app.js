const Sequelize = require('sequelize');
const db = require('./db');

const App = db.define('app', {
	name: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false,
	},
	imageUrl: {
		type: Sequelize.TEXT,
	},
	value: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
	},
});

module.exports = App;
