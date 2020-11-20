'use strict';
const argon2 = require('argon2');

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('nasti_database', 'solarnasti', 'secret', {
    host: 'db',
    dialect: 'postgres',
    define: {
        timestamps: false
    }
});

const ModelOfUser = require("../models/user")(sequelize, Sequelize);

async function CreateNewUser(username, password) {
    const HashPass = await argon2.hash(password);
    let newUser = ModelOfUser.build({
        username: username,
        password: HashPass
    })
    return await newUser.save();
}

async function FindByLogin(username) {
    return await ModelOfUser.findOne({
        where: {
            username:username
        }
    });
}

async function FindById(id) {
    return await ModelOfUser.findOne({
        where: {
            id: id
        }
    })
}

///////////CRUD FindAll/////////////////
async function FindAll() {
    console.log("Search all users...")
    let users = await ModelOfUser.findAll();
    console.log(users)
    return users
}

async function GetPassword(username) {
    let user = await FindByLogin(username);
    return user.password;
}

exports.FindByLogin = FindByLogin;
exports.GetPassword = GetPassword;
exports.sequelize=sequelize;
exports.CreateNewUser = CreateNewUser;
exports.FindAll = FindAll;
exports.FindById = FindById;