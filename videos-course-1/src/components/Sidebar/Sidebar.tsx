import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Friends from './Friends';
import { friendType } from '../../redux/state';

type propsType = {
    state: {
        friends: Array<friendType>
    }
}

const Sidebar = (props: propsType) => {
    return (<>
        <Friends state={props.state} />
        <Navbar />
    </>
    )
}

export default Sidebar;