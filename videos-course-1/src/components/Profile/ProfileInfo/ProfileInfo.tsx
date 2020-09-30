import React from 'react';
import Preloader from '../../common/preloader/preloader';

const ProfileInfo = (props: any) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' alt='img'></img>
            </div>
            <div>
                <img src={props.profile.photos.large} />
            </div>
        </div>
    )
}

export default ProfileInfo;