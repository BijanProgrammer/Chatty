const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
	if (!req.headers.authorization)
		return res.status(401).send('Unauthorized request!');

	let token = req.headers.authorization.split(' ')[1];

	if (!token) return res.status(401).send('Undefined token!');

	let payload;
	try {
		payload = jwt.verify(token, 'secret');
	} catch (e) {
		console.log(`toke: "${token}"`);
		console.log(e);
		return res.status(401).send('Invalid token format!');
	}

	if (!payload) return res.status(401).send('Invalid token!');

	req.username = payload.subject;
	next();
};

module.exports = verifyToken;
