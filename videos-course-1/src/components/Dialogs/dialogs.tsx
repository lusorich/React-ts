import React from 'react';
import s from './dialogs.module.css';
import Message from './Message';
import DialogItem from './dialogItem';

const Dialogs = () => {

    const dialogsArray: any = dialogsData.map((el) => <div className={s.dialogItem}> <DialogItem name={el.name} id={el.id}/></div>);
    const messageArray: any = messagesData.map((el) => <Message message={el.message} id={el.id} />);

    return (
        <div className={s.dialogList}>
                {dialogsArray}
                {messageArray}
        </div>
    )
}

export default Dialogs;