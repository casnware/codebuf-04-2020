const models = require("../models");


//var merchant = merchantService.addMerchant(req);

const storeService = {
    addUser: (req) => {
        return models.store.create(req.body)
            .then((store) => {
                return store.dataValues
            });
    }
}

module.exports = storeService;