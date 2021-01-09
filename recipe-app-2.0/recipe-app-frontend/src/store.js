import {combineReducers, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import ingredient from "./reducers/ingredient";
import recipe from "./reducers/recipe";

const store = createStore(
    combineReducers({
        ingredient,
        recipe
    }),
    applyMiddleware(thunk)
);

export default store;
