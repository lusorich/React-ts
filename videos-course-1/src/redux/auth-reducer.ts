import { useImperativeHandle } from "react";
import { Dispatch } from "redux";
import { usersAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const getAuthUser = () => (dispatch: Dispatch) => {
    return usersAPI.authApi()
        .then(res => {
            const { userId, email, login } = res.data;
            dispatch(setUserDataAC(userId, email, login));
        })
}

const authReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default: return state;
    }
}

export const setUserDataAC = (userId: string, email: string, login: string) => ({ type: SET_USER_DATA, data: { userId, email, login } })

export default authReducer;