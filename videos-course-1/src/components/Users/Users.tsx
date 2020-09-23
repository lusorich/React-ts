import React from 'react';

const Users = (props: any) => {
    return (
        <div>
            {props.users.map((user: any) =>
                <ul key={user.id}>
                    <li>
                        <div>
                            <img src={user.imageUrl}></img>
                            <button onClick={() => { props.onChangeFollowed(user.id) }}>{user.followed ? 'Follow' : 'Unfollow'}</button>
                        </div>
                        <div>
                            <span>{user.fullName}</span>
                            <p>{user.status}</p>
                            <span>{user.location.country}</span>
                            <span>{user.location.city}</span>
                        </div>
                    </li>
                </ul>
            )}
        </div>
    )
}



export default Users;