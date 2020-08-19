import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/';
import { postType } from '../../../redux/state';

type propsType = {
    posts: Array<postType>
}

const MyPosts = (props: propsType) => {

    let postsArray: any = props.posts.map(post => { return (<Post message={post.message} likesCount={post.likesCount} />) });

    return (
        <div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsArray}
            </div>
        </div>
    )
}

export default MyPosts;