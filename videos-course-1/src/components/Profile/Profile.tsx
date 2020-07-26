import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts';

const Profile = () => {
    return (
        <div className={styles.content}>
            <div>
                <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' alt='img'></img>
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;