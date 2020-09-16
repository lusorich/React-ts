import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}