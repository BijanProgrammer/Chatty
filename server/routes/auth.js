const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/', (req, res) => {
	res.send('Auth working !');
});

router.post('/register', (req, res) => {
	let userData = req.body;
	let user = new User(userData);

	user.save((err, registeredUser) => {
		if (err) console.error(err);
		else res.status(200).send(registeredUser);
	});
});

router.post('/login', (req, res) => {
	const { username, password } = req.body;

	User.findOne({ username }, (err, user) => {
		if (err) {
			console.error(err);
		} else {
			if (!user)
				res
					.status(401)
					.send(
						`There is no user with username of '${username}' in the database.`
					);
			if (user.password !== password)
				res.status(401).send(`Password is incorrect.`);

			res.status(200).send(user);
		}
	});
});

module.exports = router;
