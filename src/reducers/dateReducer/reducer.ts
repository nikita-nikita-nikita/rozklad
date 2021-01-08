import {Action} from "redux";
import {ActionTypes} from "./actionTypes";
const {SET_DATE, SET_WEEK} = ActionTypes;

export type DateStateType = {
    date:Date,
    weekIndex:0|1
}

interface ActionType extends Action{
    payload: Date
}

const date = new Date();
if(date.getDay()===0) date.setDate(date.getDate() + 1);

export default (state: DateStateType = {date, weekIndex:0}, action: ActionType) => {
    switch (action.type){
        case SET_DATE:
            return {...state, date:action.payload};
        case SET_WEEK:
            return {...state, weekIndex:action.payload};
    }
    return state;
}
