import {
    createStore,
    applyMiddleware,
    combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};

const middlewares = [
    thunk
];


const composedEnhancers = composeWithDevTools(
    applyMiddleware(...middlewares)
);

const reducers = {

};

const rootReducer = combineReducers(reducers);

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers,
);

export default store;
