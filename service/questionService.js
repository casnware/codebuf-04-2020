const Question = require("../model/Question");
const mongoose = require("mongoose");

//var merchant = merchantService.addMerchant(req);

const questionService = {
    addQuestion: (req) => {
        return models.question.create(req.body)
            .then((question) => {
                return question.dataValues
            });
    }

    addQuestionNode: (req) => {
        mongoose.connect(process.env.MONGO_DB_CONNECTION, { useNewUrlParser: true });

        const db = mongoose.connection
        db.once('open', _ => {
            console.log('Database connected:', process.env.MONGO_DB_CONNECTION)
        })

        db.on('error', err => {
            console.error('connection error:', err)
        })
        var questionNode = req.body.questionNode;
        var questionNodeParent = req.body.questionNodeParent != null ? req.body.questionNodeParent : null;

        db.categories.insert({ _id: questionNode, parent: questionNodeParent})
    }
}

module.exports = questionService;