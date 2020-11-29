import {
    createStore,
    applyMiddleware,
    combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import UserReducer, {UserStateType} from "./reducers/userReducer/reducer";

const initialState = {};

const middlewares = [
    thunk
];


const composedEnhancers = composeWithDevTools(
    applyMiddleware(...middlewares)
);

const reducers = {
    user:UserReducer
};

const rootReducer = combineReducers(reducers);

export type StateType = {
    user:UserStateType
}

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers,
);

export default store;
