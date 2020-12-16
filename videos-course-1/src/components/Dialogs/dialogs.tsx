import React from 'react';
import s from './dialogs.module.css';
import Message from './Message';
import DialogItem from './dialogItem';
import { AddMessageFormRedux } from './addMessageForm';

type propsType = {
    dialogsPage: any,
    onSendMessageClick: (newMessageBody: string) => void
}

const Dialogs = (props: propsType) => {
    const dialogsArray: any = props.dialogsPage.dialogs.map((el: any) => <div className={s.dialogItem}> <DialogItem name={el.name} id={el.id} key={el.id} /></div>);
    const messageArray: any = props.dialogsPage.messages.map((el2: any) => <Message message={el2.message} id={el2.id} key={el2.id} />);
    const onSubmit = (value: any) => {
        props.onSendMessageClick(value.newMessageBody);
    }
    return (
        <div className={s.dialogList}>
            <div>{dialogsArray}</div>
            <div>{messageArray}</div>
            <AddMessageFormRedux onSubmit={onSubmit} />
        </div>
    )
}

export default Dialogs;