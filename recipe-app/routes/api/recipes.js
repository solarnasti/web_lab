const router = require('express').Router();

const Recipe = require('../../models/Recipe');

router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find().populate('ingredients.ingredient', [
            '_id',
            'name',
        ]);

        res.json(recipes);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
