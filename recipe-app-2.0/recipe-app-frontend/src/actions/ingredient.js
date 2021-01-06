import {
    GET_INGREDIENTS,
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    SET_INGREDIENT_LOADING,
} from './types';

export const getIngredients = () => async (dispatch) => {
    dispatch(setLoading(true));

    try {
        const res = await fetch('/api/ingredients');
        const data = await res.json();

        dispatch({
            type: GET_INGREDIENTS,
            payload: data,
        });
    } catch (error) {
        console.error(error);
        dispatch(setLoading(false));
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

function setLoading(isLoading) {
    return {
        type: SET_INGREDIENT_LOADING,
        payload: isLoading,
    };
}
