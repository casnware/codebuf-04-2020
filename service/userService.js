const User = require("../model/User");


//var merchant = merchantService.addMerchant(req);

const userService = {
    addUser: (req) => {
        return models.user.create(req.body)
            .then((user) => {
                return user.dataValues
            });
    }
}

User.findByEmail({ email: req.user.email }, (err, existingUser) => {
    if (err) { return next(err); }
    if (existingUser) {

    }
    user.password = req.body.password;
    user.save((err) => {
        if (err) { return next(err); }
        req.flash('success', { msg: 'Password has been changed.' });
        res.redirect('/account');
    });
});
};


module.exports = userService;