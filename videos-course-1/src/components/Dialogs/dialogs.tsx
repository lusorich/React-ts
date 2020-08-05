import React from 'react';
import s from './dialogs.module.css';
import { NavLink } from 'react-router-dom';

type propsType = {
    name?: string,
    id?: number,
    message?: string
}

type dialogPersonType = {
    id: number,
    name: string
}

type messageDataType = {
    id: number,
    message: string
}

const DialogItem = (props: propsType) => {
    let path = `/dialogs/${props.id}`;
    return (
        <NavLink to={path} className={s.dialog__person}>
            {props.name}
        </NavLink>
    )
}

const Message = (props: propsType) => {
    return (
        <p className={s.dialog__message}>{props.message}</p>
    )
}

const Dialogs = () => {

    let dialogsData: Array<dialogPersonType> = [
        { id: 1, name: 'Mark' },
        { id: 2, name: 'Tony' },
        { id: 3, name: 'Zuk' },
        { id: 4, name: 'Dick' }
    ];

    let messagesData: Array<messageDataType> = [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'Hi' },
        { id: 3, message: 'Konichiwa' },
        { id: 4, message: 'Guten Tag' },
    ]

    return (
        <div className={s.dialogList}>
            {dialogsData.map((el) => {
                return (<div className={s.dialogItem}>
                    <DialogItem name={el.name} id={el.id} />
                    <Message message={messagesData[el.id - 1].message} id={el.id} />
                </div>
                )
            })
            }
        </div>
    )
}

export default Dialogs;