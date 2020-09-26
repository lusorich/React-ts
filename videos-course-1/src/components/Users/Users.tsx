import React from 'react';
import axios from 'axios';
import userPhoto from '../../assets/images/nagiev.jpg';

const Users = (props: any) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            console.log(response.data.items);
            let users = response.data.items
            props.setUsers(users);
        });
    }

    const styleImg = {
        width: '100px',
        height: '100px'
    }

    return (
        <div>
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
    )
}



export default Users;