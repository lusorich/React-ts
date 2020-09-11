export type dialogPersonType = {
    id: number,
    name: string
}

export type messageDataType = {
    id: number,
    message: string
}

export type postType = {
    id: number,
    message: string,
    likesCount: number
}

export type friendType = {
    id: number,
    name: string
}

export type stateRootType = {
    profilePage: {
        posts: Array<postType>,
        newPostText: string
    },
    messagePage: {
        messages: Array<messageDataType>,
        dialogs: Array<dialogPersonType>
    },
    sidebar: {
        friends: Array<friendType>
    }
}

export type addPostActionType = {
    type: 'ADD-POST'
}


export type changeNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}


export type actionsType = addPostActionType | changeNewTextActionType;
export type storeType = {
    _callSubscriber: (state: stateRootType) => void,
    _state: stateRootType,
    getState: () => stateRootType,
    subscribe: (observer: any) => void,
    dispatch: (action: actionsType) => void
}

// export let state: stateRootType = {
//     profilePage: {
//         posts: [
//             { id: 1, message: 'Hi, how are you?', likesCount: 10 },
//             { id: 2, message: 'First', likesCount: 12 }
//         ],
//         newPostText: ''
//     },
//     messagePage: {
//         messages: [
//             { id: 1, message: 'Hello' },
//             { id: 2, message: 'Hi' },
//             { id: 3, message: 'Konichiwa' },
//             { id: 4, message: 'Guten Tag' },
//         ],
//         dialogs: [
//             { id: 1, name: 'Mark' },
//             { id: 2, name: 'Tony' },
//             { id: 3, name: 'Zuk' },
//             { id: 4, name: 'Dick' }
//         ]
//     },
//     sidebar: {
//         friends: [
//             { id: 1, name: "Tony" },
//             { id: 2, name: "Molly" },
//             { id: 3, name: "Sanny" }
//         ]
//     }
// }

// export let addPost = () => {
//     let newPost = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likesCount: 0
//     };
//     state.profilePage.posts.push(newPost);
//     updateNewPostText('');
//     rerenderEntireTree(state);
// }

// export let updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
// }

// export const subscribe = (observer: any) => {
//     rerenderEntireTree = observer;
// }


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const store: storeType = {
    _callSubscriber() {
    },
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 10 },
                { id: 2, message: 'First', likesCount: 12 }
            ],
            newPostText: ''
        },
        messagePage: {
            messages: [
                { id: 1, message: 'Hello' },
                { id: 2, message: 'Hi' },
                { id: 3, message: 'Konichiwa' },
                { id: 4, message: 'Guten Tag' },
            ],
            dialogs: [
                { id: 1, name: 'Mark' },
                { id: 2, name: 'Tony' },
                { id: 3, name: 'Zuk' },
                { id: 4, name: 'Dick' }
            ]
        },
        sidebar: {
            friends: [
                { id: 1, name: "Tony" },
                { id: 2, name: "Molly" },
                { id: 3, name: "Sanny" }
            ]
        }
    },
    getState() {
        return this._state;
    },
    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this.updateNewPostText('');
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
                break;
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
        }
    }
}