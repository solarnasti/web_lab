const {DataTypes} = require('sequelize');
const sequelize = require('../sequelize/sequelize').sequelize;

const Recipe = sequelize.define(
    'Recipe',
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

module.exports = Recipe;
