import {GET_INGREDIENTS, ADD_INGREDIENT, REMOVE_INGREDIENT} from './types';

export const getIngredients = () => async (dispatch) => {
    try {
        const res = await fetch('/api/ingredients');
        const data = await res.json();

        dispatch({
            type: GET_INGREDIENTS,
            payload: data,
        });
    } catch (error) {
        console.error(error);
    }
};

export const addIngredient = (id) => ({
    type: ADD_INGREDIENT,
    payload: id,
});

export const removeIngredient = (id) => ({
    type: REMOVE_INGREDIENT,
    payload: id,
});

