const router = require('express').Router();

const Ingredient = require('../models/Ingredient');

router.get('/', async (req, res) => {
    try {
        const ingredients = await Ingredient.findAll();

        res.json(ingredients);
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;
