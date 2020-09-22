import { actionsType, stateRootType, changeNewMessageTextActionType, sendMessageType } from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const updateNewMessageBodyCreator = (text: string): changeNewMessageTextActionType => ({
    type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: text
})

export const sendMessageCreator = (): sendMessageType => ({ type: SEND_MESSAGE });

let initialState = {
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
}

const dialogsReducer = (state: any = initialState, action: actionsType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return { ...state, newMessageBody: action.newMessageBody };
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageBody
            };
            return {
                ...state,
                messages: [...state.messages, { ...newMessage }],
                newMessageBody: ''
            };
        default: return state;
    }
}

export default dialogsReducer;