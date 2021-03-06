const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const authApi = require('./routes/auth');
const globalChatApi = require('./routes/global_chat');

const PORT = 5000;
const HOST = 'localhost';
const app = express();

app.use(bodyParser.json());
app.use(cors());

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

app.use('/api/auth', authApi);
app.use('/api/global_chat', globalChatApi);

app.get('/', (req, res) => {
	res.send('Working !');
});

app.listen(PORT, HOST, (err) => {
	if (err) console.error(err);
	else console.log(`Server is running on localhost:${PORT}`);
});
