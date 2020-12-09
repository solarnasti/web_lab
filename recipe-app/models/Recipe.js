const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    enName: {
        type: String,
        required: true,
    },
    ingredients: [
        {
            ingredient: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ingredient',
            },
            amount: {
                type: String,
                required: true,
            },
        },
    ],
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Recipe = mongoose.model('recipe', RecipeSchema);
