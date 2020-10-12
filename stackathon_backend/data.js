//const { Sequelize } = require('sequelize/types');

const users = [
	{
		firstName: 'Laura',
		lastName: 'Levine',
		email: 'jackierose.levine@gmail.com',
		password: '123',
		type: 'PARENT',
	},
	{
		firstName: 'Jackie',
		lastName: 'Levine',
		email: 'Jackie@jackie.com',
		password: '456',
		type: 'CHILD',
	},
];
const apps = [
	{
		name: 'Netflix',
		imageUrl:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/600px-Netflix_icon.svg.png',
	},
	{
		name: 'Facebook',
		imageUrl:
			'https://icons-for-free.com/iconfiles/png/512/color+facebook+icon-1320168272811213233.png',
	},
	{
		name: 'Instagram',
		imageUrl:
			'https://i.pinimg.com/originals/72/a3/d9/72a3d9408d41335f39e9f014dc35cf44.jpg',
	},
	{
		name: 'Snapchat',
		imageUrl:
			'https://www.iconfinder.com/data/icons/popular-services-brands/512/snapchat-2-512.png',
	},
	{
		name: 'TikTok',
		imageUrl:
			'data:image/png;base64,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',
	},
	{
		name: 'New York Times',
		imageUrl:
			'https://icons.iconarchive.com/icons/martz90/circle-addon1/512/new-york-times-icon.png',
	},
	{
		name: 'Magoosh',
		imageUrl:
			'https://lh3.googleusercontent.com/1W60B9Vio6WFYRLmchuS1ELLIkb4b5aiJtffFJ2XZ4dHgL95folOZzW53Yd5wPJZLn8',
	},
	{
		name: 'Tuner Lite',
		imageUrl:
			'https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/1b/67/12/1b6712e4-e0d4-0201-2d87-aa81f813be11/PATunerLite-AppIcon-0-0-1x_U007emarketing-0-0-0-4-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.jpeg/246x0w.jpg',
	},
	{
		name: 'Metronome',
		imageUrl:
			'https://play-lh.googleusercontent.com/hs-y7cdzD6AWD8ODIEAOYGUydCjRsfyv3cZzeg0XSNK0K_rhELmT8U24GV-ShAoimQ',
	},
];
const rewards = [
	{
		title: 'Tickets to see a Broadway show!',
		value: 1000,
		isActive: false,
	},
	{
		title: 'No chores for a week!',
		value: 1000,
		isActive: false,
	},
	{
		title: 'New $50 item of your choice!',
		value: 1000,
		isActive: false,
	},
	{
		title: 'Day in the city with mom!',
		value: 1000,
		isActive: false,
	},
];

const times = [
	{
		minutes: 30,
	},
	{
		minutes: 60,
	},
	{
		minutes: 20,
	},
	{
		minutes: 120,
	},
	{
		minutes: 90,
	},
	{
		minutes: 80,
	},
	{
		minutes: 10,
	},
	{
		minutes: 100,
	},
	{
		minutes: 90,
	},
];

module.exports = { users, apps, rewards, times };
