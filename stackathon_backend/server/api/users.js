const router = require('express').Router();
const User = require('../db/user');
const App = require('../db/app');
const Reward = require('../db/reward');
const Time = require('../db/time');

//parent gets data about child
router.get('/:childId/apps', async (req, res, next) => {
	try {
		let child = await User.findByPk(req.params.childId, {
			include: {
				model: App,
				include: [Time],
			},
		});
		res.json(child);
	} catch (err) {
		next(err);
	}
});

//parent updates app value for their child
router.patch('/:appId/apps', async (req, res, next) => {
	try {
		let app = await App.findByPk(req.params.appId, {
			include: [Time],
		});
		//req.body would be {value: x}
		await app.update(req.body);
		let apps = await App.findAll();
		let orderedApps = [];
		for (let i = 1; i < apps.length; i++) {
			let app = await App.findByPk(i);
			orderedApps.push(app);
		}
		res.send(orderedApps);
	} catch (err) {
		next(err);
	}
});

//parent adds a reward
router.post('/rewards/add', async (req, res, next) => {
	try {
		let newReward = await Reward.create(req.body);
		console.log(newReward);
		res.json(newReward);
	} catch (err) {
		next(err);
	}
});

//get all rewards
router.get('/rewards', async (req, res, next) => {
	try {
		let rewards = await Reward.findAll();
		console.log(rewards);
		res.json(rewards);
	} catch (err) {
		next(err);
	}
});

//parent deletes a reward
router.delete('/:rewardId/rewards/delete', async (req, res, next) => {
	try {
		let id = req.params.rewardId;
		let reward = await Reward.findByPk(id);
		await reward.destroy();
		res.json(reward);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
