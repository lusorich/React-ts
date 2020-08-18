import React from 'react';
import s from './dialogItem.module.css';
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

export default DialogItem;