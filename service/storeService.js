const models = require("../model/Store");


//var merchant = merchantService.addMerchant(req);

const storeService = {
    addStore: (req) => {
        return models.store.create(req.body)
            .then((store) => {
                return store.dataValues
            });
    }
}

module.exports = storeService;