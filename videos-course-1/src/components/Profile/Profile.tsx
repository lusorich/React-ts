import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';
import { postType, actionsType } from '../../redux/state';

type propsType = {
    state: {
        posts: Array<postType>,
        newPostText: string
    },
    dispatch: (action: actionsType) => void
}

const Profile = (props: propsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts newPostText={props.state.newPostText} posts={props.state.posts} dispatch={props.dispatch} />
        </div>
    )
}

export default Profile;