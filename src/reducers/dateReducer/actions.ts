import {ActionTypes} from "./actionTypes";
import {Dispatch} from "redux";
import {StateType} from "../../store";

const {SET_DATE, SET_WEEK} = ActionTypes;

const getChangedDate = (getState: () => StateType, method: 'Month' | 'Date', n: number) => {
  const newDate = new Date(getState().date.date.getTime());
  // @ts-ignore
  newDate[`set${method}`](newDate[`get${method}`]() + n);
  if(newDate.getDay()===0) newDate.setDate(newDate.getDate() + n);
  console.log(newDate);
  return newDate;
}

const dispatchDate = (dispatch: Dispatch, newDate: Date) =>
  dispatch({
    type: SET_DATE,
    payload: newDate
  });

export const setDate = (date: Date) => (dispatch: Dispatch, getState: () => StateType) => {
  if(getState().date.date.getTime() === date.getTime()) return;
  dispatchDate(dispatch, date);
}

export const changeWeek = () => (dispatch: Dispatch, getState: () => StateType) => {
    dispatch({
        type:SET_WEEK,
        payload:Math.abs(getState().date.weekIndex-1)
    })
}


export const incrementMonth = () => (dispatch: Dispatch, getState: () => StateType) =>
  dispatchDate(dispatch, getChangedDate(getState, 'Month', 1));

export const decrementMonth = () => (dispatch: Dispatch, getState: () => StateType) =>
  dispatchDate(dispatch, getChangedDate(getState, 'Month', -1));

export const incrementDate = () => (dispatch: Dispatch, getState: () => StateType) =>
  dispatchDate(dispatch, getChangedDate(getState, 'Date', 1));

export const decrementDate = () => (dispatch: Dispatch, getState: () => StateType) =>
  dispatchDate(dispatch, getChangedDate(getState, 'Date', -1));
