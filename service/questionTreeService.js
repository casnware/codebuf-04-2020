const Question = require("../model/Question");


//var merchant = merchantService.addMerchant(req);

const questionTreeService = {
    addUser: (req) => {
        return models.question.create(req.body)
            .then((question) => {
                return question.dataValues
            });
    }
}

module.exports = questionTreeService;