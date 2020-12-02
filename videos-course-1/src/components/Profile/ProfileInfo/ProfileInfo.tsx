import React from 'react';
import Preloader from '../../common/preloader/preloader';

const ProfileInfo = (props: any) => {

    if (!props.profile) {
        return <Preloader />
    }
    let arr: any = [];
    let y = Object.entries(props.profile.contacts);
    for (let i = 0; i < y.length; i++) {
        arr.push(<p>{y[i][0]}: {y[i][1]}</p>);         
    }

    return (
        <div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' alt='img'></img>
            </div>
            <div>
                <span>{props.profile.aboutMe}</span>
                {arr}
                <img src={props.profile.photos.large} />
            </div>
        </div>
    )
}

export default ProfileInfo;