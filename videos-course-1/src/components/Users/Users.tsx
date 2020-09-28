import React from 'react';
import userPhoto from '../../assets/images/nagiev.jpg';
import s from './Users.module.css';

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
                        <img style={styleImg} src={user.photos.small == null ? userPhoto : user.photos.small}></img>
                        <button onClick={() => { props.onChangeFollowed(user.id) }}>{user.followed ? 'Follow' : 'Unfollow'}</button>
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