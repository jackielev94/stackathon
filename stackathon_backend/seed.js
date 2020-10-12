const { green, red } = require('chalk');
const { User, App, Reward, Time } = require('./server/db');
const db = require('./server/db/db');
const { users, apps, rewards, times } = require('./data');

const seed = async () => {
	try {
		await db.sync({ force: true });
		// seed your database here!
		await Promise.all(
			users.map((user) => {
				return User.create(user);
			})
		);
		await Promise.all(
			apps.map((app) => {
				return App.create(app);
			})
		);
		await Promise.all(
			rewards.map((reward) => {
				return Reward.create(reward);
			})
		);
		await Promise.all(
			times.map((time) => {
				return Time.create(time);
			})
		);
		//making assignments
		//associate child with parent
		const user = await User.findByPk(1);
		const anotherUser = await User.findByPk(2);
		await user.addChild(anotherUser);

		//associate all fake apps with child
		for (let i = 1; i <= 9; i++) {
			const app = await App.findByPk(i);
			await anotherUser.addApp(app);
		}
		//associate all fake rewards with parent
		for (let i = 1; i <= 4; i++) {
			const reward = await Reward.findByPk(i);
			await user.addReward(reward);
		}

		for (let i = 1; i <= 9; i++) {
			const time = await Time.findByPk(i);
			const app = await App.findByPk(i);
			await anotherUser.addTime(time);
			await app.addTime(time);
		}
	} catch (err) {
		console.log(red(err));
	}
};

// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
	seed()
		.then(() => {
			console.log(green('Seeding success!'));
			db.close();
		})
		.catch((err) => {
			console.error(red('Oh noes! Something went wrong!'));
			console.error(err);
			db.close();
		});
}

module.exports = seed;
