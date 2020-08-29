const express = require('express');
const bodyParser = require('body-parser');

const authApi = require('./routes/auth');

const PORT = 5000;

const app = express();

app.use(bodyParser.json());
app.use('/api/auth', authApi);

app.get('/', (req, res) => {
	res.send('Working !');
});

app.listen(PORT, () => {
	console.log(`Server is running on localhost:${PORT}`);
});
