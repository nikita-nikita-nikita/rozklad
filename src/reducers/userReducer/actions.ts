import {Dispatch} from 'redux';
import {ActionTypes} from "./actionTypes";
import {StateType} from "../../store";
const {SET_GROUP, SET_USER} = ActionTypes;

const setGroup = (group:string) => async (dispatch:Dispatch, getState:()=>StateType) => {
    dispatch({
        type: SET_GROUP,
        payload: group
    })
}
// todo add redux-thunk action and change User type if that would be need
// const setUser = () => async (dispatch:Dispatch) => {
//     const user = await Get teleframm stuff
//     dispatch({
//         type: SET_USER,
//         payload: user
//     })
// }



export {
    setGroup
}
