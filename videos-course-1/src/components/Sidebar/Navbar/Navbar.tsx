import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.nav__wrapper}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.nav__wrapper}>
                <NavLink to='/dialogs' activeClassName='active2'>Messages</NavLink>
            </div>
            <div className={s.nav__wrapper}>
                <NavLink to='/news' activeClassName='active3'>News</NavLink>
            </div>
            <div className={s.nav__wrapper}>
                <NavLink to='/music' activeClassName='active4'>Music</NavLink>
            </div>
            <div className={s.nav__wrapper}>
                <NavLink to='/settings' activeClassName='active5'>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;