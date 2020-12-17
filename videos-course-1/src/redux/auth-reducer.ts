import { Dispatch } from "redux";
import { loginAPI, usersAPI } from "../api/api";

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
            dispatch(setUserDataAC(userId, email, login, true));
        })
}

export const login = (email: string, password: string, remeberMe: boolean) => (dispatch: Dispatch) => {
    return loginAPI.login(email, password, remeberMe)
        .then(response => {
            //@ts-ignore
            if (response.data.resultCode === 0) {
                //@ts-ignore
                dispatch(getAuthUser());
                console.log('YES');
            } else {
                console.log('Error');
            }
        })
}

export const logout = () => (dispatch: Dispatch) => {
    return loginAPI.logout()
        .then(response => {
            //@ts-ignore
            if (response.data.resultCode === 0) {
                //@ts-ignore
                dispatch(setUserDataAC(null, null, null, false));
                console.log('LogOUT');
            } else {
                console.log('Error');
            }
        })
}

const authReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default: return state;
    }
}


export const setUserDataAC = (userId: string, email: string, login: string, isAuth: boolean) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })

export default authReducer;