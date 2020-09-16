import { actionsType, stateRootType, addPostActionType, changeNewTextActionType } from "./state";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = (): addPostActionType => ({ type: ADD_POST });
export const updateNewTextActionCreator = (text: string): changeNewTextActionType => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

const profileReducer = (state: any, action: actionsType) => {

        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 0
                };
                state.posts.push(newPost);
                state.newPostText = '';
                return state;
            case UPDATE_NEW_POST_TEXT:
                state.newPostText = action.newText;
                return state;
            default: return state;
        }
}

export default profileReducer;