import React from 'react';
import s from './message.module.css';
import { NavLink } from 'react-router-dom';

type propsType = {
    name?: string,
    id?: number,
    message?: string
}

const Message = (props: propsType) => {
    return (
        <p className={s.dialog__message}>{props.message}</p>
    )
}

export default Message;