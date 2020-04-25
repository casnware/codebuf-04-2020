const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
    id: {type: String , unique: true },
    name: String,
    adminUser: mongoose.User,
    questionTree: mongoose.Question,
    map: String,
    productList: String,
    logoPath: String
});

const Store = mongoose.model('Store', storeSchema);
module.exports = Store;