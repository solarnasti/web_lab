import React from 'react';
import {isEqual} from 'lodash';
import {connect} from 'react-redux';

import Recipe from '../components/Recipe';
import {getRecipes} from '../actions/recipe';

class RecipeList extends React.Component {
    state = {
        filteredRecipes: []
    };

    componentDidMount() {
        this.props.getRecipes();
    }

    componentDidUpdate({prevSelectedIngredients, prevRecipes}) {
        const {selectedIngredients} = this.props;
        const {recipes} = this.props.recipe;

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
        const {selectedIngredients} = this.props;
        const {filteredRecipes} = this.state;

        if (selectedIngredients.length === 0) {
            return null;
        }

        return (
            <React.Fragment>
                <div className="mt-3 mb-2">Подходящие рецепты</div>
                <div className="recipes">
                    {filteredRecipes.map((recipe) => (
                        <Recipe key={recipe.id} recipe={recipe}/>
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    recipe: state.recipe
});

export default connect(mapStateToProps, {getRecipes})(RecipeList);
