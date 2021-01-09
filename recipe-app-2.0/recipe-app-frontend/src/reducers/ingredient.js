import {
    GET_INGREDIENTS,
    ADD_INGREDIENT,
    REMOVE_INGREDIENT
} from '../actions/types';

const initialState = {
    ingredients: null,
    selectedIngredients: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.payload
            };
        case ADD_INGREDIENT:
            const isIngredientAdded = state.selectedIngredients.some(
                ({id}) => id === action.payload
            );
            if (isIngredientAdded) {
                return {
                    ...state
                }
            }
            const ingredient = state.ingredients.find(
                ({id}) => id === action.payload
            );
            return {
                ...state,
                selectedIngredients: [...state.selectedIngredients, ingredient]
            };
        case REMOVE_INGREDIENT:
            return {
                ...state,
                selectedIngredients: state.selectedIngredients.filter(
                    ({id}) => id !== action.payload
                )
            };
        default:
            return state;
    }
};

export default reducer;
