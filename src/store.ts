import {
    createStore,
    applyMiddleware,
    combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import UserReducer, {UserStateType} from "./reducers/userReducer/reducer";
import DateReducer, {DateStateType} from "./reducers/dateReducer/reducer";

const initialState = {};

const middlewares = [
    thunk
];


const composedEnhancers = composeWithDevTools(
    applyMiddleware(...middlewares)
);

const reducers = {
    user:UserReducer,
    date:DateReducer
};

const rootReducer = combineReducers(reducers);

export type StateType = {
    user:UserStateType,
    date: DateStateType
}

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers,
);

export default store;
