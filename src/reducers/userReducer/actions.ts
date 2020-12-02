import {Dispatch} from 'redux';
import {ActionTypes} from "./actionTypes";
import {StateType} from "../../store";
import {TelegramResponse} from "./reducer";

const {SET_GROUP, SET_USER} = ActionTypes;
import GroupService from "../../api/services/groupService";

const setGroup = (group: string) =>
    async (dispatch: Dispatch, getState: () => StateType) => {
        const groupService = new GroupService();
        groupService.saveGroup(group);
        dispatch({
            type: SET_GROUP,
            payload: group
        })
    }
// todo add redux-thunk action and change User type if that would be need
const setUser = (user: TelegramResponse) => async (dispatch: Dispatch) => {
    dispatch({
        type: SET_USER,
        payload: user
    })
}


export {
    setGroup,
    setUser
}
