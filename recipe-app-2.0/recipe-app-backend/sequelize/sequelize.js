const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('shop_database', 'nastia_user', 'chocolate_password', {
    host: 'db',
    dialect: 'postgres',
    define: {
        timestamps: false
    }
});

exports.sequelize = sequelize