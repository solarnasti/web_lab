let LocalStrategy   = require('passport-local').Strategy;
let User = require('../users.js');
let bCrypt = require('bcrypt-nodejs');

module.exports = function(passport) {
    passport.use('signup', new LocalStrategy({
            passReqToCallback: true
        },
        function (req, username, password, done) {
             function findOrCreateUser() {
                // Поиск пользователя в Mongo с помощью предоставленного имени пользователя
                User.findOne({'username': username}, function (err, user) {
                    // В случае любых ошибок - возврат
                    if (err) {
                        console.log('Error in SignUp: ' + err);
                        return done(err);
                    }
                    // Уже существует
                    if (user) {
                        console.log('User already exists');
                        return done(null, false,
                            req.flash('message', 'User Already Exists'));
                    } else {
                        // Если пользователя с таким адресом электронной почты
                        // в базе не существует, создать пользователя
                        let newUser = new User();
                        // Установка локальных прав доступа пользователя
                        newUser.username = username;
                        newUser.password = createHash(password)

                        // Сохранения пользователя
                        newUser.save(function (err) {
                            if (err) {
                                console.log('Error in Saving user: ' + err);
                                throw err;
                            }
                            console.log('User Registration succesful');
                            return done(null, newUser);
                        });
                    }
                });
            }

            // Отложить исполнение findOrCreateUser и выполнить
            // метод на следующем этапе цикла события
            process.nextTick(findOrCreateUser);
        })
    );

// Генерация хэша с помощью bCrypt
    let createHash = function(password){
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }
}