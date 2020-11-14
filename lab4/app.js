const express = require("express");
const app = express();
const PORT = 3000
const argon2 = require('argon2');
const fs = require('fs');
const hbs = require("hbs");

let LocalStrategy   = require('passport-local').Strategy;
const CreateNewUser = require('./database/sequelize').CreateNewUser;
const GetPassword = require('./database/sequelize').GetPassword;
const FindById = require('./database/sequelize').FindById;
const FindByLogin = require('./database/sequelize').FindByLogin

// Инициализация Passport
let passport = require('passport');

// Configuring Passport
app.use(express.static('public'));
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
let expressSession = require('express-session');
app.use(
    expressSession({
        secret: 'mySecretKey',
        resave: true,
        saveUninitialized: true
    })
)
app.use(passport.initialize());
app.use(passport.session());

let flash = require('connect-flash');
app.use(flash())

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

let router = require('./passport/route_for_passport')(passport)
app.use('/', router)

//////////////////////AUTHENTICATION//////////////////////

passport.use('login' ,new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, username, password, done) {

    FindByLogin(username).then(user => {
        if (user !== undefined && user !== null) {
            GetPassword(username).then(HashPass => {
                argon2.verify(HashPass, password).then(result => {
                    if (result) {
                        console.log("User Authentication succesful")
                        return done(null, user);//all is ok
                    }
                    console.log("Invalid password")
                    return done(null, false, req.flash('message', "Invalid password"))
                }).catch(err => {
                    return done(null, false, req.flash('message', "Error"))
                })
            }).catch(err => {
                return done(null, false, req.flash('message',"Error"))
            })
        } else {       // user is not found
            console.log("User Not Found with username"+ username)
            return done(null, false, req.flash('message', "User Not Found"))
        }
    }).catch(err => {
            return done(null, false, req.flash('message', "Error"))
        }
    )
}))

////////////////////SIGN-UP/////////////////////////////

passport.use('signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, username, password, done) {
    FindByLogin(username).then(user => {
        if (user) {
            console.log("User with username "+ username + " Already Exists")
            return done(null, false, req.flash('message', "User Already Exists"))
        } else {
            CreateNewUser(username, password).then(NewUser => {
                console.log("User Registration succesful")
                return done(null, NewUser);
            }).catch(err => {
                return done(null, false, req.flash('message', "Error" ))
            })
        }
    }).catch(err => {
        return done(null, false, req.flash('message', "Error"))
    })
}))

///////////////SESSION-COOKIE///////////////////////////

    passport.serializeUser(function (user, done) {
        done(null, user.id); //хранение пользовательского id
    });

    passport.deserializeUser(function (id, done) {
        FindById(id).then(user => {
            done(null, user); //пользователя нет =>
            // аутентификации нет
        });
    });

    app.use(errorMiddle);
    app.listen(PORT, () => {
        console.log("Server is used on", PORT)
    });

////////////////////////MIDDLEWARE//////////////////////
 function errorMiddle(err, req, res, next) {
        switch (err.name) {
            case '403':
                res.status(403).send("Ошибка 403 Forbidden!")
                fs.appendFile('error403.txt', 'Доступ к конечной точке не разрешен.', (err))
                break;
            case '404':
                res.status(404).send("Ошибка 404 Not Found! ")
                fs.appendFile('error404.txt', 'Конечную точку невозможно обнаружить.', (err))
                break;
            case '500':
                res.status(500).send("Ошибка 500 Internal Server Error! ")
                fs.appendFile('error500.txt', 'Внутренняя ошибка сервера', (err))
                break;
            default:
                res.send('Что-то здесь не так...')
                break;
        }
 }




