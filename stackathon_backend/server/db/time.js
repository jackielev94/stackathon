const Sequelize = require('sequelize');
const db = require('./db');

const Time = db.define('time', {
	minutes: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
	},
});

module.exports = Time;
