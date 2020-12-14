import {Action} from "redux";
import {ActionTypes} from "./actionTypes";
const {SET_DATE} = ActionTypes;

export type DateStateType = {
    date:Date
}

interface ActionType extends Action{
    payload: Date
}

const date = new Date();
if(date.getDay()===0) date.setDate(date.getDate() + 1);

export default (state: DateStateType = {date}, action: ActionType) => {
    switch (action.type){
        case SET_DATE:
            return {...state, date:action.payload};
    }
    return state;
}
