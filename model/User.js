const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    password: String,
    store: mongoose.Store,
    isAdmin: Boolean,
    firstName: String,
    lastName: String
});

userSchema.pre('save', function save(next) {
  const user = this;
  if (!user.isModified('password')) { return next(); }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err); }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) { return next(err); }
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

const User = mongoose.model('User', userSchema);
module.exports = User;

const user = new User({ email: 'test000@test.com', password: 'test', store: 'Everything-Mart', userType: 'admin', firstName: 'Test', lastName: 'Test' });
user.save((error) => {
    if (error) {
        console.log('[ERROR]: ${error}');
    }
    console.log('Success!');
});