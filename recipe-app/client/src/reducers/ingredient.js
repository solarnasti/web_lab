import {
    GET_INGREDIENTS,
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    SET_INGREDIENT_LOADING,
} from '../actions/types';

const initialState = {
    ingredients: null,
    selectedIngredients: [],
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.payload,
                loading: false,
            };
        case ADD_INGREDIENT:
            const isIngredientAdded = state.selectedIngredients.some(
                ({_id}) => _id === action.payload
            );
            if (isIngredientAdded) {
                return {
                    ...state,
                    loading: false,
                };
            }
            const ingredient = state.ingredients.find(
                ({_id}) => _id === action.payload
            );
            return {
                ...state,
                selectedIngredients: [...state.selectedIngredients, ingredient],
                loading: false,
            };
        case REMOVE_INGREDIENT:
            return {
                ...state,
                selectedIngredients: state.selectedIngredients.filter(
                    ({_id}) => _id !== action.payload
                ),
                loading: false,
            };
        case SET_INGREDIENT_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
