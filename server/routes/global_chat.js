const express = require('express');
const router = express.Router();

const Message = require('../models/message');

router.get('/', (req, res) => {
	res.send('Global Chat working !');
});

router.get('/receive', (req, res) => {
	Message.find({}, (err, messages) => {
		if (err) console.error(err);
		else res.status(200).send(messages);
	});
});

router.post('/send', (req, res) => {
	let message = new Message(req.body);

	message.save((err, sentMessage) => {
		if (err) console.error(err);
		else res.status(200).send(sentMessage);
	});
});

module.exports = router;
