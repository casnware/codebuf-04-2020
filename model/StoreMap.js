const mongoose = require("mongoose");

const storemapSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    imagePath: String,
    questionTree: String,
    map: String,
    productList: String
});

const StoreMap = mongoose.model('StoreMap', storemapSchema);
module.exports = StoreMap;