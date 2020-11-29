import {Action} from "redux";
import {ActionTypes} from "./actionTypes";
const {SET_GROUP, SET_USER} = ActionTypes;
export type User = {
    id: string;
    firstName: string;
    lastname : string;
    username : string;
    group : string;
    token: string;
}

export type  UserStateType = {
    user: User|null;
    group: string|null;
}

interface ActionType extends Action{
    payload: User|string|null
}

export default (state: UserStateType = {group:null, user:null}, action: ActionType) => {
    switch (action.type){
        case SET_USER:
            return {...state, user:action.payload};
        case SET_GROUP:
            return {...state, group:action.payload};
    }
    return state;
}
