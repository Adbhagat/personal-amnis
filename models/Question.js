const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Question Schema
const QuestionSchema = new Schema({
	userID: {
		type: Number,
		unique: true
	},
	content: {
		type: String,
		required: true
	},
	score: {
		type: Number,
		default: 0
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Question = mongoose.model('question', QuestionSchema);