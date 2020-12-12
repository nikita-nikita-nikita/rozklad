import {ActionTypes} from "./actionTypes";
import {Dispatch} from "redux";
import {StateType} from "../../store";

const {SET_DATE} = ActionTypes;

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

export const incrementMonth = () => (dispatch: Dispatch, getState: () => StateType) =>
  dispatchDate(dispatch, getChangedDate(getState, 'Month', 1));

export const decrementMonth = () => (dispatch: Dispatch, getState: () => StateType) =>
  dispatchDate(dispatch, getChangedDate(getState, 'Month', -1));

export const incrementDate = () => (dispatch: Dispatch, getState: () => StateType) =>
  dispatchDate(dispatch, getChangedDate(getState, 'Date', 1));

export const decrementDate = () => (dispatch: Dispatch, getState: () => StateType) =>
  dispatchDate(dispatch, getChangedDate(getState, 'Date', -1));
