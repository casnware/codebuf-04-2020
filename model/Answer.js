const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
    answer: String,
    store: String,
    businessAnswer: Boolean
});

const Answer = mongoose.model('Answer', answerSchema);
module.exports = Answer;
