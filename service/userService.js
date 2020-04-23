const models = require("../models");


//var merchant = merchantService.addMerchant(req);

const userService = {
    addUser: (req) => {
        return models.user.create(req.body)
            .then((user) => {
                return user.dataValues
            });
    }
}

module.exports = userService;