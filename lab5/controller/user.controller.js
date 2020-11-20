const FindByLogin = require('../database/sequelize').FindByLogin
const argon2 = require('argon2');

///////////   CRUD Update   /////////////////
    async function Update(username, body) {
        let user = await FindByLogin(username);
        console.log("User Found")
        if (body.username) {
            user.username = body.username;
            console.log("Username Changed")
            user = await user.save();
        }
        if (body.password) {
            user.password = await argon2.hash(body.password);
            console.log("Password Changed")
            user = await user.save();
        }
       return user
    }


///////////   CRUD Delete  /////////////////
    async function Delete(username) {
        let user = await FindByLogin(username)
        await user.destroy();
       // res.status(200).json({msg:"User with username " + username + " was deleted"})
    }

exports.Update = Update;
exports.Delete = Delete;

