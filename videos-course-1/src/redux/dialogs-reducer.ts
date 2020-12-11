import { actionsType, sendMessageType } from "./store";
const SEND_MESSAGE = 'SEND-MESSAGE';

export const sendMessageCreator = (newMessageBody: string): sendMessageType => ({ type: SEND_MESSAGE, newMessageBody });

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
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: action.newMessageBody
            };
            return {
                ...state,
                messages: [...state.messages, { ...newMessage }],
            };
        default: return state;
    }
}

export default dialogsReducer;