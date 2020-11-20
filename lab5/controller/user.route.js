let express = require('express');
let router = express.Router();
const FindAll = require("../database/sequelize").FindAll;
const FindByLogin = require("../database/sequelize").FindByLogin;
const Update = require("./user.controller").Update;
const Delete = require("./user.controller").Delete;

module.exports = function(passport){

    ////////////////////////   READ   ////////////////////////////

    //curl -H "Content-Type: application/json" -d '{"username":"Lera","password":"12345"}' -c cookie.txt localhost:3000/login
    //curl -b cookie.txt localhost:3000/user?all=all
    //curl -b cookie.txt localhost:3000/user?username=db
    router.get('/user', passport.authenticate('apiStrategy', {
        failureFlash: {message: "You should authorize to access this page"}
    }), async function (req, res) {
        if (req.user.username === "Lera") {
            if (req.query.all) {
                res.json(await FindAll())
            }
            if (req.query.username) {
                FindByLogin(req.query.username).then(user => {
                    res.json({id: user.id, username: user.username, password: user.password})
                })
            } else {
                res.json({message: "Nothing"})
            }
        } else {
            res.json({admin:true,message:"Only for admins"});
        }
    })

    ////////////////////////   CREATE   ////////////////////////////

    //curl -H "Content-Type: application/json" -d '{"username":"Privet","password":"123"}' -c cookie.txt localhost:3000/user
    router.post('/user',passport.authenticate('signup',{
        failureRedirect:'/user',
        failureFlash: true
        }), function (req, res){
        res.json( {message: "User was created"})
    })
    //curl -H "Content-Type: application/json" -d '{"username":"Lera","password":"12345"}' -c cookie.txt localhost:3000/login
    router.post('/login', passport.authenticate('login',{
        failureFlash: true
    }), function (req, res){
        res.json({ message: "You auth user"})
    })

    ////////////////////////  UPDATE    //////////////////////////

    //curl -H "Content-Type: application/json" -d '{"username":"puk","password":"10156"}' -c cookie.txt localhost:3000/login
    //curl -X PUT -H "Content-Type: application/json" -d '{"username":"vaflya"}' -b cookie.txt localhost:3000/user
    router.put('/user', passport.authenticate('apiStrategy', {
        failureFlash: {message: "You should authorize to access this page"}
    }), async function (req, res) {
            if(req.body)
            {
                FindByLogin(req.body.username).then(user => {
                    res.json(Update(req.user.username, req.body))
                })
            }
            else{
                res.json({message: "Nothing"})
            }
        }
    )

    ////////////////////////  DELETE   ////////////////////////////

    //curl -H "Content-Type: application/json" -d '{"username":"Lera","password":"12345"}' -c cookie.txt localhost:3000/login
    //curl -X DELETE -b cookie.txt localhost:3000/user?username=rr
    router.delete('/user', passport.authenticate('apiStrategy', {
        failureFlash: {message: "You should authorize to access this page"}
    }), function (req, res) {
        if(req.user.username === "Lera"){
            FindByLogin(req.query.username).then(user => {
                if (user !== undefined && user !== null)
                {
                    Delete(req.query.username).then(user =>
                        res.json({message:"Success delete"})
                    ).catch(e =>
                        res.json({admin:true, message:e.toString()}))
                }
                else
                    res.json({message:"User not found"})
            }).catch(e => res.send({admin:true, message:e.toString()}));
        } else
            res.json({admin:true,message:"Only for admins"});

    });

    return router;
}