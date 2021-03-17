import {createBrowserHistory} from "history";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {connectRouter} from "connected-react-router";
import loginFormReducer from './components/LoginForm/@slice';

export const history = createBrowserHistory();

const middleware = getDefaultMiddleware({thunk: true})

const reducer = {
    router: connectRouter(history),
    loginForm: loginFormReducer,
    // auth:
}

export const store = configureStore({
    reducer,
    middleware
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch