import {GET_RECIPES, SET_RECIPE_LOADING} from '../actions/types';

const initialState = {
    recipes: null,
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                loading: false,
            };
        case SET_RECIPE_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
