import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props: any) => {
    console.log(props.isAuth);
    return (
        <header className={styles.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-Ur5t_tg3BxCzyZ4HWJNv_Du4pr_nzqHn-Q&usqp=CAU' alt='img'></img>
            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}
                        <button onClick={props.logout}>LogOut</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;