import {ActionTypes} from "./actionTypes";
import {Dispatch} from "redux";
import {StateType} from "../../store";

const {SET_DATE} = ActionTypes;

const getChangedDate = (getState: () => StateType, method: 'getMonth' | 'getDate', n: number) => {
  const newDate = new Date(getState().date.date.getTime());
  newDate.setMonth(newDate[method]() + n);
  return newDate;
}

const dispatchDate = (dispatch: Dispatch, newDate: Date) =>
  dispatch({
    type: SET_DATE,
    payload: newDate
  });

export const incrementMonth = () => (dispatch: Dispatch, getState: () => StateType) =>
  dispatchDate(dispatch, getChangedDate(getState, 'getMonth', 1));

export const decrementMonth = () => (dispatch: Dispatch, getState: () => StateType) =>
  dispatchDate(dispatch, getChangedDate(getState, 'getMonth', -1));

export const incrementDate = () => (dispatch: Dispatch, getState: () => StateType) =>
  dispatchDate(dispatch, getChangedDate(getState, 'getDate', 1));

export const decrementDate = () => (dispatch: Dispatch, getState: () => StateType) =>
  dispatchDate(dispatch, getChangedDate(getState, 'getDate', -1));
