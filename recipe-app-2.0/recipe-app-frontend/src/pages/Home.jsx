import React from 'react';
import Form from 'react-bootstrap/Form';
import {connect} from 'react-redux';

import Spinner from '../components/Spinner';
import Ingredient from '../components/Ingredient';
import RecipeList from './RecipeList';
import {
    getIngredients,
    addIngredient,
    removeIngredient,
} from '../actions/ingredient';

class Home extends React.Component {
    state = {
        text: '',
        filteredIngredients: [],
    };

    componentDidMount() {
        this.props.getIngredients();
    }

    //Обработчик событий для ввода текста
    handleTextChange = (e) => {
        const {ingredients} = this.props.ingredient;

        this.setState({
            text: e.target.value,
            filteredIngredients: ingredients.filter(({name}) =>
                new RegExp(e.target.value.trim(), 'ig').test(name)
            )
        });
    };

    handleSelect = (id) => {
        this.props.addIngredient(id);
    };

    handleRemove = (id) => {
        this.props.removeIngredient(id);
    };

    render() {
        const {ingredient: {loading: ingredientLoading, ingredients, selectedIngredients}} = this.props;
        const {text, filteredIngredients} = this.state;

        if (ingredientLoading || ingredients === null) {
            return <Spinner/>;
        }

        return (
            <React.Fragment>
                <Form>
                    <Form.Group controlId="text">
                        <Form.Label>Выберите ингредиенты</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Поиск..."
                            onChange={this.handleTextChange}
                            value={text}
                        />
                    </Form.Group>
                </Form>
                <div className="ingredient-card">
                    {(text.trim() ? filteredIngredients : ingredients).map(
                        (ingredient) => (
                            <Ingredient
                                key={ingredient.id}
                                ingredient={ingredient}
                                onSelect={this.handleSelect}
                            />
                        )
                    )}
                </div>
                {selectedIngredients.length !== 0 && (
                    <React.Fragment>
                        <div className="mt-3 mb-2">Выбранные ингредиенты</div>
                        <div className="ingredient-card">
                            {selectedIngredients.map((ingredient) => (
                                <Ingredient
                                    key={ingredient.id}
                                    ingredient={ingredient}
                                    onRemove={this.handleRemove}
                                />
                            ))}
                        </div>
                    </React.Fragment>
                )}
                <RecipeList selectedIngredients={selectedIngredients}/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    ingredient: state.ingredient,
});

export default connect(mapStateToProps, {
    getIngredients,
    addIngredient,
    removeIngredient,
})(Home);
