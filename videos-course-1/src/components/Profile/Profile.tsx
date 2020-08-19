import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';
import { postType } from '../../redux/state';

type propsType = {
    state: {
        posts: Array<postType>
    }
}

const Profile = (props: propsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} />
        </div>
    )
}

export default Profile;