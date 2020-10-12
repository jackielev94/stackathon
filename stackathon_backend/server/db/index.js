const User = require('./user');
const App = require('./app');
const Reward = require('./reward');
const Time = require('./time');
const db = require('./db');

User.belongsTo(User, { as: 'parent' });
User.hasMany(User, { as: 'children', foreignKey: 'parentId' });

User.belongsToMany(App, { through: 'User_Apps' });
App.belongsToMany(User, { through: 'User_Apps' });

User.hasMany(Reward);
Reward.belongsTo(User);

Time.belongsTo(App);
App.hasMany(Time), { as: 'time' };

User.hasMany(Time);
Time.belongsTo(User);

module.exports = {
	db,
	User,
	App,
	Reward,
	Time,
};
