const { Mongoose, mongo } = require('mongoose');

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	username : string,
	email    : string,
	password : string
});

module.exports = mongoose.model('user', userSchema, 'users');
