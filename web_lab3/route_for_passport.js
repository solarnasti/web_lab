let express = require('express');
let router = express.Router();

let isAuthenticated = function (req, res, next) {
    // Если пользователь прошел аутентификацию, выполняется метод next()
    if (req.isAuthenticated())
        return next();
    // иначе перенаправление на вход
    res.redirect('/');
}

module.exports = function(passport){

    // Получение страницы авторизации
    router.get('/', function(req, res) {
        // Вывод страницы авторизации со всеми флэш-сообщениями, если
        // таковые существуют
        res.render('auth', { message: req.flash('message') });
    });

    // Обработка POST-данных авторизации
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/home',
        failureRedirect: '/signup',
        failureFlash : true
    }));

    // Получение страницы регистрации
    router.get('/signup', function(req, res){
        res.render('register',{message: req.flash('message')});
    });

    // Обработка регистрационных POST-данных
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/',
        failureRedirect: '/',
        failureFlash : true
    }));

    return router;
}