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
    dialogsPage: {
        messages: Array<messageDataType>,
        dialogs: Array<dialogPersonType>,
        newMessageBody: string
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

export type changeNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY',
    newMessageBody: string
}

export type sendMessageType = {
    type: 'SEND-MESSAGE'
}


export type actionsType = addPostActionType | changeNewTextActionType | changeNewMessageTextActionType
    | sendMessageType;
export type storeType = {
    _callSubscriber: (state: stateRootType) => void,
    _state: stateRootType,
    getState: () => stateRootType,
    subscribe: (observer: any) => void,
    dispatch: (action: actionsType) => void
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const addPostActionCreator = (): addPostActionType => ({ type: ADD_POST });
export const updateNewTextActionCreator = (text: string): changeNewTextActionType => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})
export const updateNewMessageBodyCreator = (text: string): changeNewMessageTextActionType => ({
    type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: text
})

export const sendMessageCreator = (): sendMessageType => ({type: SEND_MESSAGE})

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
        dialogsPage: {
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
            ],
            newMessageBody: ''
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
                break;
            case UPDATE_NEW_MESSAGE_BODY:
                this._state.dialogsPage.newMessageBody = action.newMessageBody;
                this._callSubscriber(this._state);
                break;
            case SEND_MESSAGE:
                let newMessage = {
                    id: 5,
                    message: this._state.dialogsPage.newMessageBody
                };
                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newMessageBody = '';
                this._callSubscriber(this._state);
        }
    }
}