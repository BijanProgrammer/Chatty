const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const verifyToken = require('../middlewares/verify_token');

const User = require('../models/user');

router.get('/', (req, res) => {
	return res.send('Auth working!');
});

router.post('/register', (req, res) => {
	let userData = req.body;
	let user = new User(userData);

	user.save((err, registeredUser) => {
		if (err) {
			console.error(err);
			return res
				.status(500)
				.send('An error has been occurred at server-side!');
		} else {
			let payload = { subject: registeredUser.username };
			let token = jwt.sign(payload, 'secret');

			return res.status(200).send({ token });
		}
	});
});

router.post('/login', (req, res) => {
	const { username, password } = req.body;

	User.findOne({ username }, (err, user) => {
		if (err) {
			console.error(err);
			return res
				.status(500)
				.send('An error has been occurred at server-side!');
		} else if (!user) {
			return res
				.status(401)
				.send(
					`There is no user with username of '${username}' in the database!`
				);
		} else if (user.password !== password) {
			return res.status(401).send(`Password is incorrect!`);
		} else {
			let payload = { subject: user.username };
			let token = jwt.sign(payload, 'secret');

			return res.status(200).send({ token });
		}
	});
});

router.post('/verify', verifyToken, (req, res) => {
	return res.status(200).send({ verified: true });
});

module.exports = router;
