const models = require("../models");


//var merchant = merchantService.addMerchant(req);

const questionService = {
    addUser: (req) => {
        return models.question.create(req.body)
            .then((question) => {
                return question.dataValues
            });
    }
}

module.exports = questionService;