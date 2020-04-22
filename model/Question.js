const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    question: String,
    answerList: String,
    store: String,
    map: String,
    location: String,
    group: String
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;
