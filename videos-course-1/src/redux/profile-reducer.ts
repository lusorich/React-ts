import { actionsType, addPostActionType, changeNewTextActionType } from "./store";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = (): addPostActionType => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text: string): changeNewTextActionType => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 10 },
        { id: 2, message: 'First', likesCount: 12 }
    ],
    newPostText: ''
}

const profileReducer = (state: any = initialState, action: actionsType) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy2 = {...state};
            stateCopy2.posts = [...state.posts];
            stateCopy2.posts.push(newPost);
            stateCopy2.newPostText = '';
            return stateCopy2;
        case UPDATE_NEW_POST_TEXT:
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        default: return state;
    }
}

export default profileReducer;