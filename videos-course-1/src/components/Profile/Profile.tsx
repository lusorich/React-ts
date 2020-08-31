import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';
import { postType } from '../../redux/state';

type propsType = {
    state: {
        posts: Array<postType>,
        newPostText: string
    },
    addPost: () => void,
    updateNewPostText: (newText: string) => void
}

const Profile = (props: propsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts newPostText={props.state.newPostText} posts={props.state.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;