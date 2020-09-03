const express = require('express');
const router = express.Router();

const Message = require('../models/message');

router.get('/', (req, res) => {
	res.send('Global Chat working !');
});

router.get('/receive', verifyToken, (req, res) => {
	Message.find({}, (err, messages) => {
		if (err) console.error(err);
		else res.status(200).send(messages);
	});
});

router.post('/send', verifyToken, (req, res) => {
	let message = new Message(req.body);

	message.save((err, sentMessage) => {
		if (err) console.error(err);
		else res.status(200).send(sentMessage);
	});
});

const verifyToken = (req, res, next) => {
	if (!req.headers.authorization)
		return res.status(401).send('Unauthorized request!');

	let token = req.headers.authorization.split(' ')[1];

	if (!token) return res.status(401).send('Unauthorized request!');

	let payload = jwt.verify(token, 'secret');

	if (!payload) return res.status(401).send('Unauthorized request!');

	req.username = payload.subject;
	next();
};

module.exports = router;
