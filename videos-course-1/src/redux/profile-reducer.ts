import { actionsType, addPostActionType, changeNewTextActionType } from "./store";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export const addPostActionCreator = (): addPostActionType => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text: string): changeNewTextActionType => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})
export const setUserProfile = (profile: any) => ({
    type: SET_USER_PROFILE,
    profile
})

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 10 },
        { id: 2, message: 'First', likesCount: 12 }
    ],
    newPostText: '',
    profile: null
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
            return {...state, profile: action.profile};
        default: return state;
    }
}

export default profileReducer;