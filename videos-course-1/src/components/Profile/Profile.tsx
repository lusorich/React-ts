import React from 'react';
import ProfileInfo from './ProfileInfo';
import { postType, actionsType, stateRootType } from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';

type propsType = {
    state: stateRootType,
    dispatch: (action: actionsType) => void
}

const Profile = (props: propsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer state={props.state} />
        </div>
    )
}

export default Profile;