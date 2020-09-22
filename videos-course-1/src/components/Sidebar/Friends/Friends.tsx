import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend';
import { friendType } from '../../../redux/store';

type propsType = {
    state: {
        friends: Array<friendType>;
    }
}

const Friends = (props: propsType) => {
    const friends = props.state.friends.map((friend) => {
        return (
            <Friend friend={friend.name} key={friend.id}/>
        )
    })

    return (<>
        <h2>Friends</h2>
        <ul>
            {friends}
        </ul>
    </>
    )
}

export default Friends;