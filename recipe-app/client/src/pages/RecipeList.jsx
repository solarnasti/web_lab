import React, {useState, useEffect} from 'react';
import Recipe from '../components/Recipe';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Spinner from '../components/Spinner';
import {getRecipes} from '../actions/recipe';

const RecipeList = ({
    selectedIngredients,
    recipe: {loading: recipeLoading, recipes},
    getRecipes,
}) => {
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    }, [getRecipes]);

    useEffect(() => {
        if (recipes === null) {
            return;
        }

        const selectedIngredientIds = selectedIngredients.map(({_id}) => _id);

        setFilteredRecipes(
            recipes.filter(({ingredients}) =>
                ingredients.some(({ingredient: {_id}}) =>
                    selectedIngredientIds.includes(_id)
                )
            )
        );
    }, [recipes, selectedIngredients]);

    if (selectedIngredients.length === 0) {
        return null;
    }

    if (recipeLoading || recipes === null) {
        return <Spinner />;
    }

    if (filteredRecipes.length === 0) {
        return <div className="mt-3 mb-2">Рецепты не найдены</div>;
    }

    return (
        <>
            <div className="mt-3 mb-2">Подходящие рецепты</div>
            <div className="recipes">
                {filteredRecipes.map((recipe) => (
                    <Recipe key={recipe._id} recipe={recipe} />
                ))}
            </div>
        </>
    );
};

RecipeList.propTypes = {
    selectedIngredients: PropTypes.array.isRequired,
    recipe: PropTypes.object.isRequired,
    getRecipes: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    recipe: state.recipe,
});

export default connect(mapStateToProps, {
    getRecipes,
})(RecipeList);
