const {DataTypes} = require('sequelize');
const sequelize = require('../sequelize/sequelize').sequelize;

const Ingredient = require('./Ingredient');
const Recipe = require('./Recipe');

const RecipeIngredients = sequelize.define(
    'RecipeIngredients',
    {
        amount: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {timestamps: true}
);

// M:N Associations
Recipe.belongsToMany(Ingredient, {through: RecipeIngredients});
Ingredient.belongsToMany(Recipe, {through: RecipeIngredients});

module.exports = RecipeIngredients;
