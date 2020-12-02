import {Action} from "redux";
import {ActionTypes} from "./actionTypes";
const {SET_DATE} = ActionTypes;

export type DateStateType = {
    date:Date
}

interface ActionType extends Action{
    payload: Date
}

export default (state: DateStateType = {date:new Date()}, action: ActionType) => {
    switch (action.type){
        case SET_DATE:
            return {...state, date:action.payload};
    }
    return state;
}
