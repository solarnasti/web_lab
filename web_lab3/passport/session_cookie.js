let login = require('./authentication');
let signup = require('./signup');
let User = require('../users.js');

//Сериализация и десериализация
// в целях поддержки текущей сессии, чтобы каждый последующий запрос не содержал учетные данные пользователя
module.exports = function(passport) {
    passport.serializeUser(function (user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    })

    login(passport);
    signup(passport);
}