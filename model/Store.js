const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    adminUser: String,
    questionTree: String,
    map: String,
    productList: String,
    logoPath: String
});

const Store = mongoose.model('Store', storeSchema);
module.exports = Store;