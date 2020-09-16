import { actionsType, stateRootType, changeNewMessageTextActionType, sendMessageType } from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const updateNewMessageBodyCreator = (text: string): changeNewMessageTextActionType => ({
    type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: text
})

export const sendMessageCreator = (): sendMessageType => ({ type: SEND_MESSAGE })
const dialogsReducer = (state: any, action: actionsType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessageBody;
            return state;
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageBody
            };
            state.messages.push(newMessage);
            state.newMessageBody = '';
            return state;
        default: return state;
    }
}

export default dialogsReducer;