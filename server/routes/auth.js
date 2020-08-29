const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const db =
	'mongodb+srv://chatty_admin:1234@myfirstcluster.q5ulo.mongodb.net/myfirstcluster?retryWrites=true&w=majority';

mongoose.connect(
	db,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err) => {
		if (err) console.error(err);
		else console.log('Successfully connected to database ...');
	}
);

router.get('/', (req, res) => {
	res.send('Auth working !');
});

module.exports = router;
