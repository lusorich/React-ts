import React, { ChangeEvent } from 'react';
import s from './dialogs.module.css';
import Message from './Message';
import DialogItem from './dialogItem';
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

const Dialogs = (props: propsType) => {

    const dialogsArray: any = props.state.dialogs.map((el) => <div className={s.dialogItem}> <DialogItem name={el.name} id={el.id} /></div>);
    const messageArray: any = props.state.messages.map((el) => <Message message={el.message} id={el.id} />);
    let newMessageBody = props.state.newMessageBody;

    const onChangeMessageBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageBodyCreator(e.target.value));
    }
    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }

    return (
        <div className={s.dialogList}>
            <div>{dialogsArray}</div>
            <div>{messageArray}</div>
            <div>
                <div><textarea value={newMessageBody} onChange={onChangeMessageBody} placeholder='Enter your message'></textarea></div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
        </div>
    )
}

export default Dialogs;