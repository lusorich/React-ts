import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';
import { postType, actionsType } from '../../redux/state';
import MyPostsContainer from './MyPosts/MyPostsContainer';

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
            <MyPostsContainer newPostText={props.state.newPostText} posts={props.state.posts} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;