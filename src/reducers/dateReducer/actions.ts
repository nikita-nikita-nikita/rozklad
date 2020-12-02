import {ActionTypes} from "./actionTypes";
import {Dispatch} from "redux";
import {StateType} from "../../store";
const {SET_DATE} = ActionTypes;

export const incrementMonth = () => (dispatch:Dispatch, getState:()=>StateType) => {
    const newDate = new Date(getState().date.date.getTime());
    newDate.setMonth(newDate.getMonth()+1);
    dispatch({
        type: SET_DATE,
        payload: newDate
    });
}

export const decrementMonth = () => (dispatch:Dispatch, getState:()=>StateType) => {
    const newDate = new Date(getState().date.date.getTime());
    newDate.setMonth(newDate.getMonth()-1);
    dispatch({
        type: SET_DATE,
        payload: newDate
    });
}
