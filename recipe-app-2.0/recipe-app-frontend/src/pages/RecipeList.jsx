import React from 'react';
import {isEqual} from 'lodash';
import {connect} from 'react-redux';

import Spinner from '../components/Spinner';
import Recipe from '../components/Recipe';
import {getRecipes} from '../actions/recipe';

class RecipeList extends React.Component {
    state = {
        filteredRecipes: []
    };

    componentDidMount() {
        this.props.getRecipes();
    }

    componentDidUpdate({prevSelectedIngredients, recipe: {recipes: prevRecipes}}) {
        const {selectedIngredients, recipe: {recipeLoading, recipes},} = this.props;

        if (recipeLoading || recipes === null) {
            return <Spinner/>;
        }

        if (!isEqual(selectedIngredients, prevSelectedIngredients) || !isEqual(recipes, prevRecipes)) {
            const selectedIngredientIds = selectedIngredients.map(({id}) => id);

            const filteredRecipes = recipes.filter(
                ({Ingredients}) => Ingredients.some(({id}) => selectedIngredientIds.includes(id))
            );

            if (!isEqual(this.state.filteredRecipes, filteredRecipes))
                this.setState({filteredRecipes});
        }
    }

    render() {
        const {selectedIngredients, recipe: {loading: recipeLoading, recipes}} = this.props;
        const {filteredRecipes} = this.state;

        if (selectedIngredients.length === 0) {
            return null;
        }

        if (recipeLoading || recipes === null) {
            return <Spinner/>;
        }

        return (
            <>
                <div className="mt-3 mb-2">Подходящие рецепты</div>
                <div className="recipes">
                    {filteredRecipes.map((recipe) => (
                        <Recipe key={recipe.id} recipe={recipe}/>
                    ))}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    recipe: state.recipe,
});

export default connect(mapStateToProps, {getRecipes})(RecipeList);
