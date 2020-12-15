import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Spinner from '../components/Spinner';
import Ingredient from '../components/Ingredient';
import RecipeList from './RecipeList';
import {
    getIngredients,
    addIngredient,
    removeIngredient,
} from '../actions/ingredient';

const Home = ({
    ingredient: {loading: ingredientLoading, ingredients, selectedIngredients},
    getIngredients,
    addIngredient,
    removeIngredient,
}) => {
    const [text, setText] = useState('');
    const [filteredIngredients, setFilteredIngredients] = useState([]);

    useEffect(() => {
        getIngredients();
    }, [getIngredients]);

    const handleTextChange = (e) => {
        setText(e.target.value);

        setFilteredIngredients(
            ingredients.filter(({name}) =>
                new RegExp(e.target.value.trim(), 'ig').test(name)
            )
        );
    };

    const handleSelect = (id) => {
        addIngredient(id);
    };

    const handleRemove = (id) => {
        removeIngredient(id);
    };

    if (ingredientLoading || ingredients === null) {
        return <Spinner />;
    }

    return (
        <>
            <Form>
                <Form.Group controlId="text">
                    <Form.Label>Выберите ингредиенты</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Поиск..."
                        onChange={handleTextChange}
                        value={text}
                    />
                </Form.Group>
            </Form>
            <div className="ingredient-cards">
                {(text.trim() ? filteredIngredients : ingredients).map(
                    (ingredient) => (
                        <Ingredient
                            key={ingredient._id}
                            ingredient={ingredient}
                            onSelect={handleSelect}
                        />
                    )
                )}
            </div>
            {selectedIngredients.length !== 0 && (
                <>
                    <div className="mt-3 mb-2">Выбранные ингредиенты</div>
                    <div className="ingredient-cards">
                        {selectedIngredients.map((ingredient) => (
                            <Ingredient
                                key={ingredient._id}
                                ingredient={ingredient}
                                onRemove={handleRemove}
                            />
                        ))}
                    </div>
                </>
            )}
            <RecipeList selectedIngredients={selectedIngredients} />
        </>
    );
};

Home.propTypes = {
    ingredient: PropTypes.object.isRequired,
    addIngredient: PropTypes.func.isRequired,
    removeIngredient: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    ingredient: state.ingredient,
});

export default connect(mapStateToProps, {
    getIngredients,
    addIngredient,
    removeIngredient,
})(Home);
