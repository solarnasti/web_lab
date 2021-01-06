const {DataTypes} = require('sequelize');
const sequelize = require('../sequelize/sequelize').sequelize;

const Ingredient = sequelize.define(
    'Ingredient',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        enName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {timestamps: true}
);

module.exports = Ingredient;
