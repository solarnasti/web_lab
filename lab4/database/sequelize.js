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

async function FindByLogin(username) {
    return await ModelOfUser.findOne({
        where: {
            username:username
        }
    });
}

async function GetPassword(username) {
    let user = await FindByLogin(username);
    return user.password;
}

async function FindById(id) {
    return await ModelOfUser.findOne({
        where: {
            id: id
        }
    });
}

async function CreateNewUser(username, password){
    const HashPass = await argon2.hash(password);

    let newUser = ModelOfUser.build({
        username:username,
        password: HashPass
    });
    return await newUser.save();
}


exports.sequelize = sequelize;
exports.Sequelize = Sequelize;
exports.FindByLogin = FindByLogin;
exports.GetPassword = GetPassword;
exports.user = ModelOfUser;
exports.CreateNewUser = CreateNewUser;
exports.FindById = FindById;
