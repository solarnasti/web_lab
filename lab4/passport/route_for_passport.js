let express = require('express');
let router = express.Router();

module.exports = function(passport){
    // Получение страницы авторизации
    router.get('/', function(req, res) {
        // Вывод страницы авторизации со всеми флэш-сообщениями, если
        // таковые существуют
        res.render('auth', { message: req.flash('message') });
    });
   // Обработка POST-данных авторизации
    router.post('/', passport.authenticate('login', {
        successRedirect: '/home',
        failureRedirect: '/signup',
        failureFlash : true
    }))
    // Получение страницы регистрации
    router.get('/signup', function(req, res){
        res.render('register',{message: req.flash('message')});
    });
    // Обработка регистрационных POST-данных
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash : true
    }))
    router.use('/home', function(req,res){
        res.render('home',{ message: req.flash('message') })
    })
    return router;
}