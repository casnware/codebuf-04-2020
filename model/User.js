const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    password: String,
    store: Mixed,
    userType: String,
    firstName: String,
    lastName: String
});

const User = mongoose.model('User', userSchema);
module.exports = User;

const user = new User({ email: 'test000@test.com', password: 'test', store: 'Everything-Mart', userType: 'admin', firstName: 'Test', lastName: 'Test' });
user.save((error) => {
    if (error) {
        console.log('[ERROR]: ${error}');
    }
    console.log('Success!');
});