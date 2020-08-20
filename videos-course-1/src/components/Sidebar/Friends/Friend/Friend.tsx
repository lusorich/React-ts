import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { friendType } from '../../../../redux/state';

type propsType = {
    friend: string
}

const Friend = (props: propsType) => {
    return (
        <li>
            <span>{props.friend}</span>
        </li>
    )
}

export default Friend;