import React from 'react';
import ProfileInfo from './ProfileInfo';
import { postType, actionsType, stateRootType } from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';

type propsType = {
    state: stateRootType
}

const Profile = (props: propsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;