const router = require('express').Router();

const Ingredient = require('../models/Ingredient');
const Recipe = require('../models/Recipe');

router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.findAll({
            include: [
                {
                    attributes: ['id', 'name', 'enName'],
                    model: Ingredient,
                },
            ],
        });

        res.json(recipes);
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;
