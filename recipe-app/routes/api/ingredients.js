const router = require('express').Router();

const Ingredient = require('../../models/Ingredient');

router.get('/', async (req, res) => {
    try {
        const ingredients = await Ingredient.find();

        res.json(ingredients);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
