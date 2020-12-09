import {GET_RECIPES, SET_RECIPE_LOADING} from './types';

export const getRecipes = () => async (dispatch) => {
    dispatch(setLoading(true));

    try {
        const res = await fetch('/api/recipes');
        const data = await res.json();

        dispatch({
            type: GET_RECIPES,
            payload: data,
        });
    } catch (error) {
        console.error(error);
        dispatch(setLoading(false));
    }
};

function setLoading(isLoading) {
    return {
        type: SET_RECIPE_LOADING,
        payload: isLoading,
    };
}
