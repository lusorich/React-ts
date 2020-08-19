import React from 'react';
import s from './dialogs.module.css';
import Message from './Message';
import DialogItem from './dialogItem';
import { dialogPersonType, messageDataType } from '../../redux/state';

type propsType = {
    dialogs: Array<dialogPersonType>
    messages: Array<messageDataType>
}

const Dialogs = (props: propsType) => {

    const dialogsArray: any = props.dialogs.map((el) => <div className={s.dialogItem}> <DialogItem name={el.name} id={el.id} /></div>);
    const messageArray: any = props.messages.map((el) => <Message message={el.message} id={el.id} />);

    return (
        <div className={s.dialogList}>
            {dialogsArray}
            {messageArray}
        </div>
    )
}

export default Dialogs;