import React, { ChangeEvent } from 'react';
import Dialogs from './dialogs'
import { actionsType, dialogPersonType, messageDataType } from '../../redux/state';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

type propsType = {
    state: {
        dialogs: Array<dialogPersonType>,
        messages: Array<messageDataType>,
        newMessageBody: string
    },
    dispatch: (action: actionsType) => void
}

const DialogsContainer = (props: propsType) => {

    const onChangeMessageBody = (text: string) => {
        props.dispatch(updateNewMessageBodyCreator(text));
    }
    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }

    return (
        <Dialogs state={props.state} onChangeMessageBody={onChangeMessageBody} onSendMessageClick={onSendMessageClick}/>
    )
}

export default DialogsContainer;