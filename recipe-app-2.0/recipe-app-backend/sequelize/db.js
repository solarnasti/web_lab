const Recipe = require('../models/Recipe');
const Ingredient = require('../models/Ingredient');
const RecipeIngredients = require('../models/RecipeIngredients');
const sequelize = require('../sequelize/sequelize').sequelize;

const initDatabase = async () => {
    // Connection
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    // Synchronizing the models
    try {
        await Recipe.sync({force: true});
        await Ingredient.sync({force: true});
        await RecipeIngredients.sync({force: true});
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('Unable to synchronize models:', error);
    }

    // Creating and Saving Model Instances
    try {
        await Recipe.bulkCreate([
            {
                name: 'Пирожок с картофелем и грибами',
                enName: 'pie-with-potatoes-and-mushrooms',
            },
            {
                name: 'Пирожок с картофелем',
                enName: 'pie-with-potatoes',
            },
            {
                name: 'Суп',
                enName: 'soup',
            },
            {
                name: 'Суп с грибами',
                enName: 'soup-with-mushrooms',
            },
            {
                name: 'Вареники',
                enName: 'vareniki',
            },
        ]);

        await Ingredient.bulkCreate([
            {
                name: 'Картофель',
                enName: 'potatoes',
            },
            {
                name: 'Мука',
                enName: 'flour',
            },
            {
                name: 'Лук',
                enName: 'onion',
            },
            {
                name: 'Грибы',
                enName: 'mushrooms',
            },
        ]);

        // M:N Associations
        await RecipeIngredients.bulkCreate([
            // Пирожок с картофелем и грибами (id = 1)
            // Ингредиенты:
            // Картофель - 200 г (id = 1)
            // Мука - 100 г (id = 2)
            // Грибы - 100 г (id = 4)
            {
                RecipeId: 1,
                IngredientId: 1,
                amount: '200 г',
            },
            {
                RecipeId: 1,
                IngredientId: 2,
                amount: '100 г',
            },
            {
                RecipeId: 1,
                IngredientId: 4,
                amount: '100 г',
            },
            // Пирожок с картофелем (id = 2)
            // Ингредиенты:
            // Картофель - 200 г (id = 1)
            // Мука - 100 г (id = 2)
            {
                RecipeId: 2,
                IngredientId: 1,
                amount: '200 г',
            },
            {
                RecipeId: 2,
                IngredientId: 2,
                amount: '100 г',
            },
            // Суп (id = 3)
            // Ингредиенты:
            // Картофель - 100 г (id = 1)
            // Лук - 200 г (id = 3)
            {
                RecipeId: 3,
                IngredientId: 1,
                amount: '100 г',
            },
            {
                RecipeId: 3,
                IngredientId: 3,
                amount: '200 г',
            },
            // Суп с грибами (id = 4)
            // Ингредиенты:
            // Картофель - 100 г (id = 1)
            // Лук - 200 г (id = 3)
            // Грибы - 200 г (id = 4)
            {
                RecipeId: 4,
                IngredientId: 1,
                amount: '200 г',
            },
            {
                RecipeId: 4,
                IngredientId: 3,
                amount: '100 г',
            },
            {
                RecipeId: 4,
                IngredientId: 4,
                amount: '100 г',
            },
            // Вареники (id = 5)
            // Картофель - 200 г (id = 1)
            // Мука - 100 г (id = 2)
            {
                RecipeId: 5,
                IngredientId: 1,
                amount: '200 г',
            },
            {
                RecipeId: 5,
                IngredientId: 2,
                amount: '100 г',
            },
        ]);

        console.log('All models were created and saved successfully.');
    } catch (error) {
        console.error('Unable to create and save models:', error);
    }
};

module.exports = initDatabase;
