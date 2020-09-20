import React, { ChangeEvent } from 'react';
import s from './dialogs.module.css';
import Message from './Message';
import DialogItem from './dialogItem';

type propsType = {
    dialogsPage: any,
    onChangeMessageBody: (text: string) => void,
    onSendMessageClick: () => void

}

const Dialogs = (props: propsType) => {

    const dialogsArray: any = props.dialogsPage.dialogs.map((el: any) => <div className={s.dialogItem}> <DialogItem name={el.name} id={el.id} /></div>);
    const messageArray: any = props.dialogsPage.messages.map((el: any) => <Message message={el.message} id={el.id} />);

    const onChangeMessageBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeMessageBody(e.currentTarget.value);
    }

    return (
        <div className={s.dialogList}>
            <div>{dialogsArray}</div>
            <div>{messageArray}</div>
            <div>
                <div><textarea value={props.dialogsPage.newMessageBody} onChange={onChangeMessageBody} placeholder='Enter your message'></textarea></div>
                <div><button onClick={props.onSendMessageClick}>Send</button></div>
            </div>
        </div>
    )
}

export default Dialogs;