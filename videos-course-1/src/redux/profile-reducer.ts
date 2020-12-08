import { Dispatch } from "redux";
import { profileAPI, usersAPI } from "../api/api";
import { actionsType, addPostActionType, changeNewTextActionType } from "./store";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_PROFILE_STATUS = 'SET-USER-STATUS';
const UPDATE_STATUS = 'UPDATE-STATUS';

export const addPostActionCreator = (): addPostActionType => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text: string): changeNewTextActionType => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export const setUserProfile = (profile: any) => ({
    type: SET_USER_PROFILE,
    profile
})

export const updateProfileStatus = (newStatus: string) => ({
    type: UPDATE_STATUS,
    newStatus
})

export const setProfileStatus = (newStatus: string) => ({
    type: SET_PROFILE_STATUS,
    newStatus
})

export const getProfile = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfileAPI(userId)
        .then((res) => dispatch(setUserProfile(res)));
}

export const setProfileStatusTC = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then((res) => dispatch(setProfileStatus(res)))
}

export const updateStatusTC = (newStatus: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(newStatus)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(updateProfileStatus(newStatus))
            }
        });
}

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 10 },
        { id: 2, message: 'First', likesCount: 12 }
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };
        case SET_PROFILE_STATUS:
            return { ...state, status: action.newStatus }
        default: return state;
    }
}

export default profileReducer;