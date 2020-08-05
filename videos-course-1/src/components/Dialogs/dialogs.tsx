import React from 'react';
import s from './dialogs.module.css';
import { NavLink } from 'react-router-dom';

type propsType = {
    name?: string,
    id?: number,
    message?: string
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

    let dialogsData = [
        {id: 1, name: 'Mark'},
        {id: 2, name: 'Tony'},
        {id: 3, name: 'Zuk'},
        {id: 4, name: 'Dick'}
    ]

    return (
        <div className={s.dialogList}>
            <div className={s.dialogItem}>
                <DialogItem name="mark" id={1} />
                <Message message="Hello"/>
            </div>
            <div className={s.dialogItem}>
                <DialogItem name="Tony" id={2} />
                <Message message="Hi"/>
            </div>
            <div className={s.dialogItem}>
                <DialogItem name="Zuk" id={3} />
                <Message message="Konichiwa"/>
            </div>
            <div className={s.dialogItem}>
                <DialogItem name="Dick" id={4} />
                <Message message="Guten Tag"/>
            </div>
        </div>
    )
}

export default Dialogs;