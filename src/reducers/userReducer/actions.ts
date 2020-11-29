import {Dispatch} from 'redux';
import {ActionTypes} from "./actionTypes";
const {SET_GROUP, SET_USER} = ActionTypes;

const setGroup = (group:string) => async (dispatch:Dispatch) => {
    dispatch({
        type: SET_GROUP,
        payload: group
    })
}

export {
    setGroup
}
