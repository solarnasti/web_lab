import {GET_RECIPES} from './types';

export const getRecipes = () => async (dispatch) => {
    try {
        const res = await fetch('/api/recipes');
        const data = await res.json();

        dispatch({
            type: GET_RECIPES,
            payload: data,
        });
    } catch (error) {
        console.error(error);
    }
}

