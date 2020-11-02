import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/nagiev.jpg';
import s from './Users.module.css';
import axios from 'axios';
import { usersAPI } from '../../api/api';

const Users = (props: any) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount - 1330; i++) {
        pages.push(i);
    }

    const styleImg = {
        width: '100px',
        height: '100px'
    }

    return <div>
        <div>
            {pages.map(p => { return (<span onClick={() => { props.onPageChanged(p) }} className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>) })}
        </div>
        {props.users.map((user: any) =>
            <ul key={user.id}>
                <li>
                    <div>
                        <NavLink to={`/profile/${user.id}`} ><img style={styleImg} src={user.photos.small == null ? userPhoto : user.photos.small}></img></NavLink>
                        <button onClick={() => {
                            usersAPI.followApi(user.id)
                                .then(response => {
                                    console.log(response.messages);
                                    if (response.resultCode === 0) {
                                        props.changeFollowed(user.id)
                                    }
                                });
                                usersAPI.unfollowApi(user.id).then(response => {
                                console.log(response.resultCode);
                                if (response.resultCode === 0) {
                                    props.changeFollowed(user.id)
                                }
                            });
                        }}>{user.followed ? 'Unfollow' : 'Follow'}</button>
                    </div>
                    <div>
                        <span>{user.name}</span>
                        <p>{user.status}</p>
                    </div>
                </li>
            </ul>
        )}
    </div>

}


export default Users;