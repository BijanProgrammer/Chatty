const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const verifyToken = require('../middlewares/verify_token');

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

module.exports = router;
